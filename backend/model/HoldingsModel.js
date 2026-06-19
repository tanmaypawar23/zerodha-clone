const { model } = require("mongoose");

import { HoldingsSchema } from "../schemas/HoldingsSchema";

const HoldingsModel = model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
