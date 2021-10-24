import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

// components
import Header from "./components/layout/Header";
const Home = lazy(() => import("./routes/Home"));
const Blog = lazy(() => import("./routes/Blog"));

const App = () => (
  <>
    <CssBaseline />
    <Header />
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Suspense>
    </Router>
  </>
);

export default App;
