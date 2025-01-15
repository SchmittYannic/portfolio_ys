import { useRef, useEffect } from "react";
import { canvasImg } from "../assets";

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
    radius: number
}

const HeroCanvas = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const imageSrc = canvasImg;

    // const handleMouseMove: MouseEventHandler<HTMLCanvasElement> = (e) => {
    //     if (!canvasRef.current) return;
    //     const rect = canvasRef.current.getBoundingClientRect();
    //     // Save mouse position directly on the canvas element
    //     canvasRef.current.dataset.mouseX = (e.clientX - rect.left).toString();
    //     canvasRef.current.dataset.mouseY = (e.clientY - rect.top).toString();
    // };

    // const handleMouseOut = () => {
    //     if (!canvasRef.current) return;
    //     canvasRef.current.dataset.mouseX = "0";
    //     canvasRef.current.dataset.mouseY = "0";
    // };

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        // settings
        canvas.width = 600;
        canvas.height = 400;
        const squares: Square[] = [];
        const squareSize = 1;

        // mouse position on canvas
        const mouse: mouseType = {
            x: 0,
            y: 0,
            radius: 30,
        };

        // Event listeners
        const handleMouseMove = (e: MouseEvent) => {
            if (!canvasRef.current) return
            const rect = canvasRef.current.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseOut = () => {
            mouse.x = 0;
            mouse.y = 0;
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

            update(mouse: mouseType): void {
                if (this.isNearMouse(mouse)) {
                    ctx?.clearRect(this.currentX, this.currentX, this.size, this.size)

                    //calc new current position
                    const dx = this.currentX - mouse.x;
                    const dy = this.currentY - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const moveDistance = 5; // Adjust for stronger effect

                    if (distance < mouse.radius) {
                        const moveX = (dx / distance) * moveDistance;
                        const moveY = (dy / distance) * moveDistance;
                        this.currentX += moveX;
                        this.currentY += moveY;
                    }

                    this.draw()
                }
            }

            isNearMouse(mouse: mouseType): boolean {
                // Calculate the distance from the square's center to the mouse
                const dx = mouse.x - (this.currentX + this.size / 2);
                const dy = mouse.y - (this.currentY + this.size / 2);
                return Math.sqrt(dx * dx + dy * dy) < mouse.radius;
            }
        }

        // Load the image
        const img = new Image();
        img.src = imageSrc;

        img.onload = () => {
            // Temporary canvas to extract pixel data
            const tempCanvas = document.createElement("canvas");
            const tempCtx = tempCanvas.getContext("2d");

            if (!tempCtx) return;

            // Set the temporary canvas size to match the image
            tempCanvas.width = img.width;
            tempCanvas.height = img.height;

            // Draw the image on the temporary canvas
            tempCtx.drawImage(img, 0, 0);

            // Get the pixel data from the temporary canvas
            const imageData = tempCtx.getImageData(0, 0, img.width, img.height)

            for (let y = 0; y < img.height; y += squareSize) {
                for (let x = 0; x < img.width; x += squareSize) {
                    // Get the color of the top-left pixel of the square
                    const index = (y * img.width + x) * 4;
                    const r = imageData.data[index];
                    const g = imageData.data[index + 1];
                    const b = imageData.data[index + 2];
                    const a = imageData.data[index + 3];

                    // Skip fully transparent squares
                    if (a === 0) continue;

                    // Store the square data
                    const square = new Square(
                        x,
                        y,
                        squareSize,
                        `rgba(${r}, ${g}, ${b}, ${a / 255})`,
                    )
                    square.draw()
                    squares.push(square);
                }
            }
        }

        function animate(): void {
            if (!ctx) return
            //ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw each square, applying the mouse effect
            // squares.forEach((square) => {
            //     if (square.isNearMouse(mousePosition.x, mousePosition.y, radius)) {
            //         // Move square away from mouse (or make it disappear, etc.)
            //         // For simplicity, let's move the square slightly away
            //         const dx = square.x - mousePosition.x;
            //         const dy = square.y - mousePosition.y;
            //         const distance = Math.sqrt(dx * dx + dy * dy);
            //         const moveDistance = 5; // Adjust for stronger effect

            //         if (distance < radius) {
            //             const moveX = (dx / distance) * moveDistance;
            //             const moveY = (dy / distance) * moveDistance;
            //             square.x += moveX;
            //             square.y += moveY;
            //         }
            //     }
            //     square.draw();
            // });

            squares.forEach((square) => square.update(mouse))

            requestAnimationFrame(animate);
        }

        animate();

        // Add event listeners
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseout", handleMouseOut);

        // Cleanup function to remove the event listeners when the component unmounts
        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="heroCanvas"
        >
        </canvas>
    );
}

export default HeroCanvas