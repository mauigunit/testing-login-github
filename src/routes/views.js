import {Router} from 'express';
import authMiddleware from '../middlewares/index.js';
const viewRouter = Router();

viewRouter.get('/', authMiddleware, async (req, res) => {
    res.render('home');
})

viewRouter.get('/login', async (req, res) => {
    res.render('login');
})

export default viewRouter;