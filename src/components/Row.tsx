import * as React from "react"

import * as style from "../style/_row.scss"
import { cx } from "../lib/reexports"

interface Props {
  outerClassName?: string
  className?: string
  diff?: boolean
  style?: any
}

export default class Row extends React.Component<Props, any> {
  render(): JSX.Element {
    const { children, className, diff, outerClassName } = this.props
    const classes = cx(style.row, { [style.rowDiff]: diff }, outerClassName)

    return (
      <div className={classes}>
        <div className={className} style={this.props.style}>
          {children}
        </div>
      </div>
    )
  }
}
