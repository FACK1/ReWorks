const Airtable = require('airtable');

const { Airtable_API_KEY } = process.env;
const base = new Airtable({ apiKey: Airtable_API_KEY }).base('appAZnpLnWP0wjAc6');

exports.editItem = (req, res) => {
  const { id } = req.params;

  const {
    size,
    type,
    price,
    brand,
    condition,
    details,
    color,
    age,
    hex,
    sizeCategory,
    pattern,
  } = req.body;
  base('Items').update(
    id,
    {
      Size: size,
      Age: age,
      Colour: color,
      'Brand Text': brand,
      'Type Id': [type],
      Price: price,
      Condition: condition,
      Details: details,
      'Colour Hex Code': hex,
      'Size Category': sizeCategory,
      Pattern: pattern,
    },
    (err) => {
      if (err) {
        return res.json({ success: 'false' });
      }
      return res.json({ success: 'true' });
    },
  );
};
