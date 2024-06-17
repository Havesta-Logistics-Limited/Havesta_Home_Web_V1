const navRoutes = [
  {
    name: "Home",
    path: "/",
    hero:'/icons/Hero.png'
  },

  {
    name: "About",
    path: "/about",
    hero:'/icons/about.png'
  },
  {
    name: "News",
    path: "/news",
    hero:'/icons/news.svg'
  },
  {
    name: "Contact",
    path: "/contact",
    hero:'/icons/contact.png'
  },

  {
    name: "Partner",
    path: "/vendor",
    hero:'/icons/vendorHero.png',
    submenu: [
      { name: 'Vendor', path: '/partner/vendors' },
      { name: 'Rider', path: '/partner/riders' }
    ] 
  },
];

export default navRoutes;
