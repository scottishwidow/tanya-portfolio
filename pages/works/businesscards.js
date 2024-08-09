import { Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Businesscards">
    <Container>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/works/BusinessCards/BusinessCard1.jpg"
          alt="businesscards"
        />
        <WorkImage
          src="/images/works/BusinessCards/BusinessCard2.jpg"
          alt="businesscards"
        />
        <WorkImage
          src="/images/works/BusinessCards/BusinessCard3.jpg"
          alt="businesscards"
        />
        <WorkImage
          src="/images/works/BusinessCards/BusinessCard4.jpg"
          alt="businesscards"
        />
        <WorkImage
          src="/images/works/BusinessCards/BusinessCard5.jpg"
          alt="businesscards"
        />
        <WorkImage
          src="/images/works/BusinessCards/BusinessCard6.jpg"
          alt="businesscards"
        />
        <WorkImage
          src="/images/works/BusinessCards/BusinessCard7.jpg"
          alt="businesscards"
        />
        <WorkImage
          src="/images/works/BusinessCards/BusinessCard8.jpg"
          alt="businesscards"
        />
        <WorkImage
          src="/images/works/BusinessCards/BusinessCard9.jpg"
          alt="businesscards"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
