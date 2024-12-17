/*

//Esse arquivo é a "root" do app (nesse app)

import Message from './Message'; //Componente é pego a partir do outro código

function App() {
  return <div><Message /></div>; //Componente será usado na div (utilizando o método de "fechar" na própria tag)
}

function

export default App; //Componente é renderizado na tela

*/

import GrupoLista from './components/GrupoLista';

function App() {
  return <div><GrupoLista /></div>
}

export default App;