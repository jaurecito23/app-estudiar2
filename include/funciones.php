<?php






function debuguear($var){

    echo "<pre>";
        var_dump($var);
    echo "</pre>";
    exit;


}


function inluirTemplate($ruta){

include __DIR__."/../views/${ruta}.php";

}




?>