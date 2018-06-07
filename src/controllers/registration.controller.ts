import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";

export class RegistrationController {

    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository
    ) { }

    @post('/registration')
    async createUser(@requestBody() user: User) {

        if (!user.username || !user.email || !user.password) {
            throw new HttpErrors.BadRequest('missing data');
          }
      
          let userExists: boolean = !!(await this.userRepo.count(
            { username: user.username } || { email: user.email }
            ));
      
          if (userExists) {
            throw new HttpErrors.BadRequest('user already exists');
          }
          
        return await this.userRepo.create(user);
    }
}
