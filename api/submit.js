module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, company_name, country, message } = req.body || {};

  if (![name, email, company_name, country, message].every(Boolean)) {
    return res.status(400).json({ message: "Fill in all required fields." });
  }

  return res
    .status(201)
    .json({ message: "The application has been successfully received." });
};
