import '../../components/Component.css'
import Description from '../../components/Description/Description'
import Temperature from "../../components/Temperature/Temperature";
import { useQuery } from "@tanstack/react-query"
import fetchData from '../../utility/fetchData';
import { useMemo } from 'react';

const TemperatureAnomalies = () => {
    const { data: tempData, isLoading } = useQuery(['temperatureVar'], () => fetchData('https://global-warming.org/api/temperature-api'));
    const temperature = useMemo(() => 
        tempData?.result.map(item => {
            return {
                year: item.time.slice(0, 4),
                station: item.station
            }
        })
    , [tempData])
    return(
        <>
            <div className="chart pt-5 pb-3 px-4 mx-auto">
                <Temperature temperature={temperature} isLoading={isLoading} />
                <Description
                        description={
                        <>  
                            The current global warming rate is not natural. From 1880 to 1981 was (0.07°C / 0.13°F) per decade. Since 1981 this rate has increased to (0.18°C / 0.32°F).
                            Since the industrial revolution, the average increase of global temperature is <span className="highlight-text rounded-1 p-1">about
                            1,0° C (1,8° F)</span>.
                            The northern hemisphere of the Earth is warming faster. The Arctic warmed <span className="highlight-text rounded-1 p-1">between 2° C (3.6° F) and 4° C (7.2° F)</span>.
                        </>
                        }
                />
            </div>
        </>
    )
}

export default TemperatureAnomalies