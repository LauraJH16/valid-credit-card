# PRODUCTO FINAL - TARJETA DE CREDITO (VALIDACIÓN)

### PSEUDOCODIGO:

Creamos funcion isValidCard:

~~~
Funcion isValidCard(number){  
    
    Definir arr,reverse,i,j,sum,double

    arr = [](array vacio)  

    Para( i = 0 , i < longitud de la variable number, i = i + 1){

        arr.push(number en el indice [ i ]) (push agrega elementos al array)

    }

    reverse = arr.reverse() (Cambia los elementos del array a alreves)
    sum = 0 (inicia en 0)
    double = 0 (inicia en 0)

    Para( j = 1 , j < (longitud de la variable reverse - 2), j = j + 2){

        if(reverse en el indice[j] * 2 es mayor a 9)Entonces{

            sum = sum + parseInt(reverse en el indice[j] * 2) + ((reverse en el indice[j] * 2) % 10)

        }Sino{

            double = double + reverse en el indice[j] * 2

        }
    }

    retorne (double + sum) + reverse en el indice [ j-1 ]
}
~~~
Ahora que ya tenemos la funcion creada pasaremos a preguntar al usuario, validar y llamar a la funcion:  
~~~
Si (isValidCard(prompt('Ingrese numero de Tarjeta')) % 10 es igual a 0) Entonces{

    alerta('Tarjeta Valida')

}Sino{

    alerta ('Tarjeta Invalida')

}