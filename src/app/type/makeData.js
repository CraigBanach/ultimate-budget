import namor from "namor";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newType = () => {
  return {
    type: namor.generate({ words: 1, numbers: 0 }),
    1: Math.floor(Math.random() * 1000),
    2: Math.floor(Math.random() * 1000),
    3: Math.floor(Math.random() * 1000),
    4: Math.floor(Math.random() * 1000),
    5: Math.floor(Math.random() * 1000),
    6: Math.floor(Math.random() * 1000),
    7: Math.floor(Math.random() * 1000),
    8: Math.floor(Math.random() * 1000),
    9: Math.floor(Math.random() * 1000),
    10: Math.floor(Math.random() * 1000),
    11: Math.floor(Math.random() * 1000),
    12: Math.floor(Math.random() * 1000),
    total: Math.floor(Math.random() * 12000),
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newType(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
