/**
 * Rollbar.js
 *
 * Cordova Rollbar plugin for version >= 3.0.0
 *
 * Copyright(c) Resgrid 2015 (http://resgrid.com)
 */

var exec = require('cordova/exec');

var Rollbar = {};

Rollbar.init = function(successCallback, errorCallback){
  return exec(successCallback, errorCallback, "CDVRollbar", "init", []);
};

module.exports = Rollbar;
