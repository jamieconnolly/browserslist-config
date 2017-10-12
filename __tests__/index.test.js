'use strict';

const browserslist = require('browserslist');

beforeEach(() => {
  jest.resetModules();
});

it('should export an array', () => {
  const config = require('../index');
  expect(Array.isArray(config)).toBe(true);
});

it('should not contain invalid queries', () => {
  jest.doMock('@jamieconnolly/browserslist-config', () => require('../index'), { virtual: true });

  const result = browserslist(['extends @jamieconnolly/browserslist-config']);
  expect(result).toBeTruthy();
});
