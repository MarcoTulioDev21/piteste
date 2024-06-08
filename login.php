<?php
if ($_SERVER['REQUEST_METHOD'] == "POST"){ 
    include("conexao.php");
    // Incluindo a conexão com o banco de dados
 
 
 
// Recebendo os dados do formulário
$email= $_POST['loginEmail'];
$senha= md5($_POST['loginSenha']);
 
$sql = "SELECT * FROM clientes WHERE email='$email' AND senha='$senha'";
// Criando instrução SQL para verificar se existe essa informações no banco de dados
 
$resultado = mysqli_query($conexao,$sql);
 
if (mysqli_num_rows($resultado) == 1){ // Verificando se existe pelo menos uma informação no banco de dados
    header("Location: produtos.html");
    exit(); // Finaliza a execução
   }else{
 
       header("Location: login.html");
       
       exit();
   }
mysqli_close($conexao); // Terminando conexão
}

?>