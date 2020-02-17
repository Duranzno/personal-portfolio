import React from 'react'
import PropTypes from 'prop-types'

import { Text } from 'theme-ui'
import styled from '@emotion/styled'
import { ImageSubtitle, CoverImage, Card } from './Post.styles'
import { EllipsisHeading } from '../EllipsisHeading'

export const Post = ({ title, text, image, url, date, time }) => (
  // eslint-disable-next-line no-undef
  <Card onClick={() => window.open(url, '_blank')} sx={{ pb: 4, pt: 2 }}>
    <EllipsisHeading sx={{ m: 3, p: 1 }}>{title}</EllipsisHeading>
    {image && <CoverImage src={image} height="200px" alt={title} />}
    <Text m={3}>{text}</Text>
    <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
      {`${date} - ${Math.ceil(time)} min`}
    </ImageSubtitle>
  </Card>
)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}
export const DetailedPost = ({ title, text, image, url, date, time }) => (
  // eslint-disable-next-line no-undef
  <Card onClick={() => window.open(url, '_blank')} sx={{ pb: 4, pt: 2 }}>
    <EllipsisHeading sx={{ m: 3, p: 1 }}>{title}</EllipsisHeading>
    {image && <CoverImage src={image} height="200px" alt={title} />}
    <Text m={3}>{text}</Text>
    <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
      {`${date} - ${Math.ceil(time)} min`}
    </ImageSubtitle>
  </Card>
)

DetailedPost.propTypes = Post.propTypes
export const DetailedPostList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`