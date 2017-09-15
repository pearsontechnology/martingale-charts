'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Generates a Scatter Chart
 * @name ScatterChart
 * @param {object} options - Rendering options
 * @param {array} options.data - Array of Array's of data to render
 * @param {array} options.colors - The colors for each dot
 * @param {array} options.scatters - Defines the scatter groups to render
 * @param {string} options.XAxisKey - Name of the member to use as the X Axis Key
 * @param {string} options.YAxisKey - Name of the member to use as the Y Axis Key
 * @param {string} options.ZAxisKey - Name of the member to use as the Z Axis Key (size)
 * @param {string} options.XAxisTitle - Title of the X Axis
 * @param {string} options.YAxisTitle - Title of the Y Axis
 * @param {string} options.ZAxisTitle - Title of the Z Axis
 * @param {string} options.XAxisUnit - Unit of the X Axis
 * @param {string} options.YAxisUnit - Unit of the Y Axis
 * @param {string} options.ZAxisUnit - Unit of the Z Axis
 * @param {string} options.ZAxisScale - How to scale the Z axis values
 * @param {array} options.ZAxisRange - Array of [min, max] size in pixels to render points
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
      _ref$scatters = _ref.scatters,
      scatters = _ref$scatters === undefined ? [] : _ref$scatters,
      _ref$XAxisKey = _ref.XAxisKey,
      XAxisKey = _ref$XAxisKey === undefined ? 'x' : _ref$XAxisKey,
      _ref$YAxisKey = _ref.YAxisKey,
      YAxisKey = _ref$YAxisKey === undefined ? 'y' : _ref$YAxisKey,
      _ref$ZAxisKey = _ref.ZAxisKey,
      ZAxisKey = _ref$ZAxisKey === undefined ? 'z' : _ref$ZAxisKey,
      XAxisTitle = _ref.XAxisTitle,
      YAxisTitle = _ref.YAxisTitle,
      ZAxisTitle = _ref.ZAxisTitle,
      _ref$XAxisUnit = _ref.XAxisUnit,
      XAxisUnit = _ref$XAxisUnit === undefined ? '' : _ref$XAxisUnit,
      _ref$YAxisUnit = _ref.YAxisUnit,
      YAxisUnit = _ref$YAxisUnit === undefined ? '' : _ref$YAxisUnit,
      _ref$ZAxisUnit = _ref.ZAxisUnit,
      ZAxisUnit = _ref$ZAxisUnit === undefined ? '' : _ref$ZAxisUnit,
      _ref$ZAxisScale = _ref.ZAxisScale,
      ZAxisScale = _ref$ZAxisScale === undefined ? 'auto' : _ref$ZAxisScale,
      _ref$ZAxisRange = _ref.ZAxisRange,
      ZAxisRange = _ref$ZAxisRange === undefined ? [10, 100] : _ref$ZAxisRange,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 400 : _ref$height,
      _ref$margin = _ref.margin,
      margin = _ref$margin === undefined ? { top: 5, right: 30, left: 20, bottom: 5 } : _ref$margin;

  return _react2.default.createElement(
    _recharts.ResponsiveContainer,
    { width: '100%', height: height },
    _react2.default.createElement(
      _recharts.ScatterChart,
      { data: data,
        margin: margin },
      _react2.default.createElement(_recharts.XAxis, { dataKey: XAxisKey, name: XAxisTitle || XAxisKey, unit: XAxisUnit }),
      _react2.default.createElement(_recharts.YAxis, { dataKey: YAxisKey, name: YAxisTitle || YAxisKey, unit: YAxisUnit }),
      _react2.default.createElement(_recharts.ZAxis, { scale: ZAxisScale, dataKey: ZAxisKey, range: ZAxisRange, name: ZAxisTitle || ZAxisKey, unit: ZAxisUnit }),
      _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
      _react2.default.createElement(_recharts.Tooltip, null),
      _react2.default.createElement(_recharts.Legend, null),
      scatters.map(function (_ref2, index) {
        var name = _ref2.name,
            data = _ref2.data;
        return _react2.default.createElement(_recharts.Scatter, { key: name, name: name, data: data, fill: colors[index % colors.length] });
      })
    )
  );
};

exports.default = Chart;