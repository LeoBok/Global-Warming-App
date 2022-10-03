import '../../components/Component.css'
import { useQuery } from "@tanstack/react-query";
import Description from '../../components/Description/Description'
import fetchData from '../../utility/fetchData'
import MethanComp from '../../components/Methan/Methan';
import { useMemo } from 'react';

const Methan = () => {
    
    const { data: methanData, isLoading } = useQuery(['methan'], () => fetchData('https://global-warming.org/api/methane-api'));
    const methane = useMemo(() => 
        methanData?.methane.slice(1).map(item => {
            return {
                year: item.date.slice(0, 4),
                station: item.average
            }
        })
    , [methanData])

    return(
        <div className='chart pt-5 pb-3 px-4'>
            <MethanComp
                methane={methane}
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