import { Container } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Clothes">
      <Container>
        <Title>Clothes</Title>
        <WorkImage src="/images/work/Sweatshirt1.jpg" alt="Clothes" />
        <WorkImage src="/images/work/Sweatshirt2.jpg" alt="Clothes" />
        <WorkImage src="/images/work/T-shirt1.jpg" alt="Clothes" />
        <WorkImage src="/images/work/T-shirt2.jpg" alt="Clothes" />
        <WorkImage src="/images/work/T-shirt3.jpg" alt="Clothes" />
        <WorkImage src="/images/work/T-shirt4.jpg" alt="Clothes" />
      </Container>
    </Layout>
  )
}

export default Work
