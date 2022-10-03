import { useMemo, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import LoadSpinner from "../Load Spinner/Load-spinner";
import Button from '../Button/Button'

const PolarCapsComp = ({ polarArctic, isLoading }) => {

    const [arcticDataState, setArcticDataState] = useState([]);
    const [btnStateId, setBtnStateId] = useState(4);

    useMemo(() => setArcticDataState(polarArctic), [polarArctic])

    const selectRangeDate = (min, max, id) => {
        setBtnStateId(id)
        setArcticDataState(polarArctic.slice(min, max))
    }

    const lastItem =  polarArctic?.[polarArctic.length - 1];
    return (
        <>
            {
                isLoading && <LoadSpinner />
            }
            
            {
                !isLoading && (
                    <div className='graph-container mx-auto rounded-4 py-3'>
                        {
                            lastItem && <p className="text-center pt-4">Today's value: <span className="element-data rounded-1 p-1">Extent {lastItem.extent}, Area {lastItem.area}</span></p>
                        }
                        <ResponsiveContainer width='100%' aspect={2}>
                            <LineChart
                                data={arcticDataState}
                                margin={{ right: 30, left: 30 }}
                            >
                                <XAxis dataKey='year' />
                                <YAxis />
                                <Tooltip />
                                <Legend verticalAlign="top" height={36}/>
                                <Line dot={false} type='linear' dataKey="extent" stroke="#01A2B0" />
                                <Line dot={false} type='linear' dataKey="area" stroke="#01A2B0" />  
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )
            }

            <div className="mt-4 btn-comp-cont d-md-flex justify-content-center">
                <Button
                    buttonStyle={ (btnStateId === 1 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                    children={ `from ${polarArctic?.[0].year} to ${polarArctic?.[10].year}` }
                    onClickEvent={() => selectRangeDate(0, 11, 1)}
                />
                <Button
                    buttonStyle={ (btnStateId === 2 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                    children={ `from ${polarArctic?.[11].year} to ${polarArctic?.[20].year}` }
                    onClickEvent={() => selectRangeDate(11, 21, 2)}
                />
                <Button
                    buttonStyle={ (btnStateId === 3 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                    children={ `from ${polarArctic?.[21].year} to ${polarArctic?.[polarArctic.length - 1].year}` }
                    onClickEvent={() => selectRangeDate(21, polarArctic.length, 3)}
                />
                <Button
                    buttonStyle={ (btnStateId === 4 ? `active-btn` : `graph-button`) + ` rounded-3 p-2 p-md-3 px-lg-2 py-lg-3 m-1 m-sm-2` }
                    children={ `from ${polarArctic?.[0].year} to ${polarArctic?.[polarArctic.length - 1].year}` }
                    onClickEvent={() => selectRangeDate(0, polarArctic.length, 4)}
                />
            </div>
        </>
    )
}

export default PolarCapsComp