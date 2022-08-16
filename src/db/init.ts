import { sequelizeConnection } from "../db"
import { User } from "../model";
const isDev = process.env.NODE_ENV === "dev";

const dbInit = async () => {
  try {
    // await User.sync({ alter: isDev });
    await sequelizeConnection.sync({ force: true })
  } catch (error) {
    throw new Error("error syncing database");
  }
};

export default dbInit;
