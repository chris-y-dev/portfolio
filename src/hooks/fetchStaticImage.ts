export default function fetchStaticImage(src: string | undefined){
    if(src){
        var image = require(`../assets/images${src}`);
    }
    return image;
}