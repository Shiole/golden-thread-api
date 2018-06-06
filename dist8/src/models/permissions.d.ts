import { Entity } from '@loopback/repository';
import { Roles } from './roles';
import { User } from './user';
export declare class Permissions extends Entity {
    id?: number;
    roleID: Roles['id'];
    userID: User['id'];
    duration: string;
    getId(): number | undefined;
}
