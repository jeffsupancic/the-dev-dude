import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const TimelineComponent = () => {
  return (
    <Stepper orientation="vertical">
      <Step active completed>
        <StepLabel>
          <Typography variant="body1" color="text.secondary">
            Front End Application
          </Typography>
        </StepLabel>
        <StepContent>
          <Typography variant="body2" color="text.secondary">
            GitHub &nbsp;
            <Link href="https://github.com/jeffsupancic/the-dev-dude">
              the-dev-dude
            </Link>
          </Typography>
        </StepContent>
      </Step>
      <Step active>
        <StepLabel error>
          <Typography variant="body1" color="text.secondary">
            Back End Application
          </Typography>
        </StepLabel>
        <StepContent>
          <Typography variant="body2" color="text.secondary">
            GitHub &nbsp;
            <Link href="https://github.com/jeffsupancic/the-dev-dude-server">
              the-dev-dude-server
            </Link>
          </Typography>
        </StepContent>
      </Step>
    </Stepper>
  );
};

export default TimelineComponent;
