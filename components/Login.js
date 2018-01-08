import React , {Component} from 'react';
//import PropTypes from 'prop-types';

var Dimensions = require('Dimensions');

import { combineReducers ,bindActionCreators} from 'redux';

var { width, height } = Dimensions.get('window');

import {Button,Header,Input,Card,CardSection} from './common';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import { connect } from 'react-redux';
import reducers from '../reducer';
import {typePassword,typeUsername,loginClicked} from '../action';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
  } from 'react-native';

class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            username:"",
            password:"",
            loading:this.props.passingProps,
        }

        this.onLoginClick = this.onLoginClick.bind(this);

        this.onUpdate =this.props.onUpdate;

        
    }

    componentWillReceiveProps(nextprops,nextState){
        console.log(nextprops,nextState);
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
             this.props.dispatchUserName(value);
            
              return this.state.username
          case "1":
              {
                  this.setState({
                      password: value
                  });
              }
            this.props.dispatchPassword(value);
              
              return this.state.password
          default:
              return value;
      }
    
    };

   onLoginClick(){
       console.log("On Login Click", this.props);
       //this.onUpdate();
       this.props.dispatchLogin(this.props.username,this.props.password);
       
  }  ;

    render(){
       console.log(this.props.username, this.props.password,this.props.loading);
       
        return(
            <KeyboardAwareScrollView>
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
                    onPress={this.onLoginClick}
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
                {
                 (this.props.loading===true) && 
                     <Header
                    headerText='Loaing...'
                />
                }
                </View>
                <View style={[styles.overlay, { height: 60}]}>
                    <TouchableHighlight 
                    style={styles.childView}
                    onPress={()=>console.log("on press")}
                    >
                        <Text>Press </Text>
                    </TouchableHighlight>
                    <View style={styles.childView } />
                    <View style={styles.childView } />
                </View>
            </View>
            </KeyboardAwareScrollView>
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
        position: 'relative',
        left: 0,
        top: 100,
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

 const mapDispatchToProps = (dispatch) => {
    return {
      dispatchUserName:(value)=>dispatch(
          typeUsername(value)
      ),
      dispatchPassword:(value)=>dispatch(
          typePassword(value)
      ),
      dispatchLogin:(usr,psw)=>dispatch(
          loginClicked(usr,psw)
      )
    }
};
 
 
export default connect(mapStateToProps,mapDispatchToProps)(Login);