export interface Category {
  id: number;
  attributes: {
    name: string;
    icon: {
      data: {
        id: number;
        attributes: {
          url: string;
        }
      }
    }
  }
}
