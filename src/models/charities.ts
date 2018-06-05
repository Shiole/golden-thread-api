import { Entity, property, model } from '@loopback/repository';

@model()
export class Charities extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    name: string;

    @property({
        type: 'string',
        required: true
    })
    details: string;

    /* @property({
        type: 'string',
        required: true
    })
    image: string; */

    getId() {
        return this.id;
    }
}