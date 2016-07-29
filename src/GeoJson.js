import { isFunction } from 'lodash';
import { PropTypes } from 'react';
import { geoJson } from 'leaflet';

import Path from './Path';

export default class GeoJson extends Path {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  componentWillMount() {
    super.componentWillMount();
    const { data, map: _map, layerContainer: _lc, ...props } = this.props;
    this.leafletElement = geoJson(data, props);
  }

  componentDidUpdate(prevProps) {
    if (isFunction(this.props.style)) {
      this.setStyle(this.props.style);
    }
    else {
      this.setStyleIfChanged(prevProps, this.props);
    }
  }
}
