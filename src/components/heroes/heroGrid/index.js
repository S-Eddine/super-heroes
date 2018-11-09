import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 700,
      height: 700,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  });



function Hero(props) {
    const { classes, heroes, history } = props;

    const handlInfoClick = (id) => () => {
      history.push(`/hero/${id}`);
    }

    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          {heroes.map(hero => (
            <GridListTile key={hero.id}>
              <img src={`${hero.thumbnail.path}/standard_xlarge.${hero.thumbnail.extension}`} alt={hero.name} />
              <GridListTileBar
                title={hero.name}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon onClick={handlInfoClick(hero.id)}/>
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
          { <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">By : SALAH EDDINE ALAOUI - KAIBEE - 2018</ListSubheader>
          </GridListTile> }
        </GridList>
      </div>
    );
  }
  
  Hero.propTypes = {
    classes: PropTypes.object.isRequired,
    heroes: PropTypes.array.isRequired,
    history: PropTypes.object,
  };
  
  export default withStyles(styles)(Hero);
