import ModernAppareliphone from "../assets/images/projects/modernapparel/iphone.png";
import ModernApparelpixel3 from "../assets/images/projects/modernapparel/pixel3.png";
import ModernApparelpixel4 from "../assets/images/projects/modernapparel/pixel4.png";
import ModernAppareltablet from "../assets/images/projects/modernapparel/tablet.svg";
import ModernApparelipad from "../assets/images/projects/modernapparel/ipad.svg";
import ModernApparelmacbook from "../assets/images/projects/modernapparel/macbook.svg";
import ModernApparelimac from "../assets/images/projects/modernapparel/imac.png";

import Showcaseiphone from "../assets/images/projects/showcase/iphone.png";
import Showcasepixel3 from "../assets/images/projects/showcase/pixel3.png";
import Showcasepixel4 from "../assets/images/projects/showcase/pixel4.png";
import Showcasetablet from "../assets/images/projects/showcase/tablet.svg";
import Showcaseipad from "../assets/images/projects/showcase/ipad.svg";
import Showcasemacbook from "../assets/images/projects/showcase/macbook.svg";
import Showcaseimac from "../assets/images/projects/showcase/imac.png";

import Vidoreiphone from "../assets/images/projects/vidore/iphone.png";
import Vidorepixel3 from "../assets/images/projects/vidore/pixel3.png";
import Vidorepixel4 from "../assets/images/projects/vidore/pixel4.png";
import Vidoretablet from "../assets/images/projects/vidore/tablet.svg";
import Vidoreipad from "../assets/images/projects/vidore/ipad.svg";
import Vidoremacbook from "../assets/images/projects/vidore/macbook.svg";
import Vidoreimac from "../assets/images/projects/vidore/imac.png";

import Spotifyiphone from "../assets/images/projects/spotify/iphone.png";
import Spotifypixel3 from "../assets/images/projects/spotify/pixel3.png";
import Spotifypixel4 from "../assets/images/projects/spotify/pixel4.png";
import Spotifytablet from "../assets/images/projects/spotify/tablet.svg";
import Spotifyipad from "../assets/images/projects/spotify/ipad.svg";
import Spotifymacbook from "../assets/images/projects/spotify/macbook.svg";
import Spotifyimac from "../assets/images/projects/spotify/imac.png";

import Freemindiphone from "../assets/images/projects/freemind/iphone.png";
import Freemindpixel3 from "../assets/images/projects/freemind/pixel3.png";
import Freemindpixel4 from "../assets/images/projects/freemind/pixel4.png";
import Freemindtablet from "../assets/images/projects/freemind/tablet.svg";
import Freemindipad from "../assets/images/projects/freemind/ipad.svg";
import Freemindmacbook from "../assets/images/projects/freemind/macbook.svg";
import Freemindimac from "../assets/images/projects/freemind/imac.png";

import Cutedogiphone from "../assets/images/projects/cutedog/iphone.png";
import Cutedogpixel3 from "../assets/images/projects/cutedog/pixel3.png";
import Cutedogpixel4 from "../assets/images/projects/cutedog/pixel4.png";
import Cutedogtablet from "../assets/images/projects/cutedog/tablet.svg";
import Cutedogipad from "../assets/images/projects/cutedog/ipad.svg";
import Cutedogmacbook from "../assets/images/projects/cutedog/macbook.svg";
import Cutedogimac from "../assets/images/projects/cutedog/imac.png";

import Brbrentalsiphone from "../assets/images/projects/brbrentals/iphone.png";
import Brbrentalspixel3 from "../assets/images/projects/brbrentals/pixel3.png";
import Brbrentalspixel4 from "../assets/images/projects/brbrentals/pixel4.png";
import Brbrentalstablet from "../assets/images/projects/brbrentals/tablet.svg";
import Brbrentalsipad from "../assets/images/projects/brbrentals/ipad.svg";
import Brbrentalsmacbook from "../assets/images/projects/brbrentals/macbook.svg";
import Brbrentalsimac from "../assets/images/projects/brbrentals/imac.png";



export type ProjectDataType = {
    id: string,
    sequence: number,
    title: string,
    text: string[],
    secondary: string[],
    phoneImgSrc: string[],
    desktopImgSrc: string[] | [],
    tabletImgSrc: string[],
    mobileFirst: boolean,
    githubLink: string,
    liveLink: string,
    next: string,
}

export const ProjectData: ProjectDataType[] = [
    {
        id: "modernapparel",
        sequence: 1,
        title: "Modern Apparel",
        text: ["Un site Web de commerce électronique, construit à l'aide de Nextjs, TailwindCSS et de l'API Shopify. Modern Apparel est un magasin d'habillement. Ce magasin permet un frontal Nextjs personnalisé avec lequel les utilisateurs interagissent, tandis que tous les produits, politiques et autres métadates sont récupérés à partir du magasin Shopify sans tête. Dans ce projet, j'ai utilisé TailwindCSS et j'ai interagi avec l'API Shopidy pour la première fois. Cependant, actuellement, pour la page de la boutique, lorsque vous cliquez sur l'un des liens, vous accédez au sous-domaine shop.modernapparel.ga. C'est parce que je n'ai pas pu extraire davantage de catégories et de collections via l'API Shopify alors que le projet vercel / commerce avait déjà tout intégré. Une fois que j'aurai mieux à interagir avec l'API Shopify, je revisiterai ce projet pour un entièrement personnalisé Solution."],
        secondary: ["React", "Nextjs","Shopify API", "TailwindCSS", "UI/UX"],
        phoneImgSrc: [ModernApparelpixel3, ModernApparelpixel4, ModernAppareliphone],
        desktopImgSrc: [ModernApparelimac, ModernApparelmacbook],
        tabletImgSrc: [ModernApparelipad, ModernAppareltablet],
        mobileFirst: true,
        githubLink: "https://github.com/jackjona123/modernapparel",
        liveLink: "https://www.modernapparel.ga/",
        next: "spotify"
    },
    {
        id: "showcase",
        sequence: 2,
        title: "Showcase",
        text: ["Je voulais construire une vitrine où tous mes projets pourraient être exposés. À l'aide de Gatsby et de Styled Components, j'ai construit ma vitrine afin que les visiteurs puissent voir visuellement mes projets facilement et rapidement et puissent visiter le site en direct et le code source en un clic."],
        secondary: ["React", "Gatsby","Syled Components", "UI/UX"],
        phoneImgSrc: [Showcasepixel3, Showcasepixel4, Showcaseiphone],
        desktopImgSrc: [Showcaseimac, Showcasemacbook],
        tabletImgSrc: [Showcaseipad, Showcasetablet],
        mobileFirst: true,
        githubLink: "https://github.com/jackjona123/showcase",
        liveLink: "https://showcase.jackjona.ga/",
        next: "vidore"
    },
    {
        id: "vidore",
        sequence: 3,
        title: "Vidore",
        text: ["Un site de streaming vidéo construit avec Wordpress. Pour ce projet, je voulais essayer d'utiliser HLS pour diffuser des vidéos. Traditionnellement, les vidéos sont envoyées aux utilisateurs sous forme de fichiers entiers comme des mp4, mais avec HTTP Live Streaming, une liste de lecture est envoyée et l'appareil de l'utilisateur télécharge les morceaux vidéo individuels."],
        secondary: ["Wordpress", "HLS", "UI/UX"],
        phoneImgSrc: [Vidorepixel3, Vidorepixel4, Vidoreiphone],
        desktopImgSrc: [Vidoreimac, Vidoremacbook],
        tabletImgSrc: [Vidoreipad, Vidoretablet],
        mobileFirst: true,
        githubLink: "https://github.com/jackjona123/vidore",
        liveLink: "https://www.vidore.ga/",
        next: "spotify"
    },
    {
        id: "spotify",
        sequence: 4,
        title: "Spotify - Alt",
        text: ["Il s'agit d'un front-end alternatif pour Spotify qui a commencé comme un projet personnel. J'adore écouter de la musique sur Spotify, mais je déteste leur interface utilisateur en mode sombre. J'ai donc construit un nouveau front-end en utilisant l'API Spotify pour récupérer des graphiques et des chansons pour moi-même. J'ai conçu un front-end en mode léger et plus moderne qui peut également être installé en tant que PWA (application Web progressive) à l'aide de React et de l'API Web Spotify. * Les aperçus ci-dessous montrent une erreur car aucun compte Spotify n'a été connecté. ** Il existe une limite de lecture de 30 s pour les comptes Spotify gratuits."],
        secondary: ["React", "Spotify API"],
        phoneImgSrc: [Spotifypixel3, Spotifypixel4, Spotifyiphone],
        desktopImgSrc: [Spotifyimac, Spotifymacbook],
        tabletImgSrc: [Spotifyipad, Spotifytablet],
        mobileFirst: false,
        githubLink: "https://github.com/jackjona123/spotify-alt",
        liveLink: "https://spotifyalt.netlify.app/",
        next: "freemind"
    },
    {
        id: "freemind",
        sequence: 5,
        title: "Freemind",
        text: ["La santé mentale est aussi importante que la santé physique. Je voulais créer un site Web qui informait le public sur la santé mentale d'une manière facile à comprendre. Cela a été construit en utilisant Gatsby."],
        secondary: ["React", "Gatsby", "UI/UX"],
        phoneImgSrc: [Freemindpixel3, Freemindpixel4, Freemindiphone],
        desktopImgSrc: [Freemindimac, Freemindmacbook],
        tabletImgSrc: [Freemindipad, Freemindtablet],
        mobileFirst: false,
        githubLink: "https://github.com/jackjona123/freemind",
        liveLink: "https://freemind.netlify.app/",
        next: "cutedog"
    },
    {
        id: "cutedog",
        sequence: 6,
        title: "Cute Dog",
        text: ["Qui n'aime pas les chiens ? J'ai construit cette galerie pour utiliser l'image Gatsby, le chargement paresseux et la pagination à défilement infini."],
        secondary: ["React","Gatsby", "UX/UI"],
        phoneImgSrc: [Cutedogpixel3, Cutedogpixel4, Cutedogiphone],
        desktopImgSrc: [Cutedogimac, Cutedogmacbook],
        tabletImgSrc: [Cutedogipad, Cutedogtablet],
        mobileFirst: false,
        githubLink: "https://github.com/jackjona123/cutedog",
        liveLink: "https://www.cutedog.gq",
        next: "brbrentals"
    },
    {
        id: "brbrentals",
        sequence: 7,
        title: "BRB Rentals",
        text: ["J'ai créé ce site Web pour montrer à quoi pourrait ressembler un nouveau site Web de location. Ce site Web utilise TailwindCSS, Nextjs et Mapbox."],
        secondary: ["React", "Nextjs", "TailwindCSS", "Mapbox", "UI/UX"],
        phoneImgSrc: [Brbrentalspixel3, Brbrentalspixel4, Brbrentalsiphone],
        desktopImgSrc: [Brbrentalsimac, Brbrentalsmacbook],
        tabletImgSrc: [Brbrentalsipad, Brbrentalstablet],
        mobileFirst: false,
        githubLink: "https://github.com/jackjona123/brbrentals",
        liveLink: "https://www.brbrentals.ga/",
        next: "modernapparel"
    },
]