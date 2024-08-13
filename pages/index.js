import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('orange.400', 'orange.200')}
        css={{ backdropFilter: 'blur(10px)' }}
        color="black"
      >
        Hello, I&apos;m a graphic designer based in Ukraine!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tanya Demyanets
          </Heading>
          <p> ( Artist / Designer / Photographer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/tanya.jpg"
              alt="Profile image"
              width="1000"
              height="1000"
              style={{ marginTop: '-30px' }}
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am a graphic designer with seven years of experience, working both
          in teams and as a freelancer. My expertise includes creating designs
          for various print materials, social media graphics, logos, and brand
          identities for companies and organizations. Additionally, I have
          skills in photography and can produce simple videos.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="orange"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1994</BioYear>
          Born in Poltava, Ukraine.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Poltava State Agrarian University - Faculty of Finance and Credit
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Adobe Illustrator: Intensive - School of Visual Communication
        </BioSection>
        <BioSection>
          <BioYear>2003 to 2010</BioYear>
          Poltava City School of Arts
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://www.facebook.com/tanya.demyanets"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<IoLogoFacebook />}
              >
                Facebook
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.instagram.com/tanyademyanets/?igsh=ZWZrdXh3ZWxqcnB2"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="orange"
                leftIcon={<IoLogoInstagram />}
              >
                Instagram
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
