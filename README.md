## Setup

```
$ npm install --save-dev rename-props-object
```

## Usage

```js
import renameProps, { toCamelCase } from 'rename-props-object';

const response = [{ foo_bar: 'foo' }];
const result = renameProps.getRenameData(
  response,
  toCamelCase, // or your callback function. Please make pull request🙏
);
```

### renameProps.getRenameData(array, callback)

#### Arguments
**array**

Required

**callback**

Required. Should return the property name you want

#### Return
The same argument is returned

### renameProps.getRenameProp(object, callback)

#### Arguments
**object**

Required

**callback**

Required. Should return the property name you want

#### Return
The same argument is returned
