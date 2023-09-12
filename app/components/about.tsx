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
        <Typography variant="h5">Overview</Typography>
        <Typography variant="body1">
          This is an web application that leverages machine learning methods in
          order to predict handwritten text. The application itself is build
          using Next.js, TypeScript, and Material UI on the frontend with Flask
          on the backend. While the machine learning model itself is created
          using TensorFlow and Keras.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h5">The Model</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
          cumque! Veritatis accusantium quaerat quia doloribus, cumque explicabo
          laudantium doloremque recusandae eaque ratione autem amet impedit quos
          dolorem, fuga nesciunt tenetur!
        </Typography>
      </Container>
      <Container>
        <Typography variant="h5">Challenges</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero magnam
          accusamus quae suscipit, eius a velit eos, delectus quibusdam
          doloribus alias aut tempore ut similique incidunt. Dicta beatae libero
          exercitationem.
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
            Your Name - Please list your contributions
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Your Name - Please list your contributions
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Your Name - Please list your contributions
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Your Name - Please list your contributions
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Your Name - Please list your contributions
          </ListItem>
        </List>
      </Container>
    </Paper>
  );
}
