import { Typography, Paper, Container, List, ListItem } from "@mui/material";
import { theme } from "./theme";

export default function About() {
  const primary_color = theme.palette.primary;
  return (
    <Paper
      sx={{
        backgroundColor: primary_color.light,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: 6
      }}
      elevation={10}
    >
      <Container>
        <Typography variant="h4">About the Project</Typography>
      </Container>
      <Container>
        <Typography variant="h5" marginBottom={2}>
          Overview
        </Typography>
        <Typography variant="body1">
          This is a web application that leverages machine learning methods in
          order to predict handwritten text. The application itself is built
          using Next.js, TypeScript, and Material UI on the frontend with Flask
          on the backend. The machine learning model itself is created using
          TensorFlow and Keras. This application is deployed on Vercel. The
          overall goal of this application is to provide users an ease of access
          to character recognition with interactive features similar to Google
          Translate&apos;s features. While we trained it on English for the
          scope of this project, foreign non-Latin characters could potentially
          be predicted if given additional resources like time and comprehensive
          datasets of other languages.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h5" marginBottom={2}>
          The Model
        </Typography>
        <Typography variant="body1">
          Our model utilizes a combination of Convolutional Neural Network (CNN)
          layers and Recurrent Neural Network (RNN) layers. The purpose of the
          CNN layers are to extract features of characters from the images,
          while the RNN layers predict the sequences of characters since
          previous characters can help predict the following characters. Our
          model is then compiled using the CTC loss function and the Adam
          optimizer.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h5" marginBottom={2}>
          Challenges
        </Typography>
        <Typography variant="body1">
          The model sometimes had inaccuracies with predicting the letters yet
          succeeding with predicting words. The model was gradually tweaked and
          trained over different amounts of epochs. In addition to this, our
          config files were misconfigured in some cases and we updated them
          accordingly. While connecting our backend with frontend, we dealt with
          trying to convert the image to a Blob then appended to a FormData.
          After trial and error this multipart request was eventually reworked
          to be a JSON request. JSONs are more familiar to handle and we
          implemented straightforward methods of packaging it, either with
          Base64 encoding or converting it to a dataURL. Image uploading was
          also implemented in hopes to remedy the lack of precision our canvas
          delivers. This gives the user free reign to submit images of
          handwriting that are higher-quality or styled closer in regards to the
          data set that the model learned on.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h5">Contributors</Typography>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside"
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            Ali Osmani - Model, Backend
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Masaki Takeuchi - Model, Frontend
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Derek Ma - Frontend, Backend
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Carson Chiem - Frontend, Backend
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Steven Chang - Frontend, Backend
          </ListItem>
        </List>
      </Container>
    </Paper>
  );
}
