import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

const Chart = ({ chartData, lineName }) => {
  return (
    <ResponsiveContainer width='100%' aspect={2}>
        <LineChart
        data={chartData}
        margin={{ right: 30, left: 30 }}
        >
          <XAxis dataKey='year' />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Line name={lineName} dot={{ stroke: '#F37D3A', strokeWidth: 1 }} activeDot={{ stroke: '', strokeWidth: 1, r: 3 }} type='linear' dataKey='data' stroke="#01A2B0" />
        </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart