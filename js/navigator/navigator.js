var React = require('react-native');
var {
  Navigator,
} = React;

var welcomePage = require('./../welcomePage/welcomePage');
exports.AwesomeProject = React.createClass(
{
  render() {
    return (
      <Navigator
        ref="nav"
        initialRoute={{name: 'WelcomePage', component: welcomePage}}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, {navigator});
          }
        }}
      />
    );
  },
});
