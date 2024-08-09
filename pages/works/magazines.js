import { Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Magazines">
    <Container>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/works/Magazines/Magazine1.jpg"
          alt="magazines"
        />
        <WorkImage
          src="/images/works/Magazines/Magazine2.jpg"
          alt="magazines"
        />
        <WorkImage
          src="/images/works/Magazines/Magazine3.jpg"
          alt="magazines"
        />
        <WorkImage
          src="/images/works/Magazines/Magazine4.jpg"
          alt="magazines"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
