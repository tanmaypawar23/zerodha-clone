const { model } = require("mongoose");

import { OrdersSchema } from "../schemas/OrdersSchema";

const OrdersModel = model("order", OrdersSchema);

module.exports = { OrdersModel };
