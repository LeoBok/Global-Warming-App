import '../Graph Button Component/BtnGraph.css'

const BtnGraphComp = ({ initialDate, finalDate, loadGraphFunc, btnStateId, idNum }) => {
  
  return (
    <button onClick={loadGraphFunc} className={ (btnStateId === idNum ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2`}>
        from {initialDate} to {finalDate}
    </button>
  )
}

export default BtnGraphComp