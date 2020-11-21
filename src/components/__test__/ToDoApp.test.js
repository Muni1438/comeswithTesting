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
    const {getByTestId}=render(<ToDoApp/>)
    fireEvent.submit(getByTestId("form"))
})
describe("input tag",()=>{
    const {getByPlaceholderText} = render(<ToDoApp/>)
    const InputOfMe =getByPlaceholderText("Add Todo To Display")
    fireEvent.change(InputOfMe,{target:{value:"All About"}})
    // expect(getByPlaceholderText("Add Todo To Display").value).toBe("All About")
        expect(InputOfMe.value).toBe("All About" )
})