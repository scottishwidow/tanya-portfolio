import { Container } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Magazines">
      <Container>
        <Title>Magazines</Title>
        <WorkImage src="/images/work/Magazine1.jpg" alt="Magazines" />
        <WorkImage src="/images/work/Magazine2.jpg" alt="Magazines" />
        <WorkImage src="/images/work/Magazine3.jpg" alt="Magazines" />
        <WorkImage src="/images/work/Magazine4.jpg" alt="Magazines" />
      </Container>
    </Layout>
  )
}

export default Work
