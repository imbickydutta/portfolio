import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ project_name, desc, imgpath, github, demo, techstack, features }) {
  return (
    <Card sx={{ maxWidth: 600 }}>

      <div className="imgMed" >
        <CardMedia
          component="img"
          height="300"
          image={imgpath}
          alt={project_name}
        />
      </div>

      <CardContent>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            {project_name}
          </Typography>

          <CardActions>
            <a href={demo} target="_blank" rel="noreferrer">
              <Button color="error" variant="contained" size="small">Demo</Button>
            </a>
            <a href={github}>
              <Button color="error" variant="contained" size="small">GitHub</Button>
            </a>
          </CardActions>
        </div>

        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
        <br />
        <Typography variant="body1" color="text.primary">
          <b>Tech Stack</b> : {techstack}
        </Typography>
        <br />

        <Typography variant="body1" color="text.primary">
          <b>Features</b> : <div style={{ marginLeft: "10%" }}>
            {features}
          </div>
        </Typography>
      </CardContent>

    </Card>
  );
}
