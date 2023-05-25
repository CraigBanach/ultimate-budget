export interface CategoryData {
  tableCategory: string;
  rows: Array<{
    name: string;
    values: Array<number>;
  }>;
}
