import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('orange.400', 'orange.200')}
        p={3}
        mb={6}
        align="center"
        color="black"
      >
        Hello, I&apos;m a graphic designer based in Ukraine!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tanya Demianets
          </Heading>
          <p>( Graphic Designer / Photographer )</p>
        </Box>
      </Box>
      <Box flexShrink={0} mt={{ base: 4, md: 1 }} ml={{ md: 6 }} align="center">
        <Box
          borderColor="orange.300"
          borderWidth={3}
          borderStyle="solid"
          w="100px"
          h="100px"
          display="inline-block"
          borderRadius="full"
          overflow="hidden"
        >
          <Image
            src="/images/photo_2024-07-26_10-19-23.jpg"
            alt="Profile image"
            width="100"
            height="100"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
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
          <NextLink href="/work">
            <Button
              rightIcon={<ChevronRightIcon />}
              bg={useColorModeValue('orange.400', 'orange.200')}
              color="black"
            >
              Portfolio
            </Button>
          </NextLink>
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
          <BioYear>2003 - 2010</BioYear>
          Poltava Ciry School of Arts
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Paragraph>
          Illustrator, Photoshop, CoralDraw, PremierePro, InDesign, Canva.
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Page
