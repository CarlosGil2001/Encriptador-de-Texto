
        //Función para encriptar
        function encriptar(){
            let input= document.getElementById("encrip");
            let texto=encrip.value;

            // validación si el input esta vacío o no
            if (texto == "") {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: '¡Ingrese texto a Encriptar!'
                  })
            }
            else {
                let np=texto.replaceAll("e","enter");
                np=np.replaceAll("i","imes");
                np=np.replaceAll("a","ai");
                np=np.replaceAll("o","ober");
                np=np.replaceAll("u","ufat");
                document.getElementById("desencrip").value=np;
                input.value="";
                input.focus();
            }
        }

        //Función para desencriptar
        function desencriptar(){
            let input= document.getElementById("desencrip");
            let texto=desencrip.value;

            // validación si el input esta vacío o no
            if (texto == "") {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: '¡Ingrese texto a Desencriptar!'
                  })
            }
            else {
                let np=texto.replaceAll("enter","e");
                np=np.replaceAll("imes","i");
                np=np.replaceAll("ai","a");
                np=np.replaceAll("ober","o");
                np=np.replaceAll("ufat","u");
                document.getElementById("encrip").value=np;
                input.value="";
                input.focus();
            }

        }

        // Función para limpiar
        function limpiar(){
          document.getElementById("desencrip").value="";
          document.getElementById("encrip").value="";
        }


        
        
