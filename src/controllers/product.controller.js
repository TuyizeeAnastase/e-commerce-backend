import {
  getAllProducts,
  addProduct,
  updateProduct,
  searchProducts,
  uploadImage,
  getProductByCategory,
  getServices,
  deleteProduct
} from "../services/product.services";

export class productControllers {
  async getProducts(req, res) {
    try {
      let products;
      const { q } = req.query;
      if (q) {
        products = await searchProducts(q.toLowerCase());
      } else {
        products = await getAllProducts();
      }
      return res.status(200).json({
        products,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error while getting products",
        error: error.message,
      });
    }
  }

  async createProduct(req, res) {
    try {
      const results = req.results;
      const data = {
        product_name: req.body.product_name,
        category_id: parseInt(req.body.category_id),
        price: parseInt(req.body.price),
        discount: parseInt(req.body.discount),
        quantity: parseInt(req.body.quantity),
        color: req.body.color,
        description: req.body.description,
        images: results.secure_url,
      };
      const newProduct = await addProduct(data);
      return res.status(201).json({
        message: "New product added successfully",
        newProduct,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Unable to add new product",
        error: err.message,
      });
    }
  }

  async deleteProduct(req, res) {
    try {
      const product = req.product;
      await deleteProduct( product.id);
      return res.status(200).json({
        message: "Product deleted successfully",
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while deleting product",
        error: err.message,
      });
    }
  }

  async getProduct(req, res) {
    try {
      const product = req.product;
      return res.status(200).json({
        product,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while getting product",
        err: err.message,
      });
    }
  }

  async updateProduct(req, res) {
    try {
      const product = req.product;
      const data = req.body;
      await updateProduct({ data }, product.id);
      return res.status(200).json({
        product: { id: product.id, ...req.body },
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while updating product",
        err: err.message,
      });
    }
  }

  async getCategoryProduct(req, res) {
    try {
      const { id } = req.params;
      const products = await getProductByCategory(id);
      return res.status(201).json({
        products,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error while getting products by category",
        err: error.message,
      });
    }
  }
  async getServiceCategory(req, res) {
    console.log("hello");
    // try {
    //   const services = 'hello'
    //   return res.status(201).json({
    //     services,
    //   });
    // } catch (error) {
    //   return res.status(500).json({
    //     message: "Error while getting services",
    //     err: error.message,
    //   });
    // }
  }
}

const productController = new productControllers();
export default productController;
