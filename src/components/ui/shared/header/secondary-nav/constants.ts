export const secondary_nav = [
  {
    id: "new-in",
    label: "NEW IN",
    content: {
      columns: [
        {
          id: "new-in-shop-all",
          links: [
            { label: "New Arrivals", href: "/men/new-in/arrivals" },
            { label: "Best Sellers", href: "/men/new-in/best-sellers" },
            { label: "Back In Stock", href: "/men/new-in/back-in-stock" },
            { label: "Coming Soon", href: "/men/new-in/coming-soon" },
          ],
        },
        {
          id: "new-in-category",
          title: "CATEGORY",
          links: [
            {
              label: "New In Matching Sets",
              href: "/men/new-in/matching-sets",
            },
            { label: "New In Tops", href: "/men/new-in/tops" },
            { label: "New In Jeans", href: "/men/new-in/jeans" },
          ],
        },
      ],
      promo: {
        id: "new-in-promo",
        image: "/images/men-new-in.jpg",
        href: "/men/new-in",
        label: "Shop New In",
      },
    },
  },
  {
    id: "clothing",
    label: "CLOTHING",
    content: {
      columns: [
        {
          id: "clothing-shop-all",
          title: "SHOP ALL CLOTHING",
          links: [
            { label: "Shop All Clothing", href: "/men/clothing" },
            { label: "New Arrivals", href: "/men/clothing/new" },
            { label: "Sale", href: "/men/clothing/sale" },
          ],
        },
        {
          id: "clothing-category",
          title: "ALL CLOTHING",
          links: [
            { label: "Tops", href: "/men/tops" },
            { label: "Matching Sets", href: "/men/matching-sets" },
            { label: "Jeans", href: "/men/jeans" },
            { label: "Graphics", href: "/men/graphics" },
          ],
        },
      ],
      promo: {
        id: "clothing-promo",
        image: "/images/men-clothing.jpg",
        href: "/men/clothing",
        label: "Shop All Clothing",
      },
    },
  },
  {
    id: "nova-deals",
    label: "NOVA DEALS",
    content: {
      columns: [
        {
          id: "deals-shop-all",
          title: "SHOP ALL DEALS",
          links: [
            { label: "Shop All Deals", href: "/men/deals" },
            { label: "New In Deals", href: "/men/deals/new" },
            { label: "Best Selling Deals", href: "/men/deals/best" },
          ],
        },
        {
          id: "deals-category",
          title: "SHOP BY CATEGORY",
          links: [
            { label: "Tops Deals", href: "/men/deals/tops" },
            { label: "Jeans Deals", href: "/men/deals/jeans" },
            { label: "Hoodies Deals", href: "/men/deals/hoodies" },
          ],
        },
      ],
      promo: {
        id: "deals-promo",
        image: "/images/men-deals.jpg",
        href: "/men/deals",
        label: "Shop Deals",
      },
    },
  },
];
