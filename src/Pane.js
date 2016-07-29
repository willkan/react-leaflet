import React, {Component, PropTypes} from 'react'
import { Map, DomUtil } from 'leaflet';
import { assign, uniqueId, isEqual, pick } from 'lodash';

const STYLES = [
  'zIndex',
  'opacity',
  'width',
  'left',
  'right',
  'top',
  'bottom',
  'height',
  'overflow',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'webkitFilter',
]

export default class Pane extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    className: PropTypes.string,
    map: PropTypes.instanceOf(Map),
    opacity: PropTypes.number,
    paneId: PropTypes.string,
    zIndex: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.paneId = props.paneId || uniqueId();
  }

  componentWillMount() {
    const {map} = this.props;
    this.leafletElement = map.getPane(this.paneId) || map.createPane(this.paneId);
    this.originClassName = this.leafletElement.className;
    this.setClassName(this.props.className);
    this.setPaneStyle(this.getPaneStyle(this.props));
  }

  componentDidUpdate(prevProps) {
    this.setPaneStyleIfChanged(prevProps, this.props);
    this.setClassNameIfChanged(prevProps.className, this.props.className);
  }

  componentWillUnMount() {
    DomUtil.remove(this.leafletElement);
  }

  setClassName(className = '') {
    this.leafletElement.className = this.originClassName + ' ' + className;
  }

  setClassNameIfChanged(from, to) {
    if (from !== to) {
      this.setClassName(to);
    }
  }

  getPaneStyle(props) {
    return pick(props, STYLES);
  }

  setPaneStyle(options = {}) {
    STYLES.forEach(key => {
      const style = this.leafletElement.style;
      if (style[key] !== this.props[key]) style[key] = options[key];
    });
  }

  setPaneStyleIfChanged(fromProps, toProps) {
    const nextStyle = this.getPaneStyle(toProps);
    if (!isEqual(nextStyle, this.getPaneStyle(fromProps))) {
      this.setPaneStyle(nextStyle);
    }
  }

  getClonedChildrenWithMap(extra) {
    const { children, map } = this.props;
    const props = assign({map}, extra);

    return React.Children.map(children, child => {
      return child ? React.cloneElement(child, props) : null;
    });
  }

  renderChildrenWithProps(props) {
    const children = this.getClonedChildrenWithMap(props);
    return <div style={{display: 'none'}}>{children}</div>;
  }

  render() {
    return this.renderChildrenWithProps({
      pane: this.paneId,
    });
  }
}
