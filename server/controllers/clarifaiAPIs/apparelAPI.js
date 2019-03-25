const Clarifai = require('clarifai');

const { Clarifai_API_KEY } = process.env;
const clarifai = new Clarifai.App({
  apiKey: Clarifai_API_KEY,
});

const apparelAPI = (url) => {
  const statusSuccess = { code: '200', text: 'Success' };
  const statusError = { code: '400', text: 'Bad Request' };
  const itemDetails = [];
  let response;

  return clarifai.models
    .predict('e0be3b9d6a454f0493ac3a30784001ff', url, {
      video: false,
    })
    .then((data) => {
      const info = data.outputs[0].data.concepts;
      info.map((object) => {
        if (object.value >= 0.5) {
          itemDetails.push({ tag_name: object.name, value: object.value });
        }
      });
      response = { status: statusSuccess, data: itemDetails };
      return response;
    })
    .catch(() => {
      response = { status: statusError };
      return response;
    })
    .then(result => result);
};

module.exports = apparelAPI;
