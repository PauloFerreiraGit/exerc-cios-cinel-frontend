import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

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

  /** tipo de dados assyncronos */
  localPromise: Promise<string> = new Promise<string>((e) => {
    return 'Aula de assincronos Promisse';
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
    console.log('minha variavel de promise sem Pending: ', this.localPromise);
    console.log('minha variavel de Observable sem Subscribe: ', this.localObservable$);
  }
  ngOnInit(): void {
    this.localObservable$.subscribe((data) =>
      console.log(' minha variavel de observable sem subscribe', data as string),
    );
    this.localPromise.then((result) => console.log(' minha variavel de Promisse com them', result));
   
  }
}
