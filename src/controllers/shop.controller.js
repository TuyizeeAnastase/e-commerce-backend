import { getAllShops } from "../services/shop.service";

export class shopsControllers{
    async getShops(req,res){
        try{
            const shops=await getAllShops()
            return res.status(200).json({
                shops
            })
        }catch(error){
            return res.status(500).json({
                message:"Error while getting shops",
                error:error.message
            })
        }
    }
}

const shopsController=new shopsControllers()
export default shopsController;