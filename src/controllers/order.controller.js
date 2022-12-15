import {
  getAllOrders,
  addOrder,
  getOrderByUser,
} from "../services/order.service";
import {
  addOrderItem,
  getItemByOrderId,
  getOrderItemByProduct,
} from "../services/orderItems.services";

export class orderControllers {
  async getOrders(req, res) {
    try {
      const orders = await getAllOrders();
      return res.status(200).json({
        orders,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error while getting orders",
        error: error.message,
      });
    }
  }
}

const orderController = new orderControllers();
export default orderController;
