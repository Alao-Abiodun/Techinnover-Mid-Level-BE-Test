// import DeliveryServices from '../models/delivery_service.model';
// import data from '../dummyData/data.dummy';
import deliveryService from "../services/delivery_service.services";

class DeliveryServiceController {
    /**
     *  @description fetch all data
     *  @param {object} req
     *  @param {object} res
     *  @returns {object} values
     *  @memberof DeliveryServiceController
     */
    static async userPay(req: any, res: any) {
        const {pickup_addr, dropoff_addr, delivery_type} = req.body;
        const results = deliveryService.calculateuUserExpectedPay(pickup_addr, dropoff_addr, delivery_type);
        return res.status(200).json({ results });
    }
}

export default DeliveryServiceController;