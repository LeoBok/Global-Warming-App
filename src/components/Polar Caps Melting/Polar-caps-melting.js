import { useQuery } from "@tanstack/react-query";
import '../Component.css'
import Description from "../Description";
import fetchData from "../fetchData";
import PolarCapsComp from "./PolarCapsComp";

const PolarCapsMelting = () => {
    
    const { data: arcticData, isLoading } = useQuery( ['polarCaps'], () => fetchData('https://global-warming.org/api/arctic-api'));

    return(
        <div className="chart pt-5 pb-3 mx-auto px-4">
            <PolarCapsComp
                arcticData={arcticData?.arcticData}
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