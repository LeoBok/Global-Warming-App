import { useState } from "react";
import LoadSpinner from "../Load Spinner/Load-spinner";
import Chart from '../Chart/Chart'
import CurrentValue from "../Current Value/Current-value";
import { useMemo } from "react";
import Button from '../Button/Button'

const TempComp = ({ temperature, isLoading }) => {
    const [ tempState, setTempState ] = useState([]);
    const [btnStateId, setBtnStateId] = useState(4);

    useMemo(() => setTempState(temperature), [temperature])

    const selectRangeDate = (min, max, id) => {
        setBtnStateId(id);
        setTempState(temperature.slice(min, max))
    };

    const lastItem = temperature?.[temperature.length - 1].station;

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
                        yMaxParam={2}
                        yMinParam={-2}
                        chartData={tempState}
                        lineName='temperature variation'
                    />
                </div>
            )
        }
        <div className="mt-4 btn-comp-cont d-md-flex justify-content-center">
            <Button
                buttonStyle={ (btnStateId === 1 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                children={ `from ${temperature?.[0].year} to ${temperature?.[424].year}` }
                onClickEvent={ () => selectRangeDate(0, 424, 1) }
            />
            <Button
                buttonStyle={ (btnStateId === 2 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }

                children={ `from ${temperature?.[425].year} to ${temperature?.[855].year}` }

                onClickEvent={() => selectRangeDate(425, 855, 2)}
            />
            <Button
                buttonStyle={ (btnStateId === 3 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                children={ `from ${temperature?.[856].year} to ${temperature?.[temperature.length - 1].year}` }
                onClickEvent={() => selectRangeDate(856, temperature.length, 3)}
            />
            <Button
                buttonStyle={ (btnStateId === 4 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                children={ `from ${temperature?.[0].year} from ${temperature?.[temperature.length - 1].year}` }
                onClickEvent={() => selectRangeDate(0, temperature.length, 4)}
            />
        </div>
    </>
  )
}

export default TempComp