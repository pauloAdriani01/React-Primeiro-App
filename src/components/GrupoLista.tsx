//Renderização condicional com uma função (muito útil caso haja parâmetros)

function GrupoLista() {
  const itens = ["Nova York", "São Francisco", "Tóquio", "Londres", "Paris"];

  //Funções arrow oferecem uma sintaxe menor do que as funções comuns

  const PegarMenssagem = () => {
    return itens.length === 0 ? <p>Nenhum item encontrado</p> : null;
  };

  return (
    <>
      <h1>Lista</h1>
      {PegarMenssagem()}
      <ul className="list-group">
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default GrupoLista;

/*

//Renderização condicional com uma constante

function GrupoLista() {
  const itens = ["Nova York", "São Francisco", "Tóquio", "Londres", "Paris"];

  const Mensagem = itens.length === 0 ? <p>Nenhum item encontrado</p> : null;

  return (
    <>
      <h1>Lista</h1>
      {Mensagem}
      <ul className="list-group">
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

*/

/*

//Renderização condicional (dentro das chaves)

function GrupoLista() {
  const itens = ["Nova York", "São Francisco", "Tóquio", "Londres", "Paris"];

  //Null significa que nada será devidamente renderizado

  return (
    <>
      <h1>Lista</h1>
      {itens.length === 0 ? <p>Nenhum item encontrado</p> : null}
      <ul className="list-group">
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

*/

/*

//Renderização condidional (FEITA DE UMA FORMA NÃO PRATICA, POIS EXISTE A REPETIÇÃO DE TAGS)

function GrupoLista() {
  let items = ["Nova York", "São Francisco", "Tóquio", "Londres", "Paris"];
  items = [];
  if (items.length === 0)
    return (
      <>
        <h1>Lista</h1>
        <p>Nenhum item encontrado</p>
      </>
    );

  return (
    <>
      <h1>Lista</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

*/

/* Renderizaçõa

//Não existem FOR no jsx

function GrupoLista() {
  //Criação de uma lista dinâmica
  const items = ["Nova York", "São Francisco", "Tóquio", "Londres", "Paris"];

  //Map converte cada item em um item de cada tipo (nhe, é isso)
  //A lista é colocada dentro das chaves para ser devidamente renderizada pelo jsx
  //Perda de estilo pois o bootstrap não foi devidamente adicionado
  //Para ser devidamente renderizado, cada item precisa de uma "key"

  return (
    <>
      <h1>Lista</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

*/

/*

function GrupoLista() {
  return (
    //React entende que isso é um fragmento para unir todos os childrens
    <>
      <h1>Lista</h1>
      <ul className="list-group">
        <li className="list-group-item">Um item</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
        <li className="list-group-item">Item 4</li>
        <li className="list-group-item">Item 5</li>
      </ul>
    </>
  );
}

*/

//Outras maneiras de adição de múltiplas tags serem feitas:

/* 

import { Fragment } from "react"; //Fragmento é adicionado, permite a adição de múltiplas tags sem a utlização de uma div (uma nova tag dentro do DOM)

function GrupoLista() {
  return (
    <Fragment>
      <h1>Lista</h1>
      <ul className="list-group">
        <li className="list-group-item">Um item</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
        <li className="list-group-item">Item 4</li>
        <li className="list-group-item">Item 5</li>
      </ul>
    </Fragment>
  );
}
  
*/

/*

function GrupoLista() {
  return (
    //Parentêses são necessários aqui
    //Componentes não podem rodar mais de um elemento, por isso, essa div foi colocada, mas isso pode ser feito de maneira mais eficiente usando "fragmentos"
    <div>
      <h1>Lista</h1>
      <ul className="list-group">
        <li className="list-group-item">Um item</li>
        <li className="list-group-item">Item 2</li>
        <li className="list-group-item">Item 3</li>
        <li className="list-group-item">Item 4</li>
        <li className="list-group-item">Item 5</li>
      </ul>
    </div>
  );
}

*/
