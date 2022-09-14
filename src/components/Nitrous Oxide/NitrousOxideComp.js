import { useEffect, useState } from "react";
import Chart from "../ChartComponent/Chart";
import CurrentValue from "../CurrentValueComp/CurrentValue";
import LoadSpinner from "../LoadSpinnerComp/LoadSpinner";

const NitrousOxideComp = ({ nitrousOxideData, isLoading }) => {
    
    const [nitrousOxideState, setNitrousOxide] = useState([]);
    const [lastElement, setLastElement] = useState('');

    useEffect(() => {
        if (nitrousOxideData) {
        const mappedData = nitrousOxideData?.map(item => {
            return {
                year: item.date.slice(0, 4),
                station: item.average,
            };
        }).slice(1);
        setNitrousOxide(mappedData);
    }
    }, [nitrousOxideData]);

    const selectRangeDate = (min, max) => {
        const sliced = nitrousOxideData?.map(item => {
            return {
                year: item.date.slice(0, 4),
                station: item.average,
            };
        }).slice(min, max);
        setNitrousOxide(sliced);
    }

    useEffect(() => {
        const lastItem =  nitrousOxideData && nitrousOxideData[nitrousOxideData.length - 1];
        setLastElement(lastItem?.average);
    }, [nitrousOxideData]);

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
                        yMaxParam={350}
                        yMinParam={300}
                        chartData={nitrousOxideState}
                        lineName='Nitrous Oxide'
                    />
                </div>
            )
        }
        <div className="mt-4 btn-comp-cont d-md-flex justify-content-center">
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(1, 64)}> from { nitrousOxideData?.[1].date.slice(0, 4) } to { nitrousOxideData?.[64].date.slice(0, 4) } </button>
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(65, 129)}> from { nitrousOxideData?.[65].date.slice(0, 4) } to { nitrousOxideData?.[129].date.slice(0, 4) } </button>
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(130, nitrousOxideData.length)}> from { nitrousOxideData?.[130].date.slice(0, 4) } to { nitrousOxideData?.[nitrousOxideData.length - 1].date.slice(0, 4) } </button>
            <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(1, nitrousOxideData.length)}> from { nitrousOxideData?.[1].date.slice(0, 4) } to {nitrousOxideData?.[nitrousOxideData.length - 1].date.slice(0, 4) } </button>
        </div>
    </>
  )
}

export default NitrousOxideComp