<fieldset class="datos">
    <h2 class="span1"><?php echo $titulo?> <span>1/4</span></h2>
    <legend>LLena los datos del examen</legend>

    <div class="input">
        <label>Nombre: </label>
        <input id="nombre-examen" placeholder="Ejemplo: Javascript Básico" type="text">
    </div>


    <div class="input">
        <label>Descripción: </label>
        <textarea id="descripcion-examen"></textarea>
    </div>


    <div class="input">
        <label>Tematica: </label>
        <select id="tema-examen">
            <option selected>--Selecciona un Tema--</option>
            <option>Programación</option>
            <option>Matemáticas</option>
            <option>Física</option>
            <option>IT</option>
            <option>Comunicación</option>
            <option>Desarrollo</option>
        </select>
    </div>
    <div class="siguiente">
        <button class="btn-siguiente" type="button">Siguiente</button>
    </div>
</fieldset>
<fieldset class="pregunta hidden">
    <h2 class="span2"><?php echo $titulo?><span>2/4</span></h2>
    <legend>Ahora ingresa una pregunta</legend>
    <div class="input">
        <label>Pregunta 1</label>
        <input id="input-pregunta" placeholder="Ejemplo: Javascript Básico" type="text">
    </div>

    <div class="input">
        <h3>Tipo de Respuesta</h3>
        <div class="opcion">
            <label for="texto">Texto</label>
            <input id="texto" type="radio" name="tipo-de-respuesta" value="texto">
        </div>
        <div class="opcion">
            <label for="opcional">Opcional</label>
            <input id="opcional" type="radio" name="tipo-de-respuesta" value="opcional">
        </div>
        <div class="opcion">
            <label for="grafica">Grafica</label>
            <input id="grafica" type="radio" name="tipo-de-respuesta" value="grafica">
        </div>
        <div class="opcion">
            <label for="audio">Audio</label>
            <input id="audio" type="radio" name="tipo-de-respuesta" value="audio">
        </div>
    </div>

    <div class="siguiente">
        <button class="btn-siguiente" type="button">Siguiente</button>
    </div>
</fieldset>

<fieldset class="file hidden">
    <h2 class="span3"><?php echo $titulo?><span>3/4</span></h2>
    <legend>Sube tu Archivo</legend>
    <div class="archivo">
        <label for="input-file">Seleccionar <i class="fas fa-file-upload"></i></label>
        <input id="input-file" class="hidden" type="file">
    </div>
    <div class="siguiente">
        <button class="btn-siguiente" type="button">Siguiente</button>
    </div>
</fieldset>

<fieldset class="opciones hidden">
    <h2 class="span3"><?php echo $titulo?><span>3/4</span></h2>
    <legend>Escribe tus opciones</legend>
    <input class="respuesta-opcion" type="text" placeholder="Opción 1">
    <input class="respuesta-opcion" type="text" placeholder="Opción 2">
    <input class="respuesta-opcion" type="text" placeholder="Opcion 3">
    <input class="respuesta-opcion" type="text" placeholder="Opcion 4">
    <div class="siguiente">
        <button class="btn-siguiente" type="button">Siguiente</button>
    </div>
</fieldset>
<fieldset class="texto hidden">
    <h2 class="span3"><?php echo $titulo?><span>3/4</span></h2>
    <div class="input">
        <label>Escribe la Respuesta</label>
        <textarea id="respuesta-texto"></textarea>
    </div>
    <div class="siguiente">
        <button class="btn-siguiente" type="button">Siguiente</button>
    </div>
</fieldset>
<fieldset class="btn-final hidden">
    <h2 class="span4">Editando Examen <span>4/4</span></h2>
    <input class="btn-siguiente" type="submit" value="Ingresar Nueva Pregunta">
    <input type="submit" value="Terminar Cuestionario">
</fieldset>