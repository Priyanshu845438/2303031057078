import generateShortCode from '../utils/generateShortCode.js';
import moment from 'moment';

const urls = {};

export const createShortUrl = (req, res) => {
  const { url, expiry } = req.body;

  if (!url) return res.status(400).json({ error: 'URL is required' });

  const shortcode = generateShortCode();
  const expiresAt = expiry ? moment().add(expiry, 'seconds').toISOString() : null;

  urls[shortcode] = {
    url,
    createdAt: new Date(),
    expiresAt,
    analytics: [],
  };

  res.status(201).json({
    shortcode,
    shortUrl: `${process.env.BASE_URL}/${shortcode}`,
  });
};

export const redirectToUrl = (req, res) => {
  const { shortcode } = req.params;
  const data = urls[shortcode];

  if (!data) return res.status(404).send('Short URL not found.');

  if (data.expiresAt && new Date() > new Date(data.expiresAt)) {
    return res.status(410).send('Link expired.');
  }

  data.analytics.push({ timestamp: new Date() });

  res.redirect(data.url);
};

export const getAnalytics = (req, res) => {
  const { shortcode } = req.params;
  const data = urls[shortcode];

  if (!data) return res.status(404).send('Short URL not found.');

  res.json({
    originalUrl: data.url,
    createdAt: data.createdAt,
    expiresAt: data.expiresAt,
    clickCount: data.analytics.length,
    analytics: data.analytics,
  });
};
