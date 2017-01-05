# MyStorage
localStorage | Cookies.js backwards compatible wrapper.

## Usage
```javascript
var Storage = new MyStorage('localStorage'); // localStorage or Cookies

/* Set item */
Storage.set(key, value);

/* Get Item */
var item = Storage.get(key);

/* Remove Item */
Storage.remove(key)

```

## Requirements
- [js-cookie](https://github.com/js-cookie/js-cookie)
