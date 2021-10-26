// react
import { render } from "@testing-library/react";
// dd
import Features from "./Features";

test("Features component renders", () => {
  const { container } = render(<Features />);
  expect(container.firstChild).toBeTruthy();
});
