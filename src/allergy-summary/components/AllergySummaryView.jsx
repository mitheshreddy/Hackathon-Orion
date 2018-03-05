import React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from 'terra-content-container';
import Table from 'terra-table';
import IconError from 'terra-icon/lib/icon/IconError';
import IconAvailable from 'terra-icon/lib/icon/IconAvailable';
import IconAway from 'terra-icon/lib/icon/IconAway';
import Header from 'terra-clinical-header';
import ErrorView from 'terra-clinical-error-view';
import NoDataView from 'terra-clinical-no-data-view';
import { injectIntl } from 'react-intl';

const propTypes = {
  text: PropTypes.string,
  isLoading: PropTypes.bool,
  isFailed: PropTypes.bool,
  intl: PropTypes.object.isRequired,
  clickHandler: PropTypes.func,
};

const AllergySummaryView = (props) => {
  const { isLoading, isFailed, text, intl, clickHandler } = props;
  let content = [];
  let cont = [];

  if (isLoading) {
    content = null;
  } else if (isFailed) {
    content = <ErrorView description={intl.formatMessage({ id: 'ion-allergies-engine.allergy-summary-failed-to-load' })} isGlyphHidden />;
  } else if (text) {
    for (let i = 0; i < text.length; i += 1) {
      const cont1 = [];
      for (let j = 0; j < text[i].appointmentsArray.length; j += 1) {
        if (text[i].appointmentsArray[j].slotStatus === 1) {
          cont1.push(<Table.Cell content={<IconAvailable height="1em" width="1em" onClick={() => clickHandler()} />} />);
        } else if (text[i].appointmentsArray[j].slotStatus === 2) {
          cont1.push(<Table.Cell content={<IconError height="1em" width="1em" />} />);
        } else if (text[i].appointmentsArray[j].slotStatus === 3) {
          cont1.push(<Table.Cell content={<IconAway height="1em" width="1em" />} />);
        }
      }
      cont.push(<Table.Row ><Table.Cell content={text[i].physicianName} />{cont1}</Table.Row >);
    }
  } else {
    content = <NoDataView heading={intl.formatMessage({ id: 'ion-allergies-engine.no-allergy-summary' })} isGlyphHidden />;
  }

  return (
    <ContentContainer>
      <div className="kaiju-Workspace">
        <Table isStriped isPadded>
          <Table.Header >
            <Table.HeaderCell minWidth="tiny" content={'Physician Name'} />
            <Table.HeaderCell minWidth="small" sort="" content={'9AM - 10AM'} />
            <Table.HeaderCell minWidth="tiny" content={'10AM - 11AM'} />
            <Table.HeaderCell minWidth="small" sort="" content={'11AM - 12PM'} />
            <Table.HeaderCell minWidth="small" sort="" content={'12PM - 1AM'} />
          </Table.Header>
          <Table.Rows >
            {cont}
          </Table.Rows>
        </Table>
      </div>
    </ContentContainer>
  );
};

AllergySummaryView.propTypes = propTypes;

export default injectIntl(AllergySummaryView);
