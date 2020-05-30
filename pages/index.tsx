import * as React from "react"

import { Layout, Row, Showcase, RowContent, Header } from "../src/components"
import staticWrapper from "../src/lib/static"

import featuresItems from "../src/constants/features"
import useCasesItems from "../src/constants/useCases"

import * as style from "../src/style/style.scss"
import FloatingShowcase from "../src/components/FloatingShowcase"
import { SITE_NAME } from "../src/constants/env"
import { displayStyle, navStyle } from "../src/lib/reexports"

export default props => (
  <Layout>
    <div className={style.introductionContainer}>
      <div>
        <div className={navStyle.logoContainer}>
          <img
            className={navStyle.logoImage}
            src={staticWrapper("/logo.svg")}
          />
          Memoneo
        </div>
        <div className={style.introductionText}>
          <h1 className={style.introductionTextTitle}>
            Productivity diary app
          </h1>
          <p>
            {SITE_NAME} helps you reflect on your productivity by asking you the
            right questions in a structured and ongoing way.
          </p>
        </div>
        <div
          className={style.newsletterSignupTitle}
          style={{ marginTop: "4rem" }}>
          <h3>Stay up to date</h3>
          <p>
            {SITE_NAME} currently has alpha status. Sign up to the newsletter to
            stay up to date.
          </p>
        </div>
        <form className={style.newsletterSignupForm}>
          <input type="email" name="mail" required />
        </form>
        <button
          style={{
            border: 0,
            padding: "0.4rem",
            backgroundColor: "#A4C9FF",
            color: "white",
            borderRadius: 4,
          }}>
          Sign up
        </button>
      </div>
      <img
        className={displayStyle.introImage}
        src={staticWrapper("/demo.jpg")}
      />
    </div>
  </Layout>
)
