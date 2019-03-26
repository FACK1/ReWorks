const apparelAPI = require('./apparelAPI');
const colorAPI = require('./colorAPI');
const generalAPI = require('./generalAPI');

exports.clarifaiAPIs = (req, res) => {
  const { image_url } = req;
  Promise.all([apparelAPI(image_url), colorAPI(image_url), generalAPI(image_url)]).then((values) => {
    const data = {
      image_url,
      apparel: values[0],
      colors: values[1],
      general: values[2],
    };
    return res.json(data);
  });
};
