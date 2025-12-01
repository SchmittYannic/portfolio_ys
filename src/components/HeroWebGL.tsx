import { useEffect, useRef } from "react";

interface Square {
    ox: number;
    oy: number;
    x: number;
    y: number;
    color: [number, number, number, number];
}

interface Logo {
    grid: number[][];
    x: number;
    y: number;
}

interface Props {
    grids: Logo[];
    width?: number;
    height?: number;
    pixelSize?: number;
}

const HeroCanvasWebGL: React.FC<Props> = ({
    grids,
    width = 600,
    height = 400,
    pixelSize = 2,
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Build squares
        const squares: Square[] = [];
        const GAP = 0.5;
        const spacing = pixelSize + GAP;

        const gl = canvas.getContext("webgl");
        if (!gl) {
            console.warn("WebGL not supported, rendering static canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            // Optional: statische Version zeichnen
            grids.forEach(({ grid, x: startX, y: startY }) => {
                grid.forEach((row, rowIndex) => {
                    row.forEach((v, colIndex) => {
                        if (v === 0) return;
                        const px = startX + colIndex * spacing;
                        const py = startY + rowIndex * spacing;
                        let color: string;
                        switch (v) {
                            case 1: color = "rgb(239,72,13)"; break;
                            case 2: color = "white"; break;
                            case 3: color = "rgb(228,160,37)"; break;
                            case 4: color = "rgb(33,149,243)"; break;
                            default: color = "white";
                        }
                        ctx.fillStyle = color;
                        ctx.fillRect(px, py, pixelSize, pixelSize);
                    });
                });
            });

            return; // Kein WebGL → keine Animation oder Mouse-Events
        }

        // Mouse state
        const mouse = { x: -500, y: -500, outer: 200, inner: 0 };
        const handleMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        const handleOut = () => {
            mouse.x = -500;
            mouse.y = -500;
        };

        canvas.addEventListener("mousemove", handleMove);
        canvas.addEventListener("mouseout", handleOut);

        grids.forEach(({ grid, x: startX, y: startY }) => {
            for (let row = 0; row < grid.length; row++) {
                for (let col = 0; col < grid[row].length; col++) {
                    const v = grid[row][col];
                    if (v === 0) continue;

                    const px = startX + col * spacing;
                    const py = startY + row * spacing;

                    let color: [number, number, number, number];
                    switch (v) {
                        case 1:
                            color = [239 / 255, 72 / 255, 13 / 255, 1];
                            break;
                        case 2:
                            color = [1, 1, 1, 1];
                            break;
                        case 3:
                            color = [228 / 255, 160 / 255, 37 / 255, 1];
                            break;
                        case 4:
                            color = [33 / 255, 149 / 255, 243 / 255, 1];
                            break;
                        default:
                            color = [1, 1, 1, 1];
                    }

                    squares.push({ ox: px, oy: py, x: px, y: py, color });
                }
            }
        });

        // Shaders
        const vertexShaderSource = `
      attribute vec2 aPos;
      attribute vec4 aColor;
      varying vec4 vColor;
      void main() {
        gl_Position = vec4(
          (aPos.x / ${width}.0) * 2.0 - 1.0,
          1.0 - (aPos.y / ${height}.0) * 2.0,
          0.0,
          1.0
        );
        gl_PointSize = ${pixelSize.toFixed(1)};
        vColor = aColor;
      }
    `;

        const fragmentShaderSource = `
      precision mediump float;
      varying vec4 vColor;
      void main() {
        gl_FragColor = vColor;
      }
    `;

        function compileShader(glContext: WebGLRenderingContext, type: number, source: string): WebGLShader {
            const shader = glContext.createShader(type);
            if (!shader) throw new Error("Shader creation failed");
            glContext.shaderSource(shader, source);
            glContext.compileShader(shader);
            if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
                const info = glContext.getShaderInfoLog(shader);
                glContext.deleteShader(shader);
                throw new Error("Shader compile error: " + info);
            }
            return shader;
        }

        const prog = gl.createProgram();
        if (!prog) throw new Error("Program creation failed");

        const vs = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fs = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            const info = gl.getProgramInfoLog(prog);
            throw new Error("Program link error: " + info);
        }
        gl.useProgram(prog);

        // Buffers
        const posBuffer = gl.createBuffer();
        const colBuffer = gl.createBuffer();
        if (!posBuffer || !colBuffer) throw new Error("Buffer creation failed");

        const positions = new Float32Array(squares.length * 2);
        const colors = new Float32Array(squares.length * 4);

        const aPos = gl.getAttribLocation(prog, "aPos");
        const aColor = gl.getAttribLocation(prog, "aColor");
        if (aPos < 0 || aColor < 0) throw new Error("Attrib location not found");

        gl.enableVertexAttribArray(aPos);
        gl.enableVertexAttribArray(aColor);

        let animationFrameId: number;

        // --- animate is defined here inside useEffect AFTER gl is guaranteed non-null ---
        const animate = (): void => {
            // Physics update
            squares.forEach((s) => {
                const dx = mouse.x - s.x;
                const dy = mouse.y - s.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const dirX = dx / (dist || 1);
                const dirY = dy / (dist || 1);

                if (dist < mouse.outer) {
                    const n = Math.max(0, (dist - mouse.inner) / (mouse.outer - mouse.inner));
                    const force = (1 - n) ** 2 * 10;
                    s.x -= dirX * force;
                    s.y -= dirY * force;

                    s.x -= (s.x - s.ox) / 20;
                    s.y -= (s.y - s.oy) / 20;
                } else {
                    s.x -= (s.x - s.ox) / 10;
                    s.y -= (s.y - s.oy) / 10;
                }
            });

            // Update buffers
            for (let i = 0; i < squares.length; i++) {
                positions[i * 2] = squares[i].x;
                positions[i * 2 + 1] = squares[i].y;
                colors.set(squares[i].color, i * 4);
            }

            gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW);
            gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, colBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, colors, gl.DYNAMIC_DRAW);
            gl.vertexAttribPointer(aColor, 4, gl.FLOAT, false, 0, 0);

            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.POINTS, 0, squares.length);

            animationFrameId = requestAnimationFrame(animate);
        };

        gl.clearColor(0, 0, 0, 0);
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            canvas.removeEventListener("mousemove", handleMove);
            canvas.removeEventListener("mouseout", handleOut);
        };
    }, [grids, width, height, pixelSize]);

    return <canvas ref={canvasRef} width={width} height={height} />;
};

export default HeroCanvasWebGL;
