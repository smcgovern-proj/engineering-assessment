import sql from './db.js';

const findTrucks = async () => {
  const trucks = await sql`
    SELECT * FROM trucks LIMIT 5
  `;
  return trucks;
};

const findTrucksById = async (id) => {
  const truck = await sql`
    SELECT * FROM trucks WHERE id = ${id}
  `;
  return truck;
};

module.exports = {
  findTrucks,
  findTrucksById
};