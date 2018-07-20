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

console.log(result); // [{ fooBar: 'foo' }]
```
