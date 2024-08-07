import { Container } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Business Cards">
      <Container>
        <Title>Business Cards</Title>
        <WorkImage src="/images/work/Card2.jpg" alt="businesscards" />
        <WorkImage src="/images/work/Card3.jpg" alt="businesscards" />
        <WorkImage src="/images/work/Card4.jpg" alt="businesscards" />
      </Container>
    </Layout>
  )
}

export default Work
