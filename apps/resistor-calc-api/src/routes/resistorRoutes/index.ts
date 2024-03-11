import express from 'express';

import { CONFIG_URL, TYPES_URL } from '@resistor-calculator/constants';

import {
  getResistorConfig,
  getResistorTypes,
} from '../../services/resistorServices';

const router = express.Router();

router.get(`${CONFIG_URL}/:bands`, (req, res, next) => {
  try {
    res.json(getResistorConfig(req.params.bands));
  } catch (err) {
    console.error(`Error while getting resistor config `, err.message);
    next(err);
  }
});

router.get(`${TYPES_URL}`, (_, res, next) => {
  try {
    res.json(getResistorTypes());
  } catch (err) {
    console.error(`Error while getting resistor types`, err.message);
    next(err);
  }
});

export const resistorRoutes = router;
