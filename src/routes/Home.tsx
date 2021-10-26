// react
import { useHistory } from "react-router-dom";
// mui
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { green, grey } from "@mui/material/colors";
// dd
import devDudeImage from "../images/thedevdude.jpeg";
import Timeline from "../components/home/Timeline";

const Home = () => {
  // hooks
  const history = useHistory();

  return (
    <Paper>
      <Box p={1}>
        <Grid container spacing={1}>
          <Grid item md={2}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <Typography variant="h4" color={green[500]}>
                  Jeff Supancic
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color={grey[500]}>
                  <i>The Dev Dude</i>
                </Typography>
              </Grid>
              <Grid item>
                <Avatar src={devDudeImage} sx={{ width: 200, height: 200 }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={10}>
            <Typography variant="body1" color="text.primary">
              Hi there! Thank you for visting my personal site, portfolio and
              playground. I'm planning to use this site as a place to learn,
              show off, and share some of the things I've learned working as a
              full stack web developer. I'll be building out a full stack web
              application. In support of other developers, I'll be keeping this
              portfolio open source through two GitHub repositories.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              pt={1}
            ></Typography>
            <Grid container>
              <Grid item md={6}>
                <Typography variant="h5" color="primary" pt={1}>
                  Project Timeline
                </Typography>
                <Timeline />
              </Grid>
              <Grid item md={6}></Grid>
            </Grid>
            <Grid></Grid>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                onClick={() => {
                  history.push("/blog");
                }}
                variant="contained"
              >
                Take me to the Dev Dude's blog
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Home;
