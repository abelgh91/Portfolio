import connectAMateImg from "./svg/connect-a-mate.jpg";
import sportsImg from "./svg/sports.jpg";
import listaGastosImg from "./svg/lista-de-gastos.jpg";

export const projects = [
    {
        title: "Connect a mate",
        description: "- PROYECTO FINAL DE BOOTCAMP - En este proyecto quisimos hacer una app donde los usuarios pudieran buscar piso y a su vez, los compañeros de piso pudieran buscar también a nuevos compis de piso, eso si, eliminando cualquier intermediario. Quisimos hacer una app 'informal' en la que destacara la comunicación cercana y bidireccional entre las personas que buscan piso y las personas que buscan nuevos compañeros de piso. Implementamos muchas funcionalidades muy interesantes como reseñas, comentarios, carousel de fotos en los posts, ubicación real, y hasta un chat! Mi papel en este proyecto fue organizar al equipo mediante la metodología SCRUM durante todo el proceso de creación y producción. Utilizamos herramientas como React, Node.js, MongoDB y Styled Components.",
        image: connectAMateImg,
        url: "https://connect-a-mate.vercel.app/",
    },
    {
        title: "Fifa-Sports",
        description: "Este proyecto fue realizado por todo el equipo del Bootcamp después de aprender React durante 3 semanas. Un equipo de 5 personas creando, organizando y desarrollando un proyecto en 5 días. Dividimos nuestra app de deportes en 3 disciplinas distintas, implementando funcionalidades como  un 'Once ideal' de fútbol o un 'Podium' de Moto GP",
        image: sportsImg,
        url: "https://fifa-sports.vercel.app/",
    },
    {
        title: "App Lista de Gastos",
        description: "Esta fantástica App permite apuntar tus gastos del mes divididos por categorías o por días. Esta App está hecha con React y styledComponents.",
        image: listaGastosImg,
        url: "https://curso-react-app-lista-ga-763a1.web.app/",
    },
]