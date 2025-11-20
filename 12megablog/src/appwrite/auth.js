import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

// const client = new Client()
//   .setEndpoint(conf.appwriteUrl)
//   .setProject(conf.appwriteProjectId);

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(), "email@email.com", "password");

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAcc({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method if an action nedd to performed like if user reg done forceful logn else redirect if not needed if needed call that mehod
        return this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (err) {
      throw err;
    }
  }

  async getCurrentUSer() {
    try {
      return await this.account.get();
    } catch (err) {
      console.log("Appwrite service :: getCurrentUser :: error", err);
    }
    return null;
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout :: error", err);
    }
  }
}

const authService = new AuthService();

export default AuthService;
