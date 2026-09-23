const fetch = require('node-fetch');

const imgToDataURL = async url => {
  const response = await fetch(url, { headers: { Referer: 'https://stackoverflow.com/' } });
  const contentType = response.headers.get('content-type') || 'image/png';
  const buffer = await response.buffer();
  return `data:${contentType};base64,${buffer.toString('base64')}`;
};

module.exports = { imgToDataURL };
