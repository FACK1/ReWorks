const Airtable = require('airtable');

const { Airtable_API_KEY } = process.env;
if (!process.env.Airtable_API_KEY) {
  throw new Error('Missing Airtable API KEY env var');
}
const base = new Airtable({ apiKey: Airtable_API_KEY }).base('appAZnpLnWP0wjAc6');

exports.getBrands = (req, res) => {
  const data = [];

  base('Brands')
    .select({
      view: 'Grid view',
    })
    .eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        data.push({
          brandName: record.get('Name'),
          id: record.id,
          name: record.get('Name'),
        });
      });
      fetchNextPage();
    }, (err) => {
      if (err) {
        return res.json({ success: 'false', message: err });
      }
      return res.json({ success: 'true', data });
    });
};
