import renameProps, { toCamelCase } from '../index';

interface ISnakeCamelContainer {
  SNAKE: object;
  CAMEL: object;
}

const SHALLOW_OBJECT: ISnakeCamelContainer = {
  CAMEL: {
    numberValueKey: 100,
    stringValueKey: 'value1',
  },
  SNAKE: {
    number_value_key: 100,
    string_value_key: 'value1',
  },
};

const DEEP_OBJECT: ISnakeCamelContainer = {
  CAMEL: {
    objectValueKey: {
      objectValueKeyInObject: {
        keyInObjectInObject: 100,
      },
      stringValueKeyInObject: 'value2',
    },
  },
  SNAKE: {
    object_value_key: {
      object_value_key_in_object: {
        key_in_object_in_object: 100,
      },
      string_value_key_in_object: 'value2',
    },
  },
};

const ARRAY_CONTAINING_OBJECT: ISnakeCamelContainer = {
  CAMEL: {
    arrayValueKey: [
      {
        numberValueKeyInObjectInArray: 100,
      },
      {
        numberValueKeyInObjectInArray: 200,
      },
    ],
  },
  SNAKE: {
    array_value_key: [
      {
        number_value_key_in_object_in_array: 100,
      },
      {
        number_value_key_in_object_in_array: 200,
      },
    ],
  },
};

describe('getRenameProp()', () => {
  it('rename shallow object', () => {
    expect(renameProps.getRenameProp(SHALLOW_OBJECT.SNAKE, toCamelCase)).toEqual(
      SHALLOW_OBJECT.CAMEL,
    );
  });

  it('rename deep object', () => {
    expect(renameProps.getRenameProp(DEEP_OBJECT.SNAKE, toCamelCase)).toEqual(DEEP_OBJECT.CAMEL);
  });

  it('rename array containing object', () => {
    expect(renameProps.getRenameProp(ARRAY_CONTAINING_OBJECT.SNAKE, toCamelCase)).toEqual(
      ARRAY_CONTAINING_OBJECT.CAMEL,
    );
  });
});

describe('getRenameData()', () => {
  it('rename', () => {
    expect(
      renameProps.getRenameData(
        [SHALLOW_OBJECT.SNAKE, DEEP_OBJECT.SNAKE, ARRAY_CONTAINING_OBJECT.SNAKE],
        toCamelCase,
      ),
    ).toEqual([SHALLOW_OBJECT.CAMEL, DEEP_OBJECT.CAMEL, ARRAY_CONTAINING_OBJECT.CAMEL]);
  });
});
