import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { post, get, param, requestBody } from "@loopback/rest";
import { Users } from "../models/users";

export class UsersController {

    constructor(
        @repository(UsersRepository.name) private usersRepo: UsersRepository
    ) { }

    @get('/users')
    async getAllUsers(): Promise<Array<Users>> {
        return await this.usersRepo.find();
    }

    @get('/users/{id}')
    async getUsersByID(@param.path.number('id') id: number): Promise<Users> {
        return await this.usersRepo.findById(id);
    }

}