import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import '../Component.css'

const Methan = () => {

    const { data, loading, error } = useFetch('https://global-warming.org/api/methane-api');
    const indexItem = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];
    const [lastElement, setLastElement] = useState({});
    const [ methanLevels, setMethanLevels ] = useState([]);

    useEffect(() => {
        if (data) {
            const filteredData = data.methane.filter((_item, index) => indexItem.includes(index));
            
            const mappedData = filteredData.map(item => {
                return {
                    year: item.date.slice(0, 4),
                    data: item.average,
                }
            });

            setMethanLevels(mappedData);
        }
    }, [data]);

    useEffect(() => {
        const lastItem = methanLevels[methanLevels.length - 1];
        setLastElement(lastItem);
    })

    return(
        <>
            { loading && <p>LOADING...</p> }
            
            { error && <p>{error.message}</p> }

            { 
                methanLevels && (
                    <div className="container">
                        <div className="graph-container">
                            
                            { lastElement && <p className="value-text">Today's value: <span className="element-data">{lastElement.data}</span></p> }

                            <ResponsiveContainer width='100%' aspect={2}>
                                <LineChart
                                    data={methanLevels}
                                    margin={{ right: 30, left: 30 }}
                                >
                                    <XAxis dataKey='year' />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend verticalAlign="top" height={36}/>
                                    <Line name="Methan" dot={{ stroke: '#F37D3A', strokeWidth: 1 }} activeDot={{ stroke: '', strokeWidth: 1, r: 3 }} type='linear' dataKey="data" stroke="#01A2B0" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        
                        <p className="description">
                            50-65% of total global methane emissions come from human activities.
                            Including: livestock, agriculture, oil and gas systems, household and business waste, landfills and so on.
                            From the beginning of the industrial revolution, human activities have<span className="highlight-text">increased this amount by about 150%</span>.
                        </p>
                    </div>
                )
            }
        </>
    )
}

export default Methan