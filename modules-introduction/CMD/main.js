define(function(require, exports, module) {
    var model1 = require('./model1'); //在需要时申明
    console.log(model1.getHello());
    var model2 = require('./model2'); //在需要时申明
    console.log(model2.getHello());
});