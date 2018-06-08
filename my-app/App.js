import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import About from './components/About';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      header : ' Hen',
      hasil : '',
      angka1 : '',
      angka2 : '',
      showAbout : false
    }
  }

  hitung = () => {
    const {angka1,angka2} = this.state
    let hasilPerhitungan = 0;
    let num1 = 0;
    let num2 = 0;
    let strAngka1 = angka1.replace(/\s/g, "");
    let tampungAngka1 = "";
    let tampungAngka2 = "";
    let tandaPerhitungan = "";
    let isFirstTanda = true;
    for(let i = 0; i<strAngka1.length;i++) {
      if(strAngka1.charAt(i) != "+" && strAngka1.charAt(i) != "-" && strAngka1.charAt(i) != "*" && strAngka1.charAt(i) != "/") {
        tampungAngka2 += strAngka1.charAt(i);
      }
      else {
        if(isFirstTanda) {
          isFirstTanda = false;
          hasilPerhitungan = Number(tampungAngka2);
          tandaPerhitungan = strAngka1.charAt(i);
        }
        else {
          
          if(tandaPerhitungan == "+") {
            hasilPerhitungan = hasilPerhitungan + Number(tampungAngka2);
          }
          else if(tandaPerhitungan == "-") {
            hasilPerhitungan = hasilPerhitungan - Number(tampungAngka2);
          }
          else if(tandaPerhitungan == "*") {
            hasilPerhitungan = hasilPerhitungan * Number(tampungAngka2);
          }
          else if(tandaPerhitungan == "/") {
            hasilPerhitungan = hasilPerhitungan / Number(tampungAngka2);
          }
          tandaPerhitungan = strAngka1.charAt(i);
        }
        tampungAngka2 = "";
      }
    }
    if(tandaPerhitungan == "+") {
      hasilPerhitungan = hasilPerhitungan + Number(tampungAngka2);
    }
    else if(tandaPerhitungan == "-") {
      hasilPerhitungan = hasilPerhitungan - Number(tampungAngka2);
    }
    else if(tandaPerhitungan == "*") {
      hasilPerhitungan = hasilPerhitungan * Number(tampungAngka2);
    }
    else if(tandaPerhitungan == "/") {
      hasilPerhitungan = hasilPerhitungan / Number(tampungAngka2);
    }
    this.setState({hasil : hasilPerhitungan})
  }

  // hitung = () => {
  //   const {angka1,angka2} = this.state
  //   let hasilPerhitungan = 0;
  //   let num1 = 0;
  //   let num2 = 0;
  //   let strAngka1 = angka1.replace(/\s/g, "");
  //   for(let i = 0; i<strAngka1.length;i++) {
  //     if(i % 2 != 0 && i>0) {
  //       if(hasilPerhitungan == 0)
  //       {
  //         num1 = Number(strAngka1.charAt(i-1));
  //       }
  //       else
  //       {
  //         num1 = hasilPerhitungan;
  //       }
        
  //       num2 = Number(strAngka1.charAt(i+1));
  //       if(strAngka1.charAt(i) == "+") {
  //         hasilPerhitungan = num1 + num2;
  //       }
  //       else if(strAngka1.charAt(i) == "-") {
  //         hasilPerhitungan = num1 - num2;
  //       }
  //       else if(strAngka1.charAt(i) == "*") {
  //         hasilPerhitungan = num1 * num2;
  //       }
  //       else if(strAngka1.charAt(i) == "/") {
  //         hasilPerhitungan = num1 / num2;
  //       }
  //     }
  //   }
  //   this.setState({hasil : hasilPerhitungan})
  // }
  render() {
    const {showAbout} = this.state;
    return (
      <View style={styles.container}>
        <Text style= {{fontSize : 32}}>Kalkulator {this.state.header}</Text>
        <TextInput 
          style = {styles.inputBox}
          value={String(this.state.angka1)}
          onChangeText = {(text) => this.setState({angka1:text},this.hitung) }
        />
        <Text >Hasil: {this.state.hasil}</Text>
        {
          showAbout ? <Button title="Hide About" onPress={() => this.setState({showAbout:false})}/> : <Button title="Show About" onPress={() => this.setState({showAbout:true})}/>
        }
        {
          showAbout && <About deskripsi={"HEN - REACT NATIVE"}/>
        }
        
        {/* <Text style= {{fontSize : 32}}>Kalkulator</Text>
        <TextInput 
          style = {styles.inputBox}
          value={String(this.state.angka1)}
          onChangeText = {(text) =>this.setState({angka1:Number(text)})}
        />
        <TextInput 
          style = {styles.inputBox}
          value={String(this.state.angka2)}
          onChangeText = {(text) =>this.setState({angka2:Number(text)})}
        />
        <Button title="Hitung" onPress= {this.hitung}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 32
  },
  inputBox : {
    width: '100%',
    borderWidth : 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 12,
    margin: 6
  }
});
