import { Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Postcards">
    <Container>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/Postcards/1.jpg" alt="postcards" />
        <WorkImage src="/images/works/Postcards/2.jpg" alt="postcards" />
        <WorkImage src="/images/works/Postcards/3.jpg" alt="postcards" />
        <WorkImage src="/images/works/Postcards/4.jpg" alt="postcards" />
        <WorkImage src="/images/works/Postcards/12.jpg" alt="postcards" />
        <WorkImage src="/images/works/Postcards/15.jpg" alt="postcards" />
        <WorkImage src="/images/works/Postcards/18.jpg" alt="postcards" />
        <WorkImage src="/images/works/Postcards/19.jpg" alt="postcards" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
