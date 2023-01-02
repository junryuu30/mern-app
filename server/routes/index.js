import express from 'express';
import { checkAuth } from '../utils/checkAuth.js';
import authRoutes from './auth.js';
import usersRoutes from './users.js';
import tasksRoutes from './tasks.js';
import categoryRoutes from './category.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', checkAuth, usersRoutes);
router.use('/tasks', checkAuth, tasksRoutes);
router.use('/', checkAuth, categoryRoutes);

export default router;