
let total = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = `R$0`

function adicionar(){
    //recuperar os valores (nome do produto, quantidade e valores)
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    
    //calcular o preço (valor unitário*quantidade)
    let subtotal = quantidade*valorUnitario;
    
    //adicionar o produto ao carrinho
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
  </section>`

    //atualizar o valor total da compra
    let valorTotal = document.getElementById('valor-total');
    total = total + subtotal;
    valorTotal.textContent = `R$${total}`
    document.getElementById('quantidade').value = '';
}

function limpar(){
    total = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$0`;
    document.getElementById('quantidade').value = '';
}