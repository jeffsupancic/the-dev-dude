// mui
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// utils
import { startCase } from "lodash";
// dd
import CodeSnippet from "../shared/CodeSnippet";

interface BlogEntryProps {
  id: number;
  categories: string[];
  date: string;
  title: string;
  body: string;
  code?: string;
}

export default function BlogEntry({
  id,
  categories,
  date,
  title,
  body,
  code,
}: BlogEntryProps) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: green[500] }}>DD</Avatar>}
        title={title}
        subheader={
          <>
            {date}
            <Stack direction="row" spacing={1}>
              {categories.map((category) => {
                return (
                  <Chip
                    size="small"
                    color="info"
                    key={category}
                    label={startCase(category)}
                  />
                );
              })}
            </Stack>
          </>
        }
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {body}
        </Typography>
        {code && <CodeSnippet code={code} />}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
