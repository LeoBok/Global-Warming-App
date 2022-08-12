import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import useFetch from "../useFetch";

const NitrousOxide = () => {

    const { data, loading, error } = useFetch('https://global-warming.org/api/nitrous-oxide-api');
    const [nitrousOxide, setNitrousOxide] = useState([]);
    const indexItem = [0, 10, 20, 30, 40, 50, 60, 70, 100, 130, 170, 200, 230, 250];
    const [lastElement, setLastElement] = useState({});

    useEffect(() => {

        if (data) {
            const filteredData = data.nitrous.filter((_, index) => indexItem.includes(index));
            const mappedData = filteredData.map(item => {
                return {
                    year: item.date.slice(0, 4),
                    data: item.average
                };
            });
            setNitrousOxide(mappedData);
        }
    }, [data]);

    useEffect(() => {
        const lastItem = nitrousOxide[nitrousOxide.length - 1];
        setLastElement(lastItem);
    })

    return(
        <>
            { loading && <p>LOADING...</p> }
            
            { error && <p>{error.message}</p> }
            
            { 
                nitrousOxide && (
                    <div className="container">
                        <div className="graph-container">

                            { lastElement && <p className="value-text">Today's value: <span className="element-data">{lastElement.data}</span></p> }

                            <ResponsiveContainer width='100%' aspect={2}>
                                <LineChart
                                    data={nitrousOxide}
                                    margin={{ right: 30, left: 30 }}
                                >
                                    <XAxis dataKey='year' />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend verticalAlign="top" height={36}/>
                                    <Line name="Nitrous Oxide" dot={{ stroke: '#F37D3A', strokeWidth: 1 }} activeDot={{ stroke: '#F37D3A', strokeWidth: 1, r: 3 }} type='linear' dataKey="data" stroke="#01A2B0" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="description">
                            Nitrous oxide is a gas that is produced by the combustion of fossil fuel and solid waste, nitrogen-base fertilizers, sewage treatment plants, 
                            natural processes, and other agricultural and industrial activities.
                            It is the <span className="highlight-text">third largest heat-trapping gas</span> in the atmosphere and
                            the <span className="highlight-text">biggest ozone-destroying compound</span> emitted by human activities.
                        </p>
                    </div>
                )
            }
        </>
    )
}

export default NitrousOxide