import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { post, get, requestBody } from "@loopback/rest";
import { Users } from "../models/users";

export class UsersController {

    constructor(
        @repository(UsersRepository.name) private usersRepo: UsersRepository
    ) { }

    @get('/users')
    async getAllUsers(): Promise<Array<Users>> {
        return await this.usersRepo.find();
    }

}