import * as React from "react"
import Head from "next/head"

const Layout: React.FunctionComponent = props => (
  <div id="layout">
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <main>
      {props.children}
    </main>
  </div>
)

export default Layout
