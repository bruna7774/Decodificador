function encodeText() {
    const text = document.getElementById('text').value.toLowerCase();
    const encryptedText = text.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
    document.getElementById('result').value = encryptedText;
  }
  
  function decodeText() {
    const text = document.getElementById('text').value.toLowerCase();
    const decryptedText = text.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
    document.getElementById('result').value = decryptedText;
  }
  
  function copyToClipboard() {
    const resultText = document.getElementById('result');
    resultText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
  }
  