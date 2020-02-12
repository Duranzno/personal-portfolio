import React, { useState } from 'react'

import { Text, Image, Heading, Flex } from 'theme-ui'
import { Fade } from 'react-awesome-reveal'
import useInterval from '@use-it/interval'
import { setLimitLength } from '@utils'
import { ProjectPropTypes, StyledCard, ProjectDefaultProps } from './ProjectCard.styles'
import { IconifyLink } from '../Icons/IconifyLink'
import { TechTag } from '../Icons/TechTag'
import { EllipsisHeading } from '../Card'

const SOCIAL_LINK_PROP = { sx: { width: 4, height: 4, mx: 2 }, color: 'black' }
const DELAY = 3000000000000
const MAX_LENGTH = 175
const createProjectLinks = project => {
  return [
    {
      ...SOCIAL_LINK_PROP,
      name: 'Repository',
      iconifyName: 'mdi:github-circle',
      url: project.repositoryUrl,
    },
    { ...SOCIAL_LINK_PROP, name: 'Project', iconifyName: 'mdi:web', url: project.projectUrl },
  ]
}
export const BackCard = ({ project }) => {
  const [stackIndex, setStackIndex] = useState(0)
  const [tagList] = useState(project.stack.map(v => <TechTag key={v.name} {...v} />))
  const limitLength = setLimitLength(MAX_LENGTH)
  useInterval(() => {
    setStackIndex(stackIndex === project.stack.length - 1 ? 0 : stackIndex + 1)
  }, DELAY)
  const projectLinks = createProjectLinks(project)
  return (
    <StyledCard className="styled-card" sx={{ pt: 3, px: 4, pb: 2 }}>
      <EllipsisHeading as="h2">{project.name}</EllipsisHeading>
      <Heading as="h6">{new Date(project.publishedDate).getFullYear()}</Heading>
      <Flex sx={{ justifyContent: 'center' }}>
        {projectLinks.map(v => (
          <IconifyLink key={v.url} {...v} sx={{ width: 4, height: 4 }} />
        ))}
      </Flex>

      <Text sx={{ flexGrow: '1' }}>{limitLength(project.description)}</Text>
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignSelf: 'stretch',
          alignItems: 'center',
        }}
      >
        <Fade LightSpeed>{tagList[stackIndex]}</Fade>
        {project.logo && <Image src={project.logo.file.url} sx={{ size: 4 }} />}
      </Flex>
    </StyledCard>
  )
}
BackCard.propTypes = {
  ...ProjectPropTypes,
}
BackCard.defaultProps = {
  ...ProjectDefaultProps,
}
