/*
{ temperatureAnomalies && (
    <div className='container'>
        <div className="graph-container">
            { lastElement && <p className="value-text">Today's value: <span className="element-data">{lastElement.data}</span></p> }

            <ResponsiveContainer width='100%' aspect={2}>
                <LineChart
                    data={temperatureAnomalies}
                    margin={{ right: 30, left: 30 }}
                >
                    <XAxis dataKey='time' />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36}/>
                    <Line name="temperature variation" dot={{ stroke: '#F37D3A', strokeWidth: 1 }} activeDot={{ stroke: '', strokeWidth: 1, r: 3 }} type='linear' dataKey="data" stroke="#01A2B0" />
                </LineChart>
            </ResponsiveContainer>
        </div>

        <p className="description">
            Since the industrial revolution, the average increase of global temperature is <span className="highlight-text">about
            1,0° C (1,8° F)</span>.<br/>
            The northern hemisphere of the Earth is warming faster. The Arctic warmed <span className="highlight-text">between 2° C (3.6° F) and 4° C (7.2° F)</span>.
        </p>
    </div>
)}
*/