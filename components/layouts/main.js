import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tanya's homepage" />
        <meta name="author" content="scottishwidow" />
        <meta name="author" content="scottishwidow" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Tanya Demyanets" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Tanya Demyanets" />
        <meta name="og:title" content="Tanya Demyanets" />
        <meta property="og:type" content="website" />
        <title>Tanya Demyanets - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
