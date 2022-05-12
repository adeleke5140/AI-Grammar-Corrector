import Header from "../components/Header"
import Form from "../components/Form"
import Result from "../components/Result"

import ".././App.css"

const App = () => {
  return (
    <div className="App">
      <Header title="AI Grammer corrector." />
      <main>
        <Form />
        <Result />
      </main>
    </div>
  )
}

export default App
