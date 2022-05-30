import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import sword from './images/sword.png';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="staic" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Questbook
        </Typography>
        <img className={classes.image} src={sword} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
