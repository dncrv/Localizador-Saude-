<?php require_once "header.php" ?>


<h1 class="text-center titulo">Sistema Saúde.com</h1>
<div class="container">
    <div class="invisible alert alert-danger text-center" role="alert">
    </div>
</div>
<form class="form-login" method="post" active="loguin.php">
    <div class="menu-login">
        <div class="form-group">
            <label for="usuario">Usuário:</label>
            <input id="usuario" class="form-control" type="text" name="usuario" required> 
        </div>
        <div class="form-group">
            <label for="senha">Senha:</label>
            <input id="senha" class="form-control" type="password" name="senha" required> 
        </div>
        <button id="btn-entrar" class="btn btn-default center-block">Entrar</button>
    </div>
</form>

<script src="js/md5.js"></script>
<script src="js/login.js"></script>

<?php require_once "footer.php" ?>
