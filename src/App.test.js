import App from './App';
//import ReactDom from "react-dom"
import {render,cleanup} from "@testing-library/react"

afterEach(cleanup)
// test('renders learn react link', () => {
//   //  const root = document.createElement("div")
//   //  ReactDom.render(<App/>,root)
//   render(<App/>)
// });
test("Take a Snapshot",()=>{
 const {asFragment} = render(<App/>)

 expect(asFragment(<App />)).toMatchSnapshot()
})
