import { Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Other">
    <Container>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/Other/14.jpg" />
        <WorkImage src="/images/works/Other/Badge1.jpg" alt="other" />
        <WorkImage src="/images/works/Other/Badge2.jpg" alt="other" />
        <WorkImage src="/images/works/Other/Badge3.jpg" alt="other" />
        <WorkImage src="/images/works/Other/Magazine1.jpg" alt="other" />
        <WorkImage src="/images/works/Other/Magazine2.jpg" alt="other" />
        <WorkImage src="/images/works/Other/Magazine3.jpg" alt="other" />
        <WorkImage src="/images/works/Other/Magazine4.jpg" alt="other" />
        <WorkImage src="/images/works/Other/Case1.jpg" alt="other" />
        <WorkImage src="/images/works/Other/Case2.jpg" alt="other" />
        <WorkImage src="/images/works/Other/Notebook1.jpg" alt="other" />
        <WorkImage src="/images/works/Other/Pensil1.jpg" alt="other" />
        <WorkImage src="/images/works/Other/Pin1.jpg" alt="other" />
        <WorkImage src="/images/works/Other/Stand1.jpg" alt="other" />
        <WorkImage src="/images/works/Other/Sticker1.jpg" alt="other" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
