import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getScoresRequest } from './actions';
import ScoreList from './presentations/ScoreList';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <button onClick={this.props.getScoresRequest}>list scores</button>
                </div>
                <ScoreList />
            </React.Fragment>
       );
    }
}

// redux管理下のstateをpropsで扱えるようにする
const mapStateToProps = state => state;

// Aciton関数をPropsで扱えるようにする
const mapDispatchToProps = ({getScoresRequest});

export default connect(mapStateToProps, mapDispatchToProps)(App);



