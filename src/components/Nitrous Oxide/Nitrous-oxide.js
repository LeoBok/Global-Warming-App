import { useMemo, useState } from "react";
import Button from "../Button/Button";
import Chart from "../Chart/Chart";
import CurrentValue from "../Current Value/Current-value";
import LoadSpinner from "../Load Spinner/Load-spinner";

const NitrousOxideComp = ({ nitrous, isLoading }) => {
    
    const [btnStateId, setBtnStateId] = useState(4);
    const [nitrousOxideState, setNitrousOxideState] = useState([])

    useMemo(() => setNitrousOxideState(nitrous), [nitrous])

    const selectRangeDate = (min, max, id) => {
        setBtnStateId(id);
        setNitrousOxideState(nitrous?.slice(min, max));
    };
    
    const lastItem = nitrous?.[nitrous.length - 1].station;
    
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
                            yMaxParam={350}
                            yMinParam={300}
                            chartData={nitrousOxideState}
                            lineName='Nitrous Oxide'
                        />
                    </div>
                )
            }
            <div className="mt-4 btn-comp-cont d-md-flex justify-content-center">
                <Button
                    buttonStyle={ (btnStateId === 1 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                    children={`from ${nitrous?.[1].year.slice(0, 4)} to ${nitrous?.[64].year.slice(0, 4)}`}
                    onClickEvent={() => selectRangeDate(1, 64, 1)}
                />
                <Button
                    buttonStyle={ (btnStateId === 2 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                    children={`from ${nitrous?.[65].year.slice(0, 4)} to ${nitrous?.[129].year.slice(0, 4)}`}
                    onClickEvent={() => selectRangeDate(65, 129, 2)}
                />
                <Button
                    buttonStyle={ (btnStateId === 3 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                    children={`from ${nitrous?.[130].year.slice(0, 4)} to ${nitrous?.[nitrous?.length - 1].year.slice(0, 4)}`}
                    onClickEvent={() => selectRangeDate(130, nitrous?.length, 3)}
                />
                <Button
                    buttonStyle={ (btnStateId === 4 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                    children={`from ${nitrous?.[1].year.slice(0, 4)} to ${nitrous?.[nitrous?.length - 1].year.slice(0, 4)}`}
                    onClickEvent={() => selectRangeDate(1, nitrous?.length, 4)}
                />
            </div>
        </>
  )
}

export default NitrousOxideComp