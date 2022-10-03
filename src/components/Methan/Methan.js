import { useMemo, useState } from "react";
import Button from "../Button/Button";
import Chart from "../Chart/Chart";
import CurrentValue from "../Current Value/Current-value";
import LoadSpinner from "../Load Spinner/Load-spinner";

const MethanComp = ({ methane, isLoading }) => {
    const [ methanState, setMethanState ] = useState([]);
    const [btnStateId, setBtnStateId] = useState(4);

    useMemo(() => setMethanState(methane), [methane])

    const selectRangeDate = (min, max, id) => {
        setBtnStateId(id);
        setMethanState(methane.slice(min, max));
    }

    const lastItem =  methane?.[methane.length - 1].station;

  return (
    <>
        {
            isLoading && <LoadSpinner />
        }
        {
            !isLoading && (
                <div className='graph-container mx-auto rounded-4 py-3'>
                    <CurrentValue currentValue={lastItem} />

                    <Chart
                        yMaxParam={2000}
                        yMinParam={1500}
                        chartData={methanState}
                        lineName='Methan levels'
                    />
                </div>
            )
        }
        <div className="mt-4 btn-comp-cont d-md-flex justify-content-center">
            <Button
                buttonStyle={ (btnStateId === 1 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                children={`from ${methane?.[1].year} from ${methane?.[117].year}`}
                onClickEvent={() => selectRangeDate(1, 117, 1)}
            />
            <Button
                buttonStyle={ (btnStateId === 2 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                children={`from ${methane?.[118].year} from ${methane?.[234].year}`}
                onClickEvent={() => selectRangeDate(118, 234, 2)}
            />
            <Button
                buttonStyle={ (btnStateId === 3 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                children={`from ${methane?.[235].year} to ${methane?.[methane.length - 1].year}`}
                onClickEvent={() => selectRangeDate(235, methane.length, 3)}
            />
            <Button
                buttonStyle={ (btnStateId === 4 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                children={`from ${methane?.[1].year} from ${methane?.[methane.length - 1].year}`}
                onClickEvent={() => selectRangeDate(1, methane.length, 4)}
            />
        </div>
    </>
  )
}

export default MethanComp