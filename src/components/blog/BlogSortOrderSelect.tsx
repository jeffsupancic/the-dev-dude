// mui
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface BlogSortOrderSelectProps {
  sortOrder: string;
  setSortOrder: (sortOrder: string) => void;
}

const BlogSortOrderSelect = ({
  sortOrder,
  setSortOrder,
}: BlogSortOrderSelectProps) => {
  return (
    <FormControl>
      <InputLabel>Sort by</InputLabel>
      <Select
        size="small"
        color="info"
        value={sortOrder}
        onChange={(e) => {
          setSortOrder(e.target.value);
        }}
      >
        <MenuItem value="newestFirst">Newest First</MenuItem>
        <MenuItem value="oldestFirst">Oldest First</MenuItem>
        <MenuItem disabled value="featured">
          Featured
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default BlogSortOrderSelect;
