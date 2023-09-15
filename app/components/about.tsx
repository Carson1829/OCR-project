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
        <Typography variant="h3">About the Project</Typography>
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
          Translate's features. Draw your words or submit images of your own on
          the go, this handy tool can be a place to quickly jot things down. 
          While we trained it on English for the scope of this project, foreign 
          non-Latin characters could potentially be predicted if given additional 
          resources like time and comprehensive datasets of other languages. 
        </Typography>
      </Container>
      <Container>
        <Typography variant="h4">Methodology and Development</Typography>
      </Container>
      <Container>
        <Typography variant="h5" marginBottom={2}>
          The Model
        </Typography>
        <Typography variant="body1">
        nitially, the scope of the project was to create an AI model trained on 
        the MNIST dataset to create a web application that can read and predict a 
        handwritten digit. However, we decided to broaden the scope of the project 
        to allow for handwritten words and sentences as well. After some research, 
        it became clear that we would be able to run a more complex model. We ultimately
        decided on creating an AI model trained on the IAM handwriting database (https://fki.tic.heia-fr.ch/databases/iam-handwriting-database).
        For our sentence recognition model, we had both convolutional neural network and 
        recurrent neural network parts. The CNN component is built using residual blocks 
        which makes training easier. This component is used to extract features from the 
        input images, with each convolution layer focusing on certain features for the model 
        to process. The nature of the residual blocks allows for skip connections which combine 
        the input with the output of the convolutional layers as the total output. Residual blocks 
        also help reduce the vanishing gradient problem. The RNN component is built using bidirectional 
        long short term memory layers. This part is responsible for taking the output of CNN layers and 
        processing it to predict characters or elements in the text sequence. It is able to process
        sequences of features extracted from the images in both forward and backward directions, 
        capturing dependencies from both directions. Dropout regularization is applied after each 
        layer to reduce overfitting. It does this by randomly setting a fraction of inputs to 0 during 
        training. The output of the model is the predicted text sequence. For the activation function, we 
        used leaky relu. The difference between this and standard relu is that instead of the
        output being 0 when x is negative, the output is a small non-zero value. 
        This helps to prevent the dying relu problem so that neurons can still learn during
        backpropagation even if the input was negative.
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
        <Typography variant="h5" marginBottom={2}>
          Reference
        </Typography>
        <Typography variant="body1">
          Since none of us had significant experience with AI and machine learning before 
          taking this class, we decided to take inspiration from a tutorial we found from 
          pylessons. We learned and scaffolded code from the tutorial because we had not reached 
          the neural network section of the class by the time we started working on the project. 
          The tutorial is linked here: <a href="https://pylessons.com/handwritten-sentence-recognition">https://pylessons.com/handwritten-sentence-recognition</a>
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
