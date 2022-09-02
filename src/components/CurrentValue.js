const CurrentValue = ({ currentValue }) => {
    console.log(currentValue);
  return (
    <p className="value-text">
        Today's value: <span className="element-data">{currentValue}</span>
    </p>
  )
}

export default CurrentValue