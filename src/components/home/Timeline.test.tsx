// react
import { render } from "@testing-library/react";
// dd
import Timeline from "./Timeline";

test("Timeline component renders", () => {
  const { container } = render(<Timeline />);
  expect(container.firstChild).toBeTruthy();
});
