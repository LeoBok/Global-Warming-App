import { useState, useEffect } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import useFetch from '../useFetch';
import '../Component.css'

const CarbonDioxide = () => {

    const { data, loading, error } = useFetch('https://global-warming.org/api/co2-api');
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
            { loading && <p>LOADING...</p> }
            
            { error && <p>{error.message}</p> }

            {
                carbonDioxide && (
                    <div className="container">
                        <div className="graph-container">

                            { lastElement && <p className="value-text">Today's value: <span className="element-data">{lastElement.data}</span></p> }

                            <ResponsiveContainer width='100%' aspect={2}>
                                <LineChart
                                    data={carbonDioxide}
                                    margin={{ right: 30, left: 30 }}
                                >
                                    <XAxis dataKey='year' />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend verticalAlign="top" height={36}/>
                                    <Line name="Carbon Dioxide" dot={{ stroke: '#F37D3A', strokeWidth: 1 }} activeDot={{ stroke: '', strokeWidth: 1, r: 3 }} type='linear' dataKey="data" stroke="#01A2B0" />
                                </LineChart>
                            </ResponsiveContainer>
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