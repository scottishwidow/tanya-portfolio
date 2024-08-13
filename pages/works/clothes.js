import { Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Clothes">
    <Container>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/Clothes/Sweatshirt1.jpg" alt="clothes" />
        <WorkImage src="/images/works/Clothes/Sweatshirt2.jpg" alt="clothes" />
        <WorkImage src="/images/works/Clothes/T-shirt1.jpg" alt="clothes" />
        <WorkImage src="/images/works/Clothes/T-shirt2.jpg" alt="clothes" />
        <WorkImage src="/images/works/Clothes/T-shirt3.jpg" alt="clothes" />
        <WorkImage src="/images/works/Clothes/T-shirt4.jpg" alt="clothes" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
