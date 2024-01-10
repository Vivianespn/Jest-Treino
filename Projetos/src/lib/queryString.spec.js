import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should creat a valid query string when an object is provided', () => {
    const obj = {
      name: 'Viviane',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Viviane&profession=developer');
  });

  it('should creat a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Viviane',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Viviane&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Viviane',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Viviane&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Viviane',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Viviane';

    expect(parse(qs)).toEqual({
      name: 'Viviane',
    });
  });

  it('should ', () => {
    const qs = 'name=Viviane&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'Viviane',
      abilities: ['JS', 'TDD'],
    });
  });
});
