import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Prova() {
  const [info, setInfo] = React.useState(null)

  React.useEffect(() => {
    async function fetchInfo() {
      try {
        const response = await fetch(import.meta.env.VITE_API_BASE + '/sobre/1')
        if (!response.ok) throw new Error('Erro ao buscar informação')
        const data = await response.json()
        setInfo(data.info)
      } catch (error) {
        console.error('Erro ao carregar info:', error)
      }
    }

    fetchInfo()
  }, [])

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Sobre o projeto Karangos
      </Typography>

      <Box>
        {info ? info : 'Carregando informações...'}
      </Box>
    </>
  )
}
