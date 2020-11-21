import React,{useState} from 'react'
function BasicTesting() {
    const [input, setinput] = useState("")
    const [output, setoutput] = useState("")
    const [count, setcount] = useState(0)
    const changeHandular=(e)=>{
     setinput(e.target.value)
    }
    const submitHandular=(e)=>{
        e.preventDefault();
        setinput("");
        setoutput("");
    }
    return (
        <div>
        <form onSubmit={submitHandular}>
            <h1 aria-label="h1Content" className="tagh1">Hello there I'm back, and i'm here testing knowlwdge</h1>
            <input placeholder="Enter Text" data-testid="inputTag" type="text" value={input} onChange={changeHandular} />
            <input placeholder="OutPutTag" data-testid="outputTag" type="text" value={output} onChange={e=>setoutput(e.target.value)} />
            <button onClick={()=>setcount(count+1)}>Increase</button>
            <button onClick={()=>setcount(count-1)}>Decrease</button>
            <button onClick={()=>setcount(0)}>Reset</button>
            <br/>
            <h1 aria-label="countMe"> {count}</h1>
            </form>
        </div>
    )
}

export default BasicTesting
