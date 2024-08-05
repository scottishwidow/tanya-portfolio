import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbExample from '../public/images/test.jpg'

const Work = () => (
  <Layout title="Work">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Work
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="dialog" title="Діялог" thumbnail={thumbExample}>
            Example Desc
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
