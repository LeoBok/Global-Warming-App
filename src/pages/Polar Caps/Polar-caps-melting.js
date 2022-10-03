import { useQuery } from "@tanstack/react-query";
import '../../components/Component.css'
import Description from '../../components/Description/Description'
import fetchData from "../../utility/fetchData";
import PolarCapsComp from "../../components/Polar Caps Melting/Polar-caps";
import { useMemo } from "react";

const PolarCapsMelting = () => {
    
    const { data: arcticData, isLoading } = useQuery( ['polarCaps'], () => fetchData('https://global-warming.org/api/arctic-api'));
    const polarArctic = useMemo(() => 
        arcticData?.arcticData.map(item => {
            return {
                year: item.year,
                area: item.area,
                extent: item.extent
            }
        })
    , [arcticData])

    return(
        <div className="chart pt-5 pb-3 mx-auto px-4">
            <PolarCapsComp
                polarArctic={polarArctic}
                isLoading={isLoading}
            />
            
            <Description
                description={
                    <>
                        The arctic is warming around twice as fast as global average.
                        Some of the reasons for this are: The arctic amplification, the albedo effect, and black carbon.
                        From 1979 to 1996, <span className="highlight-text rounded-1 p-1">we lost 2.2 – 3% of the arctic ice cover</span>.
                        From 2010 to present <span className="highlight-text rounded-1 p-1">we are losing 12.85% per decade</span>!
                    </>
                }
            />
        </div>
    )
}

export default PolarCapsMelting