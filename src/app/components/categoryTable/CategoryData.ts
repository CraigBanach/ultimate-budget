export interface CategoryData {
  tableRows: Record<string, Array<Entry>>;
}

interface Entry {
  month: number;
  amount: number;
}
