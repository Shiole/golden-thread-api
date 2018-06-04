import { UsersRepository } from "../repositories/users.repository";
import { Login } from "../models/login";
export declare class LoginController {
    private loginRepo;
    constructor(loginRepo: UsersRepository);
    login(login: Login): Promise<any>;
}
