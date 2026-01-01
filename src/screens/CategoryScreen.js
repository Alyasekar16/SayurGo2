import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "../../src/styles/Category";
import ProductCard from "../component/ProductCard";
import { CartContext } from "../context/CartContext";

export default function CategoryScreen() {
  const route = useRoute();
  const { products, category } = route.params || {};
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.push("/cart")}
          style={styles.headerIcon}
        >
          <Ionicons name="cart-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <TextInput
          placeholder="Cari produk disini..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
        <Text style={styles.title}>{category}</Text>
      </View>

      {/* LIST PRODUK */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <ProductCard item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
