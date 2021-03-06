import { layerGroup } from 'leaflet';

import MapLayer from './MapLayer';

export default class LayerGroup extends MapLayer {
  componentWillMount() {
    super.componentWillMount();
    this.leafletElement = layerGroup();
  }

  render() {
    return this.renderChildrenWithProps({
      pane: this.props.pane,
      layerContainer: this.leafletElement,
    });
  }
}
