import { useEffect, useState } from "react";
import Chart from "../ChartComponent/Chart";
import CurrentValue from "../CurrentValueComp/CurrentValue";
import LoadSpinner from "../LoadSpinnerComp/LoadSpinner";

const MethanComp = ({ methanData, isLoading }) => {
    const [lastElement, setLastElement] = useState('');
    const [ methanState, setMethanState ] = useState([]);

    useEffect(() => {
        if (methanData) {
        const mappedData = methanData?.map(item => {
            return {
                year: item.date.slice(0, 4),
                station: item.average,
            };
        }).slice(1);
        console.log(mappedData)
        setMethanState(mappedData);
    }
    }, [methanData]);

    const selectRangeDate = (min, max) => {
        const sliced = methanData?.map(item => {
            return {
                year: item.date.slice(0, 4),
                station: item.average,
            };
        }).slice(min, max);
        setMethanState(sliced)
    }

    useEffect(() => {
        const lastItem =  methanData && methanData[methanData.length - 1];
        setLastElement(lastItem?.average);
    }, [methanData]);

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
                        yMaxParam={2000}
                        yMinParam={1500}
                        chartData={methanState}
                        lineName='Methan levels'
                    />
                </div>
            )
        }
        <div className="mt-4 btn-comp-cont d-md-flex justify-content-center">
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(1, 117)}> from { methanData?.[1].date.slice(0, 4) } to Today </button>
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(118, 234)}> from { methanData?.[118].date.slice(0, 4) } to Today </button>
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(235, methanData.length)}> from { methanData?.[235].date.slice(0, 4) } to Today </button>
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(1, methanData.length)}> from { methanData?.[1].date.slice(0, 4) } to Today </button>
        </div>
    </>
  )
}

export default MethanComp