"use client";
import * as React from "react";
import { useState } from "react";
import Canvas from "./components/canvas";
import axios from "axios";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  useMediaQuery,
  ThemeProvider
} from "@mui/material/";
import { blueGrey } from "@mui/material/colors";
import styles from "./page.module.css";
import { theme } from "./components/theme";

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
      {/* TODO: maybe refactor stylings to css module */}
      <Box
        sx={{ width: "98%", height: "100%" }}
        margin={"1%"}
        justifyContent="center"
      >
        <Stack
          spacing={3}
          sx={{ height: "95%" }}
          padding={1}
          justifyContent="center"
        >
          <Paper sx={{ backgroundColor: primary_color.light }} elevation={10}>
            <Typography variant="h2" margin={2} className={styles.heading}>
              ECS 170 Optical Character Recognition Demo
            </Typography>
          </Paper>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ height: "100%" }}
          >
            <Canvas
              xs={400}
              sm={400}
              tempMsg={tempMsg}
              updateTempMsg={updateTempMsg}
            />
            <Paper
              sx={{
                backgroundColor: primary_color.light,
                height: "400",
                padding: { xs: 0, sm: 2 },
                width: "30%"
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
          <Paper
            sx={{ backgroundColor: primary_color.light, padding: "12px" }}
            elevation={10}
          >
            <Typography variant="h4" margin={2}>
              About the Project
            </Typography>
            <Typography variant="body1" sx={{ margin: "10px" }}>
              This is an application that leverages machine learning methods in
              order to predict handwritten text. It is build using Next.js and
              TypeScript on the frontend with
            </Typography>
          </Paper>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
