// react
import { render } from "@testing-library/react";
// dd
import Blog from "./Blog";

test("Blog component renders", () => {
  const { container } = render(<Blog />);
  expect(container.firstChild).toBeTruthy();
});
