import './App.css';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/Global.style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRouter />

    </ThemeProvider>
  );
}

export default App;
