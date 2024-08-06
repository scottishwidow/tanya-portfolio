import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbMagazines from '../public/images/Magazine1.jpg'
import thumbCards from '../public/images/Card1.jpg'
import thumbPostcards from '../public/images/Postcard1.jpg'
import thumbBillboards from '../public/images/Board1.jpg'
const Work = () => (
  <Layout title="Work">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Work
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="businesscard"
            title="Business Cards"
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
            title="Post Cards"
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
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
