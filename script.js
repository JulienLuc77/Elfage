const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); 
});
  const chiffreMystere = Math.floor(Math.random() * 200) + 1;
  let nombreEssais = 3;

  function deviner() {
    const guessInput = document.getElementById('guessInput');
    const resultat = document.getElementById('resultat');
    const guess = parseInt(guessInput.value);
    
    if (isNaN(guess) || guess < 20 || guess > 200) {
      resultat.textContent = 'Veuillez saisir un chiffre valide entre 20 et 200.';
      return;
    }

    nombreEssais++;

    if (guess === chiffreMystere) {
      resultat.textContent = `Bravo ! Vous avez deviné mon âge ${chiffreMystere} en ${nombreEssais} essais.`;
    } else if (guess < chiffreMystere) {
      resultat.textContent = 'Eh bien non cela est très flatteur mais je suis plus âgé !';
    } else {
      resultat.textContent = 'Dis donc cela saute aux yeux que je suis plus jeune !';
    }
  }