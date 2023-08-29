import { useState, useRef, useEffect } from 'react';
import { Button, Paper, useMediaQuery } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

class points {
    point_cnt = 0;
    xs: number[] = [];
    ys: number[] = [];
};

export default function Canvas(props: {size: number}) {
    const isMobile = useMediaQuery('(max-width: 700px)');
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [currentStroke, setCurrentStroke] = useState<points>(new points());
    const [strokes, setStrokes] = useState<points[]>([]);

    // redraw canvas
    useEffect(() => {
        var canvas = canvasRef.current;
        var ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const handleMouseDown = (e: MouseEvent) => {
            setIsDrawing(true);
            const x = e.offsetX;
            const y = e.offsetY;
            var nextStroke = currentStroke;
            nextStroke.point_cnt++;
            nextStroke.xs.push(x);
            nextStroke.ys.push(y);
            setCurrentStroke(nextStroke);
            redrawCanvas();
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDrawing) return;
            const x = e.offsetX;
            const y = e.offsetY;
            var nextStroke = currentStroke;
            nextStroke.point_cnt++;
            nextStroke.xs.push(x);
            nextStroke.ys.push(y);
            setCurrentStroke(nextStroke);
            redrawCanvas();
        };

        const handleMouseUp = () => {
            setIsDrawing(false);
            var next_strokes = strokes;
            next_strokes.push(currentStroke);
            setStrokes(next_strokes);
            redrawCanvas();
            setCurrentStroke(new points());
        };

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);
        return () => {
            canvas?.removeEventListener('mousedown', handleMouseDown);
            canvas?.removeEventListener('mousemove', handleMouseMove);
            canvas?.removeEventListener('mouseup', handleMouseUp);
        };
    });

    const redrawCanvas = () => {
        var canvas = canvasRef.current;
        var ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, props.size, props.size);
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        for (var i = 0; i < strokes.length; i++) {
            ctx.beginPath();
            ctx.arc(strokes[i].xs[0], strokes[i].ys[0], 1, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(strokes[i].xs[0], strokes[i].ys[0]);
            for (var j = 1; j < strokes[i].point_cnt; j++) {
                ctx.lineTo(strokes[i].xs[j], strokes[i].ys[j]);
            }
            ctx.stroke();
        }
        if (isDrawing) {
            ctx.beginPath();
            ctx.moveTo(currentStroke.xs[0], currentStroke.ys[0]);
            for (var j = 1; j < currentStroke.point_cnt; j++) {
                ctx.lineTo(currentStroke.xs[j], currentStroke.ys[j]);
            }
            ctx.stroke();
        }
    };

    const undo = () => {
        var next_strokes = strokes;
        next_strokes.pop();
        setStrokes(next_strokes);
        redrawCanvas();
    };

    const clear = () => {
        setStrokes([]);
        var canvas = canvasRef.current;
        var ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, props.size, props.size);
    };

    return (
        <Paper sx={{backgroundColor: blueGrey[300], height: '100%', padding: 2, width: (isMobile ? '90%' : '50%')}} elevation={5}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Button variant='contained' sx={{margin: '10px', backgroundColor: blueGrey[700], '&:hover': {backgroundColor: blueGrey[900]}}} onClick={clear}>
                    Clear
                </Button>
                <Button variant='contained' sx={{margin: '10px', backgroundColor: blueGrey[700], '&:hover': {backgroundColor: blueGrey[900]}}} onClick={undo}>
                    Undo
                </Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '10px' }}>
                <canvas ref={canvasRef} width={props.size} height={props.size} style={{ border: '1px solid black', backgroundColor: 'white' }}></canvas>
            </div>
        </Paper>
    )
}