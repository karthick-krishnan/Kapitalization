import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { welcomeMessage} from '../actions/welcome-page';




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});



class welcomePage extends Component {

    componentWillMount(){
        this.props.welcomeMessage();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {this.props.payload.message1}
                </Text>
                <Text style={styles.instructions}>
                    {this.props.payload.message2}
                </Text>
                <Text style={styles.instructions}>
                    {this.props.payload.instructions}
                </Text>
            </View>
        );
    }


}



const mapStateToProps = (state) => {
    const {payload} = state.welcome;
    return {
        payload
    };
};


export default connect(mapStateToProps, {
    welcomeMessage,
})(welcomePage);