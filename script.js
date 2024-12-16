// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('comercioForm');
  const resultadoDiv = document.getElementById('resultado');
  const valorTotalElement = document.getElementById('valorTotal');

  // Animação de carregamento quando o formulário é enviado
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário (não recarregar a página)

    // Obter os valores dos campos do formulário
    const valorProduto = parseFloat(document.getElementById('valorProduto').value);
    const impostoImportacao = parseFloat(document.getElementById('impostoImportacao').value);
    const frete = parseFloat(document.getElementById('frete').value);
    const outrosCustos = parseFloat(document.getElementById('outrosCustos').value);

    // Validar se os valores inseridos são válidos
    if (isNaN(valorProduto) || isNaN(impostoImportacao) || isNaN(frete) || isNaN(outrosCustos)) {
      alert('Por favor, preencha todos os campos corretamente!');
      return;
    }

    // Mostrar o resultado com uma animação de fade-in
    gsap.fromTo(valorTotalElement, { opacity: 0 }, { opacity: 1, duration: 1 });

    // Calcular o imposto e o valor total
    const imposto = (impostoImportacao / 100) * valorProduto;
    const valorTotal = valorProduto + imposto + frete + outrosCustos;

    // Exibir o valor total na tela
    valorTotalElement.innerText = `Valor Total: R$ ${valorTotal.toFixed(2)}`;

    // Mostrar o resultado
    resultadoDiv.style.display = 'block';
  });
});
