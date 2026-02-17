export function gerarCodigoPedido() {
    const prefixo = 'VLO';
  
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let parteLetras = '';
    for (let i = 0; i < 3; i++) {
      parteLetras += letras.charAt(Math.floor(Math.random() * letras.length));
    }
  
    const parteNumeros = Math.floor(100 + Math.random() * 900); // garante 3 dígitos
  
    return `${prefixo}-${parteLetras}${parteNumeros}`;
  }