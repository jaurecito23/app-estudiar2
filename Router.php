<?php

namespace MVC;


class Router{

    public $rutasGET = [];
    public $rutasPOST = [];
    public $titulos = [];

public function get($url,$fn,$titulo){

    $this->rutasGET[$url] = $fn;
    $this->titulos[$url] = $titulo;


}

public function post($url,$fn,$titulo){

    $this->rutasPOST[$url] = $fn;
    $this->titulos[$url] = $titulo;
}

public function comprobarRutas(){

    $url = $_GET["views"] ?? '';
    $urlActual = "/".$url;
    $metodo = $_SERVER["REQUEST_METHOD"];

    $fn = null;

    if($metodo === "GET"){

        $fn = $this->rutasGET[$urlActual] ?? NULL;

    }

    if($metodo === "POST"){

        $fn = $this->rutasPOST[$urlActual] ?? NULL;

    }


    if(isset($fn)){


        \call_user_func($fn,$this);

    }else{

        echo "no se encontro la pagina";

    }

}


public function render($view){
    $url = $_GET["views"] ?? '';

    $urlActual = "/".$url;
    $titulo = $this->titulos[$urlActual];
ob_start();

    include __DIR__."/views/${view}.php";

$contenido = \ob_get_clean();


include __DIR__."/views/layout/layout.php";


}

}


?>