import '../../components/Component.css'
import { useQuery } from "@tanstack/react-query";
import Description from '../../components/Description/Description'
import fetchData from '../../utility/fetchData'
import CarbonDioxComp from '../../components/Carbon Dioxide/Carbon-dioxide';
import { useMemo } from 'react';

const CarbonDioxide = () => {
    
    const { data: carbonDioxData, isLoading } = useQuery(['carbonDioxide'], () => fetchData('https://global-warming.org/api/co2-api'));

    const carbonDioxide = useMemo(() => 
        carbonDioxData?.co2.map(item => {
            return {
                year: item.year,
                station: item.trend
            }
        })
    , [carbonDioxData])
    
    return(
        <div className="chart pt-5 pb-3 mx-auto px-4">
            <CarbonDioxComp
                carbonDioxide={carbonDioxide}
                isLoading={isLoading}
            />
                                  
            <Description
                description={
                    <>
                        For thousands of years, the natural concentration of CO2 in the Earth's atmosphere has been around 280 ppm
                        Since the beginning of the industrial revolution, human activities such as the burning of fossil fuels,
                        deforestation and livestock have <span className="highlight-text rounded-1 p-1">increased this amount by more than 30%</span>.
                    </>
                }
            />
        </div>
                
    )
}

export default CarbonDioxide