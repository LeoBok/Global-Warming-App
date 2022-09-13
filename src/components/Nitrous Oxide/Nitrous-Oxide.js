import { useQuery } from "@tanstack/react-query";
import Description from '../Description'
import fetchData from "../fetchData";
import NitrousOxideComp from "./NitrousOxideComp";

const NitrousOxide = () => {
    
    const { data: nitrousOxideData, isLoading } = useQuery( ['nitorousOxide'], () => fetchData('https://global-warming.org/api/nitrous-oxide-api'));

    return(
        <div className="chart pt-5 pb-3 mx-auto px-4">
            <NitrousOxideComp
                nitrousOxideData={nitrousOxideData?.nitrous}
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