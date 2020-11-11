import React from "react"
import {render} from "@testing-library/react"
import BasicTesting from "../BasicTesting"

describe("all about h1 tag",()=>{
    test('should render correctly', () => {
        const {asFragment} = render(<BasicTesting/>)
        expect(asFragment(<BasicTesting/>)).toMatchSnapshot()
    })
    test('should Have text content', () => {
        const {getByTestId} = render(<BasicTesting/>)
        expect(getByTestId("h1Content")).toHaveTextContent("Hello there I'm back, and i'm came here with testing knowlwdge")
        
    })
    
    
})
