import { useEffect, useState } from "react";
import '../Component.css'
import { useQuery } from "@tanstack/react-query";
import Chart from "../Chart";
import CurrentValue from "../CurrentValue";
import Description from "../Description";
import LoadSpinner from "../LoadSpinner";
import fetchData from '../fetchData'

const Methan = () => {
    
    const { data, isLoading } = useQuery(['methan'], () => fetchData('https://global-warming.org/api/methane-api'));

    const indexItem = [1, 50, 100, 150, 200, 250, 300, 350, 400, 450];
    const [lastElement, setLastElement] = useState('');
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
        setLastElement(lastItem?.data);
    })

    return(
        <>
            {
                isLoading && <LoadSpinner />
            }
            
            { 
                !isLoading && (
                    <div className='chart pt-5 pb-3 px-4'>
                        <div className="graph-container rounded-4 mx-auto py-3">

                            <CurrentValue currentValue={lastElement} />

                            <Chart
                                yMaxParam={2000}
                                yMinParam={1500}
                                chartData={methanLevels}
                                lineName='Methan'
                            />

                        </div>
                        <Description
                            description={
                                <>
                                    50-65% of total global methane emissions come from human activities.
                                    Including: livestock, agriculture, oil and gas systems, household and business waste, landfills and so on.
                                    From the beginning of the industrial revolution, human activities have<span className="highlight-text rounded-1 p-1">increased this amount by about 150%</span>.
                                </>
                            }
                        />
                    </div>
                )
            }
        </>
    )
}

export default Methan