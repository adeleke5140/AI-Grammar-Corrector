const Result = ({ values }) => {
  return (
    <div className="Responses">
      <h2 className="Responses__title">Responses</h2>
      <ul>
        <li>{values.textInput}</li>
      </ul>
    </div>
  )
}

export default Result
