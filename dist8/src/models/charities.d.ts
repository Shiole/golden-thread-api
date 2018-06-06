import { Entity } from '@loopback/repository';
export declare class Charities extends Entity {
    id?: number;
    name: string;
    mission: string;
    projectID?: number;
    addressID?: number;
    getId(): number | undefined;
}
