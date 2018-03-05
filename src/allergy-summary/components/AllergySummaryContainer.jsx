import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import SlidePanel from 'terra-slide-panel';

import { loadAllergySummary } from '../actions';
import allergySummaryReducers from '../reducers';
import allergySummarySagas from '../sagas';
import allergySummaryService from '../service';

import AllergySummaryView from './AllergySummaryView';
import Displayform from './Displayform';
import SearchPhy from './SearchPhy';
import './AllergySummaryContainer.scss';

const propTypes = {
  allergySummary: PropTypes.string,
  refreshAllergySummary: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isFailed: PropTypes.bool,
};

class AllergySummaryContainer extends React.Component {
  constructor() {
    super();
    this.state = ({ isOpen: false, isVisible: false });
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('orionReactComponentRefresh', this.props.refreshAllergySummary);
    this.props.refreshAllergySummary();
  }

  componentWillUnmount() {
    document.removeEventListener('orionReactComponentRefresh', this.props.refreshAllergySummary);
  }

  handleOnClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleSearchClick() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const { isFailed, isLoading, allergySummary } = this.props;
    const content = this.state.isVisible ? (
    <div className="slide-panel">
      <SlidePanel
        mainContent={<AllergySummaryView isFailed={isFailed} isLoading={isLoading} text={allergySummary} clickHandler={this.handleOnClick} />}
        panelContent={<Displayform />}
        panelBehavior="overlay"
        panelPosition="end"
        panelSize="small"
        isOpen={this.state.isOpen}
        fill
      />
    </div>) : null;
    return (<div>
      <SearchPhy searchHandler={this.handleSearchClick} />
      {content}
    </div>);
  }
}

AllergySummaryContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  allergySummary: state.allergySummaryState.allergySummary,
  isLoading: state.allergySummaryState.isLoading,
  isFailed: state.allergySummaryState.isFailed,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  refreshAllergySummary: () => {
    dispatch(loadAllergySummary(ownProps.service || allergySummaryService, ownProps.patientId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AllergySummaryContainer);

const reducers = Object.assign({}, { allergySummaryState: allergySummaryReducers });
export { reducers };

const sagas = allergySummarySagas;
export { sagas };
