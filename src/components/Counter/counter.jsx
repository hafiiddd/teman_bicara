import CountUp from "react-countup";

const Counter = ({ end, metric }) => {
    return (
        <h2 className="data">
            <CountUp duration={3} end={end} />
            {metric}
        </h2>

    )
}

export default Counter;