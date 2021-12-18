import ModernApparel from "../assets/images/projects/modernapparel.svg";
import Showcase from "../assets/images/projects/showcase.svg";
import Vidore from "../assets/images/projects/vidore.svg";
import Spotify from "../assets/images/projects/spotify.svg";
import Freemind from "../assets/images/projects/freemind.svg";
import Cutedog from "../assets/images/projects/cutedog.svg";
import Brbrentals from "../assets/images/projects/brbrentals.svg";

export type WorksListItem = {
    id: string,
    title: string,
    src: string,
    leftFlex: 0|1|2|3,
    rightFlex: 0|1|2|3,
    thumbnailOffset: string,
    offsetX: number,
    offsetY: number,
}

export const WorksList: WorksListItem[] = [
    {
        id: "modernapparel",
        title: "Modern Apparel",
        src: ModernApparel,
        leftFlex: 0,
        rightFlex: 1,
        thumbnailOffset: "80%",
        offsetX: 30,
        offsetY: -10,
    },
    {
        id: "showcase",
        title: "Showcase",
        src: Showcase,
        leftFlex: 3,
        rightFlex: 1,
        thumbnailOffset: "20%",
        offsetX: 30,
        offsetY: -10,
    },
    {
        id: "vidore",
        title: "Vidore",
        src: Vidore,
        leftFlex: 1,
        rightFlex: 3,
        thumbnailOffset: "60%",
        offsetX: -10,
        offsetY: 5,
    },
    {
        id: "spotify",
        title: "Spotify",
        src: Spotify,
        leftFlex: 1,
        rightFlex: 1,
        thumbnailOffset: "10%",
        offsetX: -10,
        offsetY: -2,
    },
    {
        id: "freemind",
        title: "Freemind",
        src: Freemind,
        leftFlex: 1,
        rightFlex: 3,
        thumbnailOffset: "60%",
        offsetX: 30,
        offsetY: -2,
    },
    {
        id: "cutedog",
        title: "Cute Dog",
        src: Cutedog,
        leftFlex: 3,
        rightFlex: 0,
        thumbnailOffset: "30%",
        offsetX: 25,
        offsetY: 10,
    },
    {
        id: "brbrentals",
        title: "Brb Rentals",
        src: Brbrentals,
        leftFlex: 1,
        rightFlex: 2,
        thumbnailOffset: "80%",
        offsetX: 30,
        offsetY: 5,
    }
]