/* PROPIEDADES DE VENTAS */
document.addEventListener('DOMContentLoaded', function () {
    const propiedadesVenta = [
        {
            nombre: "Apartamento de lujo en zona exclusiva",
            imagen: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
            descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
            ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
            habitaciones: 4,
            banos: 4,
            precio: "800,000",
            permiteFumar: false,
            permiteMascotas: false
        },
        {
            nombre: "Apartamento acogedor en la montaña",
            imagen: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
            descripcion: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
            ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
            habitaciones: 2,
            banos: 1,
            precio: "400,000",
            permiteFumar: true,
            permiteMascotas: true
        },
        {
            nombre: "Penthouse de lujo con terraza panorámica",
            imagen: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
            descripcion: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
            ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
            habitaciones: 3,
            banos: 3,
            precio: "1,300,000",
            permiteFumar: false,
            permiteMascotas: true
        },
        {
            nombre: "Casa Colonial Renovada en Barrio Histórico",
            imagen: "../assets/img/propventa1.jpg",
            descripcion: "Encanto histórico se une a la modernidad en esta casa colonial completamente renovada. Ubicada en el corazón de un distinguido barrio histórico, esta propiedad cuenta con detalles arquitectónicos clásicos y todas las comodidades contemporáneas.",
            ubicacion: "950 Heritage Road, Old Town District, CA 90210",
            habitaciones: 5,
            banos: 4,
            precio: "750,000",
            permiteFumar: false,
            permiteMascotas: true
        },
        {
            nombre: "Moderna Villa con Vistas al Mar",
            imagen: "../assets/img/propventa2.jpg",
            descripcion: "Esta villa de diseño moderno ofrece vistas impresionantes al mar desde su posición elevada. Con grandes ventanales y espacios abiertos, se integra a la perfección con el paisaje costero.",
            ubicacion: "9428 Cliffside Drive, Oceanview Estates, CA 93500",
            habitaciones: 4,
            banos: 5,
            precio: "1,200,000",
            permiteFumar: false,
            permiteMascotas: false
        },
        {
            nombre: "Casa Campestre con Huerto Orgánico",
            imagen: "../assets/img/propventa3.jpg",
            descripcion: "Rodeada de naturaleza y con su propio huerto orgánico, esta casa campestre ofrece un retiro pacífico con todas las comodidades modernas, perfecta para una vida autosuficiente y ecológica.",
            ubicacion: "303 Green Valley Road, Harvest Haven, CA 90870",
            habitaciones: 3,
            banos: 2,
            precio: "600,000",
            permiteFumar: true,
            permiteMascotas: true
        },
    ];

    const contenedorventas = document.getElementById('propiedades_ventas');
    let cards = '';

    for (let propiedad of propiedadesVenta) {
        cards += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad.imagen}" class="card-img-top" alt="Imagen del departamento">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.precio}</p>
                        <p class="${propiedad.permiteFumar ? 'text-success' : 'text-danger'}">
                            <i class="fas ${propiedad.permiteFumar ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
                            ${propiedad.permiteFumar ? 'Permitido fumar' : 'No se permite fumar'}
                        </p>
                        <p class="${propiedad.permiteMascotas ? 'text-success' : 'text-danger'}">
                            <i class="fas ${propiedad.permiteMascotas ? 'fa-paw' : 'fa-ban'}"></i>
                            ${propiedad.permiteMascotas ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
    contenedorventas.innerHTML = cards;
});

/* PROPIEDADES DE ALQUILER */
document.addEventListener('DOMContentLoaded', function () {
    const propiedadesAlquiler = [
        {
            nombre: "Apartamento en el centro de la ciudad",
            imagen: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
            descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
            ubicacion: "123 Main Street, Anytown, CA 91234",
            habitaciones: 2,
            banos: 2,
            precio: "2,000",
            permiteFumar: false,
            permiteMascotas: true
        },
        {
            nombre: "Apartamento luminoso con vista al mar",
            imagen: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
            ubicacion: "7456 Ocean Avenue, Seaside Town, CA 56789",
            habitaciones: 3,
            banos: 3,
            precio: "2,500",
            permiteFumar: true,
            permiteMascotas: true
        },
        {
            nombre: "Condominio moderno en zona residencial",
            imagen: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
            descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
            ubicacion: "123 Main Street, Anytown, CA 91234",
            habitaciones: 2,
            banos: 2,
            precio: "2,200",
            permiteFumar: false,
            permiteMascotas: false
        },
        {
            nombre: "Casa de Campo con Jardín Exuberante",
            imagen: "../assets/img/propalquiler1.jpg",
            descripcion: "Disfruta del sosiego de esta amplia casa de campo rodeada de naturaleza. Con un jardín exuberante perfecto para relajarse y respirar aire puro.",
            ubicacion: "874 Country Road, Meadowview, CA 95421",
            habitaciones: 3,
            banos: 2,
            precio: "2,300",
            permiteFumar: false,
            permiteMascotas: true
        },
        {
            nombre: "Estudio Urbano con Terraza en la Azotea",
            imagen: "../assets/img/propalquiler2.jpg",
            descripcion: "Moderno y acogedor estudio en el ático con una terraza privada que ofrece vistas panorámicas de la ciudad. Ideal para el profesional en movimiento.",
            ubicacion: "500 High Street, Downtown, CA 96012",
            habitaciones: 1,
            banos: 1,
            precio: "1,800",
            permiteFumar: false,
            permiteMascotas: false
        },
        {
            nombre: "Bungalow Playero Frente al Mar",
            imagen: "../assets/img/propalquiler3.jpg",
            descripcion: "Despierta con el sonido de las olas en este bungalow frente al mar. Con acceso directo a la playa y un interior luminoso y aireado, es la escapada perfecta.",
            ubicacion: "102 Ocean Drive, Beachfront, CA 93550",
            habitaciones: 2,
            banos: 1,
            precio: "3,000",
            permiteFumar: false,
            permiteMascotas: true
        },
    ];

    const contenedoralquiler = document.getElementById('propiedades_alquiler');
    let cards2 = '';

    for (let propiedad2 of propiedadesAlquiler) {
        cards2 += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedad2.imagen}" class="card-img-top" alt="Imagen del departamento">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad2.nombre}</h5>
                        <p class="card-text">${propiedad2.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad2.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedad2.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${propiedad2.banos} Baños</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad2.precio}</p>
                        <p class="${propiedad2.permiteFumar ? 'text-success' : 'text-danger'}">
                            <i class="fas ${propiedad2.permiteFumar ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
                            ${propiedad2.permiteFumar ? 'Permitido fumar' : 'No se permite fumar'}
                        </p>
                        <p class="${propiedad2.permiteMascotas ? 'text-success' : 'text-danger'}">
                            <i class="fas ${propiedad2.permiteMascotas ? 'fa-paw' : 'fa-ban'}"></i>
                            ${propiedad2.permiteMascotas ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
    contenedoralquiler.innerHTML = cards2;
});
