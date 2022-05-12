const Form = () => (
  <form className="form">
    <label htmlFor="textInput">
      <span className="form__label">Type in a sentence...</span>
      <br />
      <textarea
        name="textInput"
        id="textInput"
        cols="30"
        rows="10"
        autoComplete
        autoFocus
      />
    </label>
    <button type="submit" className="form__submit">
      Submit
    </button>
  </form>
)

export default Form
