import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import useFetch from "../useFetch"
import '../Component.css'

const TemperatureAnomalies = () => {

    const { data, loading, error } = useFetch('https://global-warming.org/api/temperature-api');
    const indexItems = [0, 800, 973, 980, 990, 1000, 1025, 1050, 1110, 1200, 1400, 1444, 1600, 1654, 1700];
    const [lastElement, setLastElement] = useState({});
    const [ temperatureAnomalies, setTemperatureAnomalies ] = useState([]);

    useEffect(() => {
        if (data) {
            const filteredData = data.result.filter((_item, index) => indexItems.includes(index));
            const mappedData = filteredData.map(item => {
                return {
                    time: item.time.slice(0, 4),
                    data: item.station
                }
            });
            setTemperatureAnomalies(mappedData);
        }
    }, [data]);

    useEffect(() => {
        const lastItem = temperatureAnomalies[temperatureAnomalies.length - 1];
        setLastElement(lastItem);
    });
    return(
        <>
            { loading && <p></p>}
                
            { error && <p>{error.message}</p> }

            { temperatureAnomalies && (
                <div className='container'>
                    <div className="graph-container">
                        { lastElement && <p className="value-text">Today's value: <span className="element-data">{lastElement.data}</span></p> }

                        <ResponsiveContainer width='100%' aspect={2}>
                            <LineChart
                                data={temperatureAnomalies}
                                margin={{ right: 30, left: 30 }}
                            >
                                <XAxis dataKey='time' />
                                <YAxis />
                                <Tooltip />
                                <Legend verticalAlign="top" height={36}/>
                                <Line name="temperature variation" dot={{ stroke: '#F37D3A', strokeWidth: 1 }} activeDot={{ stroke: '', strokeWidth: 1, r: 3 }} type='linear' dataKey="data" stroke="#01A2B0" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <p className="description">
                        Since the industrial revolution, the average increase of global temperature is about
                        1,0° C (1,0° F).<br/>
                        The northern hemisphere of the Earth is warming faster. The Arctic warmed between 2° C (3.6° F) and 4° C (7.2° F).
                    </p>
                </div>
            )}
        </>
    )
}

export default TemperatureAnomalies