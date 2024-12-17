//Criação do primeiro componente, componentes no react são elementos UI reutilizáveis para o app
//É um arquivo tsx por ser um componente

//Sempre seguir a PascalCasing (primeira letra maiúscula) react e outros desenvolvedores esperam assim ao escrever uma função
function Message() { //Criação de um componente usando função
    //Utilizando JSX: JavaScript + XML || Um código que é convertido para JS. Sendo muito positivo para a criação de conteúdo dinâmico
    const nome='PH';
    if (nome) //Se o nome for verdadeiro, exibe o nome. Caso seja falso, exibe o "World"
        return <h1>Hello {nome}!</h1>;//O que a UI vai ser ao mostrar esse componente || Dentro das chaves qualquer expressão JS pode ser escrita (expressões são linhas que produzem algum valor)
    return <h1>Hello World!</h1>
}

export default Message; //Exporta o código para eu poder usa-lo