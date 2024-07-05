import { sequelize } from "../config/dbConn.js";
import { QueryTypes } from "sequelize";

export const getIataDataController = async (req, res) => {
  const { iata } = req.query;
  const airport = await sequelize.query(
    `SELECT * FROM havahavai.Airport WHERE iata_code = '${iata}'`,
    { type: QueryTypes.SELECT }
  );
  const city = await sequelize.query(
    `SELECT * FROM havahavai.City WHERE id = '${airport[0].city_id}'`
  );
  const country = await sequelize.query(
    `SELECT * FROM havahavai.Country WHERE id = '${airport[0].country_id}'`
  );

  const result = {
    airport: airport[0],
    city: city[0],
    country: country[0],
  };

  res.send(result);
};
