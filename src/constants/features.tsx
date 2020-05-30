import React from "react"

import { Icon } from "polyvolve-frontend-common/lib/icons"

import { floatingShowcaseStyle } from "../lib/reexports"

import * as toolSvg from "../../public/tool.svg"
import * as databaseSvg from "../../public/database.svg"
import * as automatedSvg from "../../public/automated.svg"
import * as style from "../style/style.scss"
import { SITE_NAME } from "./env"

const item1 = {
  head: (
    <div className={style.showcaseItemHeaderText}>
      <Icon
        size={24}
        className={floatingShowcaseStyle.icon}
        reverse
        src={databaseSvg}
      />
      <h2>Data First</h2>
    </div>
  ),
  text: (
    <p>
      {SITE_NAME} puts data first. Everything is geared towards providing you
      the means to capture data for your Machine Learning algorithms as simple
      and fast as possible.
    </p>
  ),
}

const item2 = {
  head: (
    <div className={style.showcaseItemHeaderText}>
      <Icon
        size={24}
        className={floatingShowcaseStyle.icon}
        reverse
        src={automatedSvg}
      />
      <h2>Automated</h2>
    </div>
  ),
  text: (
    <p>
      Once set up, {SITE_NAME} will keep track and remind users to perform their
      performance reviews automatically. Furthermore, {SITE_NAME} will
      contiuously send you reports about the number of missing reviews.
    </p>
  ),
}

const item3 = {
  head: (
    <div className={style.showcaseItemHeaderText}>
      <Icon
        size={24}
        className={floatingShowcaseStyle.icon}
        reverse
        src={toolSvg}
      />
      <h2>Zero config</h2>
    </div>
  ),
  text: (
    <p>
      {SITE_NAME} is a SaaS platform. We take care of all the hosting for you.
      Just configure your preferences and create your company-specific Reviews
      and you are good to go.
    </p>
  ),
}

const item4 = {
  head: (
    <div className={style.showcaseItemHeaderText}>
      <Icon
        size={24}
        className={floatingShowcaseStyle.icon}
        reverse
        src={toolSvg}
      />
      <h2>Improve Employee Participation</h2>
    </div>
  ),
  text: (
    <p>
      Honor employee feedback. With {SITE_NAME} you can let everyone rate
      everyone. Allow direct feedback from employees for employees instead of
      only through the manager intermediary. Furthermore, why should employees
      not review their managers. It's in your hand.
    </p>
  ),
}

const item7 = {
  head: (
    <div className={style.showcaseItemHeaderText}>
      <Icon
        size={24}
        className={floatingShowcaseStyle.icon}
        reverse
        src={toolSvg}
      />
      <h2>Reduce Errors</h2>
    </div>
  ),
  text: (
    <p>
      By automating boring and repetitive tasks, {SITE_NAME} can help you and
      your users to make less mistakes.
    </p>
  ),
}

const item6 = {
  head: (
    <div className={style.showcaseItemHeaderText}>
      <Icon
        size={24}
        className={floatingShowcaseStyle.icon}
        reverse
        src={toolSvg}
      />
      <h2>Identify High and Low Performers</h2>
    </div>
  ),
  text: (
    <p>
      {SITE_NAME} allows you to categorize your employees and managers based on
      their perceived performance in the reviews. Who has consistently shown
      above average performance levels? This and more you can analyze and
      differentiate with the data collected by {SITE_NAME}.
    </p>
  ),
}

const item5 = {
  head: (
    <div className={style.showcaseItemHeaderText}>
      <Icon
        size={24}
        className={floatingShowcaseStyle.icon}
        reverse
        src={toolSvg}
      />
      <h2>Statistical Validity</h2>
    </div>
  ),
  text: (
    <p>
      The {SITE_NAME} review form builder gives you the means to build powerful
      reviews in a statistically valid way. For example, complement your open
      questions with likert-scale questions to gain a structured perspective on
      your workforce's performance.
    </p>
  ),
}

const item8 = {
  head: (
    <div className={style.showcaseItemHeaderText}>
      <Icon
        size={24}
        className={floatingShowcaseStyle.icon}
        reverse
        src={toolSvg}
      />
      <h2>Simple to use</h2>
    </div>
  ),
  text: (
    <p>
      With {SITE_NAME} your Users will just click a link in their mail and then
      fill a form. No registration or usage of an additional platform is
      necessary.
    </p>
  ),
}

export default [item4, item1, item2, item3, item5, item6, item7, item8]
