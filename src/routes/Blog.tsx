// react
import { useEffect, useState } from "react";
// mui
import Grid from "@mui/material/Grid";
// dd
import blogEntriesData from "../data/blogEntries";
import BlogEntry from "../components/blog/BlogEntry";
import BlogCategorySelect from "../components/blog/BlogCategorySelect";
import BlogSortOrderSelect from "../components/blog/BlogSortOrderSelect";
// utils
import { cloneDeep } from "lodash";

const Blog = () => {
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
    "frontend",
    "backend",
    "hosting",
    "javascript",
  ]);

  useEffect(() => {
    let newBlogEntries = cloneDeep(blogEntriesData);
    // apply filter
    newBlogEntries = newBlogEntries.filter((be) =>
      be.categories.every((c) => categories.includes(c))
    );
    // apply sort
    if (sortOrder === "newestFirst") {
      newBlogEntries = newBlogEntries.reverse();
    }
    setBlogEntries(newBlogEntries);
  }, [sortOrder, categories]);

  return (
    <>
      {/* <div>
        {`
      Steps followed to setup this personal portfolio:
      1. followed create react app as a starter https://create-react-app.dev/ using the type script template chose to use npm
      2. hosted with digital ocean apps which easily wraps this app in a contianer and created a yaml file for you https://www.digitalocean.com/ with automatic deploy on commit to main branch
      3. added react router for code splitting
      4. added mui v5 didn't use styled-components
      5. added theme provider



      TODO:
      1. add more lint rules
      2. configure prettier
      3. enforce tests and lint rules with husky
      4. add material ui
      5. show some data fetching
      6. add .env variable
      7. add / fix unit tests on github / site
      8. test out emotion instead of jss
      9. mui theme - try theme creator?
      10. custom hook for 
      `}
      </div> */}
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
                date={blogEntry.date}
                title={blogEntry.title}
                body={blogEntry.body}
                code={blogEntry.code}
              ></BlogEntry>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Blog;
