import LanguageIcon from '@mui/icons-material/Language';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import Groups2Icon from '@mui/icons-material/Groups2';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';


export const aboutItems = [
  {
    title: "Welcome to Harvesta!",
    content:
      "At Harvesta, we believe that everyone deserves access to the freshest farm produce, right at their doorstep. Our mission is to bridge the gap between local farmers and busy customers, ensuring that the highest quality fruits, vegetables, and other farm-fresh products are just a click away.",
      position: 'right'
  },

  {
    title: "Who We Are",
    content:
      "Harvesta is a dedicated logistics company with a passion for supporting local agriculture and enhancing the well-being of our communities. We understand that in today’s fast-paced world, finding the time to visit the market can be challenging. That's why we’ve created a seamless solution to bring the farm to your table, saving you time and effort while promoting healthy living.",
     position: 'left'
    },

  {
    title: "What We Do",
    content:
      "Our team works closely with local farmers to source the freshest produce, ensuring that every item we deliver meets our high standards of quality and freshness. We handle the logistics, from farm to doorstep, so you can enjoy the best that nature has to offer without leaving your home.",
     position: 'right'
    },

  {
    title: "Our Vision",
    content:
      "At Harvesta, our vision is to make freshly harvested produce easily accessible to everyone in their locality. We strive to support local farmers by providing a reliable platform for their products, while also making it simple for our customers to enjoy healthy, delicious food every day.",
     position: 'left'
    },
];

export const aboutListItems = [
  {
    title: "Freshness Guaranteed",
    content:
      "We deliver produce at the peak of its freshness, straight from the farm to your door.",
  },

  {
    title: "Convinience",
    content:
      " With our easy-to-use platform, you can order your favorite farm-fresh products in just a few clicks.",
  },

  {
    title: "Support local",
    content:
      "By choosing Harvesta, you are supporting local farmers and contributing to the sustainability of your community.",
  },

  {
    title: "Quality Service",
    content:
      "Our dedicated team is committed to providing excellent customer service and ensuring your satisfaction with every delivery.",
  },
];


export const aboutStats = [
  {
    amount: 1,
    content: 'Country',
    icon: <LanguageIcon fontSize="large" color="success"/>
  },

  {
    amount: '20k',
    content: 'Monthly Deliveries',
    icon: <DeliveryDiningIcon fontSize="large"/>
  },
  {
    amount: '2k',
    content: 'Delivery Maestros',
    icon: <MilitaryTechIcon fontSize="large"/>
  },
  {
    amount: "200+",
    content: 'Employees',
    icon: <Groups2Icon fontSize="large"/>
  },
]