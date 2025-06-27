import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './ui/theme'

import TopBar from './ui/TopBar'
import FooterBar from './ui/FooterBar'

import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Box from '@mui/material/Box'

function App() {
  // Estado para armazenar o valor 'info' do endpoint
  const [info, setInfo] = React.useState(null);

  React.useEffect(() => {
    async function fetchInfo() {
      try {
        const response = await fetch(import.meta.env.VITE_API_BASE + '/sobre/1');
        if (!response.ok) throw new Error('Erro ao buscar info');
        const data = await response.json();
        setInfo(data.info);
      } catch (error) {
        console.error('Erro no fetch:', error);
      }
    }

    fetchInfo();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <TopBar />

        {/* Exemplo: mostrar o valor de info em algum lugar */}
        <Box sx={{ m: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
          <strong>Info carregado:</strong> {info ?? 'Carregando...'}
        </Box>

        <Box id="innerRoot" sx={{ m: '48px 24px' }}>
          <AppRoutes />
        </Box>

        <FooterBar />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
