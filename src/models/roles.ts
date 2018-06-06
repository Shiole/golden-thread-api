import { Entity, property, model } from '@loopback/repository';
import { Charities } from './charities';

@model()
export class Roles extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        id: true
    })
    type: string;
}