<?php






?>

<!doctype html>
<html class="no-js" lang="">

    <head>
        <meta charset="utf-8">
        <title><?php echo $titulo;?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="manifest" href="site.webmanifest">
        <link rel="apple-touch-icon" href="icon.png">
        <!-- Place favicon.ico in the root directory -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Bebas+Neue&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="build/css/app.css">
        <link rel="stylesheet" href="build/css/fontawesome.css">
        <meta name="theme-color" content="#fafafa">
    </head>

    <body>


        <?php echo $contenido; ?>




        <footer class="footer">
            <h4>Todos los derechos Reservados</h4>
            <p class="nombre-footer">Facundo Jaurgeui</p>
            <div class="contactos">
                <p>Contactos: </p>
                <a href="https://www.facebook.com/profile.php?id=100069932851242">Facebook</a>
                <a href="https://www.instagram.com/fjdesarrolloweb/">Instagram</a>
                <a href="https://api.whatsapp.com/send?phone=59892971074&text=Hola%20,%20como%20estas?%20Queria%20consultar%20algo">Whatsapp</a>
            </div>
        </footer>

        <script src="build/js/bundle.min.js"></script>
    </body>

</html>