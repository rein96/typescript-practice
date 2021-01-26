export class Payment {
    // readonly client: string; // readonly -> property can be accessed inside a class and outside, but readonly
    // private details: string; // private -> only accessible inside its class
    // public amount: number;   // public -> default
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
