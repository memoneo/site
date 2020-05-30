import * as React from "react"

import * as style from "../style/_row.scss"

export default class Row extends React.Component {
  render(): JSX.Element {
    const { children } = this.props

    return (
      <div className={style.rowContent}>
        {children}
      </div>
    )
  }
}
