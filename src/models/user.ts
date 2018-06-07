import { Entity, property, model } from '@loopback/repository';
import { Charities } from './charities';

@model()
export class User extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    username: string;

    @property({
        type: 'string',
        required: true
    })
    first_name: string;

    @property({
        type: 'string',
        required: true
    })
    last_name: string;

    @property({
        type: 'string',
        required: true
    })
    email: string;

    @property({
        type: 'string',
        required: true
    })
    password: string;

    @property({
        type: 'number',
        id: true
    })
    paymentID?: number;

    @property({
        type: 'number',
        id: true
    })
    addressID?: number;

    getId() {
        return this.id;
    }
}