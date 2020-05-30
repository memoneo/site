import React from "react"

import { Icon } from "polyvolve-frontend-common/lib/icons"

import { floatingShowcaseStyle } from "../lib/reexports"

import * as toolSvg from "../../public/tool.svg"
import * as databaseSvg from "../../public/database.svg"
import * as automatedSvg from "../../public/automated.svg"
import * as style from "../style/style.scss"
import { SITE_NAME } from "./env"

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
  text: <p>Performance reviews .</p>,
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
      <h2>Quantify Employee Performance</h2>
    </div>
  ),
  text: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>,
}

export default [item5, item4]
