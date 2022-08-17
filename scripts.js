const noticias = [
    {
    titulo:"Turismo de vacunas: 2.000 personas por día reciben su dosis en el aeropuerto de Miami",
    imgUrl:
    "https://www.infobae.com/new-resizer/H9B9uvmwpunxOo6DwuGGMoaVGiE=/265x149/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YXOQB3X5SZ2HPD2SWP2HOCBDZA.jpg",
    descripcion: "Fácil y rápido son los dos adjetivos que más repitenlas personas que describen cómo es el proceso de vacunación en el aeropuerto internacional de Miami. En su mayoría son turistas internacionales quienes se inoculan al día en la clínica instalada en la terminal aérea",
    fecha:"07/06/21",
    tipoNacional: true
},
{
titulo:"El gran gesto por amor de Jennifer Lopez hacia Ben Affleck",
imgUrl: "https://www.infobae.com/new-resizer/9qc1rervLRhJWJ5iTr0ODd_ctMM=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MSQDSQCH7NDAFLLCXFS7IO2PFU.jpg",
descripcion: "La cantante fue vista averiguando sobre escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor",
fecha:"02/06/21",
tipoNacional: false
},
{
titulo:"Cómo evitar que se empañen los anteojos al usar barbijo",
imgUrl:"https://www.infobae.com/new-resizer/ORz7JmzOGrdIjerazIGIpwiqOHk=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QVRO3YNJMNGNFP773UOWZYM3FU.jpg",
descripcion: "Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación. Paso a paso para evitar que se empañen",
fecha:"01/06/21",
tipoNacional: true
},
{
titulo:"La UE aprobó el fondo de USD 21.000 millones para apoyar a las regiones más afectadas por la transición verde",
imgUrl: "https://www.infobae.com/new-resizer/n515a-2ZZvJJgZ3EI6sfxWYm5Lg=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/UEEVG5ND43BTLP5RTK3V62NISM.jpg",
descripcion: "El objetivo es ayudar a los países a emprender la transición ecológica en su camino hacia una economía libre de emisiones de gases de efecto invernadero a mitad de siglo",
fecha:"04/06/21",
tipoNacional: false
},
{
titulo:"Maradona: cómo es la muestra fotográfica argentina que deslumbra a todos en Serbia",
imgUrl:"https://www.infobae.com/new-resizer/mmsbZbq2RWQDDHGiP4MxaBbK6RQ=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TM2UEM7JNZE4JH2SXGPPGPTTOQ.jpg",
descripcion: "La exposición, que cuenta con postales icónicas de“El Diez” que capturaron los fotógrafos de la agencia de noticias Télam,es uno de los hitos del festival Mes de la Fotografía de Belgrado",
fecha:"07/06/21",
tipoNacional: true
},
]; 
const container = document.querySelector('.contenedor');
const container2 = document.querySelector('.contenedor2');
const nuevoitem = document.createElement('div');
const nuevoitem2 = document.createElement('div');
let pase = true;
let pase2 = true;
let html1 = '';
let html2 = '';
let html3 = '';
let html4 = '';
for (let i = 0; i < noticias.length; i++) {
    if (noticias[i].tipoNacional===true){
        if(pase === true){
            html1 +=
            `
                <div class="item">
                    <h2>${noticias[i].titulo}</h2>
                    <p>${noticias[i].descripcion}</p>
                    <p>${noticias[i].fecha}</p>
                    <img src='${noticias[i].imgUrl}'/>
                </div>
            `;
            pase = false;
        } else {
            html3 +=
            `
                    <div>
                        <img src='${noticias[i].imgUrl}'/>
                        <h2>${noticias[i].titulo}</h2>
                        <p>${noticias[i].descripcion}</p>
                        <p>${noticias[i].fecha}</p>
                    </div>
            `;
        }
    }else{
        if(pase2 === true){
            html4 +=
            `
                <div>
                    <img src='${noticias[i].imgUrl}'/>
                    <h2>${noticias[i].titulo}</h2>
                    <p>${noticias[i].descripcion}</p>
                    <p>${noticias[i].fecha}</p>
                </div>
            `;
            pase2 = false;
        } else {
            html2 +=
            `
            <div class="item">
                    <h2>${noticias[i].titulo}</h2>
                    <p>${noticias[i].descripcion}</p>
                    <p>${noticias[i].fecha}</p>
                    <img src='${noticias[i].imgUrl}'/>
            </div>
            `;
        }
    }
    
}
container.innerHTML += html1;
nuevoitem.innerHTML += html3;
container.appendChild(nuevoitem);
nuevoitem.className = 'item2a';


nuevoitem2.innerHTML += html4;;
container2.appendChild(nuevoitem2);
nuevoitem2.className = 'item2b';
container2.innerHTML += html2;


/*Tema oscuro*/
let body = document.querySelector('body');
let header = document.querySelector('header');
let h2 = document.querySelectorAll('h2');
let a = document.querySelectorAll('a.links');
let tituloP = document.querySelector('.titulo-p');
let subtitulo = document.querySelector('.subtitulo');
let item = document.querySelectorAll('.item');
let item2a = document.querySelector('.item2a');
let item2b = document.querySelector('.item2b');
let footer = document.querySelector('footer');
let moon = document.querySelector('i.moon');
let sun = document.querySelector('i.sun');
const cambio = document.querySelector("a.cambio");


cambio.addEventListener('click', () => {
    body.classList.toggle('Dark');
    header.classList.toggle('Dark');
    h2.forEach((element) => {
        element.classList.toggle('Dark');
    });
    a.forEach((element) => {
        element.classList.toggle('linksDark');
    });
    tituloP.classList.toggle('titulo-pDark');
    subtitulo.classList.toggle('subtituloDark');
    item.forEach((element) => {
        element.classList.toggle('itemDark');
    });
    item2a.classList.toggle('item2aDark');
    item2b.classList.toggle('item2bDark');
    footer.classList.toggle('Dark');
    if (moon.style.display === "none") {
        moon.style.display = "inline";
        sun.style.display = "none";
    } else {
        moon.style.display = "none";
        sun.style.display = "inline";
    }
})


