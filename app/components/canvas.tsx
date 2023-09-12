import { useState, useRef, useEffect } from "react";
import {
  Button,
  Divider,
  Paper,
  Typography,
  useMediaQuery,
  ThemeProvider
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { theme } from "./theme";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

class points {
  point_cnt = 0;
  xs: number[] = [];
  ys: number[] = [];
}

export default function Canvas({
  tempMsg,
  updateTempMsg
}: {
  tempMsg: string;
  updateTempMsg: Function;
}) {
  const sz_xs = 320;
  const sz_sm = 400;
  const wid_sm = 700;
  const primary_color = theme.palette.primary;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileCanvas, setMobileCanvas] = useState(isMobile);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentStroke, setCurrentStroke] = useState<points>(new points());
  const [strokes, setStrokes] = useState<points[]>([]);
  const [size, setSize] = useState(mobileCanvas ? sz_xs : sz_sm);
  const [width, setWidth] = useState(mobileCanvas ? sz_xs : wid_sm);
  const [left, setL] = useState(0);
  const [top, setTop] = useState(0);

  // redraw canvas
  useEffect(() => {
    var canvas = canvasRef.current;
    var ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    setMobileCanvas(isMobile);
    setSize(isMobile ? sz_xs : sz_sm);
    setWidth(isMobile ? sz_xs : wid_sm);
    setL(canvas.getBoundingClientRect().left);
    setTop(canvas.getBoundingClientRect().top);

    const handleWindowResize = () => {
      if (isMobile) {
        if (!mobileCanvas) {
          setMobileCanvas(true);
          setSize(sz_xs);
          setWidth(sz_xs);
          handleResize();
        }
      } else {
        if (mobileCanvas) {
          setMobileCanvas(false);
          setSize(sz_sm);
          setWidth(wid_sm);
          handleResize();
        }
      }
      redrawCanvas();
    };

    const handleResize = () => {
      if (isMobile) {
        var next_strokes = strokes;
        for (var i = 0; i < strokes.length; i++) {
          for (var j = 0; j < strokes[i].point_cnt; j++) {
            next_strokes[i].xs[j] = Math.round(
              next_strokes[i].xs[j] * (sz_xs / sz_sm)
            );
            next_strokes[i].ys[j] = Math.round(
              next_strokes[i].ys[j] * (sz_xs / sz_sm)
            );
          }
        }
        setStrokes(next_strokes);
      } else {
        var next_strokes = strokes;
        for (var i = 0; i < strokes.length; i++) {
          for (var j = 0; j < strokes[i].point_cnt; j++) {
            next_strokes[i].xs[j] = Math.round(
              next_strokes[i].xs[j] / (sz_xs / sz_sm)
            );
            next_strokes[i].ys[j] = Math.round(
              next_strokes[i].ys[j] / (sz_xs / sz_sm)
            );
          }
        }
        setStrokes(next_strokes);
      }
    };

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
      if (!isDrawing) return;
      setIsDrawing(false);
      var next_strokes = strokes;
      next_strokes.push(currentStroke);
      setStrokes(next_strokes);
      redrawCanvas();
      setCurrentStroke(new points());
    };

    const handleTouchDown = (e: TouchEvent) => {
      e.preventDefault();
      setIsDrawing(true);
      const touch = e.touches[0];
      const x = touch.clientX - left;
      const y = touch.clientY - top;
      var nextStroke = currentStroke;
      nextStroke.point_cnt++;
      nextStroke.xs.push(x);
      nextStroke.ys.push(y);
      setCurrentStroke(nextStroke);
      redrawCanvas();
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (!isDrawing) return;
      const touch = e.touches[0];
      const x = touch.clientX - left;
      const y = touch.clientY - top;
      var nextStroke = currentStroke;
      nextStroke.point_cnt++;
      nextStroke.xs.push(x);
      nextStroke.ys.push(y);
      setCurrentStroke(nextStroke);
      redrawCanvas();
    };
    window.addEventListener("resize", handleWindowResize);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseleave", handleMouseUp);
    canvas.addEventListener("touchstart", handleTouchDown);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      canvas?.removeEventListener("mousedown", handleMouseDown);
      canvas?.removeEventListener("mousemove", handleMouseMove);
      canvas?.removeEventListener("mouseup", handleMouseUp);
      canvas?.removeEventListener("mouseleave", handleMouseUp);
      canvas?.removeEventListener("touchstart", handleTouchDown);
      canvas?.removeEventListener("touchmove", handleTouchMove);
      canvas?.removeEventListener("touchend", handleMouseUp);
    };
  });

  const redrawCanvas = () => {
    var canvas = canvasRef.current;
    var ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    // Set canvas background to white
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    // ctx.clearRect(0, 0, size, size);
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
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
    var ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, width, size);
  };

  const sendJPEGToBackend = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const imgDataUrl = canvas.toDataURL("image/png"); // Converts to a long url
    const base64Image = imgDataUrl.split(",")[1]; // Extract the base64 part

    // const url = "http://localhost:5000/predict"; // Change to the server URL as necessary
    const url = 'http://52.9.58.36:5000/predict';
    const objToSend = {
      image_data: base64Image // Include the base64-encoded image data in the payload
    };

    // A little redundant, but works
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify(objToSend)
    })
      .then(async (response) => {
        if (response.ok) {
          // Successful response from the backend
          console.log("Img link sent to the backend successfully");
          let backResponse = await response.json(); //.json() later
          console.log(backResponse.prediction_text);
          //Updating the text outside using setState function
          updateTempMsg(backResponse.prediction_text);
        } else {
          // Handle errors here
          console.error("Failed to send JPEG file to the backend");
        }
      })
      .catch((error) => {
        console.error("Error while sending JPEG file to the backend:", error);
      });
  }; /*
    const sendJPEGToBackend = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
    
        // Get the JPEG data as a Blob
        canvas.toBlob(blob => {
            if (!blob) {
                console.error('Failed to create a Blob from the canvas data.');
                return;
            }
            console.log('Sending JPEG to backend');
    
            // Make a POST request to your backend
            fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'image/jpeg',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                },
                body: blob, // Send the FormData with the Blob
            })
            .then(async response => {
                if (response.ok) {
                    // Successful response from the backend
                    console.log('JPEG file sent to the backend successfully');
                    let backResponse = await response.json(); //.json() later
                    console.log(backResponse.prediction_text);
                    //Updating the text outside using setState function
                    updateTempMsg(backResponse.prediction_text);
                } else {
                    // Handle errors here
                    console.error('Failed to send JPEG file to the backend');
                }
            })
            .catch(error => {
                console.error('Error while sending JPEG file to the backend:', error);
            });
        }, 'image/jpeg');
    }; */

  return (
    <ThemeProvider theme={theme}>
<Paper
      sx={{
        backgroundColor: primary_color.light,
        height: "100%",
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 10,
        paddingRight: 10,
        width: { xs: "65%", sm: "100%" }
      }}
      elevation={5}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20
        }}
      >
        <Typography variant="h4">Option 1: Draw</Typography>
        <div>
          <Button
            variant="contained"
            sx={{
              "margin": "10px",
              "backgroundColor": primary_color.main,
              "&:hover": { backgroundColor: primary_color.dark }
            }}
            onClick={clear}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            sx={{
              "margin": "10px",
              "backgroundColor": primary_color.main,
              "&:hover": { backgroundColor: primary_color.dark }
            }}
            onClick={undo}
          >
            Undo
          </Button>
          <Button
            variant="contained"
            sx={{
              "margin": "10px",
              "backgroundColor": primary_color.main,
              "&:hover": { backgroundColor: primary_color.dark }
            }}
            onClick={sendJPEGToBackend}
          >
            Predict {/* JPEG to backend */}
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px"
        }}
      >
        <canvas
          ref={canvasRef}
          width={width}
          height={size}
          style={{ border: "1px solid black", backgroundColor: "white" }}
        ></canvas>
      </div>
      <Divider sx={{ marginTop: 3, marginBottom: 3 }}>or</Divider>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Option 2: Upload an Image
      </Typography>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload an Image
        <VisuallyHiddenInput type="file" />
      </Button>
    </Paper>
    </ThemeProvider>
  );
}
