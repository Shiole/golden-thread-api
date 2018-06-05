import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, param, requestBody } from "@loopback/rest";
import { Charities } from "../models/charities";
import { CharitiesRepository } from "../repositories/charities.repository";

export class CharitiesController {

    constructor(
        @repository(CharitiesRepository.name) private charitiesRepo: CharitiesRepository
    ) { }

    @get('/charities')
    async getAllCharities(): Promise<Array<Charities>> {
        return await this.charitiesRepo.find();
    }

    @get('/charities/{id}')
    async getCharityByID(@param.path.number('id') id: number): Promise<Charities> {
        return await this.charitiesRepo.findById(id);
    }

}