export default async function handler(req, res) {

  const company = req.query.company;

  if (!company) {
    return res.status(400).json({
      error: "Missing company"
    });
  }

  try {

    const searchUrl =
      `https://duckduckgo.com/?q=${encodeURIComponent(company)}`;

    res.status(200).json({
      company,
      search: searchUrl
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

}
