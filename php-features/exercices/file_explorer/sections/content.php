<?php

if (isset($_GET["page"])) $page = $_GET["page"];
if (isset($_GET["file"]))  $file = $_GET["file"];
if (isset($page) && isset($file)) {
    $file_path = itemfolder_path($page, $file);
    $type = detect_ext($file_path);
    $file_type = $type['type'];
    $file_ext = $type['ext'];
}
?>

<div class="container-fluid">
    <form method="POST" action="index.php">
        <div class="form-group">
            <?php
            if (isset($file_type)) {
                echo '<div><label for="editor-area">' . $file . '</label></div>';
            }
            ?>
                <?php
                    if (isset($file_type) && $file_type === 'text') {
                        echo '<textarea id="editor-area" class="form-control" rows="20">';
                        echo file_get_contents($file_path);
                        echo '</textarea>';
                    } elseif(isset($file_type) && $file_type === 'image') {
                        echo "<div class='img'><img src=$file_path alt=$file /></div>";
                    } elseif(isset($page) && !isset($files)){
                        $items = order_items(splitfolder_by_type($page), 'type');
                        echo "<div class='row explorer'>";
                        display_items_folder($items);
                        echo "</div>";
                    }
                    else {
                        echo '<center><strong style="color:red"> File format is not valid for editing </strong></center>';
                    }
                ?>
        </div>
        <?php if(isset($file_type) && $file_type === 'text'){ ?>
        <div class="form-group form-bottom">
            <input type="submit" value="Envoyer" class="btn btn-blue" disabled=<?php !isset($file_type) && true ?> />
        </div>
        <?php } ?>
    </form>
</div>