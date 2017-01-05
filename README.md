# MyStorage
localStorage | [js-cookie](https://github.com/js-cookie/js-cookie) (Cookies) backwards compatible wrapper.

## Example Usage
#### It can store simple values or Javascript objects. The Javascript objects are stored as JSON and upon retrival they are converted in object again. 
```javascript
/* Create instance, you can use this as global variable */
var Storage = new MyStorage('localStorage'); // localStorage or Cookies

/* Set item */
Storage.set(key, value);

/* Get Item */
var item = Storage.get(key);

/* Remove Item */
Storage.remove(key)

/* Save Javascript object */
var object = { name: Darko, experience: 7 };
Storage.set('user', object);

/* Get Javascript object */
var object = Storage.getJSON('user');
```
## Example jQuery global scope
```javascript
(function($) { 
  //Create instance in jQuery's global scope
  $.Storage = new MyStorage('Cookies'); // or localStorage
  
  //Use it in your code
  $.Storage.set(...);
  var something = $.Storage.get(...);
})(jQuery);
```
## Requirements
- [js-cookie](https://github.com/js-cookie/js-cookie)
