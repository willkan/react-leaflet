import { PropTypes } from 'react';
import { imageOverlay, latLngBounds} from 'leaflet';

import boundsType from './types/bounds';
import MapLayer from './MapLayer';

export default class ImageOverlay extends MapLayer {
  static propTypes = {
    attribution: PropTypes.string,
    bounds: boundsType.isRequired,
    opacity: PropTypes.number,
    url: PropTypes.string.isRequired,
  };

  componentWillMount() {
    super.componentWillMount();
    const { bounds, map: _map, layerContainer: _lc, url, ...props } = this.props;
    this.leafletElement = imageOverlay(url, bounds, props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.bounds !== prevProps.bounds) {
      this.leafletElement.setBounds(latLngBounds(this.props.bounds))
    }
    if (this.props.url !== prevProps.url) {
      this.leafletElement.setUrl(this.props.url);
    }
    if (this.props.opacity !== prevProps.opacity) {
      this.leafletElement.setOpacity(this.props.opacity);
    }
  }

  render() {
    return null;
  }
}
