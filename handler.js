'use strict';

module.exports.index = async event => {
  let html = `
    <h1>Welcome to Mu</h1>
    <p>Stage: Stage of Mu</p>`;

  return {
    statusCode: 200,
    headers: {
        'Content-Type': 'text/html',
    },
    body: html
  };

};