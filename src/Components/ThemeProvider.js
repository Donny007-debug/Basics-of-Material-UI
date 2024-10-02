import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
    </ThemeProvider>
  );
}
