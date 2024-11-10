export interface ItemResponse {
    author: Author;
    items: any;
    description?: string;
    categories?: string[];
    location?: string;
}

interface Author {
    name: string;
    lastname: string;
}
