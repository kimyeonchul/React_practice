import ReactDOM from "react-dom/client"
import * as D from "./data"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
))

const rootVitualDOM = <div>{children}</div>
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(rootVitualDOM)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
