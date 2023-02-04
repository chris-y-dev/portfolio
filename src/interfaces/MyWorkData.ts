export default interface MyWorkData{
    projectName: string,
    projectLink: string,
    projectThumbnailPath: string,
    projectDescShort: string,
    projectDescLong: string
    projectScreenshots: ProjectScreenshot[],
    isFeatured: boolean,
    category: string
}

export interface ProjectScreenshot{
    imagePath: string,
    imageDescription: string
}