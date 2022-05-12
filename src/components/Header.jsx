const Header = ({ title }) => (
  <header className="header">
    <h1 className="header__title">{title}</h1>
    <span className="header__engine">
      Engine: <span className="green">Curie</span>
    </span>
    <p className="header__summary">
      The app uses the power of <span className="bold">AI</span> to correct
      sentences to standard english.
      <br />
      Try it out: give it jumbled up english words with errors
    </p>
  </header>
)

export default Header
