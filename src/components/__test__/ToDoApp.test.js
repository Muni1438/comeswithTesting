import React from 'react'
import {render,cleanup,fireEvent} from "@testing-library/react"
import ToDoApp from '../ToDoApp'
import ReactDom from "react-dom"

afterEach(cleanup);
test("renders Correctly",()=>{
    const dammal= document.createElement("div");
    ReactDom.render(<ToDoApp/>,dammal)
    expect(dammal.querySelector("h1").textContent).toBe("Add Todo Here");
})

test("my todo snapshot ",()=>{
    const {asFragment}= render(<ToDoApp/>)

    expect(asFragment(<ToDoApp/>)).toMatchSnapshot()
})

// it (`Have an empty ${""}`,()=>{
//     const {getByTestId}=render(<ToDoApp/>)

//     expect(getByTestId("Text")).toHaveTextContent("")
// })
test("Submit Handular",()=>{
    const {getByTestId,getByLabelText}=render(<ToDoApp/>)
    fireEvent.submit(getByTestId("form"))
})