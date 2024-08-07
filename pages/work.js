import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbMagazines from '../public/images/Magazine1.jpg'
import thumbCards from '../public/images/Card1.jpg'
import thumbPostcards from '../public/images/Postcard1.jpg'
import thumbBillboards from '../public/images/Board1.jpg'
import thumbLogos from '../public/images/Logo8.jpg'
import thumbClothes from '../public/images/T-shirt2.jpg'

const Work = () => (
  <Layout title="Work">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Work
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={7}>
        <Section>
          <WorkGridItem
            id="businesscards"
            title="Businesscards"
            thumbnail={thumbCards}
          ></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="magazines"
            title="Magazines"
            thumbnail={thumbMagazines}
          ></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="postcards"
            title="Postcards"
            thumbnail={thumbPostcards}
          ></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="billboards"
            title="Billboards"
            thumbnail={thumbBillboards}
          ></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="logos"
            title="Logos"
            thumbnail={thumbLogos}
          ></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="clothes"
            title="Clothes"
            thumbnail={thumbClothes}
          ></WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
