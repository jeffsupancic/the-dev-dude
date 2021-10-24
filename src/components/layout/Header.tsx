// react
import { useHistory } from "react-router-dom";
// mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jeff Supancic
          </Typography> */}
          <Button
            color="inherit"
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              history.push("/blog");
            }}
          >
            Blog
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
