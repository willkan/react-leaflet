'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _lodashLangIsEqual = require('lodash/lang/isEqual');

var _lodashLangIsEqual2 = _interopRequireDefault(_lodashLangIsEqual);

var _lodashObjectPick = require('lodash/object/pick');

var _lodashObjectPick2 = _interopRequireDefault(_lodashObjectPick);

var _MapLayer2 = require('./MapLayer');

var _MapLayer3 = _interopRequireDefault(_MapLayer2);

var OPTIONS = ['stroke', 'color', 'weight', 'opacity', 'fill', 'fillColor', 'fillOpacity', 'fillRule', 'dashArray', 'lineCap', 'lineJoin', 'clickable', 'pointerEvents', 'className'];

var Path = (function (_MapLayer) {
  _inherits(Path, _MapLayer);

  function Path() {
    _classCallCheck(this, Path);

    _get(Object.getPrototypeOf(Path.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Path, [{
    key: 'getPathOptions',
    value: function getPathOptions(props) {
      return (0, _lodashObjectPick2['default'])(props, OPTIONS);
    }
  }, {
    key: 'setStyle',
    value: function setStyle() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      this.leafletElement.setStyle(options);
    }
  }, {
    key: 'setStyleIfChanged',
    value: function setStyleIfChanged(fromProps, toProps) {
      var nextStyle = this.getPathOptions(toProps);
      if (!(0, _lodashLangIsEqual2['default'])(nextStyle, this.getPathOptions(fromProps))) {
        this.setStyle(nextStyle);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderChildrenWithProps({
        popupContainer: this.leafletElement
      });
    }
  }]);

  return Path;
})(_MapLayer3['default']);

exports['default'] = Path;
module.exports = exports['default'];