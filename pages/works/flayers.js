import { Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Flayers">
    <Container>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/Flayers/5.jpg" alt="flayers" />
        <WorkImage src="/images/works/Flayers/7.jpg" alt="flayers" />
        <WorkImage src="/images/works/Flayers/8.jpg" alt="flayers" />
        <WorkImage src="/images/works/Flayers/9.jpg" alt="flayers" />
        <WorkImage src="/images/works/Flayers/10.jpg" alt="flayers" />
        <WorkImage src="/images/works/Flayers/11.jpg" alt="flayers" />
        <WorkImage src="/images/works/Flayers/13.jpg" alt="flayers" />
        <WorkImage src="/images/works/Flayers/Flayer1.jpg" alt="flayers" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
