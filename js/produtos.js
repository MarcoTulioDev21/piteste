
let carrinho = []; // Criando array para armazenar os produtos

// Função para adicionar um produto ao carrinho
function adicionarCarrinho(nome, preco, imagem) {
    carrinho.push({ nome, preco, imagem }); //adiciona um objeto
    atualizarCarrinho(); // atualizando o carrinho
}

// Função para remover um produto do carrinho
function removerProduto(index) {
    carrinho.splice(index, 1); // remove pelo indice fornecido
    atualizarCarrinho(); 
}

// Função para atualizar o conteúdo do carrinho
function atualizarCarrinho() {
    const produtosCarrinho = document.getElementById("produtos-no-carrinho"); // puxando elemento html pelo id
    produtosCarrinho.innerHTML = ""; // limpando elemento html

    // utilizando foreach para percorrer os produtos no carrinho
    carrinho.forEach((produto, index) => {
        // Criando um elemento <li> para ser o produto no carrinho
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${produto.imagem}">
            <span>${produto.nome}</span>
            <span>R$ ${produto.preco}</span>
            <button onclick="removerProduto(${index})">Remover</button>
        `;
        produtosCarrinho.appendChild(li); // adicionando o elemento <li> na lista de produtos no carrinho
    });

// selecionandos html pelo id correspondente
const totalCarrinho = document.getElementById("total-carrinho");
const carrinhoDiv = document.getElementById('carrinho');
const cupomDesconto = document.getElementById('cupom-desconto');

// Calculando o total do carrinho somando os preços de todos os produtos
const total = carrinho.reduce((total, produto) => total + produto.preco, 0);

// impondo condição de checked para verificar se o cupom checkbox está aplicado
if (cupomDesconto.checked) {
    const desconto = total * 0.05; // Calcula o valor do desconto 
    const totalFinal = total - desconto;
    totalCarrinho.innerText = totalFinal.toFixed(2); // Exibe o total do carrinho com desconto
} else {
    totalCarrinho.innerText = total.toFixed(2); // Exibe o total do carrinho sem desconto
}

// adicionando addEventLinstener para quando o checkbox ser clicado
cupomDesconto.addEventListener('change', function() {
    // chamando a função atualizar carrinho para atualizar qnd o checkbox for alterado
    atualizarCarrinho();
});

    // Exibe ou oculta o carrinho dependendo se há produtos nele
    if (carrinho.length > 0) {
        carrinhoDiv.style.display = 'block'; // Exibe o carrinho
    } else {
        carrinhoDiv.style.display = 'none'; // Oculta o carrinho
    }
}

(function (){ // função autoexecutável
  paypal.Buttons({
createOrder: function(data, actions){   // Função que vai chamar a ordem de pagamento
  return actions.order.create({   // retorno da chamada para criar uma ordem 
  purchase_units: [{
    amount:{
      currency_code: 'BRL',
      // abaixo o valor total é calculado
      value: carrinho.reduce((total,produto)=> total + produto.preco,0)
    }
  }] 
  });
},
onApprove: function(data, actions){ // quando a compra for aprovada
  return actions.order.capture().then(function(details){
    alert('Pagamento realizado com sucesso!') // pode utilizar consolelog ou alert para exibir
    alert(details);
    carrinho = []; // limpando carrinho
    atualizarCarrinho(); // atualizando carrinho
  })

},
onError: function(err){ // quando a compra for negada ou ocorrer algum erro
  console.error('Ocorreu um erro durante o pagamento', err);
}
  }).render('#paypal-button-container'); // renderizar o botão paypal

})(); // executa a função autoexecutável
