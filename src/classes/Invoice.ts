// Public, Private & Readonly (Extend class)
export class Invoice2nd {

    // readonly client: string; // readonly -> property can be accessed inside a class and outside, but readonly
    // private details: string; // private -> only accessible inside its class
    // public amount: number;   // public -> default

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }

    format(): string {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}