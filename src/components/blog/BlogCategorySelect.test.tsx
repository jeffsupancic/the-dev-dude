// react
import { render } from "@testing-library/react";
// dd
import BlogCategorySelect from "./BlogCategorySelect";

test("BlogCategorySelect component renders", () => {
  const { container } = render(
    <BlogCategorySelect
      categories={["frontEnd"]}
      setCategories={(categories) => {}}
    />
  );
  expect(container.firstChild).toBeTruthy();
});
