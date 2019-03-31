const Airtable = require('airtable');

const { Airtable_API_KEY } = process.env;
const base = new Airtable({ apiKey: Airtable_API_KEY }).base('appAZnpLnWP0wjAc6');

exports.addFeedback = (req, res) => {
  const { userAirtableId } = req;
  const { feedback } = req.body;

  base('Users').update(
    userAirtableId,
    {
      Feedback: feedback,
    },
    (err) => {
      if (err) {
        return res.status(500).json({ err });
      }
      return res.status(200).json({ success: true, msg: 'Feedback updated' });
    },
  );
};
