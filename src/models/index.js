// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "IN_KITCHEN": "IN_KITCHEN",
  "READY_FOR_PICK_UP": "READY_FOR_PICK_UP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED"
};

const { OrderMenu, Order, BasketMenu, Basket, User, Menu, Restaurant } = initSchema(schema);

export {
  OrderMenu,
  Order,
  BasketMenu,
  Basket,
  User,
  Menu,
  Restaurant,
  OrderStatus
};