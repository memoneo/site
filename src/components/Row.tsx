import * as React from "react"

import { cx, rowStyle } from "../lib/reexports"

interface Props {
  outerClassName?: string
  className?: string
  diff?: boolean
  style?: any
}

export default class Row extends React.Component<Props, any> {
  render(): JSX.Element {
    const { children, className, diff, outerClassName } = this.props
    const classes = cx(rowStyle.row, { [rowStyle.rowDiff]: diff }, outerClassName)

    return (
      <div className={classes}>
        <div className={className} style={this.props.style}>
          {children}
        </div>
      </div>
    )
  }
}
