import { Entity } from '@loopback/repository';
import { Charities } from './charities';
export declare class Projects extends Entity {
    id?: number;
    name: string;
    details: string;
    charityID: Charities['id'];
    getId(): number | undefined;
}
