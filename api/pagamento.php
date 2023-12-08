<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/pag.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pagina de pagamento</title>
</head>
<body>
    <main>
        
            <form id="formulario-pagamento" action="transacao.php" method="post">
                <h1>Pagamento</h1>
                <br><br>
                <div class="campo">
                    <label for="nome-cartao">Nome do Titular do Cartão:</label>
                    <br>
                    <input type="text" id="nome-cartao" name="nome-cartao" required>
                </div>
        
                <div class="campo">
                    <label for="numero-cartao">Número do Cartão:</label>
                    <br>
                    <input type="number" id="numero-cartao" name="numero-cartao" required>
                </div>
        
                <div class="campo">
                    <label for="data-validade">Data de Validade:</label>
                    <br>
                    <input type="text" id="data-validade" name="data-validade" placeholder="MM/AA" required>
                </div>
        
                <div class="campo">
                    <label for="cvv">CVV:</label>
                    <br>
                    <input type="number" max="999" min="001" id="cvv" name="cvv" required>
                </div>
        
                <div class="botoes">
                    <button type="submit">Enviar</button>
                </div>
            </form>
        
    </main>
</body>
</html>