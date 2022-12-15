import { getServices } from "../services/service.service";

export class serviceControllers {
  async getAllServices(req, res) {
    try {
      const services = await getServices();
      return res.status(200).json({
        services,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error while retriveing services",
        error: error.message,
      });
    }
  }
}

const serviceController = new serviceControllers();
export default serviceController;
