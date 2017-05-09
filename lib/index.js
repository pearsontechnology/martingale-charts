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

var _Pie = require('./Pie');

var _Pie2 = _interopRequireDefault(_Pie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  AreaChart: _Area2.default,
  LineChart: _Line2.default,
  BarChart: _Bar2.default,
  PieChart: _Pie2.default
};