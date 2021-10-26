// react
import { render } from "@testing-library/react";
// dd
import Header from "./Header";

test("Header component renders", () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toBeTruthy();
});
