const Airtable = require('airtable');

const { Airtable_API_KEY } = process.env;
const base = new Airtable({ apiKey: Airtable_API_KEY }).base('appAZnpLnWP0wjAc6');

exports.editItem = (req, res) => {
  const { id } = req.params;

  const {
    size, type, price, brandId, condition, details, color, age,
  } = req.body;
  base('Items').update(
    id,
    {
      Size: size,
      Age: age,
      Color: color,
      Brand: [brandId],
      Type: type,
      Price: price,
      Condition: condition,
      Name: type,
      Details: details,
    },
    (err) => {
      if (err) {
        return res.json({ success: 'false' });
      }
      return res.json({ success: 'true' });
    },
  );
};
