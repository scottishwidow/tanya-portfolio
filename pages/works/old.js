import { Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Old">
    <Container>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/Old/17.jpg" alt="old" />
        <WorkImage src="/images/works/Old/Banner1.jpg" alt="old" />
        <WorkImage src="/images/works/Old/Banner2.jpg" alt="old" />
        <WorkImage src="/images/works/Old/Banner3.jpg" alt="old" />
        <WorkImage src="/images/works/Old/Board5.jpg" alt="old" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
