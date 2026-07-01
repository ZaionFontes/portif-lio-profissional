// Função para rolar até a seção ao clicar em botões
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView();
}
// Interatividade simples no botão de enviar
document.getElementById('btnEnviar').addEventListener('click', function() {
    alert('Obrigado! Sua mensagem foi enviada. Entraremos em contato em breve.');
});