export default function fetchStaticImage(src: string){
    var image = require(`../assets/images${src}`);
    return image;
}