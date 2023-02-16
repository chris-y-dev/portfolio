export default function fetchStaticImage(src: string | undefined){
    if(src){
        try{
            var image = require(`../assets/images${src}`);
        } catch(e){
            return ""
        }
    }
    return image;
}