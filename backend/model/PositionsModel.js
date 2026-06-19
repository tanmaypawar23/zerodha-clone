const { model } = require("mongoose");

import { PositionsSchema } from "../schemas/PositionsShema";

const PositionsModel = model("position", PositionsSchema);

module.exports = { PositionsModel };
