<?php
$host = "sql301.infinityfree.com"; // Endereço do servidor MySQL
$usuario = "if0_36687245"; // Nome do Usuário MySQL
$senha = "bUd7lREJlnJIta"; // Senha do usuário MySQL
$dbname = "if0_36687245_leialima"; // Nome do banco de dados

$conexao = mysqli_connect($host, $usuario, $senha, $dbname);

if (!$conexao) {
    // mysqli_connect_error() retorna uma string com o erro de conexão
    die("Erro na conexão: " . mysqli_connect_error());
} else {
    echo "Conexão efetuada com sucesso <br>";
}
// Verificando a conexão
?>
