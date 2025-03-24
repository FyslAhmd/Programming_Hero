import { useState } from "react"

export default function Batsman() {
    const [score, setScore] = useState(0);
    const handleScore = (sc) => {
        setScore(sc+score);
    }
    const preStype = {
        border: '2px solid red',
        margin: '10px',
    }
    return (
        <div style={preStype}>
            <h3>Bangladesh</h3>
            <h2>Score: {score}</h2>
            <button onClick={()=> handleScore(1)}>Single</button>
            <button onClick={()=> handleScore(4)}>Four</button>
            <button onClick={()=> handleScore(6)}>Six</button>
        </div>
    )
}