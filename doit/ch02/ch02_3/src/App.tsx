import ClassComponent from "./ClassComponent"
import ArrowComponent from "./ArrowComponent"

export default function App() {
  return (
    <ul>
      <ClassComponent href="https://www.google.co.kr/" text="go to google" />
      <ArrowComponent href="https://www.google.co.kr/" text="go to google" />
    </ul>
  )
}
