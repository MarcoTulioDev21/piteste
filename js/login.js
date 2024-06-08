function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential); // aqui seria pra jogar as info que o usuário cadastrou no banco de dados

    window.location.href = "conteudo.html";  // redirecionar para uma página nossa
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "959130787214-mps2ngammocen07m6hmdfur5m351bngf.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { 
    type:"standard",
    shape:"rectangular",
    theme:"outline",
    text:"signin_with",
    size:"large",
    locale:"pt-BR"
    }  // customization attributes
    );
  }