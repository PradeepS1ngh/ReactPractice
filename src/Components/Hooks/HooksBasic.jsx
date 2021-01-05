import React,{useState , useEffect} from 'react'

function HooksBasic() {

    useEffect(() => {
        document.title = `clicked ${count} Times `
    })


    let initialState = 0
    const [count, setCount] = useState(initialState)
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>Clicked{count}</button>
        </div>
    )
}

export default HooksBasic;

