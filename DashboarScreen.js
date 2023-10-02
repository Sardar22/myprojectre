import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Dimensions } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const restaurants = [
  {
    id: '1',
    name: 'Restaurant A',
    icon: '🍔',
    address: 'F 6 markaz islamabad',
    menu: [
      {
        id: '1',
        itemName: 'Burger',
        price: 'Rs.350',
        description: 'A delicious burger with all the fixings.',
      },
      {
        id: '2',
        itemName: 'Fries',
        price: 'Rs.300',
        description: 'Crispy golden fries.',
      },
    ],
  },
  {
    id: '2',
    name: 'Mariano Restaurant',
    icon: '🍕',
    address: 'Bahria gluf city islamabad',
    menu: [
      {
        id: '1',
        itemName: 'Pizza',
        price: 'Rs.499',
        description: 'Delicious pizza with your favorite toppings.',
      },
      {
        id: '2',
        itemName: 'Garlic Bread',
        price: 'Rs.400',
        description: 'Warm and garlicky breadsticks.',
      },
    ],
  },
  {
    id: '3',
    name: 'Best way',
    icon: '🍣',
    address: 'G 10/2  Islamabad',
    menu: [
      {
        id: '1',
        itemName: 'Sushi Platter',
        price: 'Rs.599',
        description: 'Fresh and tasty sushi rolls.',
      },
      {
        id: '2',
        itemName: 'Miso Soup',
        price: 'Rs.300',
        description: 'A warm bowl of miso soup.',
      },
    ],
  },
  // Add more restaurants here...
];

const UserProfile = ({ navigation }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const userName = 'Adnan khurshid';
  const userId = '12345';

  const handleOrderHistory = () => {
    // Implement order history logic here
    alert('View Order History');
  };

  const handleSettings = () => {
    // Implement settings logic here
    alert('Go to Settings');
  };

  const handleEntity1 = () => {
    // Implement logic for Entity 1 here
    alert('Entity 1 Clicked');
  };

  const handleEntity2 = () => {
    // Implement logic for Entity 2 here
    alert('Entity 2 Clicked');
  };

  const handleRestaurantPress = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleBackToRestaurants = () => {
    setSelectedRestaurant(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Food Panda</Text>
        <View style={styles.topIcons}>
          <TouchableOpacity style={styles.orderIcon} onPress={handleOrderHistory}>
            <MaterialCommunityIcons name="history" size={24} color="#FF6347" />
          </TouchableOpacity>
          <FontAwesome5 name="user" size={24} color="#333" onPress={handleSettings} />
        </View>
      </View>
      <ScrollView>
        {selectedRestaurant ? (
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.backButton} onPress={handleBackToRestaurants}>
              <FontAwesome5 name="arrow-left" size={24} color="#333" />
            </TouchableOpacity>
            <Text style={styles.menuTitle}>{selectedRestaurant.name} Menu</Text>
            {selectedRestaurant.menu.map((menuItem) => (
              <View style={styles.menuItem} key={menuItem.id}>
                <Text style={styles.menuItemName}>{menuItem.itemName}</Text>
                <Text style={styles.menuItemPrice}>{menuItem.price}</Text>
                <Text style={styles.menuItemDescription}>{menuItem.description}</Text>
              </View>
            ))}
          </View>
        ) : (
          <FlatList
            data={restaurants}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.restaurantCard}
                onPress={() => handleRestaurantPress(item)}
              >
                <View style={styles.restaurantIcon}>
                  <Text style={styles.restaurantIconText}>{item.icon}</Text>
                </View>
                <View style={styles.restaurantDetails}>
                  <Text style={styles.restaurantName}>{item.name}</Text>
                  <Text style={styles.restaurantAddress}>{item.address}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </ScrollView>
      <View style={styles.entities}>
        <TouchableOpacity style={styles.entityItem} onPress={handleEntity1}>
          <FontAwesome5 name="bookmark" size={24} color="#FF6347" />
          <Text>Entity 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.entityItem} onPress={handleEntity2}>
          <FontAwesome5 name="bell" size={24} color="#FF6347" />
          <Text>Entity 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  topIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderIcon: {
    marginRight: 20,
  },
  restaurantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginLeft: 20,
  },
  restaurantIcon: {
    backgroundColor: '#FF6347',
    borderRadius: 25,
    padding: 15,
  },
  restaurantIconText: {
    fontSize: 24,
    color: '#fff',
  },
  restaurantDetails: {
    marginLeft: 20,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantAddress: {
    fontSize: 14,
    color: '#555',
  },
  menuContainer: {
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    marginBottom: 10,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemPrice: {
    fontSize: 16,
    color: '#555',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#777',
  },
  entities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom:30,
  },
  entityItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UserProfile;
