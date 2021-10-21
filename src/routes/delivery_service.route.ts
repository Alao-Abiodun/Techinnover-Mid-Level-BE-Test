import express from 'express';
import deliveryServiceCtrl from '../controllers/delivery_service.controller';

const router = express.Router();

router.get('/userPay', deliveryServiceCtrl.userPay);

export default router;