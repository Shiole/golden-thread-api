import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, param, requestBody, HttpErrors } from "@loopback/rest";
import { PaymentMethods } from "../models/payment-methods";
import { PaymentMethodsRepository } from "../repositories/payment-methods.repository";

export class PaymentMethodsController {

    constructor(
        @repository(PaymentMethodsRepository.name) private paymentRepo: PaymentMethodsRepository
    ) { }

    @post('/payment')
    async createUser(@requestBody() payment: PaymentMethods) {

        if (!payment.cardHolder || !payment.cardNum || !payment.expDate || !payment.CVC) {
            throw new HttpErrors.BadRequest('Missing required data');
          }
      
          let paymentMethodExists: boolean = !!(await this.paymentRepo.count(
            { cardNum: payment.cardNum }
            ));
      
          if (paymentMethodExists) {
            throw new HttpErrors.BadRequest('Card already registered');
          }
          
        return await this.paymentRepo.create(payment);
    }

    @get('/payment-methods')
    async getAllPaymentMethods(): Promise<Array<PaymentMethods>> {
        return await this.paymentRepo.find();
    }

    @get('/payment-methods/{id}')
    async getPaymentMethodsByID(@param.path.number('id') id: number): Promise<PaymentMethods> {

        let paymentMethodExists: boolean = !!(await this.paymentRepo.count({ id }));

        if (!paymentMethodExists) {
            throw new HttpErrors.BadRequest(`Payment method does not exist`);
        }

        return await this.paymentRepo.findById(id);
    }
}