<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verificando se as informações estão sendo passadas através do metodo POST.

    include("conexao.php");
    // Incluindo a conexão com o banco de dados

    if (isset($_POST['cadastrar'])) {
        $nome = $_POST['nome'];
        $endereco = $_POST['endereco'];
        $email = $_POST['email'];
        $senha = md5($_POST['senha']);
        $telefone = $_POST['telefone'];


    // Pegando as variáveis através do método POST

    $sql = "INSERT INTO clientes (nome, endereco, email, senha, telefone) VALUES ('$nome','$endereco','$email','$senha','$telefone')";
      // Criando variável SQL para executar uma instrução SQL

      if(mysqli_query($conexao, $sql)){
        $id_cadastrado = mysqli_insert_id($conexao);
        echo "Cadastro realizado! ID: $id_cadastrado    ||  Você será redirecionado em instantes";
        header("refresh:3;url=produtos.html");
      }else{
        echo "ERRO: Não foi possível cadastrar o aluno." . mysqli_error($conexao);
     }
     // Verificando se a consulta está sendo bem sucedida.

     }

}

?>