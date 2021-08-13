<?php

namespace Controllers;

use MVC\Router;



class PaginasController{

    public static function index(Router $router){

        $router->render("paginas/index");


    }

    public static function crear(Router $router){

        $router->render("paginas/crear");


    }


    public static function editar(Router $router){


            $router->render("paginas/editar");


    }


    public static function examen(Router $router){

        $router->render("paginas/examen");



    }


    public static function examenes(Router $router){

        $router->render("paginas/examenes");



    }

    public static function opciones(Router $router){

        $router->render("paginas/opciones");



    }

}














?>