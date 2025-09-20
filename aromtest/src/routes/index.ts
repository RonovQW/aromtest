import { Router } from 'express';
import { PerfumeController } from '../controllers';

const router = Router();
const perfumeController = new PerfumeController();

export function setRoutes(app) {
    router.get('/perfumes', perfumeController.getAllPerfumes.bind(perfumeController));
    router.get('/perfumes/:id', perfumeController.getPerfumeById.bind(perfumeController));
    
    app.use('/api', router);
}