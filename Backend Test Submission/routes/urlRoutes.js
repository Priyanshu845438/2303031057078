import express from 'express';
import {
  createShortUrl,
  redirectToUrl,
  getAnalytics,
} from '../controllers/shortUrlController.js';

const router = express.Router();

router.post('/shorten', createShortUrl);
router.get('/:shortcode/analytics', getAnalytics);
router.get('/:shortcode', redirectToUrl);

export default router;
