import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Link } from "react-router-dom"

interface CountriesItemProps {
    flag: string
    name: string
}

const CountriesItem = (props: CountriesItemProps) => {
return (
    <Link to={`${props.name}`}>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
    component="img"
      image={props.flag}
      title={props.name}
      alt={`${props.name} flag`}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {props.name}
      </Typography>

    </CardContent>
  </Card>
  </Link>
    )
}




export default CountriesItem