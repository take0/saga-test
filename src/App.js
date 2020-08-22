import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getScoresRequest } from './actions';
//import ScoreList from './presentations/ScoreList';
import ScoreList from './containers/ScoreListContainer'; // これ超大事。上の行だけだとScoreListContainerの中身が解釈されない。

class App extends Component {

    state = {
        limit: '0'
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <input type="text" onChange={elm => this.setState({ limit: elm.target.value })} />
                    <button onClick={ () => this.props.getScoresRequest(this.state.limit)}>list scores</button>
                </div>
                <ScoreList　/>
            </React.Fragment>
       );
    }
}

// redux管理下のstateをpropsで扱えるようにする
const mapStateToProps = state => state;

// Aciton関数をPropsで扱えるようにする
const mapDispatchToProps = ({getScoresRequest});

export default connect(mapStateToProps, mapDispatchToProps)(App);



