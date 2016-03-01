var React = require('react-native');
var {
  Text,
  View,
} = React;

var styles = require('./styles.js');

module.exports = React.createClass({
   render() {
     return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Main</Text>
        </View>
    );
  }
});
