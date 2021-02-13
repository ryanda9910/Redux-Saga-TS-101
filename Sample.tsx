import React,{useEffect} from 'react'
import { View, Text, StyleSheet, Button, ActivityIndicator,Image} from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import { RootState } from './redux/reducer'
import {reqData} from './redux/Saga'


const SampleComponents = ()=>{
  const dispatch = useDispatch()
  const {data,isloading} = useSelector((state:RootState) => state.userReducer)
  useEffect(() => {
    dispatch(reqData())
  }, [])

  return (
    <View style={styles.container}>
      {isloading &&  <ActivityIndicator style={{position:'absolute',top:80}} size='large' color='white'/>}

      <Text style={{textAlign:'center',marginBottom:30 ,color:'white',fontWeight:'bold',fontSize:25,fontFamily:'monospace'}} >Redux Saga & Typescript 101</Text>
      {data.map((item:any,index:number)=>{
        return(
        <View key={index} style={{alignSelf:'center'}}>
          <Image source={{uri:item.picture.large}} style={{width:80,height:80,borderRadius:50,alignSelf:'center', marginBottom:10}}/>
           <Text style={{textAlign:'center', marginVertical:10 ,color:'white',fontWeight:'bold',fontSize:25}} >Name :{item.name.first}</Text>
           <Text style={{textAlign:'center', marginVertical:10 ,color:'white',fontWeight:'bold',fontSize:18}} >Email:{item.email}</Text>
        </View>
        )
      })}
      <Button title="Fetch Another User" onPress={()=>dispatch(reqData())}/>
      <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:12}}>Open up App.tsx to start working on your app!</Text>
     </View>
  )
}

export default SampleComponents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent:'center',
  },
});
