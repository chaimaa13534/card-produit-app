import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCard() {
  return (
    <View style={styles.container}> 
      <View style={styles.card}>

        <Image 
          source={{ uri: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/c1de2441-3eb2-49ed-9a87-fe5142833f5d/NIKE+AIR+MAX+270+%28GS%29.png" }}
          style={styles.image}
        />

        
        <View style={styles.row}>
          <Text style={styles.title}>Nike Air Max 270</Text>
          <Text style={styles.price}>89,99 €</Text>
        </View>

      
        <Text style={styles.description}>
          La première chaussure Nike Air Max lifestyle est revisitée avec la Nike Air Max 270.
        </Text>

        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acheter maintenant</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 
    justifyContent: "center", 
    alignItems: "center",     
    backgroundColor: "#f0f0f0" 
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    width: 300,
    elevation: 5,     
    shadowColor: "#000", 
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    resizeMode: "cover",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0e985aff",
  },
  description: {
    color: "#555",
    fontSize: 13,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#1FA650",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
