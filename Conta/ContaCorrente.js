import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    // subscribe sacar method
    sacar(valor) {
        let taxa = 1.017;
        return this._sacar(valor, taxa);
    }
}
