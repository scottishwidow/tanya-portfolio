import { Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Logos">
    <Container>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/Logos/Logo1.jpg" alt="logos" />
        <WorkImage src="/images/works/Logos/Logo2.jpg" alt="logos" />
        <WorkImage src="/images/works/Logos/Logo3.jpg" alt="logos" />
        <WorkImage src="/images/works/Logos/Logo4.jpg" alt="logos" />
        <WorkImage src="/images/works/Logos/Logo5.jpg" alt="logos" />
        <WorkImage src="/images/works/Logos/Logo6.jpg" alt="logos" />
        <WorkImage src="/images/works/Logos/Logo7.jpg" alt="logos" />
        <WorkImage src="/images/works/Logos/Logo8.jpg" alt="logos" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
