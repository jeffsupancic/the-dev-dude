import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <Button
        onClick={() => {
          history.push("/blog");
        }}
        variant="contained"
      >
        Take me to the blog
      </Button>
    </div>
  );
};

export default Home;
