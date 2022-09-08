import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useEffect, useState } from "react";
import Chart from "../Chart";
import CurrentValue from "../CurrentValue";
import Description from '../Description'
import LoadSpinner from '../LoadSpinner'
import fetchData from "../fetchData";

const NitrousOxide = () => {
    
    const { data, isLoading } = useQuery( ['nitorousOxide'], () => fetchData('https://global-warming.org/api/nitrous-oxide-api'));
    const [nitrousOxide, setNitrousOxide] = useState([]);
    const indexItem = [1, 10, 20, 30, 40, 50, 60, 70, 100, 130, 170, 200, 230, 250];
    const [lastElement, setLastElement] = useState('');

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
        setLastElement(lastItem?.data);
    })

    return(
        <>
            {
                isLoading && <LoadSpinner />
            }
            { 
                !isLoading && (
                    <div className="component pt-5 pb-3 mx-auto px-4">
                        <div className="graph-container rounded-4 mx-auto py-3">

                            <CurrentValue currentValue={lastElement} />

                            <Chart
                                chartData={nitrousOxide}
                                lineName='Nitrous Oxide'
                            />
                        </div>
                        <Description
                            description={
                                <>
                                    Nitrous oxide is a gas that is produced by the combustion of fossil fuel and solid waste, nitrogen-base fertilizers, sewage treatment plants, 
                                    natural processes, and other agricultural and industrial activities.
                                    It is the <span className="highlight-text rounded-1 p-1">third largest heat-trapping gas</span> in the atmosphere and
                                    the <span className="highlight-text rounded-1 p-1">biggest ozone-destroying compound</span> emitted by human activities.
                                </>
                            }
                        />
                    </div>
                )
            }
        </>
    )
}

export default NitrousOxide