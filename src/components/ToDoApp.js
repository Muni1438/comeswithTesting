import React,{useReducer,useState} from 'react'
import "./ToDoApp.scss"
export const Actions={
    ADD_TODO:"ADD_TODO",
    DELETE_TODO:"DELETE_TODO"
}
const initialState=[]
export const reducer=(state,action)=>{
switch(action.type){
    case Actions.ADD_TODO:
        return [...state,addingData(action.payload)]
    case Actions.DELETE_TODO:
        return state.filter(mine =>mine.id !== action.payload.id)
    default:
        return state
}
}
const addingData=(Text)=>{
    return{
        id:Math.random(),
        Text
    }
}
function ToDoApp() {
    const [Text, setText] = useState(initialState)
    const [state, dispatch] = useReducer(reducer, initialState)
    const adding=()=>{
        return{
            type:Actions.ADD_TODO,
            payload:Text
        }
    }
    const submitHandular=(e)=>{
        e.preventDefault();
        setText("")
        dispatch(adding())
    }
    const deleting=(dataID)=>{
        return{
            type:Actions.DELETE_TODO,
            payload:{id:dataID}
        }
    }
    return (
        <div>
        <form data-testid="form" onSubmit={submitHandular}>
        <h1>Add Todo Here</h1>
            <input placeholder="Add Todo To Display" className="inputTag" type="text" value={Text} onChange={e=>setText(e.target.value)} />
        </form>
        {state.length?(state.map(data=><h2 data-testid="Text" className="h1Tag" key={data.id} onClick={()=>dispatch(deleting(data.id))}>{data.Text}</h2>)):<h3>Nothing To Delete</h3>}
        </div>
    )
}

export default ToDoApp
