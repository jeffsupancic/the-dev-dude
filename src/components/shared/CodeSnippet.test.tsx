// react
import { render } from "@testing-library/react";
// dd
import CodeSnippet from "./CodeSnippet";

test("CodeSnippet component renders", () => {
  const { container } = render(<CodeSnippet code="test code" />);
  expect(container.firstChild).toBeTruthy();
});
