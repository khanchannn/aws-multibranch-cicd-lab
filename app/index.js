'use strict';

function response(statusCode, body) {
  return {
    statusCode,
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body)
  };
}

function handler() {
  return response(200, { status: 'ok', service: 'cicd-demo-api' });
}

module.exports = { handler, response };
