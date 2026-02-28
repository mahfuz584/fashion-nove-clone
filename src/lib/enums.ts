export const DEPT_SEGMENTS = {
  men: "men",
  women: "women",
  kids: "kids",
  beauty: "beauty",
};

export const SIZE_FILTERS = {
  "compression-tshirts": {
    type: "alpha",
    options: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
  },
  "sleeveless-tanks": {
    type: "alpha",
    options: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
  },
  joggers: {
    type: "alpha",
    options: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
  },
  "performance-shorts": {
    type: "alpha+inseam",
    options: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    inseam: ['5"', '7"', '9"'],
  },
  footwear: {
    type: "numeric",
    system: "EU",
    options: ["39", "40", "41", "42", "43", "44"],
  },
} as const;

export const locales = ["en", "bn"] as const;
