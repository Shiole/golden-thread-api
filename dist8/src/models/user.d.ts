import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    paymentID?: number;
    addressID?: number;
    getId(): number | undefined;
}
