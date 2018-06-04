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
        var pword = login.pword;

        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (username == user.username && pword == user.password) {
                return user[i];
            } else {
                return console.error();
            }
        }
    }
}
/*TODO:
1. loop through users
2. fnd by email + pword
3. return user or error*/
