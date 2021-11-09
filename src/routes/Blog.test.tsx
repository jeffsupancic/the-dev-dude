// react
import { render } from "@testing-library/react";
// dd
import Blog from "./Blog";
// apollo
import { MockedProvider } from "@apollo/client/testing";

test("Blog component renders", () => {
  const { container } = render(
    <MockedProvider>
      <Blog />
    </MockedProvider>
  );
  expect(container.firstChild).toBeTruthy();
});
