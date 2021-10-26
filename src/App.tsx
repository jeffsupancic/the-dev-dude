// react
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// mui
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

// components
import Header from "./components/layout/Header";
const Home = lazy(() => import("./routes/Home"));
const Blog = lazy(() => import("./routes/Blog"));

// const theme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Router>
      <Header />
      <Box p={1}>
        <Suspense
          fallback={
            <Box
              p={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CircularProgress size={100} />
            </Box>
          }
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </Suspense>
      </Box>
    </Router>
  </ThemeProvider>
);

export default App;
