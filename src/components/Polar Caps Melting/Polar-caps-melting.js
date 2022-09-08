import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import '../Component.css'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import Description from "../Description";
import LoadSpinner from '../LoadSpinner';
import fetchData from "../fetchData";

const PolarCapsMelting = () => {
    
    const { data, isLoading } = useQuery( ['polarCaps'], () => fetchData('https://global-warming.org/api/arctic-api'));
    const [arcticData, setArcticData] = useState([]);

    const indexItems = [0, 5, 10, 15, 20, 25, 30, 35, 40, 42];
    const [lastElement, setLastElement] = useState({});

    useEffect(() => {

        if (data) {            
            const filteredData = data.arcticData.filter((_item, index) => indexItems.includes(index));
            const mappedData = filteredData.map(item => {
                return {
                    year: item.year,
                    extent: item.extent,
                    area: item.area
                };
            });

            setArcticData(mappedData);
        }
    }, [data]);

    useEffect(() => {
        const lastItem = arcticData[arcticData.length - 1];
        setLastElement(lastItem);
    })
    return(
        <>
            {
                isLoading && <LoadSpinner />
            }
            { 
                !isLoading && (
                    <div className="component pt-5 pb-3 mx-auto px-4">
                        <div className="graph-container rounded-4 mx-auto py-3">

                        { lastElement && <p className="text-center pt-4">Last value: <span className="element-data p-1">Extent {lastElement.extent}, Area {lastElement.area}</span></p> }

                        <ResponsiveContainer width='100%' aspect={2}>
                            <LineChart
                                data={arcticData}
                                margin={{ right: 30, left: 30 }}
                            >
                                <XAxis dataKey='year' />
                                <YAxis />
                                <Tooltip />
                                <Legend verticalAlign="top" height={36}/>
                                <Line dot={{ stroke: '#F37D3A', strokeWidth: 1 }} activeDot={{ stroke: '', strokeWidth: 1, r: 3 }} type='linear' dataKey="extent" stroke="#01A2B0" />
                                <Line dot={{ stroke: '#F37D3A', strokeWidth: 1 }} activeDot={{ stroke: '', strokeWidth: 1, r: 3 }} type='linear' dataKey="area" stroke="#01A2B0" />  
                            </LineChart>
                        </ResponsiveContainer>
                        </div>

                        <Description
                            description={
                                <>
                                    The arctic is warming around twice as fast as global average.
                                    Some of the reasons for this are: The arctic amplification, the albedo effect, and black carbon.
                                    From 1979 to 1996, <span className="highlight-text rounded-1 p-1">we lost 2.2 – 3% of the arctic ice cover</span>.
                                    From 2010 to present <span className="highlight-text rounded-1 p-1">we are losing 12.85% per decade</span>!
                                </>
                            }
                        />
                    </div>
                )
            }
        </>
    )
}

export default PolarCapsMelting