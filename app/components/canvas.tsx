import { useState, useRef, useEffect } from 'react';

export default function Canvas(props: {size: number}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, props.size, props.size);
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, 100, 100);
        }
    });

    return (
        <canvas ref={canvasRef} width={props.size} height={props.size} style={{ border: '1px solid black', backgroundColor: 'white' }}></canvas>
    )
}