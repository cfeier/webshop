import {Home, ShoppingCart, Store} from '@material-ui/icons';
import Welcome from "../welcome/welcome";
import Games from "../games/games";
import Cart from "../cart/cart";

const Routes = [
  {
    path: '/',
    sidebarName: 'Willkommen',
    icon: Home,
    component: Welcome
  },
  {
    path: '/games',
    sidebarName: 'Games',
    icon: Store,
    component: Games
  },
  {
    path: '/cart',
    sidebarName: 'Warenkorb',
    icon: ShoppingCart,
    component: Cart
  }
];

export default Routes;
