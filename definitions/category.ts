export interface Category {
  id: number;
  attributes: {
    Name: string;
    Icon: {
      data: {
        id: number;
        attributes: {
          url: string;
        }
      }
    }
  }
}
