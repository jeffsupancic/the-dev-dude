// react
import { render } from "@testing-library/react";
// dd
import Home from "./Home";

test("Home component renders", () => {
  const { container } = render(<Home />);
  expect(container.firstChild).toBeTruthy();
});
