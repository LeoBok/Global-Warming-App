import { useState, useEffect } from "react";
import '../Component.css'
import Chart from "../Chart";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const CarbonDioxide = () => {

    const fetchData = () => {
        return Axios.get('https://global-warming.org/api/co2-api').then(res => res.data)
    }
    const { data } = useQuery(['carbonDioxide'], fetchData);
    
    const [carbonDioxide, setCarbonDioxide] = useState([]);
    const [lastElement, setLastElement] = useState({});
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
        setLastElement(lastItem);
    })
    return(
        <>
            {
                carbonDioxide && (
                    <div className="container">
                        <div className="graph-container">

                            { lastElement && <p className="value-text">Today's value: <span className="element-data">{lastElement.data}</span></p> }

                            <Chart
                                chartData={carbonDioxide}
                                lineName='Carbon Dioxide'
                            />

                        </div>

                        <p className="description">
                            For thousands of years, the natural concentration of CO2 in the Earth's atmosphere has been around 280 ppm
                            Since the beginning of the industrial revolution, human activities such as the burning of fossil fuels,
                            deforestation and livestock have <span className="highlight-text">increased this amount by more than 30%</span>.
                        </p>
                    
                    </div>
                )
            }
        </>
    )
}

export default CarbonDioxide