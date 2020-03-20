const cuadrado = document.querySelectorAll(".square");

for (i = 0; i < cuadrado.length; i++) {
    cuadrado[i].onclick = function () { 
        this.innerHTML = "X" 

        
    }
}