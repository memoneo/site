import * as React from "react"

import { Showcase } from "."
import { ShowcaseItem } from "./Showcase"
import { pricingStyle } from "../lib/reexports"
import { Icon } from "polyvolve-frontend-common/lib/icons"
import * as checkSvg from "../../public/check.svg"
import * as dollarSvg from "../../public/dollar.svg"
import { SITE_NAME } from "../constants/env"

const PricingItem: React.FC = props => <div></div>

const small: ShowcaseItem = {
  head: <h2>Small</h2>,
  text: (
    <div>
      <div className={pricingStyle.pricingRow}>
        <Icon
          size={{ width: 16, height: 16 }}
          className={pricingStyle.pricingCheckIcon}
          reverse
          src={checkSvg}
        />
        <p className={pricingStyle.infoItem}>Up to 5 Reviews</p>
      </div>
      <div className={pricingStyle.pricingRow}>
        <Icon
          size={{ width: 16, height: 16 }}
          className={pricingStyle.pricingCheckIcon}
          reverse
          src={checkSvg}
        />
        <p className={pricingStyle.infoItem}>Basic support</p>
      </div>
      <div className={pricingStyle.pricingRow}>
        <Icon
          size={{ width: 16, height: 16 }}
          className={pricingStyle.pricingDollarIcon}
          reverse
          src={dollarSvg}
        />
        <p className={pricingStyle.infoItem}>8$ per user/month</p>
      </div>
    </div>
  ),
}

const Pricing: React.FC = props => (
  <div>
    <p>{SITE_NAME} offers a simple and predictable pricing model. If you choose to you receive a discount and only pay for 10 months.</p>
    <Showcase
      items={[small]}
      className={pricingStyle.pricingContainer}
      innerClassName={pricingStyle.pricingItemContainer}
    />
  </div>
)

export default Pricing
