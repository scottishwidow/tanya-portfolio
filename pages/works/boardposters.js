import { Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Boards and Posters">
    <Container>
      <SimpleGrid columns={1} gap={2}>
        <WorkImage
          src="/images/works/Board Posters/16.jpg"
          alt="boardposters"
        />
        <WorkImage
          src="/images/works/Board Posters/Board1.jpg"
          alt="boardposters"
        />
        <WorkImage
          src="/images/works/Board Posters/Board2.jpg"
          alt="boardposters"
        />
        <WorkImage
          src="/images/works/Board Posters/Board3.jpg"
          alt="boardposters"
        />
        <WorkImage
          src="/images/works/Board Posters/Board4.jpg"
          alt="boardposters"
        />
        <WorkImage
          src="/images/works/Board Posters/Poster4.jpg"
          alt="boardposters"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
