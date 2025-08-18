import { addNavMenuItem } from "@vendure/admin-ui/core";

export default [
  addNavMenuItem(
    {
      id: "collections", // <-- we will override the "collections" menu item
      label: "Collections",
      routerLink: ["/catalog", "collections"],
      // we use an invalid permission which ensures it is hidden from all users
      requiresPermission: "__disable__",
    },
    "catalog"
  ),
];
