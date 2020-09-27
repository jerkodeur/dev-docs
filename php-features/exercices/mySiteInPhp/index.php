<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel='stylesheet' href="style.php" type="text/css">
    <title>Document</title>
    <!-- TinyMCE editor -->
    <script src="https://cdn.tiny.cloud/1/ylhx5dl95rb4k0hpi5aae7lwmge2lfra1n0e3zc5w5hd3ua2/tinymce/5/tinymce.min.js" referrerpolicy="origin" />
    </script>
</head>


<body>
    <div class="container-fluid">
        <?php include('inc/head.php'); ?>
        <div class='row container-explorer'>
            <div class='col-3 explore-container p-3 ml-0'><?php include('sections/explore.php') ?></div>
            <div class='col-9 text-center main-container'><?php include('sections/content.php') ?></div>
        </div>
    </div>

    <!-- Bootstrap -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script>
        tinymce.init({
            selector: '#editor-area'
        });
    </script>
</body>

</html>