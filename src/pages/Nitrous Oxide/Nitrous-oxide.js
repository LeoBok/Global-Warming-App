import '../../components/Component.css'
import { useQuery } from "@tanstack/react-query";
import Description from '../../components/Description/Description'
import fetchData from "../../utility/fetchData";
import NitrousOxideComp from "../../components/Nitrous Oxide/Nitrous-oxide";
import { useMemo } from 'react';

const NitrousOxide = () => {
    
    const { data: nitrousOxideData, isLoading } = useQuery( ['nitorousOxide'], () => fetchData('https://global-warming.org/api/nitrous-oxide-api'));
    const nitrous = useMemo(() => 
        nitrousOxideData?.nitrous.map(item => {
            return {
                year: item.date.slice(0, 4),
                station: item.average
            }
    }).slice(1), [nitrousOxideData]);

    return(
        <div className="chart pt-5 pb-3 mx-auto px-4">
            <NitrousOxideComp
                nitrous={nitrous}
                isLoading={isLoading}
            />
            
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

export default NitrousOxide