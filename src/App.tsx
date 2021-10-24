// react
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// mui
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

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
        <Suspense fallback={<div>Loading...</div>}>
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
