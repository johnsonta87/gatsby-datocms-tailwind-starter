import React from 'react'

export default function footer() {
  return (
    <footer style={{
      marginTop: `2rem`
    }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}
