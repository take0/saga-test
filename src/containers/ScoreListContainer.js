import { connect } from 'react-redux';
import ScoreList from '../presentations/ScoreList';

//const mapStateToProps = state => state;
const mapStateToProps = (state) => {
    // TODO : なぜここに .scores. が入るのかがよくわからない。
    return { entries: state.scores.entries }
}
export default connect(mapStateToProps)(ScoreList);
