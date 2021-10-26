// react
import { useState } from "react";
// mui
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";

const Features = () => {
  const [frontEndOpen, setFrontEndOpen] = useState(true);
  const [backEndOpen, setBackEndOpen] = useState(true);

  return (
    <List>
      <ListItemButton
        onClick={() => {
          setFrontEndOpen(!frontEndOpen);
        }}
      >
        <ListItemIcon>
          <WebIcon />
        </ListItemIcon>
        <ListItemText primary="Front End" />
        {frontEndOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={frontEndOpen} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="TypeScript" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Hosting" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Material UI" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton
        onClick={() => {
          setBackEndOpen(!backEndOpen);
        }}
      >
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="Back End" />
        {backEndOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={backEndOpen} timeout="auto" unmountOnExit>
        <List component="div">
          {/* <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="1" />
          </ListItemButton> */}
        </List>
      </Collapse>
    </List>
  );
};

export default Features;
