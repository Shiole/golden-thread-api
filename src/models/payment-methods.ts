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
    cardHolder: string;

    @property({
        type: 'number',
        required: true
    })
    cardNum: number;

    @property({
        type: 'string',
        required: true
    })
    expDate: string;

    @property({
        type: 'string',
        required: true
    })
    CVC: string;

    getId() {
        return this.id;
    }
}