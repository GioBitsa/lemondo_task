import { FiltersValueType } from "@/types";

export const filterData = (items: any[], filters: FiltersValueType): any[] => {
  // console.log(filters);

  if (filters.priceFrom) {
    console.log(parseInt(items[0].price), parseInt(filters.priceFrom));
    console.log(items[0].price >= filters.priceFrom);
  }

  return items.filter((item) => {
    // Check each filter criterion
    if (filters.search && !item.title.includes(filters.search)) {
      return false; // Exclude if name filter doesn't match
    }

    if (
      filters.priceFrom &&
      filters.priceFrom !== "" &&
      parseInt(item.price) < parseInt(filters.priceFrom)
    ) {
      return false; // Exclude if priceFrom filter doesn't match
    }

    if (
      filters.priceTo &&
      filters.priceTo !== "" &&
      parseInt(item.price) > parseInt(filters.priceTo)
    ) {
      return false; // Exclude if priceTo filter doesn't match
    }

    if (
      filters.symbolsFrom &&
      filters.symbolsFrom !== "" &&
      item.title.length < parseInt(filters.symbolsFrom)
    ) {
      return false; // Exclude if symbolsFrom filter doesn't match
    }

    if (
      filters.symbolsTo &&
      filters.symbolsTo !== "" &&
      item.title.length > parseInt(filters.symbolsTo)
    ) {
      return false; // Exclude if priceTo filter doesn't match
    }

    if (filters.categories && filters.categories.length > 0) {
      const containsCategory = filters.categories?.some((id) => {
        return item.categoryId.includes(id);
      });

      return containsCategory ? item : false;
    }

    if (filters.domains && filters.domains.length > 0) {
      const containsString = filters.domains.includes(item.domainCategory);

      return containsString ? item : false;
    }

    // If all filter criteria pass, include the item in the result
    return true;
  });
};
