import staticWrapper from "../lib/static"

import * as style from "../style/style.scss"

const item1 = {
  head: <div className={style.showcaseItemHeaderText}>
    <img src={staticWrapper("/discord.png")} style={{ width: "32px" }} />
    <h4>Discord</h4>
  </div>,
  text: <p>
    Join our <a href="https://discord.gg/mHfNdNp">Discord</a> server to receive the latest discussion, help etc.
    </p>
}

const item2 = {
  head: <div className={style.showcaseItemHeaderText}>
    <img src={staticWrapper("/book.png")} />
    <h4>Player Guide</h4>
  </div>,
  text: <p>
    Read our <a href="https://...">Player Guide</a> to get all the info you need.
    </p>
}

const item3 = {
  head: <div className={style.showcaseItemHeaderText}>
    <img src={staticWrapper("/gitlab.svg")} />
    <h4>Git repo</h4>
  </div>,
  text: <p>
    Check out our <a href="https://gitlab.com/thegoldenage">git repo</a> to participate.
    </p>
}

export default [item1, item2, item3]
