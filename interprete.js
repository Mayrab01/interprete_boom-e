var der=0,iz=0,arib=0,abj=0;
var Sder=0,Sizq=0,Sari=0,Sabj=0;

var Sbom=0, k=1,d=1,nuevo,nra=1, nrl=0,nrb=1, termina=1;
function interp(tableron)
{

  if(termina==1)
  {      
      Sbom=tablero[d][k]; //Sensor para dectectar bomba
      if(1==Sbom)//comprueba si hay bomba
            {
               
                des.fillStyle="#008F39";
                tablero[d][k]=0
                posiciony=60*d
                posicion=60*k
                des.fillRect(posicion,posiciony,60,60);
                k=k+1     
                //Desactiva la bomba
                
            }
            else{

                if(k==1)//Si no hubo bomba avanza primera posición
                {
                    robot.fillRect(posicion,posiciony,60,60);
                }
                Sabj=tablero[d-1][k-1];//sensor para dectetar si hay un obstaculo abajo
                if (Sabj==0 && nra==1&& nrb==1){
                    
                        posiciony=posiciony-60;
                        robot.fillRect(posicion,posiciony,60,60);
                        d=d-1; 
                        nrl=0;  
                        Sizq=tablero[d][k-2];//sensor para dectetar si hay un obstaculo del lado izquierdo
                        if(Sizq<=1)
                        {
                            if(tablero[d][k-2]==1)//si encuentra una bomba se desactiva
                            {
                                des.fillStyle="#008F39";
                                k=k-1
                                posiciony=60*d
                                posicion=60*(k-1)
                                des.fillRect(posicion,posiciony,60,60);
                                
                                
                            }
                            k=k-1
                            Sizq=tablero[d][k]; //comprueba si no hay nada ala izquierda
                            if(Sizq==0 && posicion>60){
                                    
                                    posicion=posicion-60;
                                   
                                    robot.fillRect(posicion,posiciony,60,60);
                                    nrl=1
                                             
                                }
                
                        }    
                        if(d==2 &&k==2) //Comprueba si ya hizo todo el recorrido
                        {
                           termina=0 
                        }                   
                       
                }  
                else {
                    Sder=tablero[d][k];//Comprueba con sensor ala derecha esta
                    if(Sder==0&&nrl==0){
                        posicion=posicion+60;
                        k=k+1;
                        RINT1=tablero[d][k];
                        robot.fillRect(posicion,posiciony,60,60);
                        nra=1;
                        }
                        else{

                            Sari=tablero[d+1][k-1]
                            if(0==Sari)
                            {
                            posiciony=posiciony+60;
                            robot.fillRect(posicion,posiciony,60,60);
                            d=d+1;
                            nra=0; 
                            nrl=0;
                           
                            } else{
                                k=k-1
                                Sizq=tablero[d][k]  //Comprueba si no hay nada en el sensor de izquierda
                                if(Sizq==0 && posicion>60){
                                    
                                    posicion=posicion-60;
                                   
                                    robot.fillRect(posicion,posiciony,60,60);
                                    nrl=1
                                    
                                             
                                }
                                if(tablero[d][k]==2)
                                {
                                    d=9
                                    k=2
                                    nrb=1
                                    nra=1
                                }
                              
                               
                                
                                
                            }
                    } 
                    
                    }
            }


    
            
        }

}

/* 

if (RINT1==2 && posiciony<480  ){
                    if(0==tablero[d+1][k-1])
                    {
                    posiciony=posiciony+60;
                    contexto.fillRect(posicion,posiciony,60,60);
                    d=d+1;
                    nra=0; 
                    }
                   
                }
*/
        
/*

else{

    des.fillStyle="#008F39";
                tablero[d][k]=0
                posiciony=60*d
                posicion=60*k
                des.fillRect(posicion,posiciony,60,60);
                k=k+1
                
                RINT1=tablero[d][k];
                contexto.fillRect(60,60,60,60);
                
                if(RINT1==0){
                    
                    posicion=posicion+60;
                    contexto.fillRect(posicion,posiciony,60,60);
                    
                    k=k+1; 
                    
                    RINT2=tablero[d-1][k];
                    if (RINT2==0 && posiciony>1){
                    
                        posiciony=posiciony-60;
                        contexto.fillRect(posicion,posiciony,60,60);
                        d=d-1;     
                    }
                    
                }
                if(RINT1==2 && posiciony<480)
                {
                    posiciony=posiciony+60;
                    contexto.fillRect(posicion,posiciony,60,60);
                    d+=1
                   
                }


            }
*
 else{
                
                if(k=1)
                {
                contexto.fillRect(60,60,60,60);
                }
                
                RINT1=tablero[d][k];
                
                if(RINT1==0)
                {
                    
                    posiciony=posiciony+60;
                    contexto.fillRect(posicion,posiciony,60,60);
                    RINT2=tablero[d][k+1]
                    d=d+1
                    
                }
                else{
                    
                    
                    if(RINT2==0)
                    {
                        posicion=posicion+60;
                        contexto.fillRect(posicion,posiciony,60,60);
                        k=k+1
                        
                        
                    }
                }
                


            }
    
            
        }
*/