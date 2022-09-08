import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";
import '../Component.css'
import Chart from '../Chart'
import CurrentValue from "../CurrentValue";
import Description from '../Description'
import LoadSpinner from '../LoadSpinner'
import fetchData from '../fetchData'

const TemperatureAnomalies = () => {
    
    const { data, isLoading } = useQuery(['temperatureVar'], () => fetchData('https://global-warming.org/api/temperature-api'));
    const indexItems = [0, 800, 973, 980, 990, 1000, 1025, 1050, 1110, 1200, 1400, 1444, 1600, 1654, 1700];
    const [lastElement, setLastElement] = useState('');
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
        setLastElement(lastItem?.data);
    });

    return(
        <>
        {
            isLoading && <LoadSpinner />
        }
        {
            !isLoading && (
                <div className="pt-5 pb-3 mx-auto px-4">
                    <div className='graph-container rounded-4 mx-auto py-3'>
                    <CurrentValue currentValue={lastElement} />

                    <Chart
                        chartData={temperatureAnomalies}
                        lineName='temperature variation'
                    />
                    </div>
                    <Description
                        description={
                            <>
                                Since the industrial revolution, the average increase of global temperature is <span className="highlight-text rounded-1 p-1">about
                                1,0° C (1,8° F)</span>.
                                The northern hemisphere of the Earth is warming faster. The Arctic warmed <span className="highlight-text rounded-1 p-1">between 2° C (3.6° F) and 4° C (7.2° F)</span>.
                            </>
                        }
                    />
                </div>
            )
        }
        </>
    )
}

export default TemperatureAnomalies