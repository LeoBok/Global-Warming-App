import './Button.css'

const Button = ({ children, buttonStyle, onClickEvent }) => {
  return (
    <button onClick={onClickEvent} className={buttonStyle}>{ children }</button>
  )
}

export default Button