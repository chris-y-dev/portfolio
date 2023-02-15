export default interface MyWorkData{
    projectId: string,
    projectName: string,
    isFeatured: boolean,
    category: string
    projectThumbnailPath: string,
    projectDescShort: string,
    projectDescLong: string
    projectScreenshots: ProjectScreenshot[],
    projectFeatures: string[],
    projectVideoLink: string
}

export interface ProjectScreenshot{
    imagePath: string,
    imageDescription: string
}

