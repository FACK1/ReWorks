const Airtable = require('airtable');

const { Airtable_API_KEY } = process.env;
const base = new Airtable({ apiKey: Airtable_API_KEY }).base('appAZnpLnWP0wjAc6');

exports.getFeedback = (req, res) => {
  const { userAirtableId } = req;

  base('Users').find(userAirtableId, (error, record) => {
    if (error) {
      return res.status(500).json({ error });
    }
    const feedback = record.get('Feedback');
    return res.status(200).json({ success: true, feedback });
  });
};
