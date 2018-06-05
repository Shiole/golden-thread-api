import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, param, requestBody } from "@loopback/rest";
import { User } from "../models/user";

export class UserController {

    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository
    ) { }

    @get('/users')
    async getAllUsers(): Promise<Array<User>> {
        return await this.userRepo.find();
    }

    @get('/users/{id}')
    async getUsersByID(@param.path.number('id') id: number): Promise<User> {
        return await this.userRepo.findById(id);
    }

}