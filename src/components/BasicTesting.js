import React,{useState} from 'react'
function BasicTesting() {
    const [input, setinput] = useState("")
    const [output, setoutput] = useState("")
    const changeHandular=(e)=>{
     setinput(e.target.value)
    }
    return (
        <div>
            <h1 aria-label="h1Content" className="tagh1">Hello there I'm back, and i'm here testing knowlwdge</h1>
            <input placeholder="Enter Text" data-testid="inputTag" type="text" value={input} onChange={changeHandular} />
            <input placeholder="OutPutTag" data-testid="outputTag" type="text" value={output} onChange={e=>setoutput(e.target.value)} />
        </div>
    )
}

export default BasicTesting
