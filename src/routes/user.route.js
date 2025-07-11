import express from 'express';
import { getFuck } from '../controller/user.controller.js';

const router = express.Router();

router.get('/fuck', getFuck);

export default router;