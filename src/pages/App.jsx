import { useState } from "react"

import Header from "../components/Header"
import Form from "../components/Form"
import Result from "../components/Result"

import ".././App.css"

const App = () => {
  const [values, setValues] = useState("")

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="App">
      <Header title="AI Grammer corrector." />
      <main>
        <Form onChange={onChange} value={values} />
        <Result values={values} />
      </main>
    </div>
  )
}

export default App
