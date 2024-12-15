export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "DUBETON - ERP",
  description: "ERP Groupe Théo et Gauthier",
  navItems: [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "Commandes",
      href: "/orders",
    },
    {
      label: "Produits",
      href: "/products",
    },
    {
      label: "Clients",
      href: "/customers",
    },
  ],
};
