/**
 * Wrapper class for working with localStorage or Cookies
 * while keeping your code clean.
 *
 * @Author: Darko Gjorgjijoski <dg@darkog.com>
 * @Licence: GPLv3
 */

var MyStorage = function() {

	this.type = 'localStorage';

	this.getJSON = function( key ) {
		if(this.type === 'localStorage') {
			var object = localStorage.getItem(key);
			return JSON.parse(object);
		} else {
			return Cookies.getJSON(key);
		}
	}

	this.get = function( key ) {
		if(this.type === 'localStorage') {
			return localStorage.getItem(key);
		} else {
			return Cookies.get( key );
		}
	}

	this.set = function( key, value ) {
		if(this.type === 'localStorage') {
			if( typeof value === 'object' ) {
				value = JSON.stringify(value);
			}
			localStorage.setItem(key, value);
		} else {
			Cookies.set(key, value, { expires: 365 });
		}
	}

	this.remove = function( key ) {
		if(this.type === 'localStorage') {
			localStorage.removeItem(key);
		} else {
			Cookies.remove(key);
		}
	}
}