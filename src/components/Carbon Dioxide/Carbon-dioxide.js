import { useState, useEffect } from "react";
import '../Component.css'
import Chart from "../Chart";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import CurrentValue from "../CurrentValue";
import Description from '../Description'
import LoadSpinner from '../LoadSpinner'
import fetchData from '../fetchData'

const CarbonDioxide = () => {
    
    const { data, isLoading } = useQuery(['carbonDioxide'], () => fetchData('https://global-warming.org/api/co2-api'));
    
    const [carbonDioxide, setCarbonDioxide] = useState([]);
    const [lastElement, setLastElement] = useState('');
    const indexItem = [0, 400, 800, 1200, 1500, 1900, 2200, 2600, 2900, 3400, 3800];

    useEffect(() => {
        if (data) {
            const filteredData = data.co2.filter((_item, index) => indexItem.includes(index));
            const mappedData = filteredData.map(item => {
                return {
                    year: item.year,
                    data: item.cycle
                };
            });
            setCarbonDioxide(mappedData);
        }
    }, [data]);

    useEffect(() => {
        const lastItem = carbonDioxide[carbonDioxide.length - 1];
        setLastElement(lastItem?.data);
    })
    return(
        <>
            {
                isLoading && <LoadSpinner />
            }
            {
                !isLoading && (
                    <div className="pt-5 pb-3 mx-auto px-4">
                        <div className="graph-container rounded-4 mx-auto py-3">

                            <CurrentValue currentValue={lastElement} />

                            <Chart
                                chartData={carbonDioxide}
                                lineName='Carbon Dioxide'
                            />

                        </div>
                        <div className="">
                        <Description
                            description={
                                <>
                                    For thousands of years, the natural concentration of CO2 in the Earth's atmosphere has been around 280 ppm
                                    Since the beginning of the industrial revolution, human activities such as the burning of fossil fuels,
                                    deforestation and livestock have <span className="highlight-text rounded-1 p-1">increased this amount by more than 30%</span>.
                                </>
                            }
                        /></div>
                    </div>
                )
            }
        </>
    )
}

export default CarbonDioxide