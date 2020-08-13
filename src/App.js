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

// redux�Ǘ�����state��props�ň�����悤�ɂ���
const mapStateToProps = state => state;

// Aciton�֐���Props�ň�����悤�ɂ���
const mapDispatchToProps = ({scores});

export default connect(mapStateToProps, mapDispatchToProps)(App);



