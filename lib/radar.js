'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates a Radar Chart
 * @name LineChart
 * @param {object} options - Rendering options
 * @param {array} options.data - Array of Array's of data to render
 * @param {array} options.colors - The colors for each line
 * @param {array} options.radars - Defines the lines to render
 * @param {string} options.AxisKey - Name of the member to use as the Axis Key
 * @param {number} options.height - Height of the chart in pixels
 * @param {object} options.margin - Margins associated with the axis and data
 * @param {number} options.margin.top - Top margin
 * @param {number} options.margin.left - Left margin
 * @param {number} options.margin.bottom - Bottom margin
 * @param {number} options.margin.right - Right margin
 */
var Chart = function Chart(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      _ref$colors = _ref.colors,
      colors = _ref$colors === undefined ? ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'] : _ref$colors,
      _ref$radars = _ref.radars,
      radars = _ref$radars === undefined ? [] : _ref$radars,
      _ref$axisKey = _ref.axisKey,
      axisKey = _ref$axisKey === undefined ? 'name' : _ref$axisKey,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 400 : _ref$height,
      _ref$margin = _ref.margin,
      margin = _ref$margin === undefined ? { top: 5, right: 30, left: 20, bottom: 5 } : _ref$margin;

  return _react2.default.createElement(
    _recharts.ResponsiveContainer,
    { width: '100%', height: height },
    _react2.default.createElement(
      _recharts.RadarChart,
      { data: data,
        margin: margin },
      _react2.default.createElement(_recharts.PolarGrid, null),
      _react2.default.createElement(_recharts.Tooltip, null),
      _react2.default.createElement(_recharts.Legend, null),
      _react2.default.createElement(_recharts.PolarAngleAxis, { dataKey: axisKey }),
      _react2.default.createElement(_recharts.PolarRadiusAxis, null),
      radars.map(function (dataKey, index) {
        return _react2.default.createElement(_recharts.Radar, { isAnimationActive: false, name: dataKey, key: dataKey, dataKey: dataKey, stroke: colors[index % colors.length], fill: colors[index % colors.length], fillOpacity: 0.6 });
      })
    )
  );
};

exports.default = Chart;