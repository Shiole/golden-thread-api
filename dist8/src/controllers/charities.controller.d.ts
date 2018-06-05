import { Charities } from "../models/charities";
import { CharitiesRepository } from "../repositories/charities.repository";
export declare class CharitiesController {
    private charitiesRepo;
    constructor(charitiesRepo: CharitiesRepository);
    getAllCharities(): Promise<Array<Charities>>;
    getCharityByID(id: number): Promise<Charities>;
}
