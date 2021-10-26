// react
import { render } from "@testing-library/react";
// dd
import Ideas from "./Ideas";

test("Ideas component renders", () => {
  const { container } = render(<Ideas />);
  expect(container.firstChild).toBeTruthy();
});
