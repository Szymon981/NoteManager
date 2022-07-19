import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom/client";
import renderer from "react-test-renderer";
import App from "./components/App/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("snapshot test", () => {
  const cat = renderer.create(<App />).toJSON();
  expect(cat).toMatchSnapshot();
});
