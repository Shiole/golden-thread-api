import { Entity } from '@loopback/repository';
export declare class Addresses extends Entity {
    id?: number;
    street_address: string;
    city: string;
    country: string;
    state_province: string;
    postal_code: string;
    getId(): number | undefined;
}
