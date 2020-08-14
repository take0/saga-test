import React, {Component} from 'react';
import { connect } from 'react-redux';
import { scores } from './actions';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <button onClick={this.props.scores}>list scores</button>
                </div>
            </React.Fragment>
       );
    }
}

// redux管理下のstateをpropsで扱えるようにする
const mapStateToProps = state => state;

// Aciton関数をPropsで扱えるようにする
const mapDispatchToProps = ({scores});

export default connect(mapStateToProps, mapDispatchToProps)(App);



