import { Container } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Logos">
      <Container>
        <Title>Logos</Title>
        <WorkImage src="/images/work/Logo1.jpg" alt="Logos" />
        <WorkImage src="/images/work/Logo2.jpg" alt="Logos" />
        <WorkImage src="/images/work/Logo3.jpg" alt="Logos" />
        <WorkImage src="/images/work/Logo4.jpg" alt="Logos" />
        <WorkImage src="/images/work/Logo5.jpg" alt="Logos" />
        <WorkImage src="/images/work/Logo6.jpg" alt="Logos" />
        <WorkImage src="/images/work/Logo7.jpg" alt="Logos" />
        <WorkImage src="/images/work/Logo8.jpg" alt="Logos" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
