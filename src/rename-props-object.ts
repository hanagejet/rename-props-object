type Callback = (key: string) => string;

const getRenameProp = (data: { [key: string]: any }, getNewKey: Callback): object =>
  Object.keys(data).reduce((newData: { [key: string]: any }, key: string) => {
    let value = data[key];
    if (value instanceof Array) {
      value = getRenameData(value, getNewKey);
    } else if (typeof value === 'object') {
      value = getRenameProp(value, getNewKey);
    }
    const newKey = getNewKey(key);
    newData[newKey] = value;
    return newData;
  }, {});

const getRenameData = (json: object[], getNewKey: Callback) =>
  json.map((item: object) => getRenameProp(item, getNewKey));

export default {
  getRenameData,
  getRenameProp,
};
