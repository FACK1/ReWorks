const Airtable = require('airtable');

const { Airtable_API_KEY } = process.env;
if (!process.env.Airtable_API_KEY) {
  throw new Error('Missing Airtable API KEY env var');
}
const base = new Airtable({ apiKey: Airtable_API_KEY }).base('appAZnpLnWP0wjAc6');

exports.addItem = (req, res) => {
  const { userAirtableId } = req;
  const {
    type,
    price,
    age,
    color,
    size,
    url,
    details,
    condition,
    colors,
    hex,
    colorshex,
    sizeCategory,
    pattern,
    brand,
  } = req.body;
  base('Items').create(
    {
      'Type Id': [type],
      Price: price,
      Colour: color,
      Colours: colors,
      Age: age,
      Condition: condition,
      Size: size,
      Image: [
        {
          url,
        },
      ],
      Users: [userAirtableId],
      'Image URL': url,
      Details: details,
      'Colour Hex Code': hex,
      'Colours Hex Codes': colorshex,
      'Size Category': sizeCategory,
      Pattern: pattern,
      'Brand Free text': brand,
    },
    (err) => {
      if (err) {
        return res.json({ success: 'false', err });
        console.log(err);
      }
      return res.json({ success: 'true' });
    },
  );
};
