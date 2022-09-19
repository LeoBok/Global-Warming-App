import { useEffect, useState } from "react";
import Chart from "../ChartComponent/Chart";
import CurrentValue from "../CurrentValueComp/CurrentValue";
import BtnGraphComp from "../Graph Button Component/BtnGraphComp";
import LoadSpinner from "../LoadSpinnerComp/LoadSpinner";

const CarbonDioxComp = ({ co2, isLoading }) => {
    
    const [co2State, setCo2State] = useState([]);
    const [lastElement, setLastElement] = useState('');
    const [btnStateId, setBtnStateId] = useState(4);

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

    const selectRangeDate = (min, max, id) => {
        const slicedData = co2?.map(item => {
            return {
                year: item.year,
                station: item.trend,
            };
        }).slice(min, max);
        setCo2State(slicedData);
        setBtnStateId(id)
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
            <BtnGraphComp
                idNum={1}
                btnStateId={btnStateId}
                initialDate={co2?.[0].year}
                finalDate={co2?.[972].year}
                loadGraphFunc={() => selectRangeDate(0, 972, 1)}
            />
            <BtnGraphComp
                idNum={2}
                btnStateId={btnStateId}
                initialDate={co2?.[973].year}
                finalDate={co2?.[1944].year }
                loadGraphFunc={() => selectRangeDate(973, 1944, 2)}
            />
            <BtnGraphComp
                idNum={3}
                btnStateId={btnStateId}
                initialDate={co2?.[1995].year}
                finalDate={co2?.[co2.length - 1].year}
                loadGraphFunc={() => selectRangeDate(1995, co2.length, 3)}
            />
            <BtnGraphComp
                idNum={4}
                btnStateId={btnStateId}
                initialDate={co2?.[1].year}
                finalDate={co2?.[co2.length - 1].year}
                loadGraphFunc={() => selectRangeDate(0, co2.length, 4)}
            />
        </div>
    </>
    )
}

export default CarbonDioxComp