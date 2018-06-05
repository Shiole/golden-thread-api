import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, param, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";

export class UserController {

    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository
    ) { }

    @get('/user')
    async getAllUsers(): Promise<Array<User>> {
        return await this.userRepo.find();
    }

    @get('/user/{id}')
    async getUsersByID(@param.path.number('id') id: number): Promise<User> {

        let userExists: boolean = !!(await this.userRepo.count({ id }));

        if (!userExists) {
            throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
        }

        return await this.userRepo.findById(id);
    }

}