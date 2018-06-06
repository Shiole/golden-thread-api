import { Entity, property, model } from '@loopback/repository';
import { Charities } from './charities';
import { User } from './user';

@model()
export class Donations extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'number',
        required: true
    })
    userID: User['id'];

    @property({
        type: 'number',
        required: true
    })
    charityID: Charities['id'];

    @property({
        type: 'number',
        required: true
    })
    amount: number;

    @property({
        type: 'string',
        required: true
    })
    date: string;

    getId() {
        return this.id;
    }

}