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
    streetAddress: string;

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
    stateOrProvince: string;

    @property({
        type: 'string',
        required: true
    })
    postalCode: string;

    getId() {
        return this.id;
    }
}