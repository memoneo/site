import * as React from "react"

import * as style from "../style/_floating_showcase.scss"

interface Props {
  items: FloatingShowcaseItem[]
}

export interface FloatingShowcaseItem {
  head: JSX.Element
  text: JSX.Element
}

export default class FloatingShowcase extends React.Component<Props> {
  render(): JSX.Element {
    const { items } = this.props
    return (
      <div className={style.showcase}>
        {items.map((item, index) => (
          <div className={style.showcaseItem} key={"showcase-item-" + index}>
            <div className={style.showcaseItemTitle}>{item.head}</div>
            <div className={style.showcaseItemText}>{item.text}</div>
          </div>
        ))}
      </div>
    )
  }
}
