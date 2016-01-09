'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _leaflet = require('leaflet');

var _lodashObjectAssign = require('lodash/object/assign');

var _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);

var _lodashUtilityUniqueId = require('lodash/utility/uniqueId');

var _lodashUtilityUniqueId2 = _interopRequireDefault(_lodashUtilityUniqueId);

var _lodashLangIsEqual = require('lodash/lang/isEqual');

var _lodashLangIsEqual2 = _interopRequireDefault(_lodashLangIsEqual);

var _lodashObjectPick = require('lodash/object/pick');

var _lodashObjectPick2 = _interopRequireDefault(_lodashObjectPick);

var STYLES = ['zIndex', 'opacity', 'width', 'left', 'right', 'top', 'bottom', 'height', 'overflow', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom'];

var Pane = (function (_Component) {
  _inherits(Pane, _Component);

  _createClass(Pane, null, [{
    key: 'propTypes',
    value: {
      children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
      map: _react.PropTypes.instanceOf(_leaflet.Map),
      opacity: _react.PropTypes.number,
      paneId: _react.PropTypes.string,
      zIndex: _react.PropTypes.number,
      className: _react.PropTypes.string
    },
    enumerable: true
  }]);

  function Pane(props) {
    _classCallCheck(this, Pane);

    _get(Object.getPrototypeOf(Pane.prototype), 'constructor', this).call(this, props);
    this.paneId = props.paneId || (0, _lodashUtilityUniqueId2['default'])();
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
      L.DomUtil.remove(this.leafletElement);
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
      return (0, _lodashObjectPick2['default'])(props, STYLES);
    }
  }, {
    key: 'setPaneStyle',
    value: function setPaneStyle() {
      var _this = this;

      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      STYLES.forEach(function (key) {
        var style = _this.leafletElement.style;
        if (style[key] !== _this.props[key]) style[key] = options[key];
      });
    }
  }, {
    key: 'setPaneStyleIfChanged',
    value: function setPaneStyleIfChanged(fromProps, toProps) {
      var nextStyle = this.getPaneStyle(toProps);
      if (!(0, _lodashLangIsEqual2['default'])(nextStyle, this.getPaneStyle(fromProps))) {
        this.setPaneStyle(nextStyle);
      }
    }
  }, {
    key: 'getClonedChildrenWithMap',
    value: function getClonedChildrenWithMap(extra) {
      var _props = this.props;
      var children = _props.children;
      var map = _props.map;

      var props = (0, _lodashObjectAssign2['default'])({ map: map }, extra);

      return _react2['default'].Children.map(children, function (child) {
        return child ? _react2['default'].cloneElement(child, props) : null;
      });
    }
  }, {
    key: 'renderChildrenWithProps',
    value: function renderChildrenWithProps(props) {
      var children = this.getClonedChildrenWithMap(props);
      return _react2['default'].createElement(
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
})(_react.Component);

exports['default'] = Pane;
module.exports = exports['default'];