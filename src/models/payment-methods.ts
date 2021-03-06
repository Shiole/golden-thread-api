import { Entity, property, model } from '@loopback/repository';
import { Charities } from './charities';

@model()
export class PaymentMethods extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    card_holder: string;

    @property({
        type: 'number',
        required: true
    })
    card_number: number;

    @property({
        type: 'string',
        required: true
    })
    exp_date: string;

    @property({
        type: 'string',
        required: true
    })
    CVC: string;

    getId() {
        return this.id;
    }
}