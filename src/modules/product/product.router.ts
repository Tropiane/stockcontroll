import { Router, Request, Response } from "express";

import type { ProductInterface } from "./product.interface";

import ProductController from "./product.controller";

const router = Router();
const controller = new ProductController()

router.get('/', async (req: Request, res: Response)=>{ await controller.get(); });

router.get('/:id', async (req: Request<{id: string}>, res: Response)=>{ await controller.getById(req) });

router.post('/create', async (req: Request, res)=>{     
    await controller.create(req);
    res.send('Product created');
});
router.put('/update', async (req: Request<{},{},ProductInterface>, res)=>{
    await controller.update(req);
    res.send('Product updated');
});
router.delete('/delete', async (req: Request<{},{}, {id: string}>, res)=>{
    await controller.delete(req);
    res.send('Product deleted');
});

export const ProductRouter = router