import { UsersRepository } from "../repositories/users.repository";
import { Users } from "../models/users";
export declare class RegistrationController {
    private usersRepo;
    constructor(usersRepo: UsersRepository);
    createUser(user: Users): Promise<Users>;
}
