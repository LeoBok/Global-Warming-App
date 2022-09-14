import { useEffect, useState } from "react";
import LoadSpinner from "../LoadSpinnerComp/LoadSpinner";
import Chart from '../ChartComponent/Chart'
import CurrentValue from "../CurrentValueComp/CurrentValue";

const TempComp = ({ tempData, isLoading }) => {
    const [lastElement, setLastElement] = useState('');
    const [ tempState, setTempState ] = useState([]);

    useEffect(() => {
        if (tempData) {
        const mappedData = tempData?.map(item => {
            return {
                year: item.time.slice(0, 4),
                station: item.station,
            };
        });
        setTempState(mappedData);
    }
    }, [tempData]);

    const selectRangeDate = (min, max) => {
        const sliced = tempData?.map(item => {
            return {
                year: item.time.slice(0, 4),
                station: item.station,
            };
        }).slice(min, max);
        setTempState(sliced)
    }

    useEffect(() => {
        const lastItem =  tempData && tempData[tempData.length - 1];
        setLastElement(lastItem?.station);
    }, [tempData]);
    
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
                        yMaxParam={2}
                        yMinParam={-2}
                        chartData={tempState}
                        lineName='temperature variation'
                    />
                </div>
            )
        }
        <div className="mt-4 btn-comp-cont d-md-flex justify-content-center">
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(0, 427)}> from { tempData?.[0].time.slice(0, 4) } to { tempData?.[427].time.slice(0, 4) } </button>
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(425, 855)}> from { tempData?.[425].time.slice(0, 4) } to { tempData?.[855].time.slice(0, 4) } </button>
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(856, tempData.length)}> from { tempData?.[856].time.slice(0, 4) } to { tempData?.[tempData.length - 1].time.slice(0, 4) } </button>
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(0, tempData.length)}> from { tempData?.[0].time.slice(0, 4) } to {tempData?.[tempData.length - 1].time.slice(0, 4) } </button>
        </div>
    </>
  )
}

export default TempComp