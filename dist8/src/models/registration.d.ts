import { Entity } from '@loopback/repository';
export declare class Registration extends Entity {
    id?: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    getId(): number | undefined;
}
