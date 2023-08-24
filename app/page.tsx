'use client';
import * as React from 'react';
import Canvas from './components/canvas';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from './page.module.css';
import { useMediaQuery } from '@mui/material';

export default function Home() {
    const isMobile = useMediaQuery('(max-width: 700px)');
    return (
        <div style={{ height: '100%' }}>
        <Box sx={{width: '98%', height: '100%'}} margin={'1%'}>
        <Stack spacing={3} sx={{height: '95%'}} padding={1} justifyContent="center">
            <Paper sx={{backgroundColor: 'darkgrey'}} elevation={10}>
                <Typography variant="h2" margin={2} className={styles.heading}>
                    ECS 170 Optical Character Recognition Demo
                </Typography>
            </Paper>
            <Stack spacing={2} sx={{height: '100%'}} direction={isMobile ? 'column' : 'row'} justifyContent="center">
                <Container sx={{backgroundColor: 'grey', height: '100%', padding: 2}}>
                    <Button variant='contained' sx={{margin: '10px'}}>Clear</Button>
                    <Button variant='contained' sx={{margin: '10px'}}>Undo</Button>
                    <div></div>
                    <Canvas size={400}></Canvas>
                </Container>
                <Container sx={{backgroundColor: 'grey', height: '100%', padding: 2}}>
                    <Button variant='contained' sx={{margin: '10px'}}>Predict</Button>
                    <Typography variant="h5" sx={{margin: '10px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis vel soluta minima aliquam architecto aliquid voluptatem esse quibusdam excepturi repellendus culpa accusantium officia, assumenda inventore eligendi laudantium adipisci dignissimos.
                    </Typography>
                </Container>
            </Stack>
        </Stack>
        </Box>
        </div>
    );
}