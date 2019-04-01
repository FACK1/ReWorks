const Clarifai = require('clarifai');

const { Clarifai_API_KEY } = process.env;

if (!process.env.Clarifai_API_KEY) {
  throw new Error('Missing Clarifai API KEY env var');
}

const clarifai = new Clarifai.App({
  apiKey: Clarifai_API_KEY,
});

const generalAPI = (url) => {
  const statusSuccess = { code: '200', text: 'Success' };
  const statusError = { code: '400', text: 'Bad Request' };
  const itemDetails = [];
  let response;

  return clarifai.models
    .predict(Clarifai.GENERAL_MODEL, url, {
      video: false,
    })
    .then((data) => {
      const info = data.outputs[0].data.concepts;
      info.map(object => itemDetails.push({ tag_name: object.name, value: object.value }));
      response = { status: statusSuccess, data: itemDetails };
      return response;
    })
    .catch(() => {
      response = { status: statusError };
      return response;
    })
    .then(result => result);
};

module.exports = generalAPI;
