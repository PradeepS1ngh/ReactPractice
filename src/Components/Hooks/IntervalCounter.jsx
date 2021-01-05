import React,{useState,useEffect} from 'react'

function IntervalCounter() {

    const [count, setcount] = useState(0);

    const increase = () => setcount(count+1);
    
    useEffect( () =>{
        const interval = setInterval(increase,1000);
        return () => {
            clearInterval(interval);
        }
    })

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalCounter

