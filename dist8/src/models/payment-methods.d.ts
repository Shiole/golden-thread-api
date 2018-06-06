import { Entity } from '@loopback/repository';
export declare class PaymentMethods extends Entity {
    id?: number;
    cardHolder: string;
    cardNum: number;
    expDate: string;
    CVC: string;
    getId(): number | undefined;
}
