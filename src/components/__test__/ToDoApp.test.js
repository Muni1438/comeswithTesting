import React from 'react'
import {render} from "@testing-library/react"
import ToDoApp from '../ToDoApp'
import ReactDom from "react-dom"

test("renders Correctly",()=>{
    const dammal= document.createElement("div");
    ReactDom.render(<ToDoApp/>,dammal)
    expect(dammal.querySelector("h1").textContent).toBe("Add Todo Here");
})
