import { Entity, property, model } from '@loopback/repository';

@model()
export class Registration extends Entity {
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

    getId() {
        return this.id;
    }
}