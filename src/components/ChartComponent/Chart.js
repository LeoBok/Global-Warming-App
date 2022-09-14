import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";


const Chart = ({ chartData, lineName, yMaxParam, yMinParam }) => {
  return (
    <div>
      <ResponsiveContainer width='100%' aspect={2}>
          <LineChart
          data={chartData}
          margin={{ right: 30, left: 30 }}
          >
            <XAxis dataKey='year' />
            <YAxis domain={[yMinParam, yMaxParam]} />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Line name={lineName} dot={false} type='linear' dataKey='station' stroke="#01A2B0" />
          </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart