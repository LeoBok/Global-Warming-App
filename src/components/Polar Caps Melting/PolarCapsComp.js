import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import LoadSpinner from "../LoadSpinner";

const PolarCapsComp = ({ arcticData, isLoading }) => {
    const [arcticDataState, setArcticDataState] = useState([]);
    const [lastElement, setLastElement] = useState('');

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

    const selectRangeDate = (min, max) => {
        const sliced = arcticData?.map(item => {
            return {
                year: item.year,
                extent: item.extent,
                area: item.area,
            };
        }).slice(min, max);
        setArcticDataState(sliced);
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
                            lastElement && <p className="text-center pt-4">Today's value: <span className="element-data p-1">Extent {lastElement.extent}, Area {lastElement.area}</span></p>
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
                <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(0, 10)}> from 1979 to 1989 </button>
                <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(11, 20)}> from 1990 to 1999 </button>
                <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(21, arcticData.length)}> from 2000 to Today </button>
                <button className="temp-button rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2" onClick={() => selectRangeDate(0, arcticData.length)}> from 1979 to Today </button>
            </div>
        </>
    )
}

export default PolarCapsComp