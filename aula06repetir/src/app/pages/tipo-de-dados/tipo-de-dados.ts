import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

type meuobjeto = {nome: string; endereco: string; numero: number; admin: boolean };
@Component({
  selector: 'app-tipo-de-dados',
  imports: [],
  templateUrl: './tipo-de-dados.html',
  styleUrl: './tipo-de-dados.css',
})
export class TipoDeDados implements OnInit {
  localString: string = 'meu texto'; /// tipo string /// tipo char 'y'
  localNumber: number = 100; /// tipo number /// long, biglong, int, inteiro....
  localBollean: boolean = false; /// tipo boolean
  localArray: string[] = ['Leo', 'Evaldina', 'Paulo', 'Rafael', 'Monica', 'Samara', 'false'];
  LocalArray2: number[] = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  localNull: null = null;
  localNull2!: null;
  localUndefined: undefined = undefined;
  localUndefined2!: undefined;
  localobjecto = {nome: 'Tony', endereço: 'rua....', numero: 10, admin: false};
  localobjecto2: meuobjeto = {nome: 'Tony', endereco: 'rua....', numero: 10, admin: false,};

  /** tipo de dados assyncronos */
  localPromise: Promise<string> = new Promise<string>((resolve, reject) => {
    if (resolve) {
      resolve('Aula de assincronos Promisse');
    }
    // else {
    reject('Error Http 400');
    //}
  });

  localObservable$ = new Observable((a) => a.next('Aula de Assincronos Observables'));

  localObservable2$: Observable<string> = of(' Aula de Assincronos Observables2');

  /** Construtor do JS */
  constructor() {
    console.log('minha variavel de string: ', this.localString);
    console.log('minha variavel de string: ', this.localNumber);
    console.log('minha variavel de string: ', this.localBollean);
    console.log('minha variavel de string: ', this.localArray);
    console.log('minha variavel de string: ', this.localNull);
    console.log('minha variavel de string: ', this.localUndefined);
    // console.log('minha variavel de promise sem Pending: ', this.localPromise);
    // console.log('minha variavel de Observable sem Subscribe: ', this.localObservable$);
    console.log ('minha variavel do tipo Objeto: ', this.localobjecto2);
    console.log ('minha variavel do tipo Objeto.nome: ', this.localobjecto2.nome);
    console.log ('minha variavel do tipo Objeto.endereco: ', this.localobjecto2['endereco']);
    console.log ('minha variavel do tipo Objeto.numero: ', this.localobjecto2.numero);
    console.log ('minha variavel do tipo Objeto.admin: ', this.localobjecto2['admin']);
  }
  ngOnInit(): void {
    this.localObservable$.subscribe({
      next: (result) => console.log('Nosso 2º Observable: ' + result),
      error: (e) => console.error('Error do Observable' + e),
      complete: () => console.log('Observable completo'),
    });
  }
}
