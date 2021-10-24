// mui
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface BlogCategorySelectProps {
  categories: string[];
  setCategories: (categories: string[]) => void;
}

const BlogCategorySelect = ({
  categories,
  setCategories,
}: BlogCategorySelectProps) => {
  return (
    <ToggleButtonGroup
      size="small"
      value={categories}
      onChange={(e, categories) => {
        setCategories(categories);
      }}
    >
      <ToggleButton value="frontend">Front End</ToggleButton>
      <ToggleButton value="backend">Back End</ToggleButton>
      <ToggleButton value="hosting">Hosting</ToggleButton>
      <ToggleButton value="javascript">JavaScript</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default BlogCategorySelect;
