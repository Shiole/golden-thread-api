import { Entity } from '@loopback/repository';
export declare class Addresses extends Entity {
    id?: number;
    streetAddress: string;
    city: string;
    country: string;
    stateOrProvince: string;
    postalCode: string;
    getId(): number | undefined;
}
