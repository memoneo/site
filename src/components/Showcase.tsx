import * as React from "react"

import * as style from "../style/_showcase.scss"
import { cx } from "../lib/reexports"

interface Props {
  innerClassName?: string
  className?: string
  items: ShowcaseItem[]
}

export interface ShowcaseItem {
  head?: JSX.Element
  text: JSX.Element
}

export default class Showcase extends React.Component<Props, any> {
  render(): JSX.Element {
    const { items, innerClassName, className } = this.props

    return (
      <div className={cx(style.showcase, className)}>
        {items.map((item, index) => (
          <div
            className={cx(style.showcaseItem, innerClassName)}
            key={"showcase-item-" + index}>
            {item.head && (
              <div className={style.showcaseItemHead}>{item.head}</div>
            )}
            <div className={style.showcaseItemText}>{item.text}</div>
          </div>
        ))}
      </div>
    )
  }
}
