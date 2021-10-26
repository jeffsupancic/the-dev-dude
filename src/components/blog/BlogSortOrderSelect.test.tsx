// react
import { render } from "@testing-library/react";
// dd
import BlogSortOrderSelect from "./BlogSortOrderSelect";

test("BlogSortOrderSelect component renders", () => {
  const { container } = render(
    <BlogSortOrderSelect
      sortOrder={"newestFirst"}
      setSortOrder={(sortOrder) => {}}
    />
  );
  expect(container.firstChild).toBeTruthy();
});
