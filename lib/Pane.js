'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _uniqueId2 = require('lodash/uniqueId');

var _uniqueId3 = _interopRequireDefault(_uniqueId2);

var _assign2 = require('lodash/assign');

var _assign3 = _interopRequireDefault(_assign2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _leaflet = require('leaflet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLES = ['zIndex', 'opacity', 'width', 'left', 'right', 'top', 'bottom', 'height', 'overflow', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'webkitFilter'];

var Pane = function (_Component) {
  _inherits(Pane, _Component);

  function Pane(props) {
    _classCallCheck(this, Pane);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Pane).call(this, props));

    _this.paneId = props.paneId || (0, _uniqueId3.default)();
    return _this;
  }

  _createClass(Pane, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var map = this.props.map;

      this.leafletElement = map.getPane(this.paneId) || map.createPane(this.paneId);
      this.originClassName = this.leafletElement.className;
      this.setClassName(this.props.className);
      this.setPaneStyle(this.getPaneStyle(this.props));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.setPaneStyleIfChanged(prevProps, this.props);
      this.setClassNameIfChanged(prevProps.className, this.props.className);
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      _leaflet.DomUtil.remove(this.leafletElement);
    }
  }, {
    key: 'setClassName',
    value: function setClassName() {
      var className = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      this.leafletElement.className = this.originClassName + ' ' + className;
    }
  }, {
    key: 'setClassNameIfChanged',
    value: function setClassNameIfChanged(from, to) {
      if (from !== to) {
        this.setClassName(to);
      }
    }
  }, {
    key: 'getPaneStyle',
    value: function getPaneStyle(props) {
      return (0, _pick3.default)(props, STYLES);
    }
  }, {
    key: 'setPaneStyle',
    value: function setPaneStyle() {
      var _this2 = this;

      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      STYLES.forEach(function (key) {
        var style = _this2.leafletElement.style;
        if (style[key] !== _this2.props[key]) style[key] = options[key];
      });
    }
  }, {
    key: 'setPaneStyleIfChanged',
    value: function setPaneStyleIfChanged(fromProps, toProps) {
      var nextStyle = this.getPaneStyle(toProps);
      if (!(0, _isEqual3.default)(nextStyle, this.getPaneStyle(fromProps))) {
        this.setPaneStyle(nextStyle);
      }
    }
  }, {
    key: 'getClonedChildrenWithMap',
    value: function getClonedChildrenWithMap(extra) {
      var _props = this.props;
      var children = _props.children;
      var map = _props.map;

      var props = (0, _assign3.default)({ map: map }, extra);

      return _react2.default.Children.map(children, function (child) {
        return child ? _react2.default.cloneElement(child, props) : null;
      });
    }
  }, {
    key: 'renderChildrenWithProps',
    value: function renderChildrenWithProps(props) {
      var children = this.getClonedChildrenWithMap(props);
      return _react2.default.createElement(
        'div',
        { style: { display: 'none' } },
        children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderChildrenWithProps({
        pane: this.paneId
      });
    }
  }]);

  return Pane;
}(_react.Component);

Pane.propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  className: _react.PropTypes.string,
  map: _react.PropTypes.instanceOf(_leaflet.Map),
  opacity: _react.PropTypes.number,
  paneId: _react.PropTypes.string,
  zIndex: _react.PropTypes.number
};
exports.default = Pane;