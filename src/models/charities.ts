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
    mission: string;

    @property({
        type: 'number',
        id: true
    })
    projectID?: number;

    @property({
        type: 'number',
        id: true
    })
    addressID?: number;

    getId() {
        return this.id;
    }
}