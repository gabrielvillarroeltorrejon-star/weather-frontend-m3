const destinos = [
    {
        id: 1,
        titulo: "Farellones",
        temp: "12°C",
        clima: "Soleado",
        humedad: "75%",
        viento: "3Km/h",
        imagen: "https://www.chileanski.com/fotos/tours/slide/Parque_farellones_1_-1718815227.png",
        semana: [
            "Lunes 8°C",
            "Martes 9°C",
            "Miércoles 7°C",
            "Jueves 8°C",
            "Viernes 4°C",
            "Sábado 4°C",
            "Domingo -1°C",
        ],
    },
    {
        id: 2,
        titulo: "Valle Nevado",
        temp: "10°C",
        clima: "Despejado",
        humedad: "70%",
        viento: "5Km/h",
        imagen: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/39/77/8d.jpg",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miércoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sábado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 3,
        titulo: "Andes Panorámico",
        temp: "8°C",
        clima: "Despejado",
        humedad: "65%",
        viento: "10Km/h",
        imagen: "https://somostour.cl/wp-content/uploads/2017/01/cordillera-panoramico-verano-somos-tour_2025_4.jpg",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miércoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sábado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 4,
        titulo: "Portillo",
        temp: "13°C",
        clima: "Parcialmente despejado",
        humedad: "80%",
        viento: "18Km/h",
        imagen: "https://cdn-ildpkee.nitrocdn.com/DsGrLBJYSVIbemNsaXNXftjpEWFMzpVF/assets/images/optimized/rev-30dd528/skiportillo.com/wp-content/uploads/2022/02/Montana_ClimaCondiciones_Hero.png",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miércoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sábado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 5,
        titulo: "Embalse El Yeso",
        temp: "10°C",
        clima: "Despejado",
        humedad: "60%",
        viento: "5Km/h",
        imagen: "https://admin.kunapak.com/uploads/imagenes/fbd8fefac3231dc52a899a4932b6a66a8edf1ac9.jpg",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miércoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sábado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 6,
        titulo: "Termas de Colina",
        temp: "17°C",
        clima: "Nublado",
        humedad: "60%",
        viento: "15Km/h",
        imagen: "https://chiletourspirquemaipo.com/wp-content/uploads/2022/09/12510494_587424081411897_954421275817933116_n.jpg",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miércoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sábado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 7,
        titulo: "Valparaíso y Viña del Mar",
        temp: "24°C",
        clima: "Despejado",
        humedad: "65%",
        viento: "9Km/h",
        imagen: "https://panatour.cl/wp-content/uploads/2018/12/200-1.png",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miércoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sábado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 8,
        titulo: "City Tour Santiago",
        temp: "10°C",
        clima: "Despejado",
        humedad: "60%",
        viento: "5Km/h",
        imagen: "https://ollaguatravel.com/wp-content/uploads/2015/12/Stgo1.jpg",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miércoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sábado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 9,
        titulo: "Isla Negra y Viña Undurraga",
        temp: "26°C",
        clima: "Parcialmente despejado",
        humedad: "60%",
        viento: "5Km/h",
        imagen: "https://i0.wp.com/apuntesyviajes.com/wp-content/uploads/2021/11/isla_negra_chile.jpg?w=1599&ssl=1",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miércoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sábado 1°C",
            "Domingo -3°C",
        ],
    },
    {
        id: 10,
        titulo: "Viña Concha y Toro",
        temp: "22°C",
        clima: "Despejado",
        humedad: "70%",
        viento: "15Km/h",
        imagen: "https://www.maipotours.com/uploads/fotos/original/foto_5116_c.jpg",
        semana: [
            "Lunes 5°C",
            "Martes 6°C",
            "Miércoles 4°C",
            "Jueves 5°C",
            "Viernes 2°C",
            "Sábado 1°C",
            "Domingo -3°C",
        ],
    },
];

const header = document.querySelector("header");
const destinosContainer = document.querySelector("#destinos-container");
const detalleContainer = document.querySelector("#destino-container");
const vistaHome = document.querySelector("#vista-home");
const vistaDetalle = document.querySelector("#vista-detalle");
const btnVolver = document.querySelector("#btn-volver");
const linkHome = document.querySelector("#link-home");

function renderCards() {
    let html = "";

    destinos.forEach((item) => {
        html += `
            <div class="col-12 col-md-6 col-lg-4">
                <article class="place-card h-100" data-id="${item.id}">
                    <img
                        src="${item.imagen}"
                        alt="Imagen de ${item.titulo}"
                        class="place-card__image"
                    />

                    <div class="place-card__body">
                        <h3 class="place-card__title">${item.titulo}</h3>
                        <p class="place-card__temp">${item.temp}</p>
                        <p class="place-card__status">${item.clima}</p>

                        <button class="btn btn-outline-light place-card__button" type="button">
                            Ver detalle
                        </button>
                    </div>
                </article>
            </div>
        `;
    });

    destinosContainer.innerHTML = html;
}

function renderDetalle(id) {
    const destinoSeleccionado = destinos.find((destino) => destino.id === id);

    if (!destinoSeleccionado) {
        detalleContainer.innerHTML = `
            <p class="text-center">Destino no encontrado.</p>
        `;
        return;
    }

    let semanaHtml = "";

    destinoSeleccionado.semana.forEach((dia) => {
        semanaHtml += `
            <li class="list-group-item detail-card__forecast-item">
                <i class="fa-solid fa-temperature-half me-2"></i>${dia}
            </li>
        `;
    });

    detalleContainer.innerHTML = `
        <article class="detail-card">
            <div class="row g-4 align-items-start">
                <div class="col-12 col-md-5">
                    <img
                        src="${destinoSeleccionado.imagen}"
                        alt="Imagen de ${destinoSeleccionado.titulo}"
                        class="detail-card__image img-fluid w-100"
                    />
                </div>

                <div class="col-12 col-md-7">
                    <div class="detail-card__body">
                        <h2 class="detail-card__title">${destinoSeleccionado.titulo}</h2>

                        <div class="detail-card__badges mb-3">
                            <span class="badge bg-info me-2">${destinoSeleccionado.temp}</span>
                            <span class="badge bg-warning text-dark">${destinoSeleccionado.clima}</span>
                        </div>

                        <div class="detail-card__info mb-4">
    <p class="detail-card__info-text mb-2">
        <strong><i class="fa-solid fa-droplet me-2"></i>Humedad:</strong>
        ${destinoSeleccionado.humedad}
    </p>
    <p class="detail-card__info-text mb-0">
        <strong><i class="fa-solid fa-wind me-2"></i>Viento:</strong>
        ${destinoSeleccionado.viento}
    </p>
</div>

                        <h5 class="detail-card__subtitle">Pronóstico semanal</h5>

                        <ul class="list-group list-group-flush detail-card__forecast">
                            ${semanaHtml}
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function mostrarHome() {
    vistaHome.classList.remove("d-none");
    header.classList.remove("d-none");
    vistaDetalle.classList.add("d-none");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function mostrarDetalle(id) {
    renderDetalle(id);
    vistaHome.classList.add("d-none");
    header.classList.add("d-none");
    vistaDetalle.classList.remove("d-none");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

btnVolver.addEventListener("click", mostrarHome);

linkHome.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarHome();
});

destinosContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".place-card");

    if (!card) return;

    const idDestino = Number(card.dataset.id);
    mostrarDetalle(idDestino);
});

renderCards();
