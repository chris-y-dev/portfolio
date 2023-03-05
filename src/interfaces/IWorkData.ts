export default interface IWorkData {
  id: string;
  name: string;
  clientName: string;
  isFeatured: boolean;
  category: string;
  projectThumbnailPath: string;
  descShort: string;
  descLong: string;
  titleImagePath: string;
  projectGallery: IProjectGalleryImage[];
  features: string[];
  videoLink: string;
  projectUrl: string;
  technologies: string[];
  designPrinciples: string[];
}

export interface IProjectGalleryImage {
  imagePath: string;
  imageDescription: string;
}
