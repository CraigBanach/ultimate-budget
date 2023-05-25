import { CategoryData } from "../components/categoryTable/CategoryData";

interface Props {
  getCategoryData: () => Array<CategoryData>;
}

export const useCategoryService = () => {
  const getCategoryData = (): Array<CategoryData> => {
    return [
      {
        tableCategory: "Income",
        rows: [
          {
            name: "Craig",
            values: [
              123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45,
              123.45, 123.45, 123.45, 123.45,
            ],
          },
          {
            name: "Leigh-Anne",
            values: [
              123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45,
              123.45, 123.45, 123.45, 123.45,
            ],
          },
          {
            name: "Total",
            values: [
              246.9, 246.9, 246.9, 246.9, 246.9, 246.9, 246.9, 246.9, 246.9,
              246.9, 246.9, 246.9,
            ],
          },
        ],
      },
      {
        tableCategory: "Expenses",
        rows: [
          {
            name: "Craig",
            values: [
              123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45,
              123.45, 123.45, 123.45, 123.45,
            ],
          },
          {
            name: "Leigh-Anne",
            values: [
              123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45,
              123.45, 123.45, 123.45, 123.45,
            ],
          },
          {
            name: "Total",
            values: [
              246.9, 246.9, 246.9, 246.9, 246.9, 246.9, 246.9, 246.9, 246.9,
              246.9, 246.9, 246.9,
            ],
          },
        ],
      },
      {
        tableCategory: "Savings",
        rows: [
          {
            name: "Craig",
            values: [
              123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45,
              123.45, 123.45, 123.45, 123.45,
            ],
          },
          {
            name: "Leigh-Anne",
            values: [
              123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45, 123.45,
              123.45, 123.45, 123.45, 123.45,
            ],
          },
          {
            name: "Total",
            values: [
              246.9, 246.9, 246.9, 246.9, 246.9, 246.9, 246.9, 246.9, 246.9,
              246.9, 246.9, 246.9,
            ],
          },
        ],
      },
    ];
  };

  return { getCategoryData };
};
