import * as React from "react"
import { rowStyle } from "../lib/reexports"

export default class Row extends React.Component {
  render(): JSX.Element {
    const { children } = this.props

    return <div className={rowStyle.rowContent}>{children}</div>
  }
}
