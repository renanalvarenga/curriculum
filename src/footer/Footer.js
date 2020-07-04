import React from 'react'

import styled from 'styled-components'

function Footer() {
  return (
    <FooterContent id="footer">
      <h4>SITE E DESIGN DESENVOLVIDOS POR RENAN ALVARENGA</h4>
    </FooterContent>
  )
}

export default Footer;

const FooterContent = styled.section`
  background-color: black;
  color: white;
  h4 {
    text-align: center;
    font-size: 12px;
  }
`
