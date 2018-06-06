import { PaymentMethods } from "../models/payment-methods";
import { PaymentMethodsRepository } from "../repositories/payment-methods.repository";
export declare class PaymentMethodsController {
    private paymentRepo;
    constructor(paymentRepo: PaymentMethodsRepository);
    createUser(payment: PaymentMethods): Promise<PaymentMethods>;
    getAllPaymentMethods(): Promise<Array<PaymentMethods>>;
    getPaymentMethodsByID(id: number): Promise<PaymentMethods>;
}
