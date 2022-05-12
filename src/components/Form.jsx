const Form = ({ values, onChange }) => (
  <form
    className="form"
    onSubmit={(event) => {
      event.preventDefault()
      console.log("form submitted")
    }}
  >
    <label htmlFor="textInput">
      <span className="form__label">Type in a sentence...</span>
      <br />
      <textarea
        name="textInput"
        type="text"
        id="textInput"
        cols="30"
        rows="10"
        value={values}
        onChange={onChange}
        required
        autoFocus
      />
    </label>
    <button type="submit" className="form__submit">
      Submit
    </button>
  </form>
)

export default Form
