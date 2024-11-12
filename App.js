import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image ,Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>

      <Image
        style={styles.image1}
        source={require('./assets/alvo.png')}
      />

      <Text style={styles.titulo}>Clicker Game</Text>

      <Text style={styles.text}>Você clicou {count} vezes</Text>

      <View style={styles.botao}>
        <Button title="Clique aqui" onPress={() => setCount(count + 1)} />
      </View>

      <View style={styles.botao}>
        <Button color = '#b52e24' title="Zerar" onPress={() => setCount(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc8f7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 40,
    marginBottom: 40
  },
  text: {
    fontSize: 20,
    marginBottom: 30,
  },
  botao: {
    marginTop: 10,
    width: 150,
    borderRadius: 5,
    borderWidth: 2,
    
  },

  image1: {
    alignItems: 'center',
    width: 100,
    height: 100,
    marginBottom: 20
  }
});
