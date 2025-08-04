export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Endast POST tillåtet');
  }

  const { text } = req.body;
  return res.status(200).send(`✅ Du skrev: ${text}`);
}
