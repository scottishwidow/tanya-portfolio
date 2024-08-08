import { Container } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Other">
      <Container>
        <Title>Other</Title>
        <WorkImage src="/images/work/Badge1.jpg" alt="Other" />
        <WorkImage src="/images/work/Badge2.jpg" alt="Other" />
        <WorkImage src="/images/work/Badge3.jpg" alt="Other" />
        <WorkImage src="/images/work/Case1.jpg" alt="Other" />
        <WorkImage src="/images/work/Case2.jpg" alt="Other" />
        <WorkImage src="/images/work/Case3.jpg" alt="Other" />
        <WorkImage src="/images/work/Notebook1.jpg" alt="Other" />
        <WorkImage src="/images/work/Pensil1.jpg" alt="Other" />
        <WorkImage src="/images/work/Pin1.jpg" alt="Other" />
        <WorkImage src="/images/work/Stand1.jpg" alt="Other" />
        <WorkImage src="/images/work/Sticker1.jpg" alt="Other" />
      </Container>
    </Layout>
  )
}

export default Work
