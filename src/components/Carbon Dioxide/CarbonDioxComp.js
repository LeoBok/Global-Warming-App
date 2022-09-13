import { useEffect, useState } from "react";
import Chart from "../Chart";
import CurrentValue from "../CurrentValue";
import LoadSpinner from "../LoadSpinner";


const CarbonDioxComp = ({ co2, isLoading }) => {
    
    const [co2State, setCo2State] = useState([]);
    const [lastElement, setLastElement] = useState('');

    useEffect(() => {
        if (co2) {
        const mappedData = co2?.map(item => {
            return {
                year: item.year,
                station: item.trend,
            };
        });
        setCo2State(mappedData);
    }
    }, [co2]);

    const selectRangeDate = (min, max) => {
        const sliced = co2?.map(item => {
            return {
                year: item.year,
                station: item.trend,
            };
        }).slice(min, max);
        setCo2State(sliced);
    }

    useEffect(() => {
        const lastItem =  co2 && co2[co2.length - 1];
        setLastElement(lastItem?.trend);
    }, [co2]);

  return (
    <>
        {
            isLoading && <LoadSpinner />
        }
        {
            !isLoading && (
                <div className='graph-container mx-auto rounded-4 py-3'>
                    <CurrentValue currentValue={lastElement} />

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
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(0, 972)}> from { co2?.[0].year } to { co2?.[972].year } </button>
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(973, 1944)}> from { co2?.[118].year } to { co2?.[234].year } </button>
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(1995, co2.length)}> from { co2?.[235].year } to { co2?.[co2.length - 1].year } </button>
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(0, co2.length)}> from { co2?.[1].year } to {co2?.[co2.length - 1].year } </button>
        </div>
    </>
    )
}

export default CarbonDioxComp