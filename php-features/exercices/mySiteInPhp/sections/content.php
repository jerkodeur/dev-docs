<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="container-fluid form-container">
        <form method="POST" action="public/index.php">
            <div class="form-group">
                <label for="content">Edition du fichier $file</label>
                <textarea id="content" class="form-control" rows="20"></textarea>
            </div>
            <div class="form-group">
                <input type="submit" value="Envoyer" class="btn btn-warning"/>
            </div>
        </form>
    </div>
</body>
</html>