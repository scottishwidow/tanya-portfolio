import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBusinesscards from '../public/images/works/BusinessCards/BusinessCard2.jpg'
import thumbClothes from '../public/images/works/Clothes/T-shirt1.jpg'
import thumbPostcards from '../public/images/works/Postcards/5.jpg'
import thumbMagazines from '../public/images/works/Magazines/Magazine1.jpg'
import thumbLogos from '../public/images/works/Logos/Logo1.jpg'
import thumbOther from '../public/images/works/Other/Case1.jpg'
import thumbOld from '../public/images/works/Old/Board5.jpg'

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
            id="magazines"
            thumbnail={thumbMagazines}
            title="Magazines"
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
