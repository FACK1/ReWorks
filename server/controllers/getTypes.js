const Airtable = require('airtable');

const { Airtable_API_KEY } = process.env;
if (!process.env.Airtable_API_KEY) {
  throw new Error('Missing Airtable API KEY env var');
}

const base = new Airtable({ apiKey: Airtable_API_KEY }).base('appAZnpLnWP0wjAc6');
exports.getTypes = (req, res) => {
  const itemType = [];
  base('Type').select({
    view: 'Grid view',
  }).eachPage((records, fetchNextPage) => {
    // This function (`page`) will get called for each page of records.
    records.forEach((record) => {
      itemType.push({ itemType: record._rawJson.fields.Name, name: record._rawJson.fields.Name, id: record._rawJson.fields.Id });
    });
    fetchNextPage();
  }, (err) => {
    if (err) {
      return res.json({ success: 'false', message: err });
    }
    return res.json({ success: 'true', itemType });
  });
};
