
import { Op } from "sequelize"
import { sequelizeConnection } from "../db";
import { User } from "../model";

class UsersRepository {
  // users = User;
  db = {};

  constructor() {
    // this.db = connect();
    // For Development
    // this.db.sequelize.sync({ force: true }).then(() => {
    //     console.log("Drop and re-sync db.");
    // });
  }

  async getUsers() {

    let users;

    try {
      users = await User.findAll({
        attributes: ['userId', 'email']
      });
      // console.log('tasks:::', users);
      return users;
    } catch (err) {
      // console.log(err);
      throw new Error("error during model.findAll()");
    }
  }

  async createUser(user: {
    userId: string;
    password: string;
    email?: string;
  }): Promise<User | undefined> {

    let newUser;

    try {
      newUser = User.build(user);
      newUser = await newUser.save();
    //   return newUser;
    } catch (err) {
        // console.log("asd",err, "asd");
        
        throw new Error("error during user creation")
      // logger.error('Error::' + err);
    }

    return newUser;

  }

  // async updateTask(task) {
  //     let data = {};
  //     try {
  //         task.updateddate = new Date().toISOString();
  //         data = await this.db.tasks.update({...task}, {
  //             where: {
  //                 id: task.id
  //             }
  //         });
  //     } catch(err) {
  //         logger.error('Error::' + err);
  //     }
  //     return data;
  // }

  // async deleteTask(taskId) {
  //     let data = {};
  //     try {
  //         data = await this.db.tasks.destroy({
  //             where: {
  //                 id: taskId
  //             }
  //         });
  //     } catch(err) {
  //         logger.error('Error::' + err);
  //     }
  //     return data;
  //     return {status: `${data.deletedCount > 0 ? true : false}`};
  // }
}

export default new UsersRepository();
