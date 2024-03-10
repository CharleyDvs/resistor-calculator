import express from 'express';

import {
  getResistorConfig,
  getResistorTypes,
} from '../../services/resistorServices';

const router = express.Router();

router.get('/types', (_, res, next) => {
  try {
    res.json(getResistorTypes());
  } catch (err) {
    console.error(`Error while getting resistor types`, err.message);
    next(err);
  }
});

router.get('/config/:bands', (req, res, next) => {
  try {
    res.json(getResistorConfig(req.params.bands));
  } catch (err) {
    console.error(`Error while getting resistor config `, err.message);
    next(err);
  }
});

export const resistorRoutes = router;
