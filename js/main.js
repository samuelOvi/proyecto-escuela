let datos

$(document).ready(() => {
    function Cargando() {
        $("#loading").show()
        $("#titulo").hide()
        $("#p1").hide()
        $("#p2").hide()

        setTimeout(() => {
            $("#loading").hide()
            $("#titulo").show()
            $("#p1").show()
            $("#p2").show()

        }, 800);
    }
    function Scrool(inicia, termina) {
        $(inicia).on("click", function () {
            var posicion = $(termina).offset().top;
            $("html, body").animate({
                scrollTop: posicion - 90
            }, 1400);
        });
    }

    Scrool(".logo", "#banners");
    Scrool(".QS", "#quienes-somos");
    Scrool(".HS", "#ctn-historia");
    Scrool(".NS", "#cnt-nosotros");
    Scrool(".CT", "#cnt-contacto");


    $("#animarscroll").on("click", function () {
        var posicion = $("#hastaaqui").offset().top;
        $("html, body").animate({
            scrollTop: posicion
        }, 2000);
    });

    MontrarMapa()
    function Siglo(e) {
        //  for (i = 0; i < datos.datos.length; i++) {
        $("#titulo").text(datos.datos[e].titulo)
        $("#p1").text(datos.datos[e].info1)
        $("#p2").text(datos.datos[e].info2)
        // }
    }

    if (navigator.onLine) {
        console.log("se logro cargar el Json")
        fetch('./js/json.json')
            .then(function (response) {

                // if(!response.ok) {
                // Parece que hay acceso a Internet,
                // pero la respuesta no ha sido ok
                // También se puede comprobar el código de estado con response.status
                // Y hacer algo específico según el estado exacto recibido
                // throw Error(response.statusText);
                // }

                return response.json();

            }).then(function (json) {
                // response.ok fue true
                // console.log('solicitud exitosa');
                console.log(json);
                datos = json;
                $(".uno").click(() => {
                    if (navigator.onLine) {
                        Cargando()
                        Siglo(0)
                        console.log("la conexion de " + datos.datos[0].titulo + " fue establecida")
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'algo salio mal',
                            text: "no hay internet, no se arbira " + datos.datos[0].titulo,
                            footer: 'verifica tu internet y recarga la pagina'
                        })
                        console.log("no hay internet no se arbira " + datos.datos[0].titulo)
                    }
                });
                $(".dos").click(() => {
                    if (navigator.onLine) {
                        Cargando()
                        Siglo(1)
                        console.log("la conexion de " + datos.datos[1].titulo + " fue establecida")
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'algo salio mal',
                            text: "no hay internet, no se arbira " + datos.datos[1].titulo,
                            footer: 'verifica tu internet y recarga la pagina'
                        })
                        console.log("no hay internet no se arbira " + datos.datos[1].titulo)
                    }
                });
                $(".tres").click(() => {
                    if (navigator.onLine) {
                        Cargando()
                        Siglo(2)
                        console.log("la conexion de " + datos.datos[2].titulo + " fue establecida")
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'algo salio mal',
                            text: "no hay internet, no se arbira " + datos.datos[2].titulo,
                            footer: 'verifica tu internet y recarga la pagina'
                        })
                        console.log("no hay internet no se arbira " + datos.datos[2].titulo)
                    }
                });
                $(".cuatro").click(() => {
                    if (navigator.onLine) {
                        Cargando()
                        Siglo(3)
                        console.log("la conexion de " + datos.datos[3].titulo + " fue establecida")
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'algo salio mal',
                            text: "no hay internet, no se arbira " + datos.datos[3].titulo,
                            footer: 'verifica tu internet y recarga la pagina'
                        })
                        console.log("no hay internet no se arbira " + datos.datos[3].titulo)
                    }
                });
                $(".QS").click(() => {
                    if (navigator.onLine) {
                        Cargando()
                        Siglo(4)
                        console.log("la conexion de " + datos.datos[4].titulo + " fue establecida")
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'algo salio mal',
                            text: "no hay internet, no se arbira " + datos.datos[4].titulo,
                            footer: 'verifica tu internet y recarga la pagina'
                        })
                        console.log("no hay internet no se arbira " + datos.datos[4].titulo)
                    }
                })
                //resolve(response);
            }).catch(function (error) {
                console.log('Problema al realizar la solicitud: ' + error.message);
                // reject(error);
            });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'algo salio mal',
            text: "no hay conxion para cargar el Json con los datos! algunas cosas no funcionaran con exelencia",
            footer: 'verifica tu internet y recarga la pagina'
        })
        console.log("no hay conxion para cargar el Json")
    }



    function MontrarMapa() {
        $("#mapa").hide()
        $("#mapa_btn").click(() => {
            if (navigator.onLine == true) {
                $("#mapa").show()
                console.log("la conexion fue establecida")
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'algo salio mal',
                    text: "no hay internet no se arbira el mapa ",
                    footer: 'verifica tu internet y recarga la pagina'
                })
                console.log("no hay internet no se arbira el mapa")
            }

        })

        $("#btn_cerrar").click(() => {
            $("#mapa").hide()
            console.log("se cerro el mapa")
        })
    }
})