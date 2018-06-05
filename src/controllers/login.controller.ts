import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import { Login } from "../models/login";

export class LoginController {

    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository
    ) { }

    @post('/login')
    async login(@requestBody() login: Login) {

        if (!login.username || !login.password) {
            throw new HttpErrors.Unauthorized('invalid credentials');
        }

        let userExists: boolean = !!(await this.userRepo.count({
            and: [
                { username: login.username },
                { password: login.password },
            ],
        }));

        if (!userExists) {
            throw new HttpErrors.Unauthorized('invalid credentials');
        }

        return await this.userRepo.findOne({
            where: {
                and: [
                    { username: login.username },
                    { password: login.password }
                ],
            },
        });
    }
}
