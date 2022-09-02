import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useEffect, useState } from "react";
import Chart from "../Chart";
import CurrentValue from "../CurrentValue";

const NitrousOxide = () => {

    const fetchData = () => {
        return Axios.get('https://global-warming.org/api/nitrous-oxide-api').then(res => res.data)
    }
    const { data } = useQuery( ['nitorousOxide'], fetchData);
    const [nitrousOxide, setNitrousOxide] = useState([]);
    const indexItem = [0, 10, 20, 30, 40, 50, 60, 70, 100, 130, 170, 200, 230, 250];
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
                nitrousOxide && (
                    <div className="container">
                        <div className="graph-container">

                            <CurrentValue currentValue={lastElement} />

                            <Chart
                                chartData={nitrousOxide}
                                lineName='Nitrous Oxide'
                            />
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