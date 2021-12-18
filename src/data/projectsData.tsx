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
        text: ["An ecommerce website, built using Nextjs, TailwindCSS, and Shopify API. Modern Apparel Is An Apparel Eccomerce Store. This store allows for a custom Nextjs front-end that users interact with, while all products, policies, and other metadate is fetched from the headless Shopify store. In this project I used TailwindCSS and interacted with the Shopidy API for the first time. However, currently for the shop page when you click any of the links got to the shop.modernapparel.ga subdomain. This is because I wasn't able to further pull categories and collections through the Shopify API whereas the vercel/commerce project had everything already built in. Once I get better at interacting with the Shopify API, I will revisit this project for an entirely custom solution."],
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
        text: ["I wanted to build a showcase where all my projects could be displayed. Using Gatsby and Styled Components I built my showcase so that visitors can visually see my projects easily and quickly be able to visit the live site and souce code with a click of a button."],
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
        text: ["A video streaming website built with Wordpress. For this project I wanted to try out using HLS for streaming videos. Traditionally, videos have been sent to users as entire files like mp4's but with HTTP Live Streaming a playlist is sent and the user's device downloads the individual video chunks."],
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
        text: ["This is an alternative front-end for Spotify that started as a personal project. I love listening to music on Spotify, but hate their dark mode UI. So, I built a new front-end using the Spotify API to fetch charts and songs for myself. I disigned a light-mode and more modern front-end that can also be installed as a PWA (progressive web app) using React and the Spotify Web API. *The previws below show an error because no Spotify account was logged in. **There is a 30s play limit for free Spotify accounts." ],
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
        text: ["Mental health is as important as physical health. I wanted to create a website that informed the public about mental health in an easy to understand method. This was built using Gatsby."],
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
        text: ["Who doesn't love dogs? I built this gallery so to use Gatsby images, lazy loading, and infinity scroll pagination."],
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
        text: ["I built this website to show how a new rental website could look like. This website uses TailwindCSS, Nextjs and Mapbox."],
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