import { shopify } from "../core/index.js";

const STATUS_QUERY = `query {
  productsCount {
    count
  }
  customersCount {
    count
  }
}`;

export const statusController = {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @description Retrieve a summary of the integration status
   */
  async summary(req, res) {
    try {
      const {
        locals: {
          shopify: { session },
        },
      } = res;

      const client = new shopify.api.clients.Graphql({ session });

      const {
        body: { data },
      } = await client.query({ data: STATUS_QUERY });

      const {
        productsCount: { count: products },
        customersCount: { count: customers },
      } = data;

      res.status(200).json({ products, customers });
    } catch (error) {
      console.log(error);
      res.status(400).send();
    }
  },
};
