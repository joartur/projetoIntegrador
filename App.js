import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Divider } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [selectOption, setSelectedOption] = useState('Aula');
  return (
    <View style={styles.topo}>
      <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
      />
      <StatusBar style="auto" />
      <Divider style={styles.divisor} />
      <Text style={styles.titulo}>
        Adicionar Serviço Educacional
      </Text>
      <Text style={styles.texto}>
        Insira as informações da atividade realizada:
      </Text>
      <View style={styles.forms}>
        <SafeAreaView>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="date-range"
              size={24}
              color='#0D0D0D'
              style={styles.icon}>
            </MaterialIcons>
            <TextInput
              style={styles.input}
              placeholder="01/01/1900"
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="schedule"
              size={24}
              color='#0D0D0D'
              style={styles.icon}>
            </MaterialIcons>
            <TextInput
              style={styles.input}
              placeholder="Inicio"
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="more-time"
              size={24}
              color='#0D0D0D'
              style={styles.icon}>
            </MaterialIcons>
            <TextInput
              style={styles.input}
              placeholder="Fim"
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="format-list-bulleted"
              size={24}
              color='#0D0D0D'
              style={styles.icon}>
            </MaterialIcons>
            <Picker
              selectedValue={selectOption}
              style={styles.input}
            >
              <Picker.Item label="Aula" value="Aula" />
              <Picker.Item label="Oficina" value="Oficina" />
              <Picker.Item label="Palestra" value="Palestra" />
              <Picker.Item label="Outros" value="Outros" />
              <Picker.Item label="Outros +" value="Outros +" />
              <Picker.Item label="Outros ++" value="Outros ++" />
            </Picker>
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="description"
              size={24}
              color='#0D0D0D'
              style={styles.icon}>
            </MaterialIcons>
            <TextInput
              style={styles.input}
              placeholder="Descrição"
            />
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.item}>
          <MaterialIcons name="list" size={24} color='#0D0D0D' />
          <Text style={styles.texto}>Lista de Serviços</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <MaterialIcons name="home" size={24} color='#0D0D0D' />
          <Text style={styles.texto}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <MaterialIcons name="app-registration" size={24} color='#0D0D0D' />
          <Text style={styles.texto}>Cadastrar Serviço</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <MaterialIcons name="account-circle" size={24} color='#0D0D0D' />
          <Text style={styles.texto}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  topo: {
    flex: 1,
    backgroundColor: '#fff',

  },
  logo: {
    width: 100,
    height: 58.6,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 15
  },
  divisor: {
    height: 1,
    backgroundColor: 'black',
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  },
  titulo: {
    fontSize: 15,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 10
  },
  texto: {
    fontSize: 13,
    fontFamily: 'sans-serif',
    marginLeft: 5,
    marginBottom: 10,
    marginTop: 10
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#F28322',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    padding: 10
  },
  forms: {
    marginHorizontal: 5,
    marginVertical: 10
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  icon: {
    marginRight: 0,
    backgroundColor: '#F28322',
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  item: {
    alignItems: 'center'
  }
});
