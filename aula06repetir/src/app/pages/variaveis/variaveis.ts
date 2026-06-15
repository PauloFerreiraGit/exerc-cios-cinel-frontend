import { Component } from '@angular/core';

@Component({
  selector: 'app-variaveis',
  imports: [],
  templateUrl: './variaveis.html',
  styleUrl: './variaveis.css',
})
export class Variaveis {
  ///variaveis globais
  nome = 'Tony';
  localobjecto = { nome: 'Tony', endereço: 'rua....', numero: 10, admin: false, lado: 'esquerdo' };

  constructor() {
    console.log('Minha variavel global objeto', this.localobjecto);
    ///invocar no construtor
    this.metodoTestConst();
    this.metodoTestLet();
    this.metodoTestConst2();
    this.metodoTestLet2();
  }

  metodoTestLet() {
    console.log('Minha variavel global objeto no metodoTestLet', this.localobjecto);
    this.nome = 'Rafael';
    console.log('Minha variavel global nome metodoTestLet(): ', this.localobjecto);
  }
  metodoTestConst() {
    console.log('Minha variavel global objeto no metodoTestConst(): ', this.localobjecto);
    this.nome = 'Paulo';
    console.log('Minha variavel global nome no metodoTestConst(): ', this.localobjecto);
  }
  metodoTestConst2 = () => {
    // var nome = 'tony';
    /// escopo local Não usa this
    const localNome = 'tony filho';
    const localNomeObjeto = {};
    const localNomeArray = [];
    console.log('Minha variavel Const localNome no metodoTestConst2(): ', localNome);
    // localNome = 'ana';
    // localNomeObjeto = {nome: "tony"};
    // localNomeArray = [1,2];
  };
  metodoTestLet2 = () => {
    // var nome = 'tony';
    /// escopo local Não usa this
    let localNome = 'tony filho';
    console.log('Minha variavel Const localNome no metodoTestLet2(): ', localNome);
    localNome = 'Monica';
    console.log('Minha variavel Const localNome no metodoTestLet2: ', localNome);
  };
}
