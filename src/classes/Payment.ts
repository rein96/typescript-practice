import { HasFormatter } from '../interfaces/HasFormatter';

export class Payment implements HasFormatter {

    // readonly client: string; // readonly -> property can be accessed inside a class and outside, but readonly
    // private details: string; // private -> only accessible inside its class
    // public amount: number;   // public -> default

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ) { }

    format(): string {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}