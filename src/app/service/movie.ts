export class Movies {
    "image": string;
    "link": string;
    "title": string;

    constructor({ image, link, title }: Movies) {
        this.image = image;
        this.link = link;
        this.title = title;
    }
}
export class Movie {
    "description": string;
    "image": string;
    "other_links": {type: string, url: string}[];
    "title": string;
    "torrent": {
        "magnet": string;
        "quality": string;
        "size": string;
    }[];
    "url": string;
    constructor({ image, description, other_links, title, torrent, url }: Movie) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.other_links = other_links && other_links.length !== 0 ? other_links : [];
        this.torrent = torrent && torrent.length !== 0 ? torrent : [];
        this.url = url;
    }
}

