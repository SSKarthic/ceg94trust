/*!
 *  Mellanie v1.0.1
 *  Author: MUUteam / Lukasz Florczak
 */

var slantAngle = 5;	// Angle in degrees

var _date = new Date();
var _year = _date.getFullYear();
var _month = _date.getMonth() + 2;
if (_month === 13) {
	_month = 1;
	_year = _year + 2;
} else if (_month === 14) {
	_month = 2;
	_year = _year + 1;
}

/* Event time */
var year 	= 2019;
var month 	= 7;
var day 	= 6;
var hour 	= 08;
var minute 	= 59;
var second 	= 59;

var finishText 	= "Your <span>awesome</span> slogan!"	// Show this text when event time will come

/* Google Analitcs */
googleAnalyticsId = ""; 	