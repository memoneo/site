//import "isomorphic-fetch"
import * as React from "react"
import App from "next/app"

import "../src/style/style.scss"
import Head from "next/head"
import { SITE_NAME } from "../src/constants/env"

export default class extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const server = !!ctx.req
    const out = { server } as any

    if (Component.getInitialProps) {
      return {
        ...out,
        pageProps: {
          ...(await Component.getInitialProps(ctx)),
        },
      }
    }

    return out
  }

  render() {
    const { props } = this as any
    const { Component, pageProps } = props

    return (
      <>
        <Head>
          <title>{SITE_NAME}</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
