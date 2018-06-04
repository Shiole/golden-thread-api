import { Entity } from '@loopback/repository';
export declare class Users extends Entity {
    id?: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    getId(): number | undefined;
}
