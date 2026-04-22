export type NavItem = {
  slug: string;
};

export type NavGroup = {
  label: string | null;
  items: NavItem[];
};

export const navGroups: NavGroup[] = [
  {
    label: null,
    items: [
      { slug: 'notice' },
      { slug: 'phone' },
      { slug: 'office' },
      { slug: 'system' },
    ],
  },
  {
    label: '印表機',
    items: [
      { slug: 'printer-ip-1606dn' },
      { slug: 'printer-ip-m201dw' },
      { slug: 'printer' },
    ],
  },
  {
    label: '維修常見狀況',
    items: [
      { slug: 'fcomputer' },
      { slug: 'fprinter' },
    ],
  },
  {
    label: '對拷',
    items: [
      { slug: 'diskcopy' },
      { slug: 'netcopy' },
      { slug: 'ctsc' },
    ],
  },
  {
    label: null,
    items: [
      { slug: 'diskscan' },
      { slug: 'rhd' },
      { slug: 'close' },
    ],
  },
];

export const allSlugs = navGroups.flatMap((group) =>
  group.items.map((item) => item.slug),
);
