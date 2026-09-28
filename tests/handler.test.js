'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { handler, response } = require('../app/index');

test('health handler returns a small JSON success response', () => {
  const result = handler();
  assert.equal(result.statusCode, 200);
  assert.equal(result.headers['content-type'], 'application/json; charset=utf-8');
  assert.deepEqual(JSON.parse(result.body), { status: 'ok', service: 'cicd-demo-api' });
});

test('response serializes the body as JSON', () => {
  const result = response(503, { status: 'unavailable' });
  assert.equal(result.statusCode, 503);
  assert.deepEqual(JSON.parse(result.body), { status: 'unavailable' });
});
