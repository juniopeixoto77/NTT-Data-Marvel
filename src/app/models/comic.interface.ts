export interface Comic {
    id: number;
    title: string;
    digitalId: number;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    resourceURI: string;
    urls: { type: string, url: string }[];
    series: { resourceURI: string, name: string };
    variants: { resourceURI: string, name: string }[];
    collections: any[]; // Se necessário, substitua any pela interface apropriada
    collectedIssues: any[]; // Se necessário, substitua any pela interface apropriada
    dates: { type: string, date: string }[];
    prices: { type: string, price: number }[];
    thumbnail: { path: string, extension: string };
    images: any[]; // Se necessário, substitua any pela interface apropriada
    creators: { available: number, collectionURI: string, items: { resourceURI: string, name: string, role: string }[], returned: number };
    characters: { available: number, collectionURI: string, items: any[], returned: number }; // Se necessário, substitua any pela interface apropriada
    stories: { available: number, collectionURI: string, items: { resourceURI: string, name: string, type: string }[], returned: number };
    events: { available: number, collectionURI: string, items: any[], returned: number }; // Se necessário, substitua any pela interface apropriada
  }