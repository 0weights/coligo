import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f0f0f0', 
    },
  },
});

function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
        <main>
            <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
