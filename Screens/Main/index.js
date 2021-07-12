import React, {Component} from 'react';
import {View,Alert,Text, Image,SafeAreaView,FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import { Images } from '../../Themes';
const DATA = [
  { key: 'Pizza',id:'1' }, { key: 'Home Made',id:'2'  }, { key: 'Fast Food',id:'3' },
  { key: 'Hot',id:'4' }
]
export default class Main extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
      headerMode: 'none',
    };
  };

  state = {
    selectedTabIndex: 0,
    items: '',
    selectedTabItem:DATA[0],
    quantity:0
  };

  componentDidMount() {}
  onBackPress = () => {
    this.props.navigation.goBack();
  };
  openLink = (link) => {
    Alert.alert(link);
  };
  onItemPress=(key)=>{

    this.setState({selectedTabItem:key})

  }
  onItemRemove =()=>{

    // remove one item if bigger than 0

    if(this.state.quantity > 0 ){

      this.setState({quantity:this.state.quantity-1})
    }else{

      this.setState({quantity:0})
    }
}
  onItemAdd =()=>{

    // add one item if bigger than 0

    if(this.state.quantity > -1 ){

      this.setState({quantity:this.state.quantity+1})
    }else{

      
    }
  }
  _moveToScreen = (link, index) => {
    this.setState({link, selectedTabIndex: index});
  };
  render() {
    return (
      <View style={styles.container}>

    </View>
    );
  }
}
