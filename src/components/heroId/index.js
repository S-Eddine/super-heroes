import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fectchHero } from '../../redux/actions/heroAction';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loading from '../../utils/loading/index';
import HeroCard from './heroCard';

class HeroId extends Component {

    componentDidMount() {
        console.log("in componentDidMount")
        this.props.actions.fectchHero(this.props.match.params.heroId);
    }

    render() {
        if(this.props.heroIdReducer && !this.props.heroIdReducer.isFetching){
            return (
                <div>
                <Link to="/">Back to Heroes list</Link>
                    <HeroCard heroId={this.props.heroIdReducer.heroId}/>
                </div>

            );
        }else {
            return <Loading />
        }
        
    }
}

function mapStateToProps(state) {
    return {
        heroIdReducer : state.heroReducer
    }
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                fectchHero,
            },
            dispatch
          )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroId);
