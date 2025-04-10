import { useRef, useEffect } from "react";
import { cssLogoGrid, htmlLogoGrid, jsLogoGrid } from "../assets";

interface SquareProps {
    originalX: number;
    originalY: number;
    currentX: number;
    currentY: number;
    size: number;
    color: string;
    draw(ctx: CanvasRenderingContext2D): void;
}

type mouseType = {
    x: number
    y: number
    outerRadius: number
    innerRadius: number
}

const HeroCanvas = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId: number

        if (!ctx) return;

        // settings
        const squares: Square[] = [];
        const squareSize = 2;
        const gapSize = 0.1;

        // mouse position on canvas
        const mouse: mouseType = {
            x: -500,
            y: -500,
            outerRadius: 200,
            innerRadius: 0,
        };

        // Event listeners
        const handleMouseMove = (e: MouseEvent) => {
            if (!canvasRef.current) return
            const rect = canvasRef.current.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseOut = () => {
            mouse.x = -500;
            mouse.y = -500;
        };

        // class for individual squares on canvas
        class Square implements SquareProps {
            originalX: number;
            originalY: number;
            currentX: number;
            currentY: number;
            size: number;
            color: string;

            constructor(x: number, y: number, size: number, color: string) {
                this.originalX = x;
                this.originalY = y;
                this.currentX = x;
                this.currentY = y
                this.size = size;
                this.color = color;
            }

            draw(): void {
                if (!ctx) return
                ctx.fillStyle = this.color;
                ctx.fillRect(this.currentX, this.currentY, this.size, this.size);
            }

            update(): void {
                if (!ctx) return;

                // Calculate distance between mouse and square
                let dx = mouse.x - this.currentX;
                let dy = mouse.y - this.currentY;
                let distance = Math.sqrt(dx * dx + dy * dy);

                // Direction vector (normalized)
                let forceDirX = dx / distance || 0;
                let forceDirY = dy / distance || 0;

                if (distance < mouse.outerRadius) {
                    // Calculate the force based on distance
                    let normalizedDistance = Math.max(0, (distance - mouse.innerRadius) / (mouse.outerRadius - mouse.innerRadius));
                    let force = (1 - normalizedDistance) ** 2 * 10;

                    // Apply a slight displacement force
                    this.currentX -= forceDirX * force;
                    this.currentY -= forceDirY * force;

                    // Ensure squares don't permanently leave their original position
                    let driftX = this.currentX - this.originalX;
                    let driftY = this.currentY - this.originalY;
                    this.currentX -= driftX / 20; // Gradual return to original X
                    this.currentY -= driftY / 20; // Gradual return to original Y
                } else {
                    // Outside the outer radius, squares smoothly return to their original position
                    if (this.originalX !== this.currentX) {
                        let dx = this.currentX - this.originalX;
                        this.currentX -= dx / 10;
                    }
                    if (this.originalY !== this.currentY) {
                        let dy = this.currentY - this.originalY;
                        this.currentY -= dy / 10;
                    }
                }
            }
        }

        // Load the pixelart image
        // const img = new Image();
        // img.src = imageSrc;

        // img.onload = () => {
        //     // Temporary canvas to extract pixel data
        //     const tempCanvas = document.createElement("canvas");
        //     const tempCtx = tempCanvas.getContext("2d");

        //     if (!tempCtx) return;

        //     // Set the temporary canvas size to match the image
        //     tempCanvas.width = img.width;
        //     tempCanvas.height = img.height;

        //     // Draw the image on the temporary canvas
        //     tempCtx.drawImage(img, 0, 0);

        //     // Get the pixel data from the temporary canvas
        //     const imageData = tempCtx.getImageData(0, 0, img.width, img.height)

        //     // Create the squares on the canvas (not the temporary canvas)
        //     for (let y = 0; y < img.height; y += squareSize) {
        //         for (let x = 0; x < img.width; x += squareSize) {
        //             // Get the color of the top-left pixel of the square
        //             const index = (y * img.width + x) * 4;
        //             const r = imageData.data[index];
        //             const g = imageData.data[index + 1];
        //             const b = imageData.data[index + 2];
        //             const a = imageData.data[index + 3];

        //             // Skip fully transparent squares
        //             if (a === 0) continue;

        //             // Store the square data
        //             const square = new Square(
        //                 x,
        //                 y,
        //                 squareSize,
        //                 `rgba(${r}, ${g}, ${b}, ${a / 255})`,
        //             )
        //             square.draw()
        //             squares.push(square);
        //         }
        //     }
        // }

        function initLogo(grid: number[][], startX: number = 0, startY: number = 0) {
            if (!ctx) return;

            // Loop through the grid and draw squares
            for (let row = 0; row < grid.length; row++) {
                for (let col = 0; col < grid[row].length; col++) {
                    if (grid[row][col] === 0) continue

                    const x = startX + col * (squareSize + gapSize);
                    const y = startY + row * (squareSize + gapSize);

                    let color = "";
                    if (grid[row][col] === 1) {
                        const r = 239;
                        const g = 72;
                        const b = 13;
                        const a = 255;
                        color = `rgba(${r}, ${g}, ${b}, ${a / 255})`
                    }
                    if (grid[row][col] === 2) {
                        const r = 255;
                        const g = 255;
                        const b = 255;
                        const a = 255;
                        color = `rgba(${r}, ${g}, ${b}, ${a / 255})`
                    }
                    if (grid[row][col] === 3) {
                        const r = 228;
                        const g = 160;
                        const b = 37;
                        const a = 255;
                        color = `rgba(${r}, ${g}, ${b}, ${a / 255})`
                    }
                    if (grid[row][col] === 4) {
                        const r = 33;
                        const g = 149;
                        const b = 243;
                        const a = 255;
                        color = `rgba(${r}, ${g}, ${b}, ${a / 255})`
                    }

                    const square = new Square(
                        x,
                        y,
                        squareSize,
                        color,
                    );
                    square.draw();
                    squares.push(square);
                }
            }
        }

        function animate(): void {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            squares.forEach((square) => {
                square.draw();
                square.update();
            })

            animationFrameId = requestAnimationFrame(animate);
        }

        initLogo(htmlLogoGrid, 90, 130);
        initLogo(jsLogoGrid, 205, 70);
        initLogo(cssLogoGrid, 350, 130);

        animate();

        // Add event listeners
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseout", handleMouseOut);

        // Cleanup function to remove the event listeners when the component unmounts
        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseout", handleMouseOut);
            cancelAnimationFrame(animationFrameId)
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="heroCanvas"
            //className="mx-auto overflow-hidden border-2"
            //className="absolute top-0"
            width={600}
            height={400}
        //height={656}
        >
        </canvas>
    );
}

export default HeroCanvas