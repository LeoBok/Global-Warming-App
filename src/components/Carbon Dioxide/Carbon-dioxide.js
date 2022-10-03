import { useMemo, useState } from "react";
import Button from "../Button/Button";
import Chart from "../Chart/Chart";
import CurrentValue from "../Current Value/Current-value";
import LoadSpinner from "../Load Spinner/Load-spinner";

const CarbonDioxComp = ({ carbonDioxide, isLoading }) => {
    
    const [co2State, setCo2State] = useState([]);
    const [btnStateId, setBtnStateId] = useState(4);

    useMemo(() => setCo2State(carbonDioxide), [carbonDioxide]);

    const selectRangeDate = (min, max, id) => {
        setBtnStateId(id)
        setCo2State(carbonDioxide.slice(min, max))
    }

    const lastItem = carbonDioxide?.[carbonDioxide.length - 1].station;

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
                            yMaxParam={450}
                            yMinParam={350}
                            chartData={co2State}
                            lineName='Carbon Dioxide levels'
                        />
                    </div>
                )
            }
            <div className="mt-4 btn-comp-cont d-md-flex justify-content-center">
                <Button
                    buttonStyle={ (btnStateId === 1 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                    children={`from ${carbonDioxide?.[0].year} to ${carbonDioxide?.[972].year}`}
                    onClickEvent={() => selectRangeDate(0, 972, 1)}
                />
                <Button
                    buttonStyle={ (btnStateId === 2 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                    children={`from ${carbonDioxide?.[973].year} from ${carbonDioxide?.[1944].year}`}
                    onClickEvent={() => selectRangeDate(973, 1944, 2)}
                />
                <Button
                    buttonStyle={ (btnStateId === 3 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                    children={`from ${carbonDioxide?.[1995].year} from ${carbonDioxide?.[carbonDioxide.length - 1].year}`}
                    onClickEvent={() => selectRangeDate(1995, carbonDioxide.length, 3)}
                />
                <Button
                    buttonStyle={ (btnStateId === 4 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                    children={`from ${carbonDioxide?.[1].year} from ${carbonDioxide?.[carbonDioxide.length - 1].year}`}
                    onClickEvent={() => selectRangeDate(0, carbonDioxide.length, 4)}
                />
            </div>
        </>
    )
}

export default CarbonDioxComp