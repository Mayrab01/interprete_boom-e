function animar() //Función llama el tablero de canvas
        {
            robot =document.getElementById("Canvas").getContext("2d");
            linea =document.getElementById("Canvas").getContext("2d");
            des =document.getElementById("Canvas").getContext("2d");            
            boom =document.getElementById("Canvas").getContext("2d");
            blan =document.getElementById("Canvas").getContext("2d");
            
            intervalo=  setInterval("dibujarBoom()",100); //Función de intervalo

        }
function obstaculos()
        {
            linea.fillStyle="#000000";
            linea.fillRect(180,0,60,60);
            linea.fillRect(480,120,60,60);
            linea.fillRect(420,300,120,120);
        }
function tabl(){ //dibuja las linea en el tablero
            linea.fillStyle="#000000";
            linea.fillRect(60,0,1,600);
            linea.fillRect(120,0,1,600);
            linea.fillRect(180,0,1,600);
            linea.fillRect(240,0,1,600);
            linea.fillRect(300,0,1,600);
            linea.fillRect(360,0,1,600);
            linea.fillRect(420,0,1,600);
            linea.fillRect(480,0,1,600);
            linea.fillRect(540,0,1,600);

            linea.fillRect(0,60,600,1);
            linea.fillRect(0,120,600,1);
            linea.fillRect(0,180,600,1);
            linea.fillRect(0,240,600,1);
            linea.fillRect(0,300,600,1);
            linea.fillRect(0,360,600,1);
            linea.fillRect(0,420,600,1);
            linea.fillRect(0,480,600,1);
            linea.fillRect(0,540,600,1);
            linea.fillRect(0,600,600,1);
        }
function obstaculo_bombas(tablero)//dibuja las bombas y los obtaculos
        {
           
            for (var i=0; i<11;i++) //recorre el tablero
               {
                  for (var e=0; e<11;e++)
                  {
                     
                     if (1==tablero[i][e])//comprueba si tiene que dibujar una bomba
                        {
                            x=60*i;
                            y=60*e;
                            boom.fillStyle="#CB3234";
                            boom.fillRect(y,x,60,60);
                            
                        }
                        if (2==tablero[i][e])//comprueba si tiene que dibujar una obstaculo
                        {
                            x=60*i;
                            y=60*e
                            linea.fillStyle="#000000";
                            linea.fillRect(y,x,60,60);
                            
                        }
                  }
               }
            
           
        }