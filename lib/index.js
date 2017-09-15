'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Area = require('./Area');

var _Area2 = _interopRequireDefault(_Area);

var _Line = require('./Line');

var _Line2 = _interopRequireDefault(_Line);

var _Bar = require('./Bar');

var _Bar2 = _interopRequireDefault(_Bar);

var _radialbar = require('./radialbar');

var _radialbar2 = _interopRequireDefault(_radialbar);

var _Pie = require('./Pie');

var _Pie2 = _interopRequireDefault(_Pie);

var _scatter = require('./scatter');

var _scatter2 = _interopRequireDefault(_scatter);

var _composed = require('./composed');

var _composed2 = _interopRequireDefault(_composed);

var _radar = require('./radar');

var _radar2 = _interopRequireDefault(_radar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Look at http://formidable.com/open-source/victory/

exports.default = {
  AreaChart: _Area2.default,
  LineChart: _Line2.default,
  BarChart: _Bar2.default,
  RadialBarChart: _radialbar2.default,
  PieChart: _Pie2.default,
  ScatterChart: _scatter2.default,
  ComposedChart: _composed2.default,
  RadarChart: _radar2.default
};