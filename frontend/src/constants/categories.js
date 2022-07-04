import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HandymanIcon from '@mui/icons-material/Handyman';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const iconStyle = { height: 50, width: 50 };

export const CATEGORIES = [
  {
    id: 'housing',
    icon: <MapsHomeWorkIcon sx={iconStyle} />,
    color: 'black',
  },
  {
    id: 'travel',
    icon: <LocalAirportIcon sx={iconStyle} />,
    color: 'green',
  },
  {
    id: 'food',
    icon: <FastfoodIcon sx={iconStyle} />,
    color: 'purple',
  },
  {
    id: 'utilities',
    icon: <HandymanIcon sx={iconStyle} />,
    color: 'red',
  },
  {
    id: 'insurance',
    icon: <BookmarkAddIcon sx={iconStyle} />,
    color: 'pink',
  },
  {
    id: 'healthcare',
    icon: <DirectionsRunIcon sx={iconStyle} />,
    color: 'brown',
  },
  {
    id: 'financial',
    icon: <PaymentIcon sx={iconStyle} />,
    color: 'violet',
  },
  {
    id: 'lifestyle',
    icon: <ShoppingCartIcon sx={iconStyle} />,
    color: 'blue',
  },
  {
    id: 'entertainment',
    icon: <NightlifeIcon sx={iconStyle} />,
    color: 'Aquamarine',
  },
  {
    id: 'miscellaneous',
    icon: <MiscellaneousServicesIcon sx={iconStyle} />,
    color: 'Coral',
  },
  {
    id: 'clothing',
    icon: <CheckroomIcon sx={iconStyle} />,
    color: 'Chocolate',
  },
];
