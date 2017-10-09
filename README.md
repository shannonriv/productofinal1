# **CIFRADO CÉSAR**

En _criptografía_, es una técnica de cifrado sencilla y conocida. Es un tipo de cifrado de _sustitución_ en la que cada letra de un texto plano se sustituye por la letra de un número fijo de posiciones por el alfabeto.

## EJEMPLO

Diagrama de flujo como guía:
![sin título](C:\Users\gsriv\Desktop\PROD FINAL 1\diagramacifradocesar.jpg)


#### PASO 1
Crear una variable texto _(prompt)_ donde el usuario ingrese el texto o frase a cifrar.

    texto = mensaje('Ingrese frase');

#### PASO 2
Definir el valor fijo de desplazamiento, en este caso es 33.

    var n = 33;

#### PASO 3
Construir la primera función para el cifrado, llamada *cypher*. Esta funcion debe contener los párametros para el cifrado.

Inicio:

    funcion cifrado(n, texto){
        texto cifrado = 'vacío';
        numero de la letra x = texto.charCodeAt(indice);

Recorrido:

    para (indice = 0; indice menos a largo de texto; indice aumenta en 1){
        texto cifrado = ((x - 65 + n) / 26) + 65;
        // 65 es el inicio en ASCII para el desplazamiento
        devolver texto cifrado;
        }
    }





