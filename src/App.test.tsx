// react
import { render } from "@testing-library/react";
// dd
import App from "./App";

test("App component renders", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toBeTruthy();
});
