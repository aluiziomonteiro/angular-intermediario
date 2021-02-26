#  Angular 8 Intermediario


___

### Objetivos

* Montar um CRUD completo de filmes
* Cadastrar, listar, editar, excluir
* Componentizar todos os elementos
* Criar serviços para consumir os filmes
 
### Requisitos Básicos

 * Curso de Angular 8 Básico.
 * Curso de JavaScript ES6 Essencial.
 * Conhecimentos de Github.

### Ambiente

 * Node 11.
 * Angular 8.
 * Visual Studio Code.

### Bibliotecas necessárias

* **Angular Material:** Especificação padronizada de interface da Google.

* **JSON Server:** Vai gatear um servidor pra gente poder fazer chamadas Rest "get, post, put, delete" na máquina local.

* **NGX-Infinite-Scroll:** Responsável por fazer um scroll infinito. A página vai carregar por demanda, sem paginação. Semelhante ao scroll do Facebook.

* **RxJS:** Responsável pela parte reativa da programação. Isso é muito utilizado no Angular.

___

### Angular Material e RxJS

##### Angular Material:
É a implementação oficial, para o Angular, do Material Design, a especificação de design para interfaces interativas do Google. O Material Design cobre desde pequenos elementos, como ícones e cores, até elementos maiores como navegação, cards, imagens e muito mais.

[Veja alguns lindos componentes](https://material.angular.io/components/categories)

[Veja como é fácil instalar](https://material.angular.io/guide/getting-started)

Vamos criar um projeto para testar isso daí.

1 - Abra o terminal e digite `ng new mat` dentro de uma pasta de sua preferência:

![img/001.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/001.png)

2 - Abra a pasta **/mat** e rode um `npm install`, só por segurança mesmo...

3 - Instale o Angular Material com o comando: `ng add @angular/material`.

4 - Escolha um tema. Aqui vai ser o Indigo/Pink mesmo.

5 - Marque sim para as outras questões que aparecerem durante esta instalação. Para saber mais informações sobre o que significa cada opção consulte o link de [instalação.](https://material.angular.io/guide/getting-started)

6 - Vamos pegar este [simple-form-fields.](https://material.angular.io/components/form-field/overview)

7 - Clique no edit referente ao form-field:

![img/002.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/002.png)

8 - O código será aberto em um editor no próprio Browser.

9 - Na aba **FILES** do editor, veja o arquivo chamado **material-modules**. Este arquivo contem todos os imports que nós vamos precisar para fazer nosso form-fields funcionar:

![img/003.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/003.png)

9 - Copie o conteúdo deste arquivo, abra o VSCode.

10 - Na pasta **/src/app**, crie um arquivo chamado **material.module.ts** e cole o conteúdo copiado dentro dele.

11 - Esta classe se chama **DemoMaterialModule**. Pegue este nome e cole no `app.module.ts` para que o módulo do Angular Material seja importado:

![img/004.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/004.png)

Agora sim. Temos todos os componentes instalados em nosso projeto.

12 - Vamos para o terminal do VSCode subir o nosso projeto com: `npm start`:

13 - Assim que compilar tudo bonitinho, vá para o Browser e acesse o `localhost:4200`:

![img/005.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/005.png)

Tudo tranquilo.

14 - Volte para o editor do Browser e copie aquele html referente ao form:

![img/006.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/006.png)

15 - Substitua o conteúdo de **app.component.html** pelo conteúdo copiado. Preserve as tags `<router-outlet></router-outlet>`:

![img/007.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/007.png)

O form já está funcionando com base no Angular Material:

![img/008.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/008.png)

Viu como é fácil?

Vamos fazer outro exemplo. 

Faremos o mesmo com este card de cachorro [aqui.](https://material.angular.io/components/card/examples)

1 - Abra o código no editor do Browser.

2 - Pegue o html do card e cole no template do projeto.

3 - Pegue também o css do cachorro e cole em **app.component.css**:

![img/009.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/009.png)

Como as bibliotecas já estão importadas em **app.module.ts**, é só isso que precisamos fazer.

Para maiores informações sobre as configurações de cada componente, você deve visitar a página do componente, na guia **Overview**, pois cada componente possui as suas configurações particulares. Na parte de **API** você verá informações de como importar cada componente do Angular Material.

Vamos iniciar nosso projeto, com alguns componentes já criados. Menubar, footer, form,  mas nada impede de você criá-los de um a um.



___
##### A Biblioteca RxJS

O RxJS é uma biblioteca para programação Reativa usando Observable, para facilitar a composição de código assíncrono ou baseado em retorno de chamada.

Para se aprofundar em como o RxJS Funciona, ver exemplos práticos e a utilização de cada componente, vamos acessar o site do [RxJS Learn.](https://www.learnrxjs.io/).

Vamos verificar o [filter.](https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter)

Este filter é algo muito utilizado.

Por aqui nós também podemos ver exemplos de uso e temos acesso ao editor de código do Browser.

![img/010.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/010.png)

Vamos verificar:

![img/011.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/011.png)

Agora vamos verificar o [map()](https://www.learnrxjs.io/learn-rxjs/operators/transformation/map), pois ele também é bastante utilizado:

No site do LearnRxJS, abra o StackBlitz do Examplo 1 analise o código da mesma forma que foi feito com o filter anteriormente:

![img/012.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/012.png)

Imagine que você precise percorrer um array de filmes, pegar as datas que estão em um formato bem louco e transformá-las para o formato do seu país. Você provavelmente iria utilizar este `map()`.

Vamos pegar mais um exemplo no site. Agora será o [first.](https://www.learnrxjs.io/learn-rxjs/operators/filtering/first)

Abra o código do Exemplo 1:

![img/013.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/013.png)

Vale lembrar que sem o `subscribe()`, o nosso `first` não vai obter o retorno desejado da operação:

![img/014.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/014.png)

Um outro detalhe é que, diferente do Angular Material, o RxJS não necessita de instalação, pois ele já vem por padrão junto com o Angular.
___

### Iniciando com o Projeto Prático
___
___

Este projeto vai ser inicializado com os itens básicos já montados. Trata-se dos .html e dos .css que não fazem parte do curso de Angular.

1 - Baixe o projeto inicial [aqui.](https://github.com/aluiziomonteiro/angular-avc/tree/5abcfcbc9f752f2bac6d17038577fbbf7e9311a3)

2 - Entre na dentro da pasta do projeto, via terminal, e instale as dependências:

![img/015.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/015.png)

Note que as dependências ficam na pasta **/node-modules**. Não vamos colocá-la no github, pois ela é muito grande e iria demorar a vida do urubu para concluir o upload. Portanto, ao baixar este projeto, execute a instalação das dependências.

O arquivo .gitignore está configurado para ignorar o tracking de **/node-modules**.

3 - Abra o projeto no VSCodee dê um `npm start` nele. Isso vai criar um servidor interno, compilar e subir o nosso projeto:

![img/016.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/016.png)

4 - Assim que concluir tudo, acesse `localhost:4200` no Browser:

![img/017.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/017.png)

Pronto! Este é o esqueleto do projeto inicial.

___

### Instalando o JSON-Server

O JSON-Server criará pra gente chamadas Rest para um back-end que não existe, porém ele vai retornar um Data Base JSON como se fosse realmente um server.

Enfim, a diferença das chamadas Rest reais para as chamadas que vamos realizar aqui basicamente é só a URL de acesso.

Vamos instalar o JSON-Server:

1 - Digite `npm install -g json-server` no terminal:

![img/018.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/018.png)

 Obs: `-g` significa que a instalação é global, isto é, caso você precise utilizar o JSON-Server em outros projetos futuramente, ele estará disponível na sua máquina.
 
Para maiores detalhes sobre a instalação, consulte o [github do JSON-Server.](https://github.com/typicode/json-server)

2 - Salve o arquivo: [db.json](https://github.com/aluiziomonteiro/angular-avc/blob/master/files/db.json) na pasta raiz do projeto. Ele é uma base de dados com registros de filmes.

3 - Inicialize o servidor com o comando `json-server --watch db.json` pelo terminal do VSCode.

![img/019.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/019.png)

4 - Dê uma verificada nas urls geradas. A primeira é uma lista de filmes e a segunda é um readme com informações gerais.

5 - Tente realizar um Post com o Postman para testar:

![img/020.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/020.png)

6 - Acesse `http://localhost:3000/filmes` novamente e veja se o filme adicionado realmente esta lá:

![img/021.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/021.png)

7 - Teste as outras requisições: Get, Put e Delete.

___



### Conhecendo a Estrutura do Projeto

Abrindo a pasta raiz do nosso projeto, temos as seguintes pastas:

* **/src/app/filmes** - Aqui nós temos todos os nossos componentes de tela que são relacionados **ao filme** organizados nas pastas: **/cadastro-filmes** e **/listagem-filmes**.

* **/cadastro-filmes/cadastro-filmes.component.html** - É o nosso .html de cadastro:
![img/030.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/030.png)

* **/cadastro-filmes/cadastro-filmes.component.ts** - Podemos notar que o valor do seletor começa com **dio**. Isso porque este seletor, foi criação dos caras lá da dio.
![img/031.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/031.png)

Isso nós podemos ver dentro do arquivo **/src/tslint.json**:

É neste arquivo que foi indicado que todos os componentes que pertencem ao povo da dio, devem ser iniciados com o prefixo **dio**. Dessa forma é que se mantêm o controle sobre o que foi criado por eles e o que foi criado por terceiros. Isso é uma padronização:

![img/032.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/032.png)

Neste projeto vamos ver muitos seletores do Angular Material. Eles começam com o prefixo **<mat-algumacoisa**.

* **/cadastro-filmes/cadastro-filmes.component.ts** - É o nosso componente de listagem. Dentro dele temos um monte de cards replicados. Isto é um outro problema que vamos resolver logo logo:

![img/033.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/033.png)


* **/cadastro-filmes/filmes.module.ts** - Aqui nós temos a declaração dos dois componentes de filmes e seus respectivos imports. Isso evita da gente ter que sempre que for utilizar os componentes, ter que fazer os imports repetidas vezes.

![img/034.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/034.png)

Nossos componentes estão segmentados no módulo e este módulo de filmes está sendo importado no módulo pai.

* **/src/app/shared** - Em shared, temos dois componentes: **topo** e **rodape**:

![img/027.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/027.png)

Ainda em **/shared** temos a pasta outra pasta chamada **material**. Ela é responsável por carregar todos os componentes que temos no Angular Material.

O Angular Material está importado em nosso **app.module.ts** e isso significa que já podemos utilizar o Angular Material em qualquer lugar da nossa aplicação tranquilamente.

![img/028.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/028.png)

Nunca se esqueça de que o **app.module.ts** é o nosso módulo raiz. Ele é o pai de todos os outros módulos. Isso implica que tudo o que estiver importado dentro deste módulo, vai estar disponível para a aplicação inteira.
Note que: **app.module.ts** lembra **A PaPai module**.

Ainda dentro do módulo pai, temos declarado um **providers** que serve para que o sistema converta automaticamente, todas as datas para o formato **pt**:

![img/029.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/029.png)

* **/src/app/component.html** - E o arquivo inicial do Angular. Dentro dele já temos uma tag `<dio-topo></dio-topo>` e é este componente que vai iniciar toda a nossa aplicação. Ele fica dentro da pasta **/app/shared/topo**.

* **/app/shared/topo/topo.component.html** - Já temos definido o nosso menu lateral e o menu superior. 
* **/app/shared/topo/topo.component.ts** - É o componente e você já pode observar que dentro dele já tem o seletor: **dio-topo** definido. 

O Angular enxerga estes componentes porque eles já estão declarados no arquivo: **app.module.ts** que é o módulo raiz:

![img/023.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/023.png)

Caso você não declare seus componentes no **app.module.ts**:

![img/024.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/024.png)

O Angular não vai conseguir encontrá-lo:

![img/025.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/025.png)

Portanto, não esqueça de declarar os seus componentes aqui e retire o comentário que foi feito para que o web-app volte ao normal.

* **/src/app/component.scss** - 

* **/src/app/component.ts** -

* **/src/app/module.ts** -

* **/src/app/routing.module.ts** - É onde estão todas as nossas rotas:

![img/026.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/026.png)
Elas já estão funcionando pela URL do Browser e também pelo menu da nossa interface.

* **/src/assets/styles** - Contém todos os estilos globais.

* **/src/assets/styles/reset.scss** - Responsável pelo reset das tabelas.

* **/src/assets/styles/styles.scss** - Estilo que nós realmente vamos utilizar. Temos algumas classes básicas criadas como, classe de body, de margem, classe para a parte de listagem dos nossos filmes e temos a full-width que vai ser usada quando quisermos que algum componente ocupe a tela inteira.

* **/src/assets/styles/themes.scss** - Estilos iniciais do próprio tema.

* **/src/assets/images** - Contém esta imagem:

![img/022.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/022.png)


##### Vamos fazer um pequeno ajuste neste app.

Acontece que o **FilmesModule** está sendo importado tanto pelo módulo pai, quanto pelo módulos de rotas:

![img/Diagrama1.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/Diagrama1.png)

Vamos apagar o FilmesModule do módulo pai. O módulo de rotas, que também é importado pelo módulo pai, já está importando FilmesModule para nós:

![img/035.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/035.png)

[Código do Projeto](https://github.com/aluiziomonteiro/angular-avc/tree/fd4cf5c03f56e2c636b22a7a00395e7db542442c)

___

### Criando um Formulário

Vamos mexer agora somente na parte de cadastro de filmes.

1 - Em **/src/app/filmes/cadastro-filmes/cadastro-filmes.component.ts**, vamos ver este `FormGroup`. Aproveite e mude este nome de `options` para `cadastro`, pois faz mais sentido:

![img/036.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/036.png)

Quem fornece recursos para a implementação do FormGroup e de outros tipos de formulários é o `FormBuilder`.

2 - Digite no Google: Angular FormBuilder para que você adquira o dom das pesquisas, ou então clique aqui: [lazySkills++.](https://angular.io/api/forms/FormBuilder)

Aqui está especificando o que ele é, o que recebe e o que retorna:

![img/037.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/037.png)

O que vai acontecer é que nós vamos utilizar um `FormBuilder` passando um método `group()` que vai nos retornar um `FormGroup`.

Aqui no site tem um exemplo de como usar um `FormControl`. Faremos a mesma coisa, mas usando o `FormGroup`. Isto porque queremos não só um input, e sim, um grupo de inputs:

![img/038.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/038.png)

3 - Importe o `FormBuilder` no construtor do componente **cadastro-filmes**.

~~~typescript
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
selector: 'dio-cadastro-filmes',
templateUrl: './cadastro-filmes.component.html',
styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

cadastro: FormGroup;

constructor(private fb: FormBuilder) { }

ngOnInit() {

this.cadastro = this.fb.group({

});

}

}

~~~

Na parte sublinhada da imagem abaixo, é pedido que seja passado o nome do input, seu valor e o tipo de validação:

![img/039.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/039.png)


4 - Vamos para o template verificar o nome dos inputs e em seguida vamos passar estas informações para dentro do `group()`:

![img/040.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/040.png)

O código do `group()` fica da seguinte maneira:

![img/041.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/041.png)

Vamos compreender tudo isso:

* Primeiro acontece que o `FormBuilder` vai gerar isso tudo que foi especificado pra gente. 

* Se alguma condição dessas não for cumprida, o moído todo será invalidado.

* Ainda vamos adicionar estas referências nos inputs do template.

* O validator required é uma condição de not null.

* O validator minLength e maxLength se refere ao tamanho da cadeia de caracteres.

* O validator min e max se refere ao valor numérico.

Agora vamos referenciar os campos no template.

1 - Vamos dar um nome e dizer qual é o `formControlName` que cada input se refere:

![img/042.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/042.png)

2 - Reinicie o servidor e rode a aplicação:

![img/043.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/043.png)

Deu erro porque não definimos nosso formGroup no template. Precisamos envolver nossos inputs por um formGroup conforme o exemplo citado na própria mensagem de erro:

![img/044.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/044.png)

3 - Teste a aplicação novamente:

![img/045.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/045.png)

Os campos já estão dando sinais de que estão validando conforme nós especificamos no component. Precisamos só fazer um ajuste para o campo **nota** parar de aceitar letas.

2 - Configure o campo **nota** no **template** da seguinte maneira:

~~~html
...
<mat-form-field class="full-width">
<input matInput 
type="number"
min="0"
max="10"
step="0.1"
placeholder="Nota IMDb" 
name="nota" 
formControlName="nota">
</mat-form-field>
...
~~~

3 - Teste novamente a aplicação e veja se a nota está funcionando bem.

Agora nós vamos submeter o nosso form com o databind`(ngSubmited)` apontando para o método `salvar()`. Isso vai enviar nosso form só de ida para o .ts dele. Criaremos, também um reset para ele:

![img/046.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/046.png)

4 - Agora vamos para o component criar estes dois métodos lá:

![img/047.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/047.png)

5 - Coloque os `type="reset"` e `type="submit"` nos botões do template:

~~~typescript
...
<mat-card-actions>
<button type="submit" color="accent" mat-raised-button>Salvar</button>
<button type="reset" color="warn" mat-raised-button>Cancelar</button>
</mat-card-actions>
...
~~~

6 - Teste se está limpando e enviando o form para o método salvar:

![img/048.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/048.png)

Neste momento, o `FormGroup` já está lendo o nosso formulário.

___

### Adicionando Validações ao Formulário


Não queremos que o campo de data fique aceitando qualquer coisa:

![img/049.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/049.png)

Vamos colocar algumas limitações no campo data do template:

1 - Adicione `readonly` para que o input não aceite mais entradas.

2 - Chame `picker.open()` quando o input receber um clique:

~~~typescript
...
<mat-form-field class="full-width">
<input matInput 
readonly 
[matDatepicker]="picker" 
placeholder="Data de Lançamento" 
name="dtLancamento" 
formControlName="dtLancamento"
(click)="picker.open()">
<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
<mat-datepicker #picker></mat-datepicker>
</mat-form-field>
...
~~~
Agora sim. Ao clicar no input, nosso Datepicker será exibido e a entrada de textos está bloqueada:

![img/050.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/050.png)

[Mais sobre datepicker](https://material.angular.io/components/datepicker/overview)

3 - Acrescente um asterisco no label dos campos que são obrigatórios. Isto é mais uma forma de alertar os usuários.

Agora vamos adicionar as mensagens de erro. O Angular Material possui uns `Error messages` que podem ser exibidos com o uso do `<mat-error></mat-error>`.

[Mais sobre form-field](https://material.angular.io/components/form-field/overview)

4 - Coloque uma mensagem de erro para o campo Título. Faça com que o erro dispare quando o campo tiver sido clicado: "touched", quando tiver algum erro:"dirty" e quando o erro ocorrer em nosso input titulo: "get().errors". Esta linha vai dentro do `<mat-form-field>` referente ao input desejado:

~~~typescript
<mat-form-field class="full-width">
<input matInput placeholder="Título *" name="titulo" formControlName="titulo">
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && cadastro.get('titulo').errors"> Deu erro </mat-error>
</mat-form-field>
~~~
Nosso erro já é exibido:

![img/051.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/051.png)

Mas nós queremos especificar exatamente qual é o erro que deu em nosso form de uma maneira mais elegante. Vamos criar um método dentro do componente para fazer isso:

1 - Crie um método abaixo do construtor do componente. Ele será um método `get()` genérico que vai ser utilizado por todos os inputs. O retorno dele é `controls` do nosso cadastro. Controls são todos os nossos inputs de formBuilder.

~~~typescript
...
export class CadastroFilmesComponent implements OnInit {

cadastro: FormGroup;

constructor(private fb: FormBuilder) { }

get f(){
return this.cadastro.controls;
}
...
~~~

2 - Vamos simplificar a nossa chamada de título chamando o nosso método **f**:

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors"> Deu erro </mat-error>
...
~~~

Nesse momento, temos uma só mensagem tratando de três erros:

![img/052.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/052.png)

Vamos personalizar ainda mais o tratamento desses erros.

3 - Aponte para o erro de `required` e mude a mensagem informativa:

~~~typescript
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors && f.titulo.errors.required"> Campo obrigatório </mat-error>
~~~


![img/053.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/053.png)


Ainda tem um pequeno detalhe. Acontece que se nós clicarmos em Salvar com os dados inválidos, a mensagem de erro não vai aparecer. Ela só aparece quando o campo for touched.

4 - Vamos fazer com que todos os campos sejam marcados como clicados dentro da função `salvar()`:

![img/054.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/054.png)

Agora se clicarmos em Salvar, as mensagens aparecem:

![img/055.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/055.png)

O erro de required já esta tratado. Vamos tratar os dois erros de length agora.

5 - Adicione o `<mat-error` de `minlength` e outro de `maxlength`:

~~~typescript
...
<mat-form-field class="full-width">
<input matInput placeholder="Título *" name="titulo" formControlName="titulo">
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors && f.titulo.errors.required"> 
Campo obrigatório 
</mat-error>
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors && f.titulo.errors.minlength"> 
O campo precisa ter no mínimo 2 caracteres 
</mat-error>
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors && f.titulo.errors.maxlength"> 
O campo pode ter no máximo 256 caracteres 
</mat-error>
</mat-form-field>
... 
~~~

Teste se as validações estão passando para o required, minlength e maxleng, tanto salvando quanto sem salvar.

Vamos cuidar de validar os outros campos.

* O campo `urlFoto` usa minLength(10):

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.urlFoto.errors && f.urlFoto.errors.minlength"> 
O campo precisa ter no mínimo 10 caracteres 
</mat-error>
...
~~~

* O `dtLancamento` é um required:

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.dtLancamento.errors && f.dtLancamento.errors.required"> 
Campo obrigatório 
</mat-error>
...
~~~

* A `descricao` não tem nada.


* A `nota` é required, min(0) e max(10):

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.nota.errors && f.nota.errors.required"> 
Campo obrigatório
</mat-error>
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.nota.errors && f.nota.errors.min"> 
Valor mínimo permitido é 0
</mat-error>
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.nota.errors && f.nota.errors.max"> 
Valor máximo permitido é 10 
</mat-error>

...
~~~

* A `urlIMDb` é minLength(10):

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.urlIMDb.errors && f.urlIMDb.errors.minlength"> 
O campo precisa ter no mínimo 10 caracteres 
</mat-error>
...
~~~

* E o `genero` é um required:

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.genero.errors && f.genero.errors.required"> 
Campo obrigatório 
</mat-error>
...
~~~

Pronto! Tudo funcionando como foi determinado.

![img/056.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/056.png)

Porém, estamos utilizando muito código ainda.

___

### Elvis Operator ![img/057.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/057.png)


Note que sempre estamos testando **se o campo possui erros** e em seguida testamos novamente **se ele possui o erro de validação?**

![img/058.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/058.png)

Caso a gente retire a verificação `f.titulo.erros &&`

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors.required"> 
Campo obrigatório 
</mat-error>
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors && f.titulo.errors.minlength"> 
O campo precisa ter no mínimo 2 caracteres 
</mat-error>
...
~~~

O console surta! Apontando que a propriedade `required` está `null`:

![img/059.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/059.png)

Nesse caso, o campo `titulo` não tem erros, mas o estado da propriedade de `required` deixou de existir. O `f.titulo.required` está tentando encontrar o valor do erro, mas ele só encontra `null`.

Podemos corrigir isso colocando um ponto de interrogação após o `errors`:

~~~typescript
...
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors?.required"> 
Campo obrigatório 
</mat-error>
<mat-error *ngIf="(cadastro.touched || cadastro.dirty) && f.titulo.errors && f.titulo.errors.minlength"> 
O campo precisa ter no mínimo 2 caracteres 
</mat-error>
...
~~~

Com isso, o Angular vai executar a verificação do `required` **somente** se houver erros em `f.titulo`. Caso não ocorra erros, então retorne false.

![img/060.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/060.png)

1 - Vamos apagar a verificação de erro `f.titulo.errors &&` e adicionar o Elvis `?` em todas as verificações:

![img/061.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/061.png)

2 - Testando o formulário, podemos ver que está tudo okay:

![img/062.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/062.png)

Vamos utilizar o Elvis bastante para combater os `null`. ?:j

___

### Serviço para Validação de Erros

Nosso código ainda está muito sujo, cheio de verificações e de coisas replicadas:

![img/063.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/063.png)

Vamos retirar toda essa lógica, criar um serviço e centralizar tudo lá:

1 - Instale o schematics: `npm install @schematics/angular@7.0.7 --save-dev`.

* **--save-dev** - Salve nas dependências de desenvolvimento. 
Acontece que temos um arquivo chamado **/package.json**. 
Dentro dele, as dependências são divididas em **dependências para produção** e **dependências para desenvolvimento**.
Estamos salvando o schematics nas dependências de produção:

![img/064.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/064.png)

Isso quer dizer que, esta dependência só vai ser usada em desenvolvimento. Quando formos gerar o nosso build para produção, as dependências de dev não vão existir.

2 - Entre na raiz do projeto via terminal e digite:`ng g s shared/components/campos/validarCampos` para o Angular .
**Generate a Service** para nós.

* **g** - generate.

* **s** - service.

* **shared/components/campos/validarCampos** - caminho. 

O Angular já cria pra gente o provider e injeta o mesmo no **root**. Isto significa que em qualquer lugar do sistema, nós vamos poder utilizar o **ValidarCamposService**:

![img/065.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/065.png)

3 - Vamos começar a implementar os nossos métodos.
Nosso método vai receber um control e qual é o tipo de erro que queremos que ele valide. São eles os **required**, **minlength** e por ai vai.
O `hasError` já é um método do control que vai testar se determinado input possui o erro especificado:

![img/066.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/066.png)

Desta forma, nosso método já está proto para verificar se o erro está acontecendo. Se sim, retorna true.

4 - Precisamos adicionar, no construtor do componente de cadastro, uma chamada pública para o nosso serviço, do contrário, o nosso template não vai conseguir acessar o serviço:

![img/067.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/067.png)

5 - Agora vamos chamar a nossa validação no template, passando o control e o nome do erro no formato de string:

![img/068.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/068.png)

6 - Validação de required está funcionando bem:

![img/069.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/069.png)

7 - Podemos substituir os outros códigos:

![img/070.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/070.png)

8 - Tudo continua funcionando:

![img/071.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/071.png)

Podemos criar ainda um outro método que vai testar se o campo foi clicado e se está sujo. Isso reduziria ainda mais nossa expressão:

9 - Vamos criar um `hasErrorValidar()` que recebe o control e o erro:

![img/072.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/072.png)

10 - Retire os testes de sujeira, também o teste de toque no template e, por fim, chame o `hasErrorValidar()` ao invés do `hasError()`:

![img/073.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/073.png)

11 - Tudo funcionando tranquilamente:

![img/074.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/074.png)

12 - Teste de salvamento também está okay:

![img/075.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/075.png)

___



### Componentizando nossos Campos

##### Componentizando o Campo de Input

Para promover a reutilização dos nossos componentes, evitando assim a duplicação dos mesmos.

1 - No terminal, digite: `ng g c shared/components/campos/input-text --nospec`

Vamos receber um erro de: `More than one module matches. Use skip-import option to skip importing the component into the closest module.` Acontece que ele não encontrou nenhum módulo para se fazer um import. Isso acontece porque quando criamos alguma coisa com o `CLI` ele faz o import automaticamente para nós. Para criar este componente ele pegaria um módulo e colocaria o componente dentro do módulo, mas o `CLI` não encontrou nada.

2 - Vamos criar o módulo: `ng g m shared/components/campos --nospec`:


![img/076.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/076.png)

O Módulo foi criado e o Componente será importado automaticamente para ele.

3 - Agora vamos criar os componentes: `ng g c shared/components/campos/input-text --nospec`:

![img/077.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/077.png)


Caso o Angular CLI não encontre os módulos, pode ser preciso você passar o comando : `--module` mais o caminho do módulo.

Caso apareça erro no componente criado pelo Angula CLI, é porque devemos adicionar o prefixo `dio`, como foi definido no arquivo **tslink.json**.

![img/078.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/078.png)

Bem, nosso componente de `inputText` já foi importado e agora precisamos criar um componente para cada tipo de input que nós temos. O que vai acontecer é que, como todos os campos estão declarados dentro do nosso **campos.module.ts**, quando a gente for precisar dos campos, basta chamarmos este módulo que todos os inputs virão.


1 - Digite no terminal: `ng g c shared/components/campos/input-number --nospec` para o campo `inputNumber`:

![img/079.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/079.png)

2 - Gere também o `date`, o textarea` e o `select`:
`ng g c shared/components/campos/input-date --nospec`
`ng g c shared/components/campos/input-textarea --nospec`
`ng g c shared/components/campos/input-select --nospec`

![img/080.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/080.png)

Temos tudo criado conforme os inputs que nós temos no template. Agora vamos colocar nossos códigos dentro desses caras.

3 - Transfira o input de **cadastro-filmes.component.ts** ...

![img/081.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/081.png)

... para o **input-text.component.html**:

![img/082.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/082.png)

4 - Para injetar os valores dentro do nosso `input-text.component.ts`, é preciso declarar os seguintes inputs:

~~~typescript
...
@Input() titulo: string;
@Input() formGroup: FormGroup;
@Input() controlName: string;
...
~~~

5 - Podemos retirar o `ngOnInit()`, e criar um get retornando o `formControl`, `formGroup` e `controlName`:

~~~typescript
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
selector: 'input-text',
templateUrl: './input-text.component.html',
styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

@Input() titulo: string;
@Input() formGroup: FormGroup;
@Input() controlName: string;

constructor() { }

get formControl(): AbstractControl {
return this.formGroup.controls[this.controlName];
}
}

~~~

6 - O **input-text.component** não vai encontrar mais o que é validação, `hasErrorValidar` e nem nada. Vamos passar via `<div>`, qual é o `formGroup` que vamos utilizar.

7 - Em seguida, precisamos fazer com que o nosso `input` fique genérico:

~~~typescript
<div [formGroup]="formGroup">
<mat-form-field class="full-width">
<input matInput 
[placeholder]="titulo" 
[name]="controlName" 
[formControlName]="controlName" >

<mat-error *ngIf="validacao.hasErrorValidar(f.titulo, 'required')"> Campo obrigatório </mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(f.titulo, 'minlength')"> O campo precisa ter no mínimo 2 caracteres </mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(f.titulo, 'maxlength')"> O campo pode ter no máximo 256 caracteres </mat-error>
</mat-form-field>
</div>
~~~

8 - Vamos fazer os `import` que estão faltando em **campos.module.ts**:

9 - Vamos injetar a validação no componente do `input-text`:

~~~typescript
...
@Component({
selector: 'input-text',
templateUrl: './input-text.component.html',
styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {

@Input() titulo: string;
@Input() formGroup: FormGroup;
@Input() controlName: string;

constructor(public validacao: ValidarCamposService) { }

get forControl(): AbstractControl {
return this.formGroup.controls[this.controlName];
}
}


~~~

10 - O template do `input-text`, agora vamos passar `formControl` ao invés de `f.titulo`:

~~~typescript
...
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'required')"> Campo obrigatório </mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'minlength')"> O campo precisa ter no mínimo 2 caracteres </mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'maxlength')"> O campo pode ter no máximo 256 caracteres </mat-error>
</mat-form-field>
</div>
~~~


11 - Precisamos importar o **campos.module.ts** em **filmes.module.ts**:

~~~typescript
...

@NgModule({
imports: [
CommonModule,
MaterialModule,
ReactiveFormsModule,
FormsModule,
CamposModule
],
declarations: [CadastroFilmesComponent, ListagemFilmesComponent]
})
export class FilmesModule { }

~~~

12 - Em **campos.module.ts**, devemos exportar todos os nossos `inputs` para que eles fiquem acessíveis:

13 - Corrija os nomes que são passados nas propriedades:

![img/083.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/083.png)

E o Título já está componentizado e pode ser reutilizado em qualquer lugar da aplicação:

![img/084.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/084.png)

14 - Vamos fazer o mesmo com os `inputs` de texto, isto é, o `input` de foto e o de IMDb:

![img/085.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/085.png)

##### Componentizando o Campo TextArea.

1 - Retire o `textarea` do template de cadastro e coloque no template de `input-textarea`:

![img/086.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/086.png)

2 - Faça a parte de `inputs()` no componente de `textarea`:

![img/087.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/087.png)

3 - Coloque o seletor no componente de `cadastro-filmes`:

![img/088.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/088.png)

4 - Teste:

![img/089.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/089.png)

##### Componentizando o Campo Number

1 - Vamos para o nosso template de filmes pegar o `<mat-form-field>` referente ao campo `number`:

![img/090.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/090.png)

2 - Transfira para o `number` component e envolva por uma `<div>` passando o por ela o nosso `formGroup`:

![img/091.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/091.png)

3 - Passe o `formControl` na validação e transforme os outros campos fixos em campos genéricos:
Os valores `min`, `max` e `steps` também precisam ser genéricos, pois conforme for a sua utilização, estes valores podem mudar:

~~~typescript
<div [formGroup]="formGroup"> 
<mat-form-field class="full-width">
<input matInput 
type="number"
[min]="minimo"
[max]="maximo"
[step]="step"
[placeholder]="titulo" 
[name]="controlName" 
[formControlName]="controlName">
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'required')"> Campo obrigatório </mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'min')"> Valor mínimo permitido é 0 </mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'max')"> Valor máximo permitido é 10 </mat-error>
</mat-form-field>
</div>
~~~

4 - Passe os valores do `min`, `max` e `steps` via `input()`:

![img/093.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/093.png)

5 - Faça a parte do **number component**:

![img/092.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/092.png)

6 - Nosso **number** já está componentizado. Basta agora chamá-lo no template de cadastro de filmes:

![img/094.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/094.png)


7 - Teste se o **number** está recebendo os valores corretos e se está contando os `steps` corretamente:

![img/095.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/095.png)


##### Componentizando o Campo Date

1 - Transfira o campo `date`, do template de cadastro de filmes para o template de `input-date`:

2 - Envolva-o com a `<div>` que recebe o `formGroup`, generalize os campinhos de atributo e chame o `formControl`. Mude o tipo de erro para `required` pois é isso que precisamos verificar:

![img/096.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/096.png)

3 - Crie o component de data para passar os `inputs` por ele:

![img/097.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/097.png)

4 - Adicione o seletor ao template de cadastro de filmes:

![img/098.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/098.png)

5 - Teste tudo:

![img/099.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/099.png)

##### Componentizando o Campo `Select`

1 - Faça o template do `select`:

![img/100.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/100.png)

2 - Crie o component do `select`:

![img/101.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/101.png)

3 - Chame o seletor do `select` no template de cadastro:

![img/102.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/102.png)

4 - Teste tudo:

![img/103.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/103.png)


___

### Tornando as Mensagens de Erro mais Dinâmicas

1 - No serviço **validar-campos**, vamos criar um novo método para validar o `length`:

Este método recebe o mesmo que o `hasError` recebe, mas ele retorna um `number`. 
Dentro dele temos uma constante que vai receber o nome do erro que está acontecendo.
O retorno dele vai ser qualquer um dos erros especificados e, caso não ocorra nenhum dos erros, o retorno será zero:

~~~typescript
...
hasError(control: AbstractControl, errorName: string): boolean{
return control.hasError(errorName);
}

lengthValidar(control: AbstractControl, errorName: string): number{
const error = control.errors[errorName];
return error.requiredLength || error.min ||error.max || 0;
}
}
~~~

2 - Em nosso template de **input-number**, vamos apagar o valor numérico da frase de erro e vamos invocar nosso método via interpolação:

~~~typescript
...
[formControlName]="controlName">
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'required')"> 
Campo obrigatório 
</mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'min')"> 
Valor mínimo permitido é {{validacao.lengthValidar()}} 
</mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'max')"> 
Valor máximo permitido é {{validacao.lengthValidar()}} 
</mat-error>
...
~~~

3 - Devemos passar o `formControl` e o tipo de erro como parâmetro para o método `lengthValidar()`:

~~~typescript
...
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'required')"> 
Campo obrigatório 
</mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'min')"> 
Valor mínimo permitido é {{validacao.lengthValidar(formControl, 'min')}} 
</mat-error>
<mat-error *ngIf="validacao.hasErrorValidar(formControl, 'max')"> 
Valor máximo permitido é {{validacao.lengthValidar(formControl, 'max')}} 
</mat-error>
</mat-form-field>
</div>
~~~


4 - Teste as validações do campo `number`:

![img/104.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/104.png)

5 - Faça o mesmo para o template do `input-text`, note que a validação aqui é para `minlength` e `maxlength`.
Depois disso, o campo Título, o Link Foto e o Link IMDb devem estar validando:

![img/105.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/105.png)

Macumba não! Estes valores foram definidos no início do curso em: **cadastro-filmes.component.ts**.

6 - Faça o mesmo para o `input-text-area`. Assim, o componente já fica preparado para receber possíveis parametrizações futuras:

![img/106.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/106.png)

7 - Teste tudo:

![img/107.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/107.png)


___

### Passando um Array com os Valores para o nosso Componente

Antes de fazer com que o nosso sistema realmente comece a salvar, nós vamos fazer algumas pequena correções:

1 - Na tag `form` do template **cadastro-filmes.componente.html**, coloque um `autocomplete="off"` para que ele pare de querer adivinhar o que vamos digitar nos campos e um `novalidate`, para que o `html` pare de validar. Queremos que a nossa validação predomine:

![img/108.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/108.png)

Agora é no `select` do template **input-select.component.html**. Vamos deixá-los dinâmicos.

1 - Vamos apagar todas as opções dele e em seguida, utilizaremos o `*ngFor` para iterar nas `options` e um Data Binding `value` para pegar estas opções. O título do `select `será interpolado:

![img/109.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/109.png)

2 - Vamos criar um `input` para ele em **input-select.component.ts**:

![img/110.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/110.png)

3 - Passe o `array` por parâmetro e inicie os valores do `select` em `ngOnInit()` em **cadastro-filmes.component.ts**:

![img/111.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/111.png)

5 - Adicione mais uma propriedade em nosso `select` em **cadastro-filmes.component.html**:

![img/112.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/112.png)


6 - Teste o select:
![img/113.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/113.png)

Nosso `select` já está dinâmico. quando precisarmos popular ele com dados provenientes de um data base, basta adicionar os dados no array criado em **cadastro-filmes.component.ts**:

![img/114.png](https://github.com/aluiziomonteiro/angular-avc/blob/master/img/114.png)

























<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
