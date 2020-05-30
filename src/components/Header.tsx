import * as React from "react"
import staticWrapper from "../lib/static"

import * as style from "../style/_nav.scss"

const Header: React.FunctionComponent = props => (
  <nav className={style.navContainer}>
    <div className={style.nav}>
      <div className={style.logoContainer}>
        <img className={style.logoImage} src={staticWrapper("/logo.svg")} />
        Memoneo
      </div>
    </div>
  </nav>
)

export default Header
