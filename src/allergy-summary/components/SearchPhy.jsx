import React from 'react';
import PropTypes from 'prop-types';
import './AllergySummaryContainer.scss';

const propTypes = {
  searchHandler: PropTypes.func.isRequired,
};

class SearchPhy extends React.PureComponent {
  render() {
    const { searchHandler } = this.props;
    return (<div>
      <h1 className="title"> Physician Appointment System</h1><br /><br />
      <div className="frontpage">
        <span className="Location"> Location:</span>         <input type="text" />&nbsp;&nbsp;
        <span className="Location"> Specialization:</span> <select>
          <option value="select">Select Specialization</option>
          <option value="Cardialogists">Cardialogists</option>
          <option value="Critical Care Medicine Specialists">Critical Care Medicine Specialists</option>
          <option value="Allergists">Allergists</option>
          <option value="Dermatologists">Dermatologists</option>
        </select><br /><br />
        <input type="button" className="Search" value="Search" onClick={() => searchHandler()} />
        <br /><br /> </div></div>);
  }
}
export default SearchPhy;
