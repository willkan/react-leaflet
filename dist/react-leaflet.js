(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("leaflet"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["leaflet", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactLeaflet"] = factory(require("leaflet"), require("react"), require("react-dom"));
	else
		root["ReactLeaflet"] = factory(root["L"], root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_118__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setIconDefaultImagePath = exports.Pane = exports.ZoomControl = exports.WMSTileLayer = exports.TileLayer = exports.ScaleControl = exports.Rectangle = exports.Popup = exports.Polyline = exports.Polygon = exports.Path = exports.MultiPolyline = exports.MultiPolygon = exports.Marker = exports.MapLayer = exports.MapControl = exports.MapComponent = exports.Map = exports.LayersControl = exports.LayerGroup = exports.ImageOverlay = exports.GeoJson = exports.FeatureGroup = exports.CircleMarker = exports.Circle = exports.CanvasTileLayer = exports.BaseTileLayer = exports.AttributionControl = exports.PropTypes = undefined;

	var _leaflet = __webpack_require__(1);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var _types = __webpack_require__(2);

	var _PropTypes = _interopRequireWildcard(_types);

	var _AttributionControl2 = __webpack_require__(10);

	var _AttributionControl3 = _interopRequireDefault(_AttributionControl2);

	var _BaseTileLayer2 = __webpack_require__(12);

	var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

	var _CanvasTileLayer2 = __webpack_require__(63);

	var _CanvasTileLayer3 = _interopRequireDefault(_CanvasTileLayer2);

	var _Circle2 = __webpack_require__(64);

	var _Circle3 = _interopRequireDefault(_Circle2);

	var _CircleMarker2 = __webpack_require__(86);

	var _CircleMarker3 = _interopRequireDefault(_CircleMarker2);

	var _FeatureGroup2 = __webpack_require__(87);

	var _FeatureGroup3 = _interopRequireDefault(_FeatureGroup2);

	var _GeoJson2 = __webpack_require__(88);

	var _GeoJson3 = _interopRequireDefault(_GeoJson2);

	var _ImageOverlay2 = __webpack_require__(89);

	var _ImageOverlay3 = _interopRequireDefault(_ImageOverlay2);

	var _LayerGroup2 = __webpack_require__(90);

	var _LayerGroup3 = _interopRequireDefault(_LayerGroup2);

	var _LayersControl2 = __webpack_require__(91);

	var _LayersControl3 = _interopRequireDefault(_LayersControl2);

	var _Map2 = __webpack_require__(92);

	var _Map3 = _interopRequireDefault(_Map2);

	var _MapComponent2 = __webpack_require__(31);

	var _MapComponent3 = _interopRequireDefault(_MapComponent2);

	var _MapControl2 = __webpack_require__(11);

	var _MapControl3 = _interopRequireDefault(_MapControl2);

	var _MapLayer2 = __webpack_require__(13);

	var _MapLayer3 = _interopRequireDefault(_MapLayer2);

	var _Marker2 = __webpack_require__(112);

	var _Marker3 = _interopRequireDefault(_Marker2);

	var _MultiPolygon2 = __webpack_require__(113);

	var _MultiPolygon3 = _interopRequireDefault(_MultiPolygon2);

	var _MultiPolyline2 = __webpack_require__(114);

	var _MultiPolyline3 = _interopRequireDefault(_MultiPolyline2);

	var _Path2 = __webpack_require__(65);

	var _Path3 = _interopRequireDefault(_Path2);

	var _Polygon2 = __webpack_require__(115);

	var _Polygon3 = _interopRequireDefault(_Polygon2);

	var _Polyline2 = __webpack_require__(116);

	var _Polyline3 = _interopRequireDefault(_Polyline2);

	var _Popup2 = __webpack_require__(117);

	var _Popup3 = _interopRequireDefault(_Popup2);

	var _Rectangle2 = __webpack_require__(119);

	var _Rectangle3 = _interopRequireDefault(_Rectangle2);

	var _ScaleControl2 = __webpack_require__(120);

	var _ScaleControl3 = _interopRequireDefault(_ScaleControl2);

	var _TileLayer2 = __webpack_require__(121);

	var _TileLayer3 = _interopRequireDefault(_TileLayer2);

	var _WMSTileLayer2 = __webpack_require__(122);

	var _WMSTileLayer3 = _interopRequireDefault(_WMSTileLayer2);

	var _ZoomControl2 = __webpack_require__(123);

	var _ZoomControl3 = _interopRequireDefault(_ZoomControl2);

	var _Pane2 = __webpack_require__(124);

	var _Pane3 = _interopRequireDefault(_Pane2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.PropTypes = _PropTypes;
	exports.AttributionControl = _AttributionControl3.default;
	exports.BaseTileLayer = _BaseTileLayer3.default;
	exports.CanvasTileLayer = _CanvasTileLayer3.default;
	exports.Circle = _Circle3.default;
	exports.CircleMarker = _CircleMarker3.default;
	exports.FeatureGroup = _FeatureGroup3.default;
	exports.GeoJson = _GeoJson3.default;
	exports.ImageOverlay = _ImageOverlay3.default;
	exports.LayerGroup = _LayerGroup3.default;
	exports.LayersControl = _LayersControl3.default;
	exports.Map = _Map3.default;
	exports.MapComponent = _MapComponent3.default;
	exports.MapControl = _MapControl3.default;
	exports.MapLayer = _MapLayer3.default;
	exports.Marker = _Marker3.default;
	exports.MultiPolygon = _MultiPolygon3.default;
	exports.MultiPolyline = _MultiPolyline3.default;
	exports.Path = _Path3.default;
	exports.Polygon = _Polygon3.default;
	exports.Polyline = _Polyline3.default;
	exports.Popup = _Popup3.default;
	exports.Rectangle = _Rectangle3.default;
	exports.ScaleControl = _ScaleControl3.default;
	exports.TileLayer = _TileLayer3.default;
	exports.WMSTileLayer = _WMSTileLayer3.default;
	exports.ZoomControl = _ZoomControl3.default;
	exports.Pane = _Pane3.default;
	var setIconDefaultImagePath = exports.setIconDefaultImagePath = function setIconDefaultImagePath(path) {
	  _leaflet2.default.Icon.Default.imagePath = path;
	};

	setIconDefaultImagePath('//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images');

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.layerContainer = exports.latlngList = exports.latlng = exports.controlPosition = exports.children = exports.bounds = undefined;

	var _bounds2 = __webpack_require__(3);

	var _bounds3 = _interopRequireDefault(_bounds2);

	var _children2 = __webpack_require__(7);

	var _children3 = _interopRequireDefault(_children2);

	var _controlPosition2 = __webpack_require__(8);

	var _controlPosition3 = _interopRequireDefault(_controlPosition2);

	var _latlng2 = __webpack_require__(6);

	var _latlng3 = _interopRequireDefault(_latlng2);

	var _latlngList2 = __webpack_require__(5);

	var _latlngList3 = _interopRequireDefault(_latlngList2);

	var _layerContainer2 = __webpack_require__(9);

	var _layerContainer3 = _interopRequireDefault(_layerContainer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.bounds = _bounds3.default;
	exports.children = _children3.default;
	exports.controlPosition = _controlPosition3.default;
	exports.latlng = _latlng3.default;
	exports.latlngList = _latlngList3.default;
	exports.layerContainer = _layerContainer3.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _latlngList = __webpack_require__(5);

	var _latlngList2 = _interopRequireDefault(_latlngList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react.PropTypes.oneOfType([_react.PropTypes.instanceOf(_leaflet.LatLngBounds), _latlngList2.default]);

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _latlng = __webpack_require__(6);

	var _latlng2 = _interopRequireDefault(_latlng);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react.PropTypes.arrayOf(_latlng2.default);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	exports.default = _react.PropTypes.oneOfType([
	// [Number, Number]
	_react.PropTypes.arrayOf(_react.PropTypes.number),
	// {lat: Number, lng: Number}
	_react.PropTypes.shape({
	  lat: _react.PropTypes.number,
	  lng: _react.PropTypes.number
	}),
	// {lat: Number, lon: Number}
	_react.PropTypes.shape({
	  lat: _react.PropTypes.number,
	  lon: _react.PropTypes.number
	})]);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	exports.default = _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	exports.default = _react.PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	exports.default = _react.PropTypes.shape({
	  addLayer: _react.PropTypes.func.isRequired,
	  removeLayer: _react.PropTypes.func.isRequired
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _MapControl2 = __webpack_require__(11);

	var _MapControl3 = _interopRequireDefault(_MapControl2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AttributionControl = function (_MapControl) {
	  _inherits(AttributionControl, _MapControl);

	  function AttributionControl() {
	    _classCallCheck(this, AttributionControl);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AttributionControl).apply(this, arguments));
	  }

	  _createClass(AttributionControl, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.leafletElement = _leaflet.control.attribution(this.props);
	    }
	  }]);

	  return AttributionControl;
	}(_MapControl3.default);

	AttributionControl.propTypes = {
	  prefix: _react.PropTypes.string
	};
	exports.default = AttributionControl;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _controlPosition = __webpack_require__(8);

	var _controlPosition2 = _interopRequireDefault(_controlPosition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MapControl = function (_Component) {
	  _inherits(MapControl, _Component);

	  function MapControl() {
	    _classCallCheck(this, MapControl);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MapControl).apply(this, arguments));
	  }

	  _createClass(MapControl, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.leafletElement.addTo(this.props.map);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.position !== prevProps.position) {
	        this.leafletElement.setPosition(this.props.position);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // this.leafletElement.removeFrom(this.props.map);
	      this.leafletElement.remove();
	    }
	  }, {
	    key: 'getLeafletElement',
	    value: function getLeafletElement() {
	      return this.leafletElement;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);

	  return MapControl;
	}(_react.Component);

	MapControl.propTypes = {
	  map: _react.PropTypes.object,
	  position: _controlPosition2.default
	};
	exports.default = MapControl;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _MapLayer2 = __webpack_require__(13);

	var _MapLayer3 = _interopRequireDefault(_MapLayer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseTileLayer = function (_MapLayer) {
	  _inherits(BaseTileLayer, _MapLayer);

	  function BaseTileLayer() {
	    _classCallCheck(this, BaseTileLayer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseTileLayer).apply(this, arguments));
	  }

	  _createClass(BaseTileLayer, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var _props = this.props;
	      var opacity = _props.opacity;
	      var zIndex = _props.zIndex;

	      if (opacity !== prevProps.opacity) {
	        this.leafletElement.setOpacity(opacity);
	      }
	      if (zIndex !== prevProps.zIndex) {
	        this.leafletElement.setZIndex(zIndex);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);

	  return BaseTileLayer;
	}(_MapLayer3.default);

	BaseTileLayer.propTypes = {
	  opacity: _react.PropTypes.number,
	  zIndex: _react.PropTypes.number
	};
	exports.default = BaseTileLayer;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign2 = __webpack_require__(14);

	var _assign3 = _interopRequireDefault(_assign2);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _leaflet = __webpack_require__(1);

	var _children = __webpack_require__(7);

	var _children2 = _interopRequireDefault(_children);

	var _layerContainer = __webpack_require__(9);

	var _layerContainer2 = _interopRequireDefault(_layerContainer);

	var _MapComponent2 = __webpack_require__(31);

	var _MapComponent3 = _interopRequireDefault(_MapComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MapLayer = function (_MapComponent) {
	  _inherits(MapLayer, _MapComponent);

	  function MapLayer() {
	    _classCallCheck(this, MapLayer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MapLayer).apply(this, arguments));
	  }

	  _createClass(MapLayer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _get(Object.getPrototypeOf(MapLayer.prototype), 'componentDidMount', this).call(this);
	      this.props.layerContainer.addLayer(this.leafletElement);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _get(Object.getPrototypeOf(MapLayer.prototype), 'componentWillUnmount', this).call(this);
	      this.props.layerContainer.removeLayer(this.leafletElement);
	    }
	  }, {
	    key: 'getClonedChildrenWithProps',
	    value: function getClonedChildrenWithProps(extra) {
	      var _props = this.props;
	      var children = _props.children;
	      var map = _props.map;
	      var layerContainer = _props.layerContainer;

	      var props = (0, _assign3.default)({ map: map, layerContainer: layerContainer }, extra);

	      return _react.Children.map(children, function (child) {
	        return child ? (0, _react.cloneElement)(child, props) : null;
	      });
	    }
	  }, {
	    key: 'renderChildrenWithProps',
	    value: function renderChildrenWithProps(props) {
	      var children = this.getClonedChildrenWithProps(props);
	      return _react2.default.createElement(
	        'div',
	        { style: { display: 'none' } },
	        children
	      );
	    }
	  }]);

	  return MapLayer;
	}(_MapComponent3.default);

	MapLayer.propTypes = {
	  children: _children2.default,
	  layerContainer: _layerContainer2.default,
	  map: _react.PropTypes.instanceOf(_leaflet.Map)
	};
	exports.default = MapLayer;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(15),
	    copyObject = __webpack_require__(17),
	    createAssigner = __webpack_require__(18),
	    isArrayLike = __webpack_require__(22),
	    isPrototype = __webpack_require__(28),
	    keys = __webpack_require__(29);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(16);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignValue;


/***/ },
/* 16 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(15);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(19),
	    isIterateeCall = __webpack_require__(21);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(20);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = baseRest;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(23),
	    isFunction = __webpack_require__(25),
	    isLength = __webpack_require__(27);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(24);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(26);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 27 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(30);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	var baseKeys = overArg(nativeKeys, Object);

	module.exports = baseKeys;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Creates a function that invokes `func` with its first argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reduce2 = __webpack_require__(33);

	var _reduce3 = _interopRequireDefault(_reduce2);

	var _keys2 = __webpack_require__(29);

	var _keys3 = _interopRequireDefault(_keys2);

	var _forEach2 = __webpack_require__(34);

	var _forEach3 = _interopRequireDefault(_forEach2);

	var _clone2 = __webpack_require__(35);

	var _clone3 = _interopRequireDefault(_clone2);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _warning = __webpack_require__(62);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EVENTS_RE_LEGACY = /^onLeaflet(.+)$/i;
	var EVENTS_RE = /^on(.+)$/i;

	var MapComponent = function (_Component) {
	  _inherits(MapComponent, _Component);

	  function MapComponent() {
	    _classCallCheck(this, MapComponent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MapComponent).apply(this, arguments));
	  }

	  _createClass(MapComponent, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._leafletEvents = this.extractLeafletEvents(this.props);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.bindLeafletEvents(this._leafletEvents);
	      if (this.props.pane && this.leafletElement) {
	        this.leafletElement.options.pane = this.props.pane;
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var next = this.extractLeafletEvents(nextProps);
	      this._leafletEvents = this.bindLeafletEvents(next, this._leafletEvents);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var el = this.leafletElement;
	      if (!el) return;

	      (0, _forEach3.default)(this._leafletEvents, function (cb, ev) {
	        el.off(ev, cb);
	      });
	    }
	  }, {
	    key: 'getLeafletElement',
	    value: function getLeafletElement() {
	      return this.leafletElement;
	    }
	  }, {
	    key: 'extractLeafletEvents',
	    value: function extractLeafletEvents(props) {
	      return (0, _reduce3.default)((0, _keys3.default)(props), function (res, prop) {
	        var maybeEvent = prop.replace(EVENTS_RE_LEGACY, function (match, p) {
	          process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '"onLeaflet' + p + '" and other "onLeaflet..." properties are deprecated and support will be removed in the next version, use "on' + p + '" instead.') : void 0;
	          return 'on' + p;
	        });
	        if (EVENTS_RE.test(maybeEvent)) {
	          var key = maybeEvent.replace(EVENTS_RE, function (match, p) {
	            return p.toLowerCase();
	          });
	          res[key] = props[prop];
	        }
	        return res;
	      }, {});
	    }
	  }, {
	    key: 'bindLeafletEvents',
	    value: function bindLeafletEvents() {
	      var next = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var prev = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var el = this.leafletElement;
	      if (!el || !el.on) return;

	      var diff = (0, _clone3.default)(prev);
	      (0, _forEach3.default)(prev, function (cb, ev) {
	        if (!next[ev] || cb !== next[ev]) {
	          delete diff[ev];
	          el.off(ev, cb);
	        }
	      });

	      (0, _forEach3.default)(next, function (cb, ev) {
	        if (!prev[ev] || cb !== prev[ev]) {
	          diff[ev] = cb;
	          el.on(ev, cb);
	        }
	      });

	      return diff;
	    }
	  }, {
	    key: 'fireLeafletEvent',
	    value: function fireLeafletEvent(type, data) {
	      var el = this.leafletElement;
	      if (el) el.fire(type, data);
	    }
	  }]);

	  return MapComponent;
	}(_react.Component);

	MapComponent.propTypes = {
	  pane: _react.PropTypes.string
	};
	exports.default = MapComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 32 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout.call(null, cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout.call(null, timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout.call(null, drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(36);

	/**
	 * Creates a shallow clone of `value`.
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	 * and supports cloning arrays, array buffers, booleans, date objects, maps,
	 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	 * arrays. The own enumerable properties of `arguments` objects are cloned
	 * as plain objects. An empty object is returned for uncloneable values such
	 * as error objects, functions, DOM nodes, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @returns {*} Returns the cloned value.
	 * @see _.cloneDeep
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var shallow = _.clone(objects);
	 * console.log(shallow[0] === objects[0]);
	 * // => true
	 */
	function clone(value) {
	  return baseClone(value, false, true);
	}

	module.exports = clone;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(37),
	    arrayEach = __webpack_require__(44),
	    assignValue = __webpack_require__(15),
	    baseAssign = __webpack_require__(45),
	    cloneBuffer = __webpack_require__(46),
	    copyArray = __webpack_require__(47),
	    copySymbols = __webpack_require__(48),
	    getAllKeys = __webpack_require__(50),
	    getTag = __webpack_require__(54),
	    initCloneArray = __webpack_require__(55),
	    initCloneByTag = __webpack_require__(56),
	    initCloneObject = __webpack_require__(57),
	    isArray = __webpack_require__(53),
	    isBuffer = __webpack_require__(60),
	    isHostObject = __webpack_require__(61),
	    isObject = __webpack_require__(26),
	    keys = __webpack_require__(29);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  if (!isFull) {
	    stack['delete'](value);
	  }
	  return result;
	}

	module.exports = baseClone;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(38),
	    listCacheDelete = __webpack_require__(39),
	    listCacheGet = __webpack_require__(41),
	    listCacheHas = __webpack_require__(42),
	    listCacheSet = __webpack_require__(43);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	module.exports = listCacheClear;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(40);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(16);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(40);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(40);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(40);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(17),
	    keys = __webpack_require__(29);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(17),
	    getSymbols = __webpack_require__(49);

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(51),
	    getSymbols = __webpack_require__(49),
	    keys = __webpack_require__(29);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(52),
	    isArray = __webpack_require__(53);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(58),
	    getPrototype = __webpack_require__(59),
	    isPrototype = __webpack_require__(28);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(26);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	module.exports = baseCreate;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(30);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	var getPrototype = overArg(nativeGetPrototype, Object);

	module.exports = getPrototype;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _leaflet = __webpack_require__(1);

	var _BaseTileLayer2 = __webpack_require__(12);

	var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CanvasTileLayer = function (_BaseTileLayer) {
	  _inherits(CanvasTileLayer, _BaseTileLayer);

	  function CanvasTileLayer() {
	    _classCallCheck(this, CanvasTileLayer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CanvasTileLayer).apply(this, arguments));
	  }

	  _createClass(CanvasTileLayer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(CanvasTileLayer.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;

	      var props = _objectWithoutProperties(_props, ['map', 'layerContainer']);

	      this.leafletElement = _leaflet.tileLayer.canvas(props);
	    }
	  }]);

	  return CanvasTileLayer;
	}(_BaseTileLayer3.default);

	exports.default = CanvasTileLayer;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _latlng = __webpack_require__(6);

	var _latlng2 = _interopRequireDefault(_latlng);

	var _Path2 = __webpack_require__(65);

	var _Path3 = _interopRequireDefault(_Path2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Circle = function (_Path) {
	  _inherits(Circle, _Path);

	  function Circle() {
	    _classCallCheck(this, Circle);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Circle).apply(this, arguments));
	  }

	  _createClass(Circle, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Circle.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var center = _props.center;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;
	      var radius = _props.radius;

	      var props = _objectWithoutProperties(_props, ['center', 'map', 'layerContainer', 'radius']);

	      this.leafletElement = (0, _leaflet.circle)(center, radius, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.center !== prevProps.center) {
	        this.leafletElement.setLatLng(this.props.center);
	      }
	      if (this.props.radius !== prevProps.radius) {
	        this.leafletElement.setRadius(this.props.radius);
	      }
	      this.setStyleIfChanged(prevProps, this.props);
	    }
	  }]);

	  return Circle;
	}(_Path3.default);

	Circle.propTypes = {
	  center: _latlng2.default.isRequired,
	  radius: _react.PropTypes.number.isRequired
	};
	exports.default = Circle;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _pick2 = __webpack_require__(66);

	var _pick3 = _interopRequireDefault(_pick2);

	var _isEqual2 = __webpack_require__(72);

	var _isEqual3 = _interopRequireDefault(_isEqual2);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _MapLayer2 = __webpack_require__(13);

	var _MapLayer3 = _interopRequireDefault(_MapLayer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OPTIONS = ['stroke', 'color', 'weight', 'opacity', 'fill', 'fillColor', 'fillOpacity', 'fillRule', 'dashArray', 'lineCap', 'lineJoin', 'clickable', 'pointerEvents', 'className'];

	var Path = function (_MapLayer) {
	  _inherits(Path, _MapLayer);

	  function Path() {
	    _classCallCheck(this, Path);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Path).apply(this, arguments));
	  }

	  _createClass(Path, [{
	    key: 'getPathOptions',
	    value: function getPathOptions(props) {
	      return (0, _pick3.default)(props, OPTIONS);
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
	      if (!(0, _isEqual3.default)(nextStyle, this.getPathOptions(fromProps))) {
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
	}(_MapLayer3.default);

	exports.default = Path;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(67),
	    baseFlatten = __webpack_require__(68),
	    basePick = __webpack_require__(69),
	    baseRest = __webpack_require__(19),
	    toKey = __webpack_require__(71);

	/**
	 * Creates an object composed of the picked `object` properties.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pick(object, ['a', 'c']);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var pick = baseRest(function(object, props) {
	  return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
	});

	module.exports = pick;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Gets the first element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias first
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the first element of `array`.
	 * @example
	 *
	 * _.head([1, 2, 3]);
	 * // => 1
	 *
	 * _.head([]);
	 * // => undefined
	 */
	function head(array) {
	  return (array && array.length) ? array[0] : undefined;
	}

	module.exports = head;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var basePickBy = __webpack_require__(70);

	/**
	 * The base implementation of `_.pick` without support for individual
	 * property identifiers.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 */
	function basePick(object, props) {
	  object = Object(object);
	  return basePickBy(object, props, function(value, key) {
	    return key in object;
	  });
	}

	module.exports = basePick;


/***/ },
/* 70 */
/***/ function(module, exports) {

	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick from.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, props, predicate) {
	  var index = -1,
	      length = props.length,
	      result = {};

	  while (++index < length) {
	    var key = props[index],
	        value = object[key];

	    if (predicate(value, key)) {
	      result[key] = value;
	    }
	  }
	  return result;
	}

	module.exports = basePickBy;


/***/ },
/* 71 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(73);

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are **not** supported.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent,
	 *  else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}

	module.exports = isEqual;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(74),
	    isObject = __webpack_require__(26),
	    isObjectLike = __webpack_require__(85);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(37),
	    equalArrays = __webpack_require__(75),
	    equalByTag = __webpack_require__(81),
	    equalObjects = __webpack_require__(82),
	    getTag = __webpack_require__(54),
	    isArray = __webpack_require__(53),
	    isHostObject = __webpack_require__(61),
	    isTypedArray = __webpack_require__(84);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(76),
	    arraySome = __webpack_require__(80);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(77),
	    setCacheAdd = __webpack_require__(78),
	    setCacheHas = __webpack_require__(79);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(38),
	    listCacheDelete = __webpack_require__(39),
	    listCacheGet = __webpack_require__(41),
	    listCacheHas = __webpack_require__(42),
	    listCacheSet = __webpack_require__(43);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 79 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 80 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(83),
	    keys = __webpack_require__(29);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(59);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return object != null &&
	    (hasOwnProperty.call(object, key) ||
	      (typeof object == 'object' && key in object && getPrototype(object) === null));
	}

	module.exports = baseHas;


/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 85 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _latlng = __webpack_require__(6);

	var _latlng2 = _interopRequireDefault(_latlng);

	var _Path2 = __webpack_require__(65);

	var _Path3 = _interopRequireDefault(_Path2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CircleMarker = function (_Path) {
	  _inherits(CircleMarker, _Path);

	  function CircleMarker() {
	    _classCallCheck(this, CircleMarker);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CircleMarker).apply(this, arguments));
	  }

	  _createClass(CircleMarker, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(CircleMarker.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var center = _props.center;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;

	      var props = _objectWithoutProperties(_props, ['center', 'map', 'layerContainer']);

	      this.leafletElement = (0, _leaflet.circleMarker)(center, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.center !== prevProps.center) {
	        this.leafletElement.setLatLng(this.props.center);
	      }
	      if (this.props.radius !== prevProps.radius) {
	        this.leafletElement.setRadius(this.props.radius);
	      }
	      this.setStyleIfChanged(prevProps, this.props);
	    }
	  }]);

	  return CircleMarker;
	}(_Path3.default);

	CircleMarker.propTypes = {
	  center: _latlng2.default.isRequired,
	  radius: _react.PropTypes.number
	};
	exports.default = CircleMarker;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _leaflet = __webpack_require__(1);

	var _Path2 = __webpack_require__(65);

	var _Path3 = _interopRequireDefault(_Path2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FeatureGroup = function (_Path) {
	  _inherits(FeatureGroup, _Path);

	  function FeatureGroup() {
	    _classCallCheck(this, FeatureGroup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FeatureGroup).apply(this, arguments));
	  }

	  _createClass(FeatureGroup, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.leafletElement = (0, _leaflet.featureGroup)();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _get(Object.getPrototypeOf(FeatureGroup.prototype), 'componentDidMount', this).call(this);
	      this.setStyle(this.props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      this.setStyleIfChanged(prevProps, this.props);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.renderChildrenWithProps({
	        layerContainer: this.leafletElement,
	        popupContainer: this.leafletElement
	      });
	    }
	  }]);

	  return FeatureGroup;
	}(_Path3.default);

	exports.default = FeatureGroup;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isFunction2 = __webpack_require__(25);

	var _isFunction3 = _interopRequireDefault(_isFunction2);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _Path2 = __webpack_require__(65);

	var _Path3 = _interopRequireDefault(_Path2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var GeoJson = function (_Path) {
	  _inherits(GeoJson, _Path);

	  function GeoJson() {
	    _classCallCheck(this, GeoJson);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GeoJson).apply(this, arguments));
	  }

	  _createClass(GeoJson, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(GeoJson.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var data = _props.data;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;

	      var props = _objectWithoutProperties(_props, ['data', 'map', 'layerContainer']);

	      this.leafletElement = (0, _leaflet.geoJson)(data, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if ((0, _isFunction3.default)(this.props.style)) {
	        this.setStyle(this.props.style);
	      } else {
	        this.setStyleIfChanged(prevProps, this.props);
	      }
	    }
	  }]);

	  return GeoJson;
	}(_Path3.default);

	GeoJson.propTypes = {
	  data: _react.PropTypes.object.isRequired
	};
	exports.default = GeoJson;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _bounds = __webpack_require__(3);

	var _bounds2 = _interopRequireDefault(_bounds);

	var _MapLayer2 = __webpack_require__(13);

	var _MapLayer3 = _interopRequireDefault(_MapLayer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ImageOverlay = function (_MapLayer) {
	  _inherits(ImageOverlay, _MapLayer);

	  function ImageOverlay() {
	    _classCallCheck(this, ImageOverlay);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageOverlay).apply(this, arguments));
	  }

	  _createClass(ImageOverlay, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(ImageOverlay.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var bounds = _props.bounds;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;
	      var url = _props.url;

	      var props = _objectWithoutProperties(_props, ['bounds', 'map', 'layerContainer', 'url']);

	      this.leafletElement = (0, _leaflet.imageOverlay)(url, bounds, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.bounds !== prevProps.bounds) {
	        this.leafletElement.setBounds((0, _leaflet.latLngBounds)(this.props.bounds));
	      }
	      if (this.props.url !== prevProps.url) {
	        this.leafletElement.setUrl(this.props.url);
	      }
	      if (this.props.opacity !== prevProps.opacity) {
	        this.leafletElement.setOpacity(this.props.opacity);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);

	  return ImageOverlay;
	}(_MapLayer3.default);

	ImageOverlay.propTypes = {
	  attribution: _react.PropTypes.string,
	  bounds: _bounds2.default.isRequired,
	  opacity: _react.PropTypes.number,
	  url: _react.PropTypes.string.isRequired
	};
	exports.default = ImageOverlay;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _leaflet = __webpack_require__(1);

	var _MapLayer2 = __webpack_require__(13);

	var _MapLayer3 = _interopRequireDefault(_MapLayer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LayerGroup = function (_MapLayer) {
	  _inherits(LayerGroup, _MapLayer);

	  function LayerGroup() {
	    _classCallCheck(this, LayerGroup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LayerGroup).apply(this, arguments));
	  }

	  _createClass(LayerGroup, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(LayerGroup.prototype), 'componentWillMount', this).call(this);
	      this.leafletElement = (0, _leaflet.layerGroup)();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.renderChildrenWithProps({
	        pane: this.props.pane,
	        layerContainer: this.leafletElement
	      });
	    }
	  }]);

	  return LayerGroup;
	}(_MapLayer3.default);

	exports.default = LayerGroup;

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign2 = __webpack_require__(14);

	var _assign3 = _interopRequireDefault(_assign2);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _leaflet = __webpack_require__(1);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(62);

	var _warning2 = _interopRequireDefault(_warning);

	var _children2 = __webpack_require__(7);

	var _children3 = _interopRequireDefault(_children2);

	var _layerContainer = __webpack_require__(9);

	var _layerContainer2 = _interopRequireDefault(_layerContainer);

	var _MapControl2 = __webpack_require__(11);

	var _MapControl3 = _interopRequireDefault(_MapControl2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var controlledLayerPropTypes = {
	  addBaseLayer: _react.PropTypes.func,
	  addOverlay: _react.PropTypes.func,
	  checked: _react.PropTypes.bool,
	  children: _react.PropTypes.node.isRequired,
	  map: _react.PropTypes.instanceOf(_leaflet.Map),
	  name: _react.PropTypes.string.isRequired,
	  removeLayer: _react.PropTypes.func,
	  removeLayerControl: _react.PropTypes.func
	};

	// Abtract class for layer container, extended by BaseLayer and Overlay

	var ControlledLayer = function (_Component) {
	  _inherits(ControlledLayer, _Component);

	  function ControlledLayer() {
	    _classCallCheck(this, ControlledLayer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ControlledLayer).apply(this, arguments));
	  }

	  _createClass(ControlledLayer, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(_ref) {
	      var checked = _ref.checked;
	      var map = _ref.map;

	      // Handle dynamically (un)checking the layer => adding/removing from the map
	      if (checked && !this.props.checked) {
	        map.addLayer(this.layer);
	      } else if (this.props.checked && !checked) {
	        map.removeLayer(this.layer);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.removeLayerControl(this.layer);
	    }
	  }, {
	    key: 'removeLayer',
	    value: function removeLayer(layer) {
	      this.props.removeLayer(layer);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return (0, _react.cloneElement)(_react.Children.only(this.props.children), {
	        // Proxy layer container method calls to local methods
	        layerContainer: {
	          addLayer: this.addLayer.bind(this),
	          removeLayer: this.removeLayer.bind(this)
	        },
	        map: this.props.map
	      });
	    }
	  }]);

	  return ControlledLayer;
	}(_react.Component);

	ControlledLayer.propTypes = controlledLayerPropTypes;

	var BaseLayer = function (_ControlledLayer) {
	  _inherits(BaseLayer, _ControlledLayer);

	  function BaseLayer() {
	    _classCallCheck(this, BaseLayer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseLayer).apply(this, arguments));
	  }

	  _createClass(BaseLayer, [{
	    key: 'addLayer',
	    value: function addLayer(layer) {
	      this.layer = layer; // Keep layer reference to handle dynamic changes of props
	      var _props = this.props;
	      var addBaseLayer = _props.addBaseLayer;
	      var checked = _props.checked;
	      var name = _props.name;

	      addBaseLayer(layer, name, checked);
	    }
	  }]);

	  return BaseLayer;
	}(ControlledLayer);

	BaseLayer.propTypes = controlledLayerPropTypes;

	var Overlay = function (_ControlledLayer2) {
	  _inherits(Overlay, _ControlledLayer2);

	  function Overlay() {
	    _classCallCheck(this, Overlay);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Overlay).apply(this, arguments));
	  }

	  _createClass(Overlay, [{
	    key: 'addLayer',
	    value: function addLayer(layer) {
	      this.layer = layer; // Keep layer reference to handle dynamic changes of props
	      var _props2 = this.props;
	      var addOverlay = _props2.addOverlay;
	      var checked = _props2.checked;
	      var name = _props2.name;

	      addOverlay(layer, name, checked);
	    }
	  }]);

	  return Overlay;
	}(ControlledLayer);

	Overlay.propTypes = controlledLayerPropTypes;

	var LayersControl = function (_MapControl) {
	  _inherits(LayersControl, _MapControl);

	  function LayersControl() {
	    _classCallCheck(this, LayersControl);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LayersControl).apply(this, arguments));
	  }

	  _createClass(LayersControl, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props3 = this.props;
	      var baseLayers = _props3.baseLayers;
	      var _children = _props3.children;
	      var _lc = _props3.layerContainer;
	      var _map = _props3.map;
	      var overlays = _props3.overlays;

	      var options = _objectWithoutProperties(_props3, ['baseLayers', 'children', 'layerContainer', 'map', 'overlays']);

	      // Pre-v0.11 behavior, warn in v0.11, remove in v0.12


	      this.legacy = !!(baseLayers || overlays);

	      if (this.legacy) {
	        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'The "baseLayers" and "overlays" properties for "LayersControl" are deprecated and will be removed in the next version. You should use the "LayersControl.BaseLayer" and "LayersControl.Overlay" instead, see the documentation for more information.') : void 0;
	        this.leafletElement = _leaflet.control.layers(baseLayers, overlays, options);
	      } else {
	        this.leafletElement = _leaflet.control.layers(undefined, undefined, options);
	        this.controlProps = {
	          addBaseLayer: this.addBaseLayer.bind(this),
	          addOverlay: this.addOverlay.bind(this),
	          removeLayer: this.removeLayer.bind(this),
	          removeLayerControl: this.removeLayerControl.bind(this)
	        };
	      }
	    }
	  }, {
	    key: 'addBaseLayer',
	    value: function addBaseLayer(layer, name) {
	      var checked = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	      if (checked) {
	        this.props.map.addLayer(layer);
	      }
	      this.leafletElement.addBaseLayer(layer, name);
	    }
	  }, {
	    key: 'addOverlay',
	    value: function addOverlay(layer, name) {
	      var checked = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	      if (checked) {
	        this.props.map.addLayer(layer);
	      }
	      this.leafletElement.addOverlay(layer, name);
	    }
	  }, {
	    key: 'removeLayer',
	    value: function removeLayer(layer) {
	      this.props.map.removeLayer(layer);
	    }
	  }, {
	    key: 'removeLayerControl',
	    value: function removeLayerControl(layer) {
	      this.leafletElement.removeLayer(layer);
	    }
	  }, {
	    key: 'getClonedChildrenWithProps',
	    value: function getClonedChildrenWithProps(extra) {
	      var _props4 = this.props;
	      var children = _props4.children;
	      var layerContainer = _props4.layerContainer;
	      var map = _props4.map;

	      var props = (0, _assign3.default)({ layerContainer: layerContainer, map: map }, extra);

	      return _react.Children.map(children, function (child) {
	        return child ? (0, _react.cloneElement)(child, props) : null;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.legacy) {
	        return null;
	      }

	      var children = this.getClonedChildrenWithProps(this.controlProps);
	      return _react2.default.createElement(
	        'div',
	        { style: { display: 'none' } },
	        children
	      );
	    }
	  }]);

	  return LayersControl;
	}(_MapControl3.default);

	LayersControl.propTypes = {
	  baseLayers: _react.PropTypes.object,
	  children: _children3.default,
	  layerContainer: _layerContainer2.default,
	  map: _react.PropTypes.instanceOf(_leaflet.Map),
	  overlays: _react.PropTypes.object
	};
	exports.default = LayersControl;


	LayersControl.BaseLayer = BaseLayer;
	LayersControl.Overlay = Overlay;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _uniqueId2 = __webpack_require__(93);

	var _uniqueId3 = _interopRequireDefault(_uniqueId2);

	var _omit2 = __webpack_require__(95);

	var _omit3 = _interopRequireDefault(_omit2);

	var _isUndefined2 = __webpack_require__(111);

	var _isUndefined3 = _interopRequireDefault(_isUndefined2);

	var _isArray2 = __webpack_require__(53);

	var _isArray3 = _interopRequireDefault(_isArray2);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _leaflet = __webpack_require__(1);

	var _leaflet2 = _interopRequireDefault(_leaflet);

	var _bounds = __webpack_require__(3);

	var _bounds2 = _interopRequireDefault(_bounds);

	var _children = __webpack_require__(7);

	var _children2 = _interopRequireDefault(_children);

	var _latlng = __webpack_require__(6);

	var _latlng2 = _interopRequireDefault(_latlng);

	var _MapComponent2 = __webpack_require__(31);

	var _MapComponent3 = _interopRequireDefault(_MapComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-did-mount-set-state */

	var normalizeCenter = function normalizeCenter(pos) {
	  return (0, _isArray3.default)(pos) ? pos : [pos.lat, pos.lng || pos.lon];
	};

	var Map = function (_MapComponent) {
	  _inherits(Map, _MapComponent);

	  function Map(props) {
	    _classCallCheck(this, Map);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Map).call(this, props));

	    _this.state = {
	      id: props.id || (0, _uniqueId3.default)('map')
	    };
	    return _this;
	  }

	  _createClass(Map, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var props = (0, _omit3.default)(this.props, ['children', 'className', 'id', 'style']);
	      this.leafletElement = _leaflet2.default.map(this.state.id, props);
	      _get(Object.getPrototypeOf(Map.prototype), 'componentDidMount', this).call(this);
	      this.setState({ map: this.leafletElement });
	      if (!(0, _isUndefined3.default)(props.bounds)) {
	        this.leafletElement.fitBounds(props.bounds, props.boundsOptions);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var _props = this.props;
	      var bounds = _props.bounds;
	      var boundsOptions = _props.boundsOptions;
	      var center = _props.center;
	      var maxBounds = _props.maxBounds;
	      var zoom = _props.zoom;
	      var animate = _props.animate;

	      if (center && this.shouldUpdateCenter(center, prevProps.center)) {
	        this.leafletElement.setView(center, zoom, { animate: animate });
	      } else if (zoom && zoom !== prevProps.zoom) {
	        this.leafletElement.setZoom(zoom);
	      }
	      if (maxBounds && this.shouldUpdateBounds(maxBounds, prevProps.maxBounds)) {
	        this.leafletElement.setMaxBounds(maxBounds);
	      }
	      if (bounds && (this.shouldUpdateBounds(bounds, prevProps.bounds) || boundsOptions !== prevProps.boundsOptions)) {
	        this.leafletElement.fitBounds(bounds, boundsOptions);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _get(Object.getPrototypeOf(Map.prototype), 'componentWillUnmount', this).call(this);
	      this.leafletElement.remove();
	    }
	  }, {
	    key: 'shouldUpdateCenter',
	    value: function shouldUpdateCenter(next, prev) {
	      if (!prev) return true;
	      next = normalizeCenter(next);
	      prev = normalizeCenter(prev);
	      return next[0] !== prev[0] || next[1] !== prev[1];
	    }
	  }, {
	    key: 'shouldUpdateBounds',
	    value: function shouldUpdateBounds(next, prev) {
	      if (!prev) return true;
	      next = _leaflet2.default.latLngBounds(next);
	      prev = _leaflet2.default.latLngBounds(prev);
	      return !next.equals(prev);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var map = this.leafletElement;
	      var children = map ? _react2.default.Children.map(this.props.children, function (child) {
	        return child ? _react2.default.cloneElement(child, { map: map, layerContainer: map }) : null;
	      }) : null;

	      return _react2.default.createElement(
	        'div',
	        {
	          className: this.props.className,
	          id: this.state.id,
	          style: this.props.style },
	        children
	      );
	    }
	  }]);

	  return Map;
	}(_MapComponent3.default);

	Map.propTypes = {
	  animate: _react.PropTypes.bool,
	  bounds: _bounds2.default,
	  boundsOptions: _react.PropTypes.object,
	  center: _latlng2.default,
	  children: _children2.default,
	  className: _react.PropTypes.string,
	  id: _react.PropTypes.string,
	  maxBounds: _bounds2.default,
	  maxZoom: _react.PropTypes.number,
	  minZoom: _react.PropTypes.number,
	  style: _react.PropTypes.object,
	  zoom: _react.PropTypes.number
	};
	Map.defaultProps = {
	  animate: false
	};
	exports.default = Map;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(94);

	/** Used to generate unique IDs. */
	var idCounter = 0;

	/**
	 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {string} [prefix=''] The value to prefix the ID with.
	 * @returns {string} Returns the unique ID.
	 * @example
	 *
	 * _.uniqueId('contact_');
	 * // => 'contact_104'
	 *
	 * _.uniqueId();
	 * // => '105'
	 */
	function uniqueId(prefix) {
	  var id = ++idCounter;
	  return toString(prefix) + id;
	}

	module.exports = uniqueId;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(67),
	    baseDifference = __webpack_require__(96),
	    baseFlatten = __webpack_require__(68),
	    basePick = __webpack_require__(69),
	    baseRest = __webpack_require__(19),
	    getAllKeysIn = __webpack_require__(104),
	    toKey = __webpack_require__(71);

	/**
	 * The opposite of `_.pick`; this method creates an object composed of the
	 * own and inherited enumerable string keyed properties of `object` that are
	 * not omitted.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property identifiers to omit.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.omit(object, ['a', 'c']);
	 * // => { 'b': '2' }
	 */
	var omit = baseRest(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  props = arrayMap(baseFlatten(props, 1), toKey);
	  return basePick(object, baseDifference(getAllKeysIn(object), props));
	});

	module.exports = omit;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(76),
	    arrayIncludes = __webpack_require__(97),
	    arrayIncludesWith = __webpack_require__(101),
	    arrayMap = __webpack_require__(67),
	    baseUnary = __webpack_require__(102),
	    cacheHas = __webpack_require__(103);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(98);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(99),
	    baseIsNaN = __webpack_require__(100);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return baseFindIndex(array, baseIsNaN, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOf;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ },
/* 100 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ },
/* 101 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ },
/* 102 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * Checks if a cache value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(51),
	    getSymbolsIn = __webpack_require__(105),
	    keysIn = __webpack_require__(106);

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	module.exports = getAllKeysIn;


/***/ },
/* 105 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var Reflect = __webpack_require__(107),
	    iteratorToArray = __webpack_require__(110);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var enumerate = Reflect ? Reflect.enumerate : undefined,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.keysIn` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  object = object == null ? object : Object(object);

	  var result = [];
	  for (var key in object) {
	    result.push(key);
	  }
	  return result;
	}

	// Fallback for IE < 9 with es6-shim.
	if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
	  baseKeysIn = function(object) {
	    return iteratorToArray(enumerate(object));
	  };
	}

	module.exports = baseKeysIn;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(108);

	/** Built-in value references. */
	var Reflect = root.Reflect;

	module.exports = Reflect;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(109);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 109 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function iteratorToArray(iterator) {
	  var data,
	      result = [];

	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}

	module.exports = iteratorToArray;


/***/ },
/* 111 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */
	function isUndefined(value) {
	  return value === undefined;
	}

	module.exports = isUndefined;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _latlng = __webpack_require__(6);

	var _latlng2 = _interopRequireDefault(_latlng);

	var _MapLayer2 = __webpack_require__(13);

	var _MapLayer3 = _interopRequireDefault(_MapLayer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Marker = function (_MapLayer) {
	  _inherits(Marker, _MapLayer);

	  function Marker() {
	    _classCallCheck(this, Marker);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Marker).apply(this, arguments));
	  }

	  _createClass(Marker, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Marker.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;
	      var position = _props.position;

	      var props = _objectWithoutProperties(_props, ['map', 'layerContainer', 'position']);

	      this.leafletElement = (0, _leaflet.marker)(position, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.position !== prevProps.position) {
	        this.leafletElement.setLatLng(this.props.position);
	      }
	      if (this.props.icon !== prevProps.icon) {
	        this.leafletElement.setIcon(this.props.icon);
	      }
	      if (this.props.zIndexOffset !== prevProps.zIndexOffset) {
	        this.leafletElement.setZIndexOffset(this.props.zIndexOffset);
	      }
	      if (this.props.opacity !== prevProps.opacity) {
	        this.leafletElement.setOpacity(this.props.opacity);
	      }
	      if (this.props.draggable !== prevProps.draggable) {
	        if (this.props.draggable) {
	          this.leafletElement.dragging.enable();
	        } else {
	          this.leafletElement.dragging.disable();
	        }
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

	  return Marker;
	}(_MapLayer3.default);

	Marker.propTypes = {
	  icon: _react.PropTypes.instanceOf(_leaflet.Icon),
	  opacity: _react.PropTypes.number,
	  position: _latlng2.default.isRequired,
	  zIndexOffset: _react.PropTypes.number
	};
	exports.default = Marker;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _latlngList = __webpack_require__(5);

	var _latlngList2 = _interopRequireDefault(_latlngList);

	var _Path2 = __webpack_require__(65);

	var _Path3 = _interopRequireDefault(_Path2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MultiPolygon = function (_Path) {
	  _inherits(MultiPolygon, _Path);

	  function MultiPolygon() {
	    _classCallCheck(this, MultiPolygon);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MultiPolygon).apply(this, arguments));
	  }

	  _createClass(MultiPolygon, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(MultiPolygon.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;
	      var polygons = _props.polygons;

	      var props = _objectWithoutProperties(_props, ['map', 'layerContainer', 'polygons']);

	      this.leafletElement = (0, _leaflet.multiPolygon)(polygons, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.polygons !== prevProps.polygons) {
	        this.leafletElement.setLatLngs(this.props.polygons);
	      }
	      this.setStyleIfChanged(prevProps, this.props);
	    }
	  }]);

	  return MultiPolygon;
	}(_Path3.default);

	MultiPolygon.propTypes = {
	  polygons: _react.PropTypes.arrayOf(_latlngList2.default).isRequired
	};
	exports.default = MultiPolygon;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _latlngList = __webpack_require__(5);

	var _latlngList2 = _interopRequireDefault(_latlngList);

	var _Path2 = __webpack_require__(65);

	var _Path3 = _interopRequireDefault(_Path2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MultiPolyline = function (_Path) {
	  _inherits(MultiPolyline, _Path);

	  function MultiPolyline() {
	    _classCallCheck(this, MultiPolyline);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MultiPolyline).apply(this, arguments));
	  }

	  _createClass(MultiPolyline, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(MultiPolyline.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;
	      var polylines = _props.polylines;

	      var props = _objectWithoutProperties(_props, ['map', 'layerContainer', 'polylines']);

	      this.leafletElement = (0, _leaflet.multiPolyline)(polylines, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.polylines !== prevProps.polylines) {
	        this.leafletElement.setLatLngs(this.props.polylines);
	      }
	      this.setStyleIfChanged(prevProps, this.props);
	    }
	  }]);

	  return MultiPolyline;
	}(_Path3.default);

	MultiPolyline.propTypes = {
	  polylines: _react.PropTypes.arrayOf(_latlngList2.default).isRequired
	};
	exports.default = MultiPolyline;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _latlngList = __webpack_require__(5);

	var _latlngList2 = _interopRequireDefault(_latlngList);

	var _Path2 = __webpack_require__(65);

	var _Path3 = _interopRequireDefault(_Path2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Polygon = function (_Path) {
	  _inherits(Polygon, _Path);

	  function Polygon() {
	    _classCallCheck(this, Polygon);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Polygon).apply(this, arguments));
	  }

	  _createClass(Polygon, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Polygon.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;
	      var positions = _props.positions;

	      var props = _objectWithoutProperties(_props, ['map', 'layerContainer', 'positions']);

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
	  }]);

	  return Polygon;
	}(_Path3.default);

	Polygon.propTypes = {
	  positions: _react.PropTypes.oneOfType([_latlngList2.default, _react.PropTypes.arrayOf(_latlngList2.default)]).isRequired
	};
	exports.default = Polygon;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _leaflet = __webpack_require__(1);

	var _latlngList = __webpack_require__(5);

	var _latlngList2 = _interopRequireDefault(_latlngList);

	var _Path2 = __webpack_require__(65);

	var _Path3 = _interopRequireDefault(_Path2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Polyline = function (_Path) {
	  _inherits(Polyline, _Path);

	  function Polyline() {
	    _classCallCheck(this, Polyline);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Polyline).apply(this, arguments));
	  }

	  _createClass(Polyline, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Polyline.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;
	      var positions = _props.positions;

	      var props = _objectWithoutProperties(_props, ['map', 'layerContainer', 'positions']);

	      this.leafletElement = (0, _leaflet.polyline)(positions, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.positions !== prevProps.positions) {
	        this.leafletElement.setLatLngs(this.props.positions);
	      }
	      this.setStyleIfChanged(prevProps, this.props);
	    }
	  }]);

	  return Polyline;
	}(_Path3.default);

	Polyline.propTypes = {
	  positions: _latlngList2.default.isRequired
	};
	exports.default = Polyline;

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _reactDom = __webpack_require__(118);

	var _leaflet = __webpack_require__(1);

	var _latlng = __webpack_require__(6);

	var _latlng2 = _interopRequireDefault(_latlng);

	var _MapComponent2 = __webpack_require__(31);

	var _MapComponent3 = _interopRequireDefault(_MapComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Popup = function (_MapComponent) {
	  _inherits(Popup, _MapComponent);

	  function Popup() {
	    _classCallCheck(this, Popup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Popup).apply(this, arguments));
	  }

	  _createClass(Popup, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Popup.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var _children = _props.children;
	      var _map = _props.map;
	      var popupContainer = _props.popupContainer;

	      var props = _objectWithoutProperties(_props, ['children', 'map', 'popupContainer']);

	      this.leafletElement = (0, _leaflet.popup)(props, popupContainer);
	      this.leafletElement.on('open', this.renderPopupContent.bind(this));
	      this.leafletElement.on('close', this.removePopupContent.bind(this));
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props2 = this.props;
	      var map = _props2.map;
	      var popupContainer = _props2.popupContainer;
	      var position = _props2.position;

	      var el = this.leafletElement;

	      if (popupContainer) {
	        // Attach to container component
	        popupContainer.bindPopup(el);
	      } else {
	        // Attach to a Map
	        if (position) {
	          el.setLatLng(position);
	        }
	        el.openOn(map);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      var position = this.props.position;


	      if (position !== prevProps.position) {
	        this.leafletElement.setLatLng(position);
	      }

	      if (this.leafletElement._isOpen) {
	        this.renderPopupContent();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _get(Object.getPrototypeOf(Popup.prototype), 'componentWillUnmount', this).call(this);
	      this.removePopupContent();
	      this.props.map.removeLayer(this.leafletElement);
	    }
	  }, {
	    key: 'renderPopupContent',
	    value: function renderPopupContent() {
	      if (this.props.children) {
	        (0, _reactDom.render)(_react.Children.only(this.props.children), this.leafletElement._contentNode);

	        this.leafletElement._updateLayout();
	        this.leafletElement._updatePosition();
	        this.leafletElement._adjustPan();
	      } else {
	        this.removePopupContent();
	      }
	    }
	  }, {
	    key: 'removePopupContent',
	    value: function removePopupContent() {
	      if (this.leafletElement._contentNode) {
	        (0, _reactDom.unmountComponentAtNode)(this.leafletElement._contentNode);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);

	  return Popup;
	}(_MapComponent3.default);

	Popup.propTypes = {
	  children: _react.PropTypes.node,
	  map: _react.PropTypes.instanceOf(_leaflet.Map),
	  popupContainer: _react.PropTypes.object,
	  position: _latlng2.default
	};
	exports.default = Popup;

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_118__;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _leaflet = __webpack_require__(1);

	var _bounds = __webpack_require__(3);

	var _bounds2 = _interopRequireDefault(_bounds);

	var _Path2 = __webpack_require__(65);

	var _Path3 = _interopRequireDefault(_Path2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Rectangle = function (_Path) {
	  _inherits(Rectangle, _Path);

	  function Rectangle() {
	    _classCallCheck(this, Rectangle);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Rectangle).apply(this, arguments));
	  }

	  _createClass(Rectangle, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(Rectangle.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var bounds = _props.bounds;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;

	      var props = _objectWithoutProperties(_props, ['bounds', 'map', 'layerContainer']);

	      this.leafletElement = (0, _leaflet.rectangle)(bounds, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.bounds !== prevProps.bounds) {
	        this.leafletElement.setBounds(this.props.bounds);
	      }
	      this.setStyleIfChanged(prevProps, this.props);
	    }
	  }]);

	  return Rectangle;
	}(_Path3.default);

	Rectangle.propTypes = {
	  bounds: _bounds2.default.isRequired
	};
	exports.default = Rectangle;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _MapControl2 = __webpack_require__(11);

	var _MapControl3 = _interopRequireDefault(_MapControl2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ZoomControl = function (_MapControl) {
	  _inherits(ZoomControl, _MapControl);

	  function ZoomControl() {
	    _classCallCheck(this, ZoomControl);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ZoomControl).apply(this, arguments));
	  }

	  _createClass(ZoomControl, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.leafletElement = _leaflet.control.scale(this.props);
	    }
	  }]);

	  return ZoomControl;
	}(_MapControl3.default);

	ZoomControl.propTypes = {
	  imperial: _react.PropTypes.bool,
	  maxWidth: _react.PropTypes.number,
	  metric: _react.PropTypes.bool,
	  updateWhenIdle: _react.PropTypes.bool
	};
	exports.default = ZoomControl;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _BaseTileLayer2 = __webpack_require__(12);

	var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TileLayer = function (_BaseTileLayer) {
	  _inherits(TileLayer, _BaseTileLayer);

	  function TileLayer() {
	    _classCallCheck(this, TileLayer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TileLayer).apply(this, arguments));
	  }

	  _createClass(TileLayer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(TileLayer.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;
	      var url = _props.url;

	      var props = _objectWithoutProperties(_props, ['map', 'layerContainer', 'url']);

	      this.leafletElement = (0, _leaflet.tileLayer)(url, props);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      _get(Object.getPrototypeOf(TileLayer.prototype), 'componentDidUpdate', this).call(this, prevProps);
	      var url = this.props.url;

	      if (url !== prevProps.url) {
	        this.leafletElement.setUrl(url);
	      }
	    }
	  }]);

	  return TileLayer;
	}(_BaseTileLayer3.default);

	TileLayer.propTypes = {
	  url: _react.PropTypes.string.isRequired
	};
	exports.default = TileLayer;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _BaseTileLayer2 = __webpack_require__(12);

	var _BaseTileLayer3 = _interopRequireDefault(_BaseTileLayer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WMSTileLayer = function (_BaseTileLayer) {
	  _inherits(WMSTileLayer, _BaseTileLayer);

	  function WMSTileLayer() {
	    _classCallCheck(this, WMSTileLayer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(WMSTileLayer).apply(this, arguments));
	  }

	  _createClass(WMSTileLayer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _get(Object.getPrototypeOf(WMSTileLayer.prototype), 'componentWillMount', this).call(this);
	      var _props = this.props;
	      var _map = _props.map;
	      var _lc = _props.layerContainer;
	      var url = _props.url;

	      var props = _objectWithoutProperties(_props, ['map', 'layerContainer', 'url']);

	      this.leafletElement = _leaflet.tileLayer.wms(url, props);
	    }
	  }]);

	  return WMSTileLayer;
	}(_BaseTileLayer3.default);

	WMSTileLayer.propTypes = {
	  url: _react.PropTypes.string.isRequired
	};
	exports.default = WMSTileLayer;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _leaflet = __webpack_require__(1);

	var _MapControl2 = __webpack_require__(11);

	var _MapControl3 = _interopRequireDefault(_MapControl2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ZoomControl = function (_MapControl) {
	  _inherits(ZoomControl, _MapControl);

	  function ZoomControl() {
	    _classCallCheck(this, ZoomControl);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ZoomControl).apply(this, arguments));
	  }

	  _createClass(ZoomControl, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.leafletElement = _leaflet.control.zoom(this.props);
	    }
	  }]);

	  return ZoomControl;
	}(_MapControl3.default);

	ZoomControl.propTypes = {
	  zoomInText: _react.PropTypes.string,
	  zoomInTitle: _react.PropTypes.string,
	  zoomOutText: _react.PropTypes.string,
	  zoomOutTitle: _react.PropTypes.string
	};
	exports.default = ZoomControl;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _pick2 = __webpack_require__(66);

	var _pick3 = _interopRequireDefault(_pick2);

	var _isEqual2 = __webpack_require__(72);

	var _isEqual3 = _interopRequireDefault(_isEqual2);

	var _uniqueId2 = __webpack_require__(93);

	var _uniqueId3 = _interopRequireDefault(_uniqueId2);

	var _assign2 = __webpack_require__(14);

	var _assign3 = _interopRequireDefault(_assign2);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _leaflet = __webpack_require__(1);

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

/***/ }
/******/ ])
});
;