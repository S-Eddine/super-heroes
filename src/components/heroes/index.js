import React, { Component } from 'react';
import { fetchHeroes } from '../../redux/actions/heroesAction';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Hero from './heroGrid/index';
import Loading from '../../utils/loading/index';

class Heroes extends Component {

    componentDidMount() {
        console.log("in componentDidMount")
        this.props.actions.fetchHeroes();
    }

    render() {
        if(this.props.heroes.length > 0){
            return (
                <div>
                    <Hero heroes={this.props.heroes[0]}/>
                </div>
            );
        }
        return <Loading />
    }
}

function mapStateToProps(state) {
    return {
        heroes: state.heroesReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {
            fetchHeroes,
        },
        dispatch
      )
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
