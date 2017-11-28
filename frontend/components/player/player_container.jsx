import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Player from './player';

const mapStateToProps = (state) => ({});


const mapDispatchToProps = dispatch => ({});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Player));
