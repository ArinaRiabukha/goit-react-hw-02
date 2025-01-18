const Feedback = ({ good, neutral, bad }) =>{
    return(
        <ul className="feedback">
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
        </ul>
    )
}

export default Feedback;