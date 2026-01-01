import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { CartProvider } from "@/src/context/CartContext";
import { FavoriteProvider } from "@/src/context/FavoriteContext";
import { PesananProvider } from "@/src/context/PesananContext";
import { PromoProvider } from "@/src/context/PromoContext";

import { ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../src/store";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <FavoriteProvider>
            <CartProvider>
              <PromoProvider>
                <PesananProvider>
                  <ThemeProvider
                    value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
                  >
                    <Stack screenOptions={{ headerShown: false }}>
                      {/* Main tabs */}
                      <Stack.Screen name="(tabs)" />

                      {/* Modal */}
                      <Stack.Screen
                        name="modal"
                        options={{ presentation: "modal", title: "Modal" }}
                      />

                      {/* Cart & Detail */}
                      <Stack.Screen name="cart" />
                      <Stack.Screen name="checkout" />
                      <Stack.Screen name="voucher" />
                      <Stack.Screen
                        name="detail/[id]"
                        options={{ title: "Detail" }}
                      />
                    </Stack>

                    <StatusBar style="auto" />
                  </ThemeProvider>
                </PesananProvider>
              </PromoProvider>
            </CartProvider>
          </FavoriteProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
