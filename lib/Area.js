'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recharts = require('recharts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chart = function Chart(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      _ref$colors = _ref.colors,
      colors = _ref$colors === undefined ? ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'] : _ref$colors,
      _ref$lines = _ref.lines,
      lines = _ref$lines === undefined ? [] : _ref$lines,
      _ref$XAxisKey = _ref.XAxisKey,
      XAxisKey = _ref$XAxisKey === undefined ? 'name' : _ref$XAxisKey;

  return _react2.default.createElement(
    _recharts.ResponsiveContainer,
    { width: '100%', height: 400 },
    _react2.default.createElement(
      _recharts.AreaChart,
      { data: data,
        margin: { top: 5, right: 30, left: 20, bottom: 5 } },
      _react2.default.createElement(_recharts.XAxis, { dataKey: XAxisKey }),
      _react2.default.createElement(_recharts.YAxis, null),
      _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }),
      _react2.default.createElement(_recharts.Tooltip, null),
      _react2.default.createElement(_recharts.Legend, null),
      lines.map(function (dataKey, index) {
        return _react2.default.createElement(_recharts.Area, { isAnimationActive: false, type: 'monotone', key: dataKey, dataKey: dataKey, stroke: colors[index % colors.length], fillOpacity: 0.1, fill: colors[index % colors.length] });
      })
    )
  );
};

exports.default = Chart;