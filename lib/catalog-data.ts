import catalogJson from "@/data/catalog.json";

export type CatalogProduct = {
  id: number;
  name: string;
  category: string;
  image: string;
};

export type CatalogCategory = {
  slug: string;
  name: string;
  desc: string;
  featured: string;
  products: CatalogProduct[];
};

const allCatalogProducts = catalogJson as CatalogProduct[];

function isFeaturedItem(item: CatalogProduct) {
  return /\/featured\.(jpg|jpeg|png|webp)$/i.test(item.image);
}

export const catalogProducts = allCatalogProducts.filter((item) => !isFeaturedItem(item));

function slugifyCategory(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const categoryMap = new Map<string, CatalogProduct[]>();

const allCategoryMap = new Map<string, CatalogProduct[]>();

for (const item of catalogProducts) {
  const items = categoryMap.get(item.category);
  if (items) {
    items.push(item);
  } else {
    categoryMap.set(item.category, [item]);
  }
}

for (const item of allCatalogProducts) {
  const items = allCategoryMap.get(item.category);
  if (items) {
    items.push(item);
  } else {
    allCategoryMap.set(item.category, [item]);
  }
}

function featuredImagePath(products: CatalogProduct[]) {
  const featuredImage = products.find((item) =>
    /\/featured\.(jpg|jpeg|png|webp)$/i.test(item.image),
  );
  if (featuredImage) return featuredImage.image;

  const firstImage = products[0]?.image;
  if (!firstImage) return "";
  return firstImage;
}

export const catalogCategories: CatalogCategory[] = Array.from(categoryMap.entries()).map(
  ([name, products]) => ({
    slug: slugifyCategory(name),
    name,
    desc: `Browse products in ${name}.`,
    featured: featuredImagePath(allCategoryMap.get(name) ?? products),
    products,
  }),
);

export function assetPath(_category: CatalogCategory, file: string) {
  return file;
}

export function productImage(category: CatalogCategory, product: string) {
  return category.products.find((item) => item.name === product)?.image ?? category.featured;
}
