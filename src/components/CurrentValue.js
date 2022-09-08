const CurrentValue = ({ currentValue }) => {
  return (
    <p className="text-center">
        Today's value: <span className="element-data rounded-1 p-1">{currentValue}</span>
    </p>
  )
}

export default CurrentValue