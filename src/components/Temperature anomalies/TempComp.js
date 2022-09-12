import { useEffect, useState } from "react";
import LoadSpinner from '../LoadSpinner'
import Chart from '../Chart'
import CurrentValue from "../CurrentValue";

const TempComp = ({ tempData, isLoading }) => {
    const [lastElement, setLastElement] = useState('');
    const [ temperatureAnomalies, setTemperatureAnomalies ] = useState([]);

    useEffect(() => {
        if (tempData) {
        const mappedData = tempData?.map(item => {
            return {
                year: item.time.slice(0, 4),
                station: item.station,
            };
        });
        setTemperatureAnomalies(mappedData);
    }
    }, [tempData]);

    const selectRangeDate = (min, max) => {
        const sliced = tempData?.map(item => {
            return {
                year: item.time.slice(0, 4),
                station: item.station,
            };
        }).slice(min, max);
        setTemperatureAnomalies(sliced)
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
                        chartData={temperatureAnomalies}
                        lineName='temperature variation'
                    />
                </div>
            )
        }
        <div className='d-flex justify-content-center py-lg-3'>
            <button className="temp-button rounded-1 mx-lg-2 p-lg-2" onClick={() => selectRangeDate(0, 427)}> from { tempData?.[0].time.slice(0, 4) } to { tempData?.[427].time.slice(0, 4) } </button>
            <button className="temp-button rounded-1 mx-lg-2 p-lg-2" onClick={() => selectRangeDate(425, 855)}> from { tempData?.[425].time.slice(0, 4) } to { tempData?.[855].time.slice(0, 4) } </button>
            <button className="temp-button rounded-1 mx-lg-2 p-lg-2" onClick={() => selectRangeDate(856, tempData.length - 1)}> { tempData?.[856].time.slice(0, 4) } to { tempData?.[tempData.length - 1].time.slice(0, 4) } </button>
            <button className="temp-button rounded-1 mx-lg-2 p-lg-2" onClick={() => selectRangeDate(0, tempData.length - 1)}> from { tempData?.[0].time.slice(0, 4) } to {tempData?.[tempData.length - 1].time.slice(0, 4) } </button>
        </div>
    </>
  )
}

export default TempComp