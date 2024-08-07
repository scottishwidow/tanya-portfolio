import { Container } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="billboards">
      <Container>
        <Title>Billboards</Title>
        <WorkImage src="/images/work/Board1.jpg" alt="billboards" />
        <WorkImage src="/images/work/Board2.jpg" alt="billboards" />
        <WorkImage src="/images/work/Board3.jpg" alt="billboards" />
        <WorkImage src="/images/work/Board4.jpg" alt="billboards" />
      </Container>
    </Layout>
  )
}

export default Work
