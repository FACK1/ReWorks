const express = require('express');

const app = express();
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');

// configure the keys for accessing AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// configure AWS to work with promises
// AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: process.env.S3_BUCKET,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`,
  };
  return s3.upload(params).promise();
};

module.exports = uploadPhoto = (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, (error, fields, files) => {
    if (error) return res.json({ error: 'something went wrong with parsing files' });

    const { path } = files.file[0];
    const buffer = fs.readFileSync(path);
    const type = fileType(buffer);
    const timestamp = Date.now().toString();
    const fileName = `bucketFolder/${timestamp}-lg`;
    uploadFile(buffer, fileName, type)
      .then(data => res.status(200).send(data))
      .catch(error => res.status(400).send(error));
  });
};
