import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Home() {
    return (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
            <Box sx={{width: '98%', height: '100%'}} margin={'1%'}>
                <Grid container spacing={2} sx={{height: '95%'}} padding={1}>
                    <Grid item xs={12}>
                        <Paper sx={{backgroundColor: 'darkgrey'}} elevation={10}>
                            <Typography variant="h2" margin={2}>
                                ECS 170 Optical Character Recognition Demo
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item container spacing={1.5} xs={12} sx={{height: '100%'}}>
                        <Grid item xs={8}>
                            <Container sx={{backgroundColor: 'grey', height: '100%'}}>
                                <Grid container spacing={1} margin={2}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={1}>
                                            <Grid item>
                                                <Button variant='contained'>Clear</Button>
                                            </Grid>
                                            <Grid item>
                                                <Button variant='contained'>Undo</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box sx={{backgroundColor: 'blue', height: '100%'}}>
                                            <Typography variant="h5" margin={2}>create a box for drawing here</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                        <Grid item xs={4}>
                            <Container sx={{backgroundColor: 'grey', height: '100%'}}>
                                <Grid container spacing={1} margin={2}>
                                    <Grid item xs={12}>
                                        <Button variant='contained'>Predict</Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h5" margin={2}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laudantium totam soluta ipsum debitis voluptate odio cum atque vero quaerat cupiditate dicta labore rerum in, ratione, vitae natus aliquid quo!
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
      );
}