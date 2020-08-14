import React, {Component} from 'react';

class ScoreList extends Component {

    data = {
        entries: [
            {id: "12345", score:100},
            {id: "88888", score:200}
        ]
    }

    render() {
        console.log("[ScoreList] render()");
        return (
            <React.Fragment>
                <div>
                    <ul>
                        <li>id=1, score=100</li>
                        <li>id=2, score=200</li>
                        {this.data.entries.map(entries => (
                            <li key={entries.id}>id={entries.id}, score={entries.score}</li>
                        ))}
                        {this.props.entries.map(entries => (
                            <li key={entries.id}>id={entries.id}, score={entries.score}</li>
                        ))}
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default ScoreList

