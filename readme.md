#fis-parser-cson
编译.cson => .json  
[cson](https://github.com/bevry/cson)

### Install
```
npm i fis-parser-cson -g
```

### Config
```javascript
fis.config.set('modules.parser.cson', ['cson']);
fis.config.set('settings.parser.cson', {
    // cson opt
    csonConfig: {
        foo: "bar"
    }
})
```
