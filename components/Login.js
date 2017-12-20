import React , {Component} from 'react';

var Dimensions = require('Dimensions');

import { combineReducers ,bindActionCreators} from 'redux';

var { width, height } = Dimensions.get('window');

import {Button,Header,Input,Card,CardSection} from './common';

import { connect } from 'react-redux';
import reducers from '../reducer';
import actions from '../action';

import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';

class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            username:"",
            password:"",
            loading:false
        }

        
    }

    componentWillReceiveProps(nextprops){
        console.log(nextprops);
    }

  onChangeText = (id,value)=>{
  var that = this;
      switch (id) {
          case "0":
               {
                  this.setState({
                      username: value
                  });
              }
               this.props.dispatch(
                 {
                     type:'TYPE_USERNAME',
                     username:value
                 }
               );

              return this.state.username
          case "1":
              {
                  this.setState({
                      password: value
                  });
              }
              this.props.dispatch(
                {
                    type:'TYPE_PASSWORD',
                    password:value
                }
              );
              return this.state.password
          default:
              return value;
      }
    
    }

   onLoginClick(){
       console.log("On Login Click", this.props);
  }  

    render(){
       console.log(this.props.username, this.props.password,this.props.loading);
        return(
            <View style={styles.container}>
                <Header
                    headerText='Login Form'
                />
                <Input
                    label="Username"
                    secureTextEntry={false}
                    placeholder="Enter your username"
                    autoCorrect={false}
                    onChangeText= {(text)=>this.onChangeText('0',text)}
                    value={this.state.username}
                />
                <Input
                    label="Password"
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    autoCorrect={false}
                    onChangeText={(text)=>this.onChangeText('1',text)}
                    value={this.state.password}
                />
                <View style={{flex:0.6,flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
                <Button
                    onPress={this.onLoginClick()}
                >
                    <Text>Login </Text>
                </Button>
                <Button
                    onPress={() => console.log("Button pressed")}
                >
                    <Text>Facebook </Text>
                </Button>
                <Button
                    onPress={() => console.log("Button pressed")}
                >
                    <Text>Github </Text>
                </Button>
                </View>
                <View style={[styles.overlay, { height: 60}]}>
                    <View style={styles.childView } />
                    <View style={styles.childView } />
                    <View style={styles.childView } />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop:40,
      //justifyContent:'flex-start',
     alignItems:'center',
     justifyContent:'center',
     backgroundColor: '#F8F8F8',
    },
    overlay: {
        flex: 1,
        flexDirection:'row',
        position: 'absolute',
        left: 0,
        top: 20,
        opacity: 0.5,
        backgroundColor: 'black',
        width: width,
        justifyContent:'space-around',
        alignItems:'center',
        opacity:0.3
      },
      childView:{
        backgroundColor: 'red',
        width:30,
        height:30,
        opacity:1
      },
   
  });
  
  const mapStateToProps = (state, props) => {
 
      console.log(state);
      return {
          username: state.loginReducer.username,
          password: state.loginReducer.password,
          loading: state.loginReducer.loading
      };
 };

//  const mapDispatchToProps = (dispatch) => {
//     return {
//        //bindActionCreators(actions,dispatch);
//     }
// };
 
 
export default connect(mapStateToProps, actions)(Login);