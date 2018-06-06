import { Entity, property, model } from '@loopback/repository';
import { Charities } from './charities';
import { Roles } from './roles';
import { User } from './user';

@model()
export class Permissions extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'number',
        required: true
    })
    roleID: Roles['id'];

    @property({
        type: 'number',
        required: true
    })
    userID: User['id'];

    @property({
        type: 'string',
        required: true
    })
    duration: string;

    getId() {
        return this.id;
    }
}