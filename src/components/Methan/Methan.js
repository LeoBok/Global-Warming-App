import { useEffect, useState } from "react";
import '../Component.css'
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Chart from "../Chart";

const Methan = () => {

    const fetchData = () => {
        return Axios.get('https://global-warming.org/api/methane-api').then(res => res.data)
    }
    const { data } = useQuery(['methan'], fetchData);

    const indexItem = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];
    const [lastElement, setLastElement] = useState({});
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
        setLastElement(lastItem);
    })

    return(
        <>
            { 
                methanLevels && (
                    <div className="container">
                        <div className="graph-container">

                            { lastElement && <p className="value-text">Today's value: <span className="element-data">{lastElement.data}</span></p> }
                            
                            <Chart
                                chartData={methanLevels}
                                lineName='Methan'
                            />

                        </div>
                        
                        <p className="description">
                            50-65% of total global methane emissions come from human activities.
                            Including: livestock, agriculture, oil and gas systems, household and business waste, landfills and so on.
                            From the beginning of the industrial revolution, human activities have<span className="highlight-text">increased this amount by about 150%</span>.
                        </p>
                    </div>
                )
            }
        </>
    )
}

export default Methan