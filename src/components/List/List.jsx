import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

import useStyles from "./styles";

const List = () => {
  const classes = useStyles();

  const [type, setType] = useState("restaurantes");
  const [rating, setRating] = useState("");

  const places = [
    { name: "Cool place" },
    { name: "Best Stake" },
    { name: "Best beer" },
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurantes, Hoteis & Atrações perto de vc
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurantes">Restaurantes</MenuItem>
          <MenuItem value="hoteis">Hoteis</MenuItem>
          <MenuItem value="atracoes">Atrações</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>Todos</MenuItem>
          <MenuItem value={3}>Acima de 3 estrelas</MenuItem>
          <MenuItem value={4}>Acima de 4 estrelas</MenuItem>
          <MenuItem value={4.5}>Acima de 4.5 estrelas</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, index) => (
          <Grid item key={index} xs={12}>
            <PlaceDetails place={place.name} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
