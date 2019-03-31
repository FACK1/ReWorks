exports.checkCookie = (req, res) => {
  if (req.headers.cookie) return res.json({ cookie: true, logged: req.headers.cookie });
  return res.json({ cookie: false });
};
