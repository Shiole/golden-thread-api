import { Entity, property, model } from '@loopback/repository';
import { Charities } from './charities';

@model()
export class Projects extends Entity {
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

    @property({
        type: 'string',
        required: true
    })
    charityID: Charities['id'];

    getId() {
        return this.id;
    }
}