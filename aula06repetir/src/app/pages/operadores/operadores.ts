import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-operadores',
  imports: [CommonModule],
  templateUrl: './operadores.html',
  styleUrl: './operadores.css',
})
export class Operadores {
  /// Operadores aritmeticos
  /// soma, subtação, multiplicação, divisáo e resto
  localAritmeticos: string = ' + ,- , * , / , %';

  ///Operadores de Comparação
  /// comparação sem tipagem, comparação com tipagem, diferente sem tipagem,
  /// diferente com tipagem, maior, menor, maior&igual, menor&igual.
  localcomparacao: string = '==, ===, !=, !==, >, <, >=, <=';

  exemploOperador = '3'; // se usar == o complilador vai falar que é if(3 == exemploOperador); true
  exemploOperador3Iguais = '3'; // se usar === o compilador vai falar que é if(3 === "3"); false

  /// Operadores Lógicos
  /// & o E é 100% true
  /// || o Ou pode ter 1 True
  /// ?? coalescência nula , ou um e outro
  localLogicos: string = '&&, || , ?? ';

  ///Operador de Atribuição
  /**Obs: em outras linguagens pode aparecer assim: =+, ou =- */
  localAtribuicao: string = ' =, +=, -= ';

  ///Operador Ternario
  localTernario: string = "localName = this.cursos ? 'curso de java' : ' curso de js' ";

  construtor() {
    let exemploNumber = 10;
    ///quanto tem na variavel exemploNumber ????
    exemploNumber += 20;

    let localternario = exemploNumber ? 50 : 100;
    /* ternario permite fazer pre checagem, exemplo abaixo onde se na variavel 
    for igual ao valor 30, eu faço a atribuição valor 50 senão eu faço valor 100 */
    let localternario2 = exemploNumber === 30 ? 50 : 100;
  }
}
