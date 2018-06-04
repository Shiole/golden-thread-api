import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { post, get, requestBody } from "@loopback/rest";
import { Users } from "../models/users";
import { filter } from "minimatch";
import { Login } from "../models/login";

export class LoginController {

    constructor(
        @repository(UsersRepository.name) private loginRepo: UsersRepository
    ) { }

    @post('/login')
    async login(@requestBody() login: Login) {
        var users = await this.loginRepo.find();
        var username = login.username;
        var password = login.password;

        for (var i = 1; i < users.length; i++) {
            var user = users[i];
            if (username == user[i].username && password == user[i].password) {
                return user[i];
            } else {
                return console.error();
            }
        }
    }
}
