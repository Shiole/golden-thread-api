import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(): Promise<Array<User>>;
    getUsersByID(id: number): Promise<User>;
    getDonationsByUserID(id: number, dateFrom: Date): Promise<void>;
}
