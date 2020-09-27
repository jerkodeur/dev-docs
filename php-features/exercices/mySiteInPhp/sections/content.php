<?php
    if(isset($_GET["page"]) && isset($_GET["file"])) {
        $file_type = detect_ext(return_file_path($_GET["page"], $_GET["file"]));
    }
?>

<div id="container-fluid form-container">
    <form method="POST" action="index.php">
        <div class="form-group">
            <strong><label for="editor-area" class="text-uppercase">Edition du fichier $file</label></strong>
            <textarea id="editor-area" class="form-control" rows="20">
                <?php
                    echo $file_type;
                ?>
            </textarea>
        </div>
        <div class="form-group form-bottom">
            <input type="submit" value="Envoyer" class="btn btn-blue" />
        </div>
    </form>
</div>