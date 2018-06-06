import { Donations } from "../models/donations";
import { DonationsRepository } from "../repositories/donations.repository";
export declare class DonationsController {
    private donationRepo;
    constructor(donationRepo: DonationsRepository);
    createUser(donation: Donations): Promise<Donations>;
}
