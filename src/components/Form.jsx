const Form = () => (
  <form className="form">
    <label htmlFor="textInput">
      <span className="form__label">Enter prompt</span>
      <br />
      <textarea name="textInput" id="textInput" cols="30" rows="10" />
    </label>
    <button type="submit" className="form__submit">
      Submit
    </button>
  </form>
)

export default Form
