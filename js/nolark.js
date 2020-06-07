function validEnvoi() {
  if (window.document.querySelector("#firstname").value === "" && 
    window.document.querySelector("#lastnom").value === "" ) {
    alert("Le nom ou le prénom doivent être remplis"); // On affiche un message
  }
  else if (window.document.querySelector("#usename").value === "") {
    alert("L'email doit être rempli"); // On affiche un message
  }
  else {
    let question = "Souhaitez-vous réellement utiliser l'adresse suivante : "
      + window.document.querySelector("#usename").value;
    if (confirm(question)) {
      window.document.querySelector("#form_contact").submit(); // OK envoyer
    }
  }
}

window.addEventListener("load", function() {
  window.document.querySelector("#btn_envoyer").addEventListener("click", validEnvoi);
  console.log("ok !");
});
