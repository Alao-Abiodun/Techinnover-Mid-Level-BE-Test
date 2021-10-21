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
        data.map(d => {
            if (d.pickup_addr === pickup_addr && d.dropoff_addr === dropoff_addr && delivery_type === 'Regular') {
                    let totalPriceDelivery = d.pricing * 1;
                    return totalPriceDelivery;
                } else if (d.pickup_addr === pickup_addr && d.dropoff_addr === dropoff_addr && delivery_type === 'Express') {
                    let totalPriceDelivery = d.pricing * 2;
                    return totalPriceDelivery
                }
        })
        console.log(data);
    }
}

export default DeliveryService;