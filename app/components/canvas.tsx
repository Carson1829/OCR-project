import { useState, useRef, useEffect } from 'react';

class points {
    point_cnt = 0;
    xs: number[] = [];
    ys: number[] = [];
};
var ctx, canvas;
var strokes: points[] = [];
var currentStroke: points = new points();

export function undo() {
    strokes.pop();
}

export function clear() {
    console.log('clear');
}

export default function Canvas(props: {size: number}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        canvas = canvasRef.current;
        ctx = canvas?.getContext('2d');
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