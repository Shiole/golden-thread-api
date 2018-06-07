import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import { Registration } from "../models/registration";

export class RegistrationController {

    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository
    ) { }

    @post('/registration')
    async createUser(@requestBody() newUser: User) {

        if (!newUser.username || !newUser.email || !newUser.password) {
            throw new HttpErrors.BadRequest('missing data');
          }
      
          let userExists: boolean = !!(await this.userRepo.count(
            { username: newUser.username } || { email: newUser.email }
            ));
      
          if (userExists) {
            throw new HttpErrors.BadRequest('user already exists');
          }
          
        return await this.userRepo.create(newUser);
    }
}
