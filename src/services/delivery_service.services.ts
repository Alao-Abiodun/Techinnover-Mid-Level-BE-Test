import DeliveryServices from '../models/delivery_service.model';
import data from '../dummyData/data.dummy';

class DeliveryService {
    /**
     *  @description fetch all data
     *  @param {object} req
     *  @param {object} res
     *  @returns {object} values
     *  @memberof DeliveryServiceController
     */
    static async calculateuUserExpectedPay(pickup_addr: string, dropoff_addr: string, delivery_type: string) {
        for (const d of data) {
                if (pickup_addr == d.pickup_addr && dropoff_addr == d.dropoff_addr && delivery_type == "Regular"){
                    return d.pricing;
                } else if (pickup_addr == d.pickup_addr && dropoff_addr == d.dropoff_addr && delivery_type == "Express") {
                    return d.pricing * 2;
                }
        }
    }
}

export default DeliveryService;