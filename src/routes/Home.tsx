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
import Features from "../components/home/Features";

const Home = () => {
  // hooks
  const history = useHistory();

  return (
    <Box p={1}>
      <Grid container spacing={1}>
        <Grid item md={2}>
          <Paper elevation={2}>
            <Box p={1}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item xs={12}>
                  <Typography align="center" variant="h4" color={green[500]}>
                    Jeff Supancic
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    align="center"
                    variant="subtitle1"
                    color={grey[500]}
                  >
                    <i>The Dev Dude</i>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Avatar
                      src={devDudeImage}
                      sx={{ width: 200, height: 200 }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Button
                      color="info"
                      size="small"
                      onClick={() => {
                        history.push("/blog");
                      }}
                      variant="contained"
                    >
                      Dev Dude's blog
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={10}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper elevation={2}>
                <Box p={1}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="body1" color="text.secondary">
                        Hi there! Thank you for visting my personal site,
                        portfolio and playground. I'm planning to use this site
                        as a place to learn, show off, and share some of the
                        things I've learned working as a full stack web
                        developer. I'll be building out a full stack web
                        application. In support of other developers, I'll be
                        keeping this portfolio open source through two GitHub
                        repositories.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={2}>
                <Box p={1}>
                  <Grid container>
                    <Grid item md={4}>
                      <Typography variant="h5" color="text.primary" pt={1}>
                        Project Timeline
                      </Typography>
                      <Timeline />
                    </Grid>
                    <Grid item md={4}>
                      <Typography variant="h5" color="text.primary" pt={1}>
                        Project Features
                        {/* <Features /> */}
                      </Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Typography variant="h5" color="text.primary" pt={1}>
                        Ideas
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
