const fetch = require('node-fetch');

const imgToDataURL = url => {
  return fetch(url).then(response => response.buffer()).then(buffer => `data:image/png;base64,${buffer.toString('base64')}`);
};

module.exports = { imgToDataURL };