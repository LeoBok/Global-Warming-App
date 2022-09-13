import '../Component.css'
import { useQuery } from "@tanstack/react-query";
import Description from "../Description";
import fetchData from '../fetchData'
import MethanComp from './MethanComp';

const Methan = () => {
    
    const { data: methanData, isLoading } = useQuery(['methan'], () => fetchData('https://global-warming.org/api/methane-api'));
    return(
        <div className='chart pt-5 pb-3 px-4'>
            <MethanComp
                methanData={methanData?.methane}
                isLoading={isLoading}
            />
            
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

export default Methan