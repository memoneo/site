import * as React from "react"

import { howItWorksStyle } from "../lib/reexports"
import staticWrapper from "../lib/static"
import { SITE_NAME } from "../constants/env"

import * as reminderSvg from "../../public/users.svg"
import * as configSvg from "../../public/config.svg"
import * as buildSchemaSvg from "../../public/box.svg"
import * as downloadSvg from "../../public/download.svg"
import { Icon } from "polyvolve-frontend-common/lib/icons"

const HowItWorks: React.FC = props => (
  <div className={howItWorksStyle.howItWorksContainer}>
    <div className={howItWorksStyle.howItWorksItem}>
      <div className={howItWorksStyle.howItWorksTitle}>
        <Icon size={{ width: 20, height: 20 }} reverse src={buildSchemaSvg} />
        <h4>Build Schemas</h4>
      </div>
      <p>
        With {SITE_NAME} you can build your own set of questions for your
        Reviews. Perhaps you want to build upon best practise? Use and expand on
        our best practise approach leveraging key insights from contemporary
        research.
      </p>
    </div>
    <div className={howItWorksStyle.howItWorksItem}>
      <div className={howItWorksStyle.howItWorksTitle}>
        <Icon size={{ width: 20, height: 20 }} reverse src={configSvg} />
        <h4>Configuration</h4>
      </div>
      <p>
        First, configure the Review. This includes specifying who is being
        subjected to the Review, who is obligated to perform the Review and the
        period the Review is supposed to cover.
      </p>
      <p>
        Do you want your Reviews to be recurring? {SITE_NAME} will then create
        copies of the Review for every iteration.
      </p>
    </div>
    <div className={howItWorksStyle.howItWorksItem}>
      <div className={howItWorksStyle.howItWorksTitle}>
        <Icon size={{ width: 20, height: 20 }} reverse src={reminderSvg} />
        <h4>Automatic Reminders</h4>
      </div>
      <p>
        Polyvolve will automatically remind the Users via mail to participate in
        the Review. By following a unique link, Users will answer the specified
        set of questions. No registration is needed.
      </p>
      <p>Are you afraid of losing overview about who is not?</p>
      <p>
        Don't worry. {SITE_NAME} has you covered and will send you status
        reports about who has yet to perform the Review.
      </p>
    </div>
    <div className={howItWorksStyle.howItWorksItem}>
      <div className={howItWorksStyle.howItWorksTitle}>
        <Icon size={{ width: 20, height: 20 }} reverse src={downloadSvg} />
        <h4>Download Data</h4>
      </div>
      <p>
        Finally, you can download the collected data in an Excel-ready format
        and import it into your favorite data visualization tools.
      </p>
    </div>
  </div>
)

export default HowItWorks
