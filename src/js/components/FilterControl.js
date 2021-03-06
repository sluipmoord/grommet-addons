// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Button from 'grommet/components/Button';
import FilterIcon from 'grommet/components/icons/base/Filter';

export default class FilterControl extends Component {

  render () {
    const { filteredTotal, onClick, unfilteredTotal } = this.props;
    const top = (unfilteredTotal > 0) ? unfilteredTotal : '.';
    const bottom = (unfilteredTotal !== filteredTotal) ? filteredTotal : '.';

    return (
      <Button onClick={onClick}>
        <Box align='center' pad={{ horizontal: 'small' }}>
          <Label size='small'>{top}</Label>
          <FilterIcon />
          <Label size='small'>{bottom}</Label>
        </Box>
      </Button>
    );
  }

};

FilterControl.propTypes = {
  filteredTotal: PropTypes.number,
  onClick: PropTypes.func,
  unfilteredTotal: PropTypes.number
};
