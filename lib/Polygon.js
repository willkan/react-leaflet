'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _leaflet = require('leaflet');

var _typesLatlngList = require('./types/latlngList');

var _typesLatlngList2 = _interopRequireDefault(_typesLatlngList);

var _Path2 = require('./Path');

var _Path3 = _interopRequireDefault(_Path2);

var Polygon = (function (_Path) {
  _inherits(Polygon, _Path);

  function Polygon() {
    _classCallCheck(this, Polygon);

    _get(Object.getPrototypeOf(Polygon.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Polygon, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _get(Object.getPrototypeOf(Polygon.prototype), 'componentWillMount', this).call(this);
      var _props = this.props;
      var map = _props.map;
      var positions = _props.positions;

      var props = _objectWithoutProperties(_props, ['map', 'positions']);

      this.leafletElement = (0, _leaflet.polygon)(positions, props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.positions !== prevProps.positions) {
        this.leafletElement.setLatLngs(this.props.positions);
      }
      this.setStyleIfChanged(prevProps, this.props);
    }
  }], [{
    key: 'propTypes',
    value: {
      positions: _react.PropTypes.oneOfType([_typesLatlngList2['default'], _react.PropTypes.arrayOf(_typesLatlngList2['default'])]).isRequired
    },
    enumerable: true
  }]);

  return Polygon;
})(_Path3['default']);

exports['default'] = Polygon;
module.exports = exports['default'];