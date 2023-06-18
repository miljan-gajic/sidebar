import { Items, ItemsNoCategory } from "@/components/Sidebar/Sidebar";

export const hasCategory = (
  menuItems: Items | ItemsNoCategory
): menuItems is Items => {
  return (menuItems as Items).at(0)?.category !== undefined;
};
