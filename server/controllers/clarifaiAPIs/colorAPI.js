const Clarifai = require('clarifai');

const { Clarifai_API_KEY } = process.env;
const clarifai = new Clarifai.App({
  apiKey: Clarifai_API_KEY,
});

const clarifaiColor = (url) => {
  const statusSuccess = { code: '200', text: 'Success' };
  const statusError = { code: '400', text: 'Bad Request' };
  const itemColors = [];
  let response;

  return clarifai.models
    .predict('eeed0b6733a644cea07cf4c60f87ebb7', url, {
      video: false,
    })
    .then((data) => {
      const info = data.outputs[0].data.colors;
      info.map(object => itemColors.push({ hex: object.raw_hex, name: object.w3c.name, value: object.value }));
      response = { status: statusSuccess, data: itemColors };
      return response;
    })
    .catch(() => {
      response = { status: statusError };
      return response;
    })
    .then(result => result);
};

module.exports = clarifaiColor;
