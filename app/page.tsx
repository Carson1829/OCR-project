"use client";
import * as React from "react";
import { useState } from "react";
import Canvas from "./components/canvas";
import {
  Container,
  Box,
  Paper,
  Typography,
  Stack,
  useMediaQuery,
  ThemeProvider
} from "@mui/material/";
import styles from "./page.module.css";
import { theme } from "./components/theme";
import About from "./components/about";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const primary_color = theme.palette.primary;
  // setState for responsive frontend to any backend calls
  const [tempMsg, settempMsg] = useState("");
  const updateTempMsg = (newMsg: React.SetStateAction<string>) => {
    settempMsg(newMsg);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Stack
          spacing={2}
          sx={{ height: "95%" }}
          padding={1}
          justifyContent="center"
        >
          <Paper sx={{ backgroundColor: primary_color.light }}>
            <Typography variant="h3" margin={3} sx={{ textAlign: "center" }}>
              ECS 170 Optical Character Recognition Demo
            </Typography>
          </Paper>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ height: "100%" }}
          >
            <Canvas tempMsg={tempMsg} updateTempMsg={updateTempMsg} />
            <Paper
              sx={{
                backgroundColor: primary_color.light,
                height: "400",
                padding: { xs: 0, sm: 2 },
                width: { xs: "100%", sm: "30%" }
              }}
            >
              <div
                style={
                  isMobile
                    ? {
                        display: "flex",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                      }
                    : { height: "100%" }
                }
              >
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    height: "max-content",
                    lineHeight: 2
                  }}
                >
                  Predicted Word
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    height: "80%",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Typography variant="h4" sx={{ margin: "10px" }}>
                    {tempMsg}
                  </Typography>
                </Box>
              </div>
            </Paper>
          </Stack>
          <About />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
