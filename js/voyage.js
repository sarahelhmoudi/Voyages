function validEnvoi() {
    if (window.document.querySelector("#firstName").value === "" && 
      window.document.querySelector("#lastName").value === "" ) {
      alert("Le nom ou le prénom doivent être remplis"); // On affiche un message
    }
    else if (window.document.querySelector("#username").value === "") {
      alert("L'email doit être rempli"); // On affiche un message
    }
    else if (window.document.querySelector("#choix").value === ""){
    alert("Veuillez selectionner votre destination"); // On affiche un message
    }
    else {
      let question = "Souhaitez-vous réellement utiliser l'adresse suivante : "
        + window.document.querySelector("#username").value;
      if (confirm(question)) {
        window.document.querySelector("#form_contact").submit(); // OK envoyer
      }
    }
  }
  
  window.addEventListener("load", function() {
    window.document.querySelector("#btn_envoyer").addEventListener("click", validEnvoi);
    console.log("ok !");
  });