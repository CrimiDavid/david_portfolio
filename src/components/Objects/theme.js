import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#ff8a65',
            light: '#ffbb93',
            dark: '#c75b39',
        },
        secondary: {
            main: '#4db6ac',
            light: '#82e9de',
            dark: '#00867d',
            contrastText: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Comic Sans MS, cursive, sans-serif',
        h5: {
            fontWeight: 700,
            color: '#ff8a65',
        },
        body2: {
            color: '#4db6ac',
        },
    },
    shadows: Array(25).fill('none').map((_, i) => `0px ${i}px ${i * 2}px rgba(0,0,0,0.2)`),
});

export default theme;
