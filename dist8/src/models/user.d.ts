import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    paymentID?: number;
    addressID?: number;
    getId(): number | undefined;
}
