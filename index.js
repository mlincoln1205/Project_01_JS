import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

// import {ContaCorrente} from "./Conta/ContaCorrente.js"
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";

const diretor = new Diretor("Reinaldo", 10000, 11122233399);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Thomas", 5000, 22244477700);
gerente.cadastrarSenha("123")


const cliente = new Cliente("Lais", 26374615299, "456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);


// const cliente1 = new Cliente("Lincoln", 11122233309);
// const contaCorrenteLincoln = new ContaCorrente(cliente1, 1001);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

// const contaSalario = new ContaSalario(cliente1);
// contaSalario.depositar(100);
// contaSalario.sacar(50);


// console.log(contaSalario);
// // console.log(contaCorrenteLincoln);
