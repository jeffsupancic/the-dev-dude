// react
import { useEffect, useState } from "react";
// mui
import Grid from "@mui/material/Grid";
// dd
import BlogEntry from "components/blog/BlogEntry";
import BlogCategorySelect from "components/blog/BlogCategorySelect";
import BlogSortOrderSelect from "components/blog/BlogSortOrderSelect";
// utils
import { cloneDeep } from "lodash";
// apollo
import { gql, useQuery } from "@apollo/client";

const BLOG_ENTRIES = gql`
  query getBlogEntries {
    blogEntries {
      id
      categories
      date
      title
      body
      code
    }
  }
`;

const Blog = () => {
  // queries
  const { data: blogEntriesData } = useQuery(BLOG_ENTRIES);

  // state
  const [blogEntries, setBlogEntries] = useState<
    {
      id: number;
      categories: string[];
      date: string;
      title: string;
      body: string;
      code?: string;
    }[]
  >([]);
  const [sortOrder, setSortOrder] = useState("newestFirst");
  const [categories, setCategories] = useState([
    "frontEnd",
    "backEnd",
    "hosting",
    "javaScript",
  ]);

  // lifecycles
  useEffect(() => {
    if (!blogEntriesData?.blogEntries) return;

    let newBlogEntries = cloneDeep(blogEntriesData.blogEntries);
    // apply filter
    newBlogEntries = newBlogEntries.filter((be: { categories: string[] }) =>
      be.categories.some((c: string) => categories.includes(c))
    );
    // apply sort
    if (sortOrder === "newestFirst") {
      newBlogEntries = newBlogEntries.reverse();
    }
    setBlogEntries(newBlogEntries);
  }, [blogEntriesData, sortOrder, categories]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <BlogSortOrderSelect
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
          </Grid>
          <Grid item>
            <BlogCategorySelect
              categories={categories}
              setCategories={setCategories}
            />
          </Grid>
        </Grid>
      </Grid>
      {blogEntries.map((blogEntry) => {
        return (
          <Grid key={blogEntry.id} item xs={12}>
            <BlogEntry
              id={blogEntry.id}
              categories={blogEntry.categories}
              date={blogEntry.date}
              title={blogEntry.title}
              body={blogEntry.body}
              code={blogEntry.code}
            ></BlogEntry>
          </Grid>
        );
      })}
      {/* <Grid item xs={12}>
          <Box textAlign="center">
            <Button color="primary" onClick={() => {}}>
              Load More...
            </Button>
          </Box>
        </Grid> */}
    </Grid>
  );
};

export default Blog;
