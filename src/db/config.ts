import { Dialect, Sequelize } from "sequelize";

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST as string;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASSWORD as string;
console.log("driver", dbDriver);


const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  pool: {
    max: 10,
    min: 0,
    acquire: 20000,
    idle: 5000,
  },
});

// const db = {} as { sequelize: Sequelize, Sequelize: any, users: any };
// db.Sequelize = Sequelize;
// db.sequelize = sequelizeConnection;
// // db.users = User.initialize(sequelizeConnection);
// db.users = User(sequelizeConnection)

export default sequelizeConnection;
