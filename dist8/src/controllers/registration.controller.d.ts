import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class RegistrationController {
    private userRepo;
    constructor(userRepo: UserRepository);
    createUser(newUser: User): Promise<User>;
}
