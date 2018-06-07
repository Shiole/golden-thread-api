import { Entity } from '@loopback/repository';
export declare class PaymentMethods extends Entity {
    id?: number;
    card_holder: string;
    card_number: number;
    exp_date: string;
    CVC: string;
    getId(): number | undefined;
}
