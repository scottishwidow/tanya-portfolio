import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Magazines">
      <Container>
        <Title>Magazines</Title>
        <WorkImage src="/images/work/Magazine2.jpg" alt="Magazines" />
        <WorkImage src="/images/work/Magazine3.jpg" alt="Magazines" />
      </Container>
    </Layout>
  )
}

export default Work
