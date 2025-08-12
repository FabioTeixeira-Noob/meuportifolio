import { useEffect, useRef, useState } from "react";

export default function HeroGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let animationFrameId: number;

    const paddleWidth = 100;
    const paddleHeight = 10;
    const ballRadius = 7;
    let paddleX = (canvas.width - paddleWidth) / 2;
    let ballX = canvas.width / 2;
    let ballY = canvas.height - 30;
    let ballDX = 2;
    let ballDY = -2;
    let score = 0;

    const drawPaddle = () => {
      ctx.fillStyle = "#facc15";
      ctx.fillRect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    };

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#22d3ee";
      ctx.fill();
      ctx.closePath();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPaddle();
      drawBall();

      ballX += ballDX;
      ballY += ballDY;

      // Borda
      if (ballX + ballRadius > canvas.width || ballX - ballRadius < 0) ballDX *= -1;
      if (ballY - ballRadius < 0) ballDY *= -1;
      if (ballY + ballRadius > canvas.height) {
        score = 0;
        ballX = canvas.width / 2;
        ballY = canvas.height - 30;
        ballDY = -2;
      }

      // Paddle
      if (
        ballY + ballRadius > canvas.height - paddleHeight &&
        ballX > paddleX &&
        ballX < paddleX + paddleWidth
      ) {
        ballDY *= -1;
        score++;
        if (score >= 5) setUnlocked(true);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      paddleX = x - paddleWidth / 2;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <canvas ref={canvasRef} width={400} height={300} className="rounded-xl shadow-md" />
      {unlocked && (
        <button className="mt-4 px-6 py-2 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-300 transition-all">
          Explorar Portfólio
        </button>
      )}
    </div>
  );
}
