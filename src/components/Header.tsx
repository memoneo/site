import * as React from "react"
import staticWrapper from "../lib/static"
import { navStyle } from "../lib/reexports"

const Header: React.FunctionComponent = props => (
  <nav className={navStyle.navContainer}>
    <div className={navStyle.nav}>
      <div className={navStyle.logoContainer}>
        <img className={navStyle.logoImage} src={staticWrapper("/logo.svg")} />
        Memoneo
      </div>
    </div>
  </nav>
)

export default Header
