import React , {useState,useEffect}  from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

export default function App(){
  const[previousName,setpreviousname]=useState("Not Updated Yet")
  const[updateName,setupdatename]=useState("Not Updated Yet")
  const[updateResult,setupdateresult]=useState("Not Updated Yet")
const[previousResult,setpreviousresult]=useState("Not Updated Yet")
useState(()=>{},[
  console.log("I am in UseEffect() method")
])
  return (
      <View style={mystylesheet.viewstyling}>
        <Text style={mystylesheet.textstyling}>Update Student Data</Text>
        <Text style={[mystylesheet.textstyling, { color: 'blue' }]}>
          Using Functional Component
        </Text>
        <View>
          <Card>
            <Text
              style={
                ([mystylesheet.textstyling],
                {
                  color: 'red',
                  fontSize: 22,
                  textAlign: 'center',
                  fontWeight: 'bold',
                   marginTop: 25,
                })
              }>
              Previous Name: {previousName}
            </Text>
            <Text
              style={
                ([mystylesheet.textstyling],
                {
                  color: 'green',
                  fontSize: 22,
                  textAlign: 'center',
                  fontWeight: 'bold',
                })
              }>
              Update Name: {updateName}
            </Text>
            <View>
              <TextInput style={mystylesheet.textinputstyling}
               onChangeText={(text)=>{setpreviousresult(updateName),setupdateresult(text)}}>
              
              </TextInput>
              <TouchableOpacity style={mystylesheet.buttonstyle}><Text
              style={{textAlign:'center',fontFamily:'Arial',fontSize: 18,
    color:'white'}} onPress={()=>{setpreviousname(previousResult),setupdatename(updateResult)}} >Change Name</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </View>
    );
  }


const mystylesheet = StyleSheet.create({
  viewstyling: {
    backgroundColor: '#ededed',
    flex: 1,
    marginTop: 40,
  },
  textstyling: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
  },
  textinputstyling:{
    borderColor:'blue',
    borderWidth:1,
    padding:15,
    marginTop:18,
    marginBottom: 20,
    marginLeft:38,
    marginRight:38,
    fontSize:18,
  },
  buttonstyle:{
    alignContent:'center',
    padding:25,
    marginTop:18,
    backgroundColor:'blue',
    marginLeft:108,
    marginRight:108,
    marginBottom: 20,
  }
});
