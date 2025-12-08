"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = __importDefault(require("./product.controller"));
const router = (0, express_1.Router)();
const controller = new product_controller_1.default();
router.get('/', async (req, res) => { await controller.get(); });
router.get('/:id', async (req, res) => { await controller.getById(req); });
router.post('/create', async (req, res) => {
    await controller.create(req);
    res.send('Product created');
});
router.put('/update', async (req, res) => {
    await controller.update(req);
    res.send('Product updated');
});
router.delete('/delete', async (req, res) => {
    await controller.delete(req);
    res.send('Product deleted');
});
exports.ProductRoutes = router;
