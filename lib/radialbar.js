'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates a Bar Chart
 * @name BarChart
 * @param {object} options - Rendering options
 * @param {array} options.data - Array of data to render
 * @param {array} options.colors - The colors for each Bar
 * @param {array} options.bars - Defines the bars to render
 * @param {number} options.height - Height of the chart in pixels
 * @param {boolean} options.clockWise - Bars should go clockwise
 * @param {object} options.margin - Margins associated with the axis and data
 * @param {number} options.margin.top - Top margin
 * @param {number} options.margin.left - Left margin
 * @param {number} options.margin.bottom - Bottom margin
 * @param {number} options.margin.right - Right margin
*/

var Chart = function Chart(_ref) {
  var _ref$data = _ref.data,
      rawData = _ref$data === undefined ? [] : _ref$data,
      _ref$colors = _ref.colors,
      colors = _ref$colors === undefined ? ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'] : _ref$colors,
      _ref$bars = _ref.bars,
      bars = _ref$bars === undefined ? [] : _ref$bars,
      _ref$XAxisKey = _ref.XAxisKey,
      XAxisKey = _ref$XAxisKey === undefined ? 'name' : _ref$XAxisKey,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 400 : _ref$height,
      margin = _ref.margin,
      _ref$clockWise = _ref.clockWise,
      clockWise = _ref$clockWise === undefined ? true : _ref$clockWise;


  var data = rawData.map(function (p, index) {
    return Object.assign({ fill: colors[index % colors.length] }, p);
  });
  return _react2.default.createElement(
    _recharts.ResponsiveContainer,
    { width: '100%', height: height },
    _react2.default.createElement(
      _recharts.RadialBarChart,
      {
        innerRadius: '10%',
        outerRadius: '90%',
        height: height,
        data: data,
        margin: margin },
      _react2.default.createElement(_recharts.Tooltip, null),
      _react2.default.createElement(_recharts.Legend, { iconSize: 10, width: 120, height: 140, layout: 'vertical', verticalAlign: 'middle', align: 'right' }),
      bars.map(function (dataKey, index) {
        return _react2.default.createElement(_recharts.RadialBar, { minAngle: 15, startAngle: 90, endAngle: -270, isAnimationActive: false, key: dataKey, dataKey: dataKey, label: true, background: true, clockWise: clockWise });
      })
    )
  );
};

exports.default = Chart;