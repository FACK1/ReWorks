const Airtable = require('airtable');

const { Airtable_API_KEY } = process.env;
const base = new Airtable({ apiKey: Airtable_API_KEY }).base('appAZnpLnWP0wjAc6');

exports.getItems = (req, res) => {
  const { id } = req;
  const data = [];

  base('Items').select({
    view: 'Main View',
  }).eachPage((records, fetchNextPage) => {
    records.forEach((record) => {
      if (record.get('Users')[0] === id) {
        data.push({
          type: record.get('Type'),
          size: record.get('Size'),
          url: record.get('Image URL'),
          img: record.get('Image')[0].url,
        });
      }
    });
    fetchNextPage();
  }, (err) => {
    if (err) {
      return res.json({ success: 'false', message: err });
    }
    return res.json({ success: 'true', data });
  });
};
