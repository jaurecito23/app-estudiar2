<?php

require "../include/app.php";

use MVC\Router;
use Controllers\PaginasController;

$router = new Router;
$router->get("/",[PaginasController::class,"index"],"Home App-Estudiar");
$router->get("/crear",[PaginasController::class,"crear"],"Creando Examen");
$router->get("/editar",[PaginasController::class,"editar"],"Editando Examen");
$router->get("/examen",[PaginasController::class,"examen"],"Realizando Examen");
$router->get("/examenes",[PaginasController::class,"examenes"],"Buscando Examen");
$router->get("/opciones",[PaginasController::class,"opciones"],"Eligiendo Acción");
$router->get("/borrar",[PaginasController::class,"examenes"],"Borrando Examen");
$router->comprobarRutas();







?>