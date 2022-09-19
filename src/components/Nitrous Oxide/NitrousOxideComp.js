import { useEffect, useState } from "react";
import Chart from "../ChartComponent/Chart";
import CurrentValue from "../CurrentValueComp/CurrentValue";
import BtnGraphComp from "../Graph Button Component/BtnGraphComp";
import LoadSpinner from "../LoadSpinnerComp/LoadSpinner";

const NitrousOxideComp = ({ nitrousOxideData, isLoading }) => {
    
    const [nitrousOxideState, setNitrousOxide] = useState([]);
    const [lastElement, setLastElement] = useState('');
    const [btnStateId, setBtnStateId] = useState(4);

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

    const selectRangeDate = (min, max, id) => {
        const sliced = nitrousOxideData?.map(item => {
            return {
                year: item.date.slice(0, 4),
                station: item.average,
            };
        }).slice(min, max);
        setNitrousOxide(sliced);
        setBtnStateId(id)
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
            <BtnGraphComp
                idNum={1}
                btnStateId={btnStateId}
                initialDate={nitrousOxideData?.[1].date.slice(0, 4)}
                finalDate={nitrousOxideData?.[64].date.slice(0, 4)}
                loadGraphFunc={() => selectRangeDate(1, 64, 1)}
            />
            <BtnGraphComp
                idNum={2}
                btnStateId={btnStateId}
                initialDate={nitrousOxideData?.[65].date.slice(0, 4)}
                finalDate={nitrousOxideData?.[129].date.slice(0, 4)}
                loadGraphFunc={() => selectRangeDate(65, 129, 2)}
            />
            <BtnGraphComp
                idNum={3}
                btnStateId={btnStateId}
                initialDate={nitrousOxideData?.[130].date.slice(0, 4)}
                finalDate={nitrousOxideData?.[nitrousOxideData.length - 1].date.slice(0, 4)}
                loadGraphFunc={() => selectRangeDate(130, nitrousOxideData.length, 3)}
            />
            <BtnGraphComp
                idNum={4}
                btnStateId={btnStateId}
                initialDate={nitrousOxideData?.[1].date.slice(0, 4)}
                finalDate={nitrousOxideData?.[nitrousOxideData.length - 1].date.slice(0, 4)}
                loadGraphFunc={() => selectRangeDate(1, nitrousOxideData.length, 4)}
            />
        </div>
    </>
  )
}

export default NitrousOxideComp