import { addNavMenuItem } from "@vendure/admin-ui/core";

export default [
  addNavMenuItem(
    {
      id: "collections",
      label: "Collections",
      routerLink: ["/catalog", "collections"],
      requiresPermission: "__disable__",
    },
    "catalog"
  ),
  addNavMenuItem(
    {
      id: "facets",
      label: "Facets",
      routerLink: ["/catalog", "facets"],
      requiresPermission: "__disable__",
    },
    "catalog"
  ),
  addNavMenuItem(
    {
      id: "orders",
      label: "Orders",
      routerLink: ["/sales", "orders"],
      requiresPermission: "__disable__",
    },
    "sales"
  ),
  addNavMenuItem(
    {
      id: "sellers",
      label: "Sellers",
      routerLink: ["/settings", "sellers"],
      requiresPermission: "__disable__",
    },
    "settings"
  ),
  addNavMenuItem(
    {
      id: "channels",
      label: "Channels",
      routerLink: ["/settings", "channels"],
      requiresPermission: "__disable__",
    },
    "settings"
  ),
  addNavMenuItem(
    {
      id: "stock-locations",
      label: "Stock locations",
      routerLink: ["/settings", "stock-locations"],
      requiresPermission: "__disable__",
    },
    "settings"
  ),
  addNavMenuItem(
    {
      id: "shipping-methods",
      label: "Shipping methods",
      routerLink: ["/settings", "shipping-methods"],
      requiresPermission: "__disable__",
    },
    "settings"
  ),
  addNavMenuItem(
    {
      id: "payment-methods",
      label: "Payment methods",
      routerLink: ["/settings", "payment-methods"],
      requiresPermission: "__disable__",
    },
    "settings"
  ),
  addNavMenuItem(
    {
      id: "tax-categories",
      label: "Tax categories",
      routerLink: ["/settings", "tax-categories"],
      requiresPermission: "__disable__",
    },
    "settings"
  ),
  addNavMenuItem(
    {
      id: "tax-rates",
      label: "Tax rates",
      routerLink: ["/settings", "tax-rates"],
      requiresPermission: "__disable__",
    },
    "settings"
  ),
];
