// react
import { render } from "@testing-library/react";
// dd
import BlogEntry from "./BlogEntry";

test("BlogEntry component renders", () => {
  const { container } = render(
    <BlogEntry
      id={1}
      categories={["frontEnd", "javaScript"]}
      date="10/26/2021"
      title="test title"
      body="test body"
    />
  );
  expect(container.firstChild).toBeTruthy();
});
