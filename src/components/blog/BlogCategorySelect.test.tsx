// react
import { render, getByText, fireEvent } from "@testing-library/react";
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

test("BlogCategorySelect category can be toggled", () => {
  const setCategories = jest.fn();
  const { container } = render(
    <BlogCategorySelect
      categories={["frontEnd"]}
      setCategories={setCategories}
    />
  );

  fireEvent(
    getByText(container, "Front End"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(setCategories).toHaveBeenCalledTimes(1);
});
