import React from 'react'
import {render} from "@testing-library/react"
import ToDoApp from '../ToDoApp'
import ReactDom from "react-dom"

test("renders Correctly",()=>{
    const root= document.createElement("div");
    ReactDom.render(<ToDoApp/>,root)
    expect(root.querySelector("h1").textContent).toBe("Add Todo Here");
})
