import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import MenuDetailsScreen from "../screens/MenuDetailsScreen";
import BasketScreen from "../screens/BasketScreen";
import HomeScreen from "../screens/HomeScreen";
import OrdersScreen from "../screens/OrdersScreen";
import OrderDetailScreen from "../screens/OrderDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useAuthContext } from "../contexts/AuthContext";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { dbUser } = useAuthContext();
  return (
    <Stack.Navigator>
      {dbUser ? (
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        ></Stack.Screen>
      ) : (
        <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
      )}
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      //   activeColor="white"
      //   inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "white" }}
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStackNavigator}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="text-box-check-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Restaurants" component={HomeScreen} />
      <HomeStack.Screen
        name="Restaurant"
        component={RestaurantDetailsScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Menu"
        component={MenuDetailsScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Basket"
        component={BasketScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();
const OrderStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{ headerShown: false }}
      />
      <OrdersStack.Screen
        name="Order"
        component={OrderDetailScreen}
        options={{ headerShown: false }}
      />
    </OrdersStack.Navigator>
  );
};

export default RootNavigator;
