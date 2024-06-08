document.getElementById('whatsapp-button').addEventListener('click', function() {
    window.open('https://wa.me/31981218580', '_blank');
});

function scrollToProcedimentos(){
    const procedimentosSection = document.getElementById('procedimento-sobrancelha');
    procedimentosSection.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('searchbar').addEventListener('keyup', search_procedimento);

function search_procedimento() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let cards = document.getElementsByClassName('procedimentos-card');
    
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let produtoName = card.querySelector('#produto-name').textContent.toLowerCase();
        if (produtoName.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}