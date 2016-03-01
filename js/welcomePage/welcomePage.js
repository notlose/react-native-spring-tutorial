
var React = require('react-native');
var {
  Text,
  View,
  TouchableOpacity
} = React;

var styles = require('./styles.js');

module.exports = React.createClass({
   render() {
     return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome</Text>
          <TouchableOpacity onPress={this.goMainPage}><Text>Go mainPage</Text></TouchableOpacity>
        </View>
    );
  },
  goMainPage(){
    this.props.navigator.push({
      component:require('./../mainPage/mainPage')
    })
  }
});
