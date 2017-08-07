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
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 400 : _ref$height;

  return _react2.default.createElement(
    _recharts.ResponsiveContainer,
    { width: '100%', height: height },
    _react2.default.createElement(
      _recharts.PieChart,
      null,
      _react2.default.createElement(
        _recharts.Pie,
        { isAnimationActive: false, data: data, fill: '#8884d8' },
        data.map(function (entry, index) {
          return _react2.default.createElement(_recharts.Cell, { key: index, fill: colors[index % colors.length] });
        })
      ),
      _react2.default.createElement(_recharts.Tooltip, null),
      _react2.default.createElement(_recharts.Legend, null)
    )
  );
};

exports.default = Chart;