import type { ChangeEvent } from "react"

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log("onChangeValue", e.target.value)
  }

  return (
    <div>
      <p>OnChange</p>
      <input
        type="text"
        onChange={onChangeValue}
        placeholder="type some text"
        defaultValue="Hello"
      />
    </div>
  )
}
