import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import media from './media.conf'

const Title = styled.p`
  text-align: 'center';
  word-wrap: break-word;
  font-weight: ${props => props.textStyle ? props.textStyle : '100'}
  color: ${props => props.color ? props.color : '#676767'}
  ${media.largest`
    font-size: 30px;
  `}
  ${media.desktop`
    font-size: 22px;
  `}
  ${media.tablet`
    font-size: 20px;
  `}
  ${media.phone`
    font-size: 15px;
  `}
`

const propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  textStyle: PropTypes.string
}

function Text({
  text,
  textColor,
  textStyle
}) {

  return (
    <Title color={textColor} textStyle={textStyle}>{text}</Title>
  )
}

Text.PropTypes = propTypes

export default Text