export class SearchResult {
  id: string;
  volumeInfo: VolumeInfo;
  accessInfo: AccessInfo;

  constructor(resp) {
    this.id = resp.id;
    this.volumeInfo = new VolumeInfo(resp.volumeInfo);
    this.accessInfo = new AccessInfo(resp.accessInfo);
  }
}

export class VolumeInfo {
  authors: Array<string>;
  averageRating: number;
  categories: Array<string>;
  description: string;
  imageLinks: object;
  previewLink: string;
  publishedDate: string;
  title: string;

  constructor(resp) {
    this.authors =  resp.authors;
    this.averageRating =  resp.averageRating;
    this.categories =  resp.categories;
    this.description =  resp.description;
    this.imageLinks =  resp.imageLinks;
    this.previewLink =  resp.previewLink;
    this.publishedDate =  resp.publishedDate;
    this.title =  resp.title;
  }
}

export class AccessInfo {
  accessViewStatus: string;
  country: string;
  webReaderLink: string;
  constructor(resp) {
    this.accessViewStatus =  resp.accessViewStatus;
    this.country =  resp.country;
    this.webReaderLink =  resp.webReaderLink;
  }
}
