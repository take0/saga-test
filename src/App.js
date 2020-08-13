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

// reduxä«óùâ∫ÇÃstateÇpropsÇ≈àµÇ¶ÇÈÇÊÇ§Ç…Ç∑ÇÈ
const mapStateToProps = state => state;

// Acitonä÷êîÇPropsÇ≈àµÇ¶ÇÈÇÊÇ§Ç…Ç∑ÇÈ
const mapDispatchToProps = ({scores});

export default connect(mapStateToProps, mapDispatchToProps)(App);



