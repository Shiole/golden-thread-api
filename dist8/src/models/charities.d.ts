import { Entity } from '@loopback/repository';
export declare class Charities extends Entity {
    id?: number;
    name: string;
    details: string;
    getId(): number | undefined;
}
