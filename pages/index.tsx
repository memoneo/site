import * as React from "react"

import { Layout } from "../src/components"
import staticWrapper from "../src/lib/static"

import { SITE_NAME } from "../src/constants/env"
import { displayStyle, navStyle } from "../src/lib/reexports"

export default () => (
  <Layout>
    <div className={displayStyle.introductionContainer}>
      <div>
        <div className={navStyle.logoContainer}>
          <img
            className={navStyle.logoImage}
            src={staticWrapper("/logo.svg")}
          />
          Memoneo
        </div>
        <div className={displayStyle.introductionText}>
          <h1 className={displayStyle.introductionTextTitle}>
            Productivity diary app
          </h1>
          <p>
            {SITE_NAME} helps you reflect on your productivity by asking you the
            right questions in a structured and ongoing way.
          </p>
        </div>
        <div
          className={displayStyle.newsletterSignupTitle}
          style={{ marginTop: "4rem" }}
        >
          <h3>Stay up to date</h3>
          <p>
            {SITE_NAME} currently has alpha status. Sign up to the newsletter to
            stay up to date.
          </p>
        </div>
        <form className={displayStyle.newsletterSignupForm}>
          <input type="email" name="mail" required />
        </form>
        <button className="btn btn-standard" style={{width: "120px"}}>Disabled</button>
      </div>
      <img
        className={displayStyle.introImage}
        src={staticWrapper("/demo.jpg")}
      />
    </div>
  </Layout>
)
