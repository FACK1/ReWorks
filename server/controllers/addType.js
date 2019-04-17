const Airtable = require('airtable');

const { Airtable_API_KEY } = process.env;
if (!process.env.Airtable_API_KEY) {
  throw new Error('Missing Airtable API KEY env var');
}

const base = new Airtable({ apiKey: Airtable_API_KEY }).base('appAZnpLnWP0wjAc6');
exports.addType = (req, res) => {
  const { name, shortcut } = req.body;

  base('Type').create({
    Shortcut: shortcut,
    Name: name,
  }, (err, record) => {
    if (err) {
      return res.json({ success: 'false', err });
    }
    const typeId = record.getId();
    return res.json({ success: 'true', typeId });
  });
};
