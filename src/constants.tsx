import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [ 
    {
        title: "Detection",
        path: "/detection",
        icon: <Icon icon="lucide:scan-line" width="24" height="24"/>,
    },
    {
        title: "Patients",
        path: "/patients",
        icon: <Icon icon="lucide:user" width="24" height="24"/>,
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <Icon icon="lucide:settings" width="24" height="24" />,
        submenu: true,
        subMenuItems: [
          { title: 'Account', path: '/settings/account' },
          { title: 'Privacy', path: '/settings/privacy' },
        ],
    },
    {
        title: 'Help',
        path: '/help',
        icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
    },
]