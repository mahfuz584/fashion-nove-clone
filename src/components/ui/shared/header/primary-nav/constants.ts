import { BellRing, Box, Gauge, InfoIcon } from "lucide-react";

export const shop_categories = [
  {
    id: "women",
    label: "WOMEN",
    href: "/women",
  },
  {
    id: "men",
    label: "MEN",
    href: "/men",
  },
  {
    id: "kids",
    label: "KIDS",
    href: "/kids",
  },
  {
    id: "beauty",
    label: "BEAUTY",
    href: "/beauty",
  },
];

export const profile_categories = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Gauge,
  },
  {
    id: "my-orders",
    label: "My Orders",
    icon: Box,
  },
  {
    id: "my-info",
    label: "My Info",
    icon: InfoIcon,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: BellRing,
  },
];
