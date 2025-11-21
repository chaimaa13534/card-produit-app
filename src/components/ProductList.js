import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

export default function ProductList() {

  const products = [
    {
      id: 1,
      title: "Nike Air Max 270",
      price: "89,99 €",
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/c1de2441-3eb2-49ed-9a87-fe5142833f5d/NIKE+AIR+MAX+270+%28GS%29.png",
      description: "La première chaussure Nike Air Max lifestyle revisitée.",
    },
    {
      id: 2,
      title: "Adidas Ultraboost",
      price: "99,99 €",
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/efwa2z2axzuqhv35gxbz/AIR+MAX+270.png",
      description: "Un confort optimal pour les longues distances.",
    },
    {
      id: 3,
      title: "Puma RS-X",
      price: "79,99 €",
      image: "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/42827823-aacf-4244-9d7f-1f936dc363c6/W+NIKE+AIR+MAX+270.png",
      description: "Un look rétro et moderne à la fois.",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
  },
});
