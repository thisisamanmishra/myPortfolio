import * as React from 'react'
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiUsers,
  FiBarChart2,
} from 'react-icons/fi'
import { FaTools } from 'react-icons/fa'
import { VStack, Heading, Box, Link, LinkProps } from '@chakra-ui/react'
import { TimelineItem } from './Timeline'
import { PageSlideFade } from 'components/shared/animations/page-transitions'
import Header from 'components/shared/header'
import NextLink from 'next/link'
import { useLinkColor } from 'components/theme'

interface ExternalLinkProps extends LinkProps {
  url: string
  linkProps?: LinkProps
  text: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  )
}

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  )
}
const Achievements = () => {
  const linkColor = useLinkColor()

  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
      <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2023
          </Heading>
          <Box>
            <TimelineItem icon={FiHome}>
              Web Developement Intern at - {' '}
              <ExternalLink
                color={linkColor}
                url="https://www.linkedin.com/company/amieexplore/"
                text={"Amie Explore"}
                target="_blank"
              />
              </TimelineItem>
            <TimelineItem icon={FiHome}>
              Web Developement Intern at - {' '}
              <ExternalLink
                color={linkColor}
                url="https://www.gastos.in/"
                text={"Gastos"}
                target="_blank"
              />
              </TimelineItem>
          <TimelineItem icon={FiUsers}>
              Project Mentor - {' '}
              <ExternalLink
                color={linkColor}
                url="https://swoc.getsocialnow.co/"
                text={"SWoC'23"}
                target="_blank"
              />
            .
              </TimelineItem>
          </Box>
          </Box>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2022
          </Heading>
          <Box>
          <TimelineItem icon={FiUsers}>
              Project Mentor - {' '}
              <ExternalLink
                color={linkColor}
                url="https://kwoc.kossiitkgp.org/"
                text={"KWoC'22"}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiHome}>
              Web Development Intern at {' '}
              <ExternalLink
                color={linkColor}
                url="https://ineuron.ai"
                text={'iNeuron'}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiUsers}>
             Project Contributor - {' '}
             <ExternalLink
               color={linkColor}
               url="https://ssoc.devfolio.co/"
               text={"SSOC'22"}
               target="_blank"
             />
           
            </TimelineItem>

            <TimelineItem icon={FiUsers}>
              Selected as Campus Ambassador of {' '}
              <ExternalLink
                color={linkColor}
                url="https://ecell.in"
                text={'Entrepreneurship Cell, IIT Bombay'}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiPackage}>
              Built my portfolio website with Next.js, ChakraUI and Framer-motion and thanks to {' '}
              <ExternalLink
                color={linkColor}
                url="https://github.com/MA-Ahmad"
                text={'Muhammad Ahmad'}
                target="_blank"
              /> for that.
            </TimelineItem>
            <TimelineItem icon={FiPackage}>
              Contributed to{' '}
              <InternalLink
                color={linkColor}
                url="/open-source"
                text={'10+ open-source repositories'}
              />
            </TimelineItem>
            <TimelineItem icon={FaTools}>
             Started Learning Java from
             <ExternalLink
               color={linkColor}
               url="https://www.youtube.com/c/Pepcoding"
               text={' Pepcoding'}
               target="_blank"
             />
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              Build a Face Recognition Application using Python with{' '}
              <ExternalLink
                color={linkColor}
                url="https://www.guvi.in/verify-certificate?id=445nZX323S31H60QrO"
                text={'GUVI'}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FiEdit2}>Started Learning Web Development</TimelineItem>

            <TimelineItem icon={FiHome} skipTrail>
              Learnt{' '}
              <ExternalLink
                color={linkColor}
                url="https://www.udemy.com/certificate/UC-0eec1d91-0ef5-4eef-beba-396bd8f4084b/"
                text={'Python'}
                target="_blank"
              />
              .
            </TimelineItem>

          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  )
}

export default Achievements
