import { useState, useRef, useEffect } from 'react';

export default function Canvas(props: {size: number}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    return (
        <canvas ref={canvasRef} width={props.size} height={props.size} style={{ border: '1px solid black', backgroundColor: 'white' }}></canvas>
    )
}