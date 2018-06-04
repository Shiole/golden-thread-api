import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { post, get, requestBody } from "@loopback/rest";
import { Users } from "../models/users";

export class RegistrationController {

    constructor(
        @repository(UsersRepository.name) private usersRepo: UsersRepository
    ) { }

    @post('/users')
    async createUser(@requestBody() user: Users) {
        return await this.usersRepo.create(user);
    }
}
