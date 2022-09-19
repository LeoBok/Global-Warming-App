import { useEffect, useState } from "react";
import LoadSpinner from "../LoadSpinnerComp/LoadSpinner";
import Chart from '../ChartComponent/Chart'
import CurrentValue from "../CurrentValueComp/CurrentValue";
import BtnGraphComp from "../Graph Button Component/BtnGraphComp";

const TempComp = ({ tempData, isLoading }) => {
    const [lastElement, setLastElement] = useState('');
    const [ tempState, setTempState ] = useState([]);
    const [btnStateId, setBtnStateId] = useState(4);

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

    const selectRangeDate = (min, max, id) => {
        const sliced = tempData?.map(item => {
            return {
                year: item.time.slice(0, 4),
                station: item.station,
            };
        }).slice(min, max);
        setTempState(sliced);
        setBtnStateId(id)
    };

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
            <BtnGraphComp
                idNum={1}
                btnStateId={btnStateId}
                initialDate={tempData?.[0].time.slice(0, 4)}
                finalDate={tempData?.[424].time.slice(0, 4)}
                loadGraphFunc={() => selectRangeDate(0, 424, 1)}
            />
            <BtnGraphComp
                idNum={2}
                btnStateId={btnStateId}
                initialDate={tempData?.[425].time.slice(0, 4)}
                finalDate={tempData?.[855].time.slice(0, 4)}
                loadGraphFunc={() => selectRangeDate(425, 855, 2)}
            />
            <BtnGraphComp
                idNum={3}
                btnStateId={btnStateId}
                initialDate={tempData?.[856].time.slice(0, 4)}
                finalDate={tempData?.[tempData.length - 1].time.slice(0, 4)}
                loadGraphFunc={() => selectRangeDate(856, tempData.length, 3)}
            />
            <BtnGraphComp
                idNum={4}
                btnStateId={btnStateId}
                initialDate={tempData?.[0].time.slice(0, 4)}
                finalDate={tempData?.[tempData.length - 1].time.slice(0, 4)}
                loadGraphFunc={() => selectRangeDate(0, tempData.length, 4)}
            />
        </div>
    </>
  )
}

export default TempComp