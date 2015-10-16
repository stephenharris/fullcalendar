/*!
 * <%= meta.title %> v<%= meta.version %>
 * Docs & License: <%= meta.homepage %>
 * (c) <%= meta.copyright %>
 * Edits made by Stephen Harris for Event Organiser
 * http://wp-event-organiser.com/
 */

(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'jquery', 'moment' ], factory);
	}
	else {
		factory(jQuery, moment);
	}
})(function($, moment) {
