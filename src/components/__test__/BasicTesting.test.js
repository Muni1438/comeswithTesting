import React from "react"
import {render, fireEvent, getByTestId} from "@testing-library/react"
import BasicTesting from "../BasicTesting"

describe("all about h1 tag",()=>{
    test('should render correctly', () => {
        const {asFragment} = render(<BasicTesting/>)
        expect(asFragment(<BasicTesting/>)).toMatchSnapshot()
    })
    test('should Have text content', () => {
        const {getByLabelText,getByTestId,queryByPlaceholderText} = render(<BasicTesting/>)
        expect(getByLabelText("h1Content")).toHaveTextContent("Hello there I'm back, and i'm here testing knowlwdge")
        expect(getByLabelText("h1Content")).toHaveClass("tagh1")
        expect(getByTestId("inputTag")).toBeTruthy()
        expect(queryByPlaceholderText("Enter Text")).toBeTruthy()

    }) 
    it ("input Text Testing",()=>{
        const {queryByPlaceholderText} =render(<BasicTesting/>)
        const InputTextValue = queryByPlaceholderText("Enter Text")

        fireEvent.change(InputTextValue,{target:{value:"testing"}})

        expect(InputTextValue.value).toBe("testing")
    })     
})
describe("all about output tag",()=>{

    test("should have placeholder",()=>{
        const {getByPlaceholderText} =render(<BasicTesting/>)
        expect(getByPlaceholderText("OutPutTag")).toBeTruthy()
    })
    test("running Correctly",()=>{
        const {getByTestId}=render(<BasicTesting/>)
        const OutPutTesting=getByTestId("outputTag")
        fireEvent.change(OutPutTesting,{target:{value:"outputcontent"}})
        
        expect(OutPutTesting.value).toBe("outputcontent")
    })

})
describe("All About Count Button",()=>{
    test("increase count",()=>{
     const {getByText,getByLabelText}= render(<BasicTesting/>)
    fireEvent.click(getByText("Increase"))
    expect(getByLabelText("countMe")).toHaveTextContent("1")
})
    test("Decrease Count",()=>{
        const {getByText,getByLabelText}= render(<BasicTesting/>)
        fireEvent.click(getByText("Decrease"))
        expect(getByLabelText("countMe")).toHaveTextContent("-1")
    })
    test("Reset Count",()=>{
        const {getByText,getByLabelText}= render(<BasicTesting/>)
        fireEvent.click(getByText("Reset"))
        expect(getByLabelText("countMe")).toHaveTextContent("0")
    })
})
