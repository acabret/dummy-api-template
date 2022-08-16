import { DataTypes, Model, Optional } from "sequelize";
import { sequelizeConnection } from "../db";

interface UserAttributes {
  userId: string;
  password: string;
  email: string;
}
//profundizar en esto y configuraciones varias                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
export interface UserInput extends Optional<UserAttributes, "email"> {}
export interface UserOuput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  declare userId: string;
  declare password: string;
  declare email: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

User.init(
  {
    userId: {
      type: DataTypes.TEXT,
      primaryKey: true,
      validate: { 
        len: [5, 30] ,
        // is: /^[a-z]+$/i,  
      },
    },

    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      unique: { name: "asd", msg: "Email address already in use!" },
      validate: {
        isEmail: true,
      },
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
    modelName: "user", // We need to choose the model name
    tableName: "users", //target table
  }
);

export default User;
