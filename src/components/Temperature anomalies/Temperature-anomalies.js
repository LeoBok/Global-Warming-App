import Axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import '../Component.css'
import Chart from '../Chart'

const TemperatureAnomalies = () => {
    const fetchData = () => {
        return Axios.get('https://global-warming.org/api/temperature-api').then(res => res.data)
    }
    const { data } = useQuery(['temperatureVar'], fetchData)
    
    const indexItems = [0, 800, 973, 980, 990, 1000, 1025, 1050, 1110, 1200, 1400, 1444, 1600, 1654, 1700];
    const [lastElement, setLastElement] = useState({});
    const [ temperatureAnomalies, setTemperatureAnomalies ] = useState([]);

    useEffect(() => {
        if (data) {
            const filteredData = data.result.filter((_item, index) => indexItems.includes(index));
            const mappedData = filteredData.map(item => {
                return {
                    year: item.time.slice(0, 4),
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
        {
            temperatureAnomalies && (
                <div className='container'>
                    <div className="graph-container">
                        { lastElement && <p className="value-text">Today's value: <span className="element-data">{lastElement.data}</span></p> }

                        <Chart
                            chartData={temperatureAnomalies}
                            lineName='temperature variation'
                        />

                    </div>

                    <p className="description">
                        Since the industrial revolution, the average increase of global temperature is <span className="highlight-text">about
                        1,0° C (1,8° F)</span>.<br/>
                        The northern hemisphere of the Earth is warming faster. The Arctic warmed <span className="highlight-text">between 2° C (3.6° F) and 4° C (7.2° F)</span>.
                    </p>
                </div>
            )
        }
        </>
    )
}

export default TemperatureAnomalies