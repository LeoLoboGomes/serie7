import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        
        const styles = StyleSheet.create({
            container: {
              marginTop: 200,
              width: 320,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            },
            text: {
                fontSize: 20
            }
        });   

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Calculo: {result}</Text>
            </View>
    )
        ;
    }
}


export default ResultComponent;