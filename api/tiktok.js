export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ status: false, error: "URL TikTok diperlukan" });

  const api = `https://api-ditss.vercel.app/download/tiktok-v2?apikey=free&url=${encodeURIComponent(url)}`;
  try {
    const response = await fetch(api);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ status: false, error: "Gagal mengambil data TikTok" });
  }
}
