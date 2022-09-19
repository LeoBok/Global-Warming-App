import { useEffect, useState } from "react";
import Chart from "../ChartComponent/Chart";
import CurrentValue from "../CurrentValueComp/CurrentValue";
import BtnGraphComp from "../Graph Button Component/BtnGraphComp";
import LoadSpinner from "../LoadSpinnerComp/LoadSpinner";

const MethanComp = ({ methanData, isLoading }) => {
    const [lastElement, setLastElement] = useState('');
    const [ methanState, setMethanState ] = useState([]);
    const [btnStateId, setBtnStateId] = useState(4);

    useEffect(() => {
        if (methanData) {
        const mappedData = methanData?.map(item => {
            return {
                year: item.date.slice(0, 4),
                station: item.average,
            };
        }).slice(1);
        setMethanState(mappedData);
    }
    }, [methanData]);

    const selectRangeDate = (min, max, id) => {
        const sliced = methanData?.map(item => {
            return {
                year: item.date.slice(0, 4),
                station: item.average,
            };
        }).slice(min, max);
        setMethanState(sliced)
        setBtnStateId(id)
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
            <BtnGraphComp
                idNum={1}
                btnStateId={btnStateId}
                initialDate={methanData?.[1].date.slice(0, 4)}
                finalDate={methanData?.[117].date.slice(0, 4)}
                loadGraphFunc={() => selectRangeDate(1, 117, 1)}
            />
            <BtnGraphComp
                idNum={2}
                btnStateId={btnStateId}
                initialDate={methanData?.[118].date.slice(0, 4)}
                finalDate={methanData?.[234].date.slice(0, 4)}
                loadGraphFunc={() => selectRangeDate(118, 234, 2)}
            />
            <BtnGraphComp
                idNum={3}
                btnStateId={btnStateId}
                initialDate={methanData?.[235].date.slice(0, 4)}
                finalDate={methanData?.[methanData.length - 1].date.slice(0, 4)}
                loadGraphFunc={() => selectRangeDate(235, methanData.length, 3)}
            />
            <BtnGraphComp
                idNum={4}
                btnStateId={btnStateId}
                initialDate={methanData?.[1].date.slice(0, 4)}
                finalDate={methanData?.[methanData.length - 1].date.slice(0, 4)}
                loadGraphFunc={() => selectRangeDate(1, methanData.length, 4)}
            />
        </div>
    </>
  )
}

export default MethanComp