import { Entity, property, model } from '@loopback/repository';
import { Charities } from './charities';

@model()
export class Addresses extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    street_address: string;

    @property({
        type: 'string',
        required: true
    })
    city: string;

    @property({
        type: 'string',
        required: true
    })
    country: string;

    @property({
        type: 'string',
        required: true
    })
    state_province: string;

    @property({
        type: 'string',
        required: true
    })
    postal_code: string;

    getId() {
        return this.id;
    }
}