import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = theme => ({
  root: {
    flexGrow: 1,
    //maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  head: {
    backgroundColor: 'rgb(206, 46, 119)',
    fontSize: '1.6em',
  },
  secondLevelHead: {
    color: 'rgb(206, 46, 119)',
    fontSize : '1.3em',
  }
});

function HeroCard(props) {
    const { classes, heroId } = props;
    const comics = heroId.comics.items;
    const series = heroId.series.items; 
  
    return (
        <Grid container className={classes.root} spacing={24}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={24}>
              <Paper >
                <img src={`${heroId.thumbnail.path}/portrait_uncanny.${heroId.thumbnail.extension}`} alt={heroId.name} />
              </Paper>
              <Paper>
                <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.head}>{heroId.name}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.secondLevelHead}>Comics</TableCell>
                  </TableRow>
                  {comics.map((row, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow>
                    <TableCell className={classes.secondLevelHead}>Series</TableCell>
                  </TableRow>
                  {series.map((row, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
    );
}
  
HeroCard.propTypes = {
    classes: PropTypes.object.isRequired,
    heroId: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroCard);
