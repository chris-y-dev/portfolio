export default interface MyWorkData{
    id: string,
    name: string,
    clientName: string,
    isFeatured: boolean,
    category: string
    projectThumbnailPath: string,
    descShort: string,
    descLong: string,
    titleImagePath: string,
    projectGallery: ProjectGalleryImageData[],
    features: string[],
    videoLink: string,
    projectUrl: string,
    technologies: string[],
    designPrinciples: string[]
}

export interface ProjectGalleryImageData{
    imagePath: string,
    imageDescription: string
}

