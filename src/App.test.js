  import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDom from "react-dom"

test('renders learn react link', () => {
   const root = document.createElement("div")
   ReactDom.render(<App/>,root)
});
