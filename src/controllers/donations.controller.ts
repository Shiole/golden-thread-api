import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, param, requestBody, HttpErrors } from "@loopback/rest";
import { Donations } from "../models/donations";
import { DonationsRepository } from "../repositories/donations.repository";


export class DonationsController {

    constructor(
        @repository(DonationsRepository.name) private donationRepo: DonationsRepository
    ) { }

    @post('/donations')
    async createUser(@requestBody() donation: Donations) {

        if (!donation.amount || !donation.userID || !donation.charityID) {
            throw new HttpErrors.BadRequest('Missing donation amount');
        }

        return await this.donationRepo.create(donation);
    }
}