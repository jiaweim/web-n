const _ = require('../d3.min.js');

d3.csv('./data/employee.csv', function (data) {
    console.log(data);
});
