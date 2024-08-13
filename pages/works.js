import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBusinesscards from '../public/images/works/BusinessCards/BusinessCard2.jpg'
import thumbClothes from '../public/images/works/Clothes/T-shirt1.jpg'
import thumbPostcards from '../public/images/works/Postcards/3.jpg'
import thumbBoardposters from '../public/images/works/Board Posters/Board2.jpg'
import thumbLogos from '../public/images/works/Logos/Logo2.jpg'
import thumbOther from '../public/images/works/Other/Pensil1.jpg'
import thumbOld from '../public/images/works/Old/Banner1.jpg'
import thumbFlayers from '../public/images/works/Flayers/8.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="businesscards"
            title="Business Cards"
            thumbnail={thumbBusinesscards}
          ></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="clothes"
            title="Clothes"
            thumbnail={thumbClothes}
          ></WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="postcards"
            title="Postcards"
            thumbnail={thumbPostcards}
          ></WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="boardposters"
            thumbnail={thumbBoardposters}
            title="Boards and Posters"
          ></WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="logos"
            thumbnail={thumbLogos}
            title="Logos"
          ></WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="other"
            thumbnail={thumbOther}
            title="Other"
          ></WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="flayers"
            thumbnail={thumbFlayers}
            title="Flayers"
          ></WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="old"
            thumbnail={thumbOld}
            title="Old"
          ></WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
