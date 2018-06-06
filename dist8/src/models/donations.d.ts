import { Entity } from '@loopback/repository';
import { Charities } from './charities';
import { User } from './user';
export declare class Donations extends Entity {
    id?: number;
    userID: User['id'];
    charityID: Charities['id'];
    amount: number;
    date: string;
    getId(): number | undefined;
}
