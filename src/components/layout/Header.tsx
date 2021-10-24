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
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { green } from "@mui/material/colors";

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
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <IconButton
              onClick={() => {
                history.push("/");
              }}
            >
              <Avatar sx={{ bgcolor: green[500] }}>DD</Avatar>
            </IconButton>
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              history.push("/blog");
            }}
          >
            Blog
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              history.push("/");
            }}
          >
            Dev Dude
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
