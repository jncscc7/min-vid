import React from 'react';
import ReactTooltip from 'react-tooltip';
import sendMetricsEvent from '../client-lib/send-metrics-event';
import sendToAddon from '../client-lib/send-to-addon';
import getView from '../client-lib/get-view';

export default class Close extends React.Component {
  close() {
    sendMetricsEvent(getView(), 'close');
    sendToAddon({action: 'close'});
  }

  render() {
    return (
        <div>
        <a className='close' onClick={this.close.bind(this)} data-tip data-for='close' />
        <ReactTooltip id='close' effect='solid' place='left'>{this.props.strings.ttClose}</ReactTooltip>
        </div>
    );
  }
}
