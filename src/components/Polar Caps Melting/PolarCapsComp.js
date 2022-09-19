import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import BtnGraphComp from "../Graph Button Component/BtnGraphComp";
import LoadSpinner from "../LoadSpinnerComp/LoadSpinner";

const PolarCapsComp = ({ arcticData, isLoading }) => {
    const [arcticDataState, setArcticDataState] = useState([]);
    const [lastElement, setLastElement] = useState('');
    const [btnStateId, setBtnStateId] = useState(4);
    console.log(arcticData?.[9].year);

    useEffect(() => {
        if (arcticData) {
            const mappedData = arcticData?.map(item => {
                return {
                    year: item.year,
                    extent: item.extent,
                    area: item.area,
                };
            });
            setArcticDataState(mappedData);
        }
    }, [arcticData]);

    const selectRangeDate = (min, max, id) => {
        const sliced = arcticData?.map(item => {
            return {
                year: item.year,
                extent: item.extent,
                area: item.area,
            };
        }).slice(min, max);
        setArcticDataState(sliced);
        setBtnStateId(id)
    }

    useEffect(() => {
        const lastItem =  arcticData && arcticData[arcticData.length - 1];
        setLastElement(lastItem);
    }, [arcticData]);

    return (
        <>
            {
                isLoading && <LoadSpinner />
            }
            
            {
                !isLoading && (
                    <div className='graph-container mx-auto rounded-4 py-3'>
                        {
                            lastElement && <p className="text-center pt-4">Today's value: <span className="element-data rounded-1 p-1">Extent {lastElement.extent}, Area {lastElement.area}</span></p>
                        }
                        <ResponsiveContainer width='100%' aspect={2}>
                            <LineChart
                                data={arcticDataState}
                                margin={{ right: 30, left: 30 }}
                            >
                                <XAxis dataKey='year' />
                                <YAxis />
                                <Tooltip />
                                <Legend verticalAlign="top" height={36}/>
                                <Line dot={false} type='linear' dataKey="extent" stroke="#01A2B0" />
                                <Line dot={false} type='linear' dataKey="area" stroke="#01A2B0" />  
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )
            }

            <div className="mt-4 btn-comp-cont d-md-flex justify-content-center">
                <BtnGraphComp
                    idNum={1}
                    btnStateId={btnStateId}
                    initialDate={arcticData?.[0].year}
                    finalDate={arcticData?.[10].year}
                    loadGraphFunc={() => selectRangeDate(0, 11, 1)}
                />
                <BtnGraphComp
                    idNum={2}
                    btnStateId={btnStateId}
                    initialDate={arcticData?.[11].year}
                    finalDate={arcticData?.[20].year}
                    loadGraphFunc={() => selectRangeDate(11, 21, 2)}
                />
                <BtnGraphComp
                    idNum={3}
                    btnStateId={btnStateId}
                    initialDate={arcticData?.[21].year}
                    finalDate={arcticData?.[arcticData.length - 1].year}
                    loadGraphFunc={() => selectRangeDate(21, arcticData.length, 3)}
                />
                <BtnGraphComp
                    idNum={4}
                    btnStateId={btnStateId}
                    initialDate={arcticData?.[0].year}
                    finalDate={arcticData?.[arcticData.length - 1].year}
                    loadGraphFunc={() => selectRangeDate(0, arcticData.length, 4)}
                />
            </div>
        </>
    )
}

export default PolarCapsComp