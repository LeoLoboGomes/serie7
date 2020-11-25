import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

class KeyPadComponent extends Component {
    constructor(props) {
    super(props);
    }

    render () {
        const styles = StyleSheet.create({
            container: {
              marginTop: 10,
              alignItems: 'center',
              backgroundColor: "white",
            },
            button: {
              width: 70,
              height: 70,
              backgroundColor: "lightgray",
              borderColor: 'black',
              borderWidth: 1,
              textAlign: "center",
              justifyContent: "center"
            },
            row: {
              flexDirection: "row",
              flexWrap: "wrap",
            },
            text: {
                alignSelf: 'center',
                fontSize: 20
            }
        });          
        return(
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("1")}
                    >
                    <Text style={styles.text}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("2")}
                    >
                    <Text style={styles.text}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("3")}
                    >
                    <Text style={styles.text}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("+")}
                    >
                    <Text style={styles.text}>+</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.row}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("4")}
                    >
                    <Text style={styles.text}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("5")}
                    >
                    <Text style={styles.text}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("6")}
                    >
                    <Text style={styles.text}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("-")}
                    >
                    <Text style={styles.text}>-</Text>
                    </TouchableOpacity>
                </View>
                

                <View style={styles.row}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("7")}
                    >
                    <Text style={styles.text}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("8")}
                    >
                    <Text style={styles.text}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("9")}
                    >
                    <Text style={styles.text}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("*")}
                    >
                    <Text style={styles.text}>*</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.row}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("C")}
                    >
                    <Text style={styles.text}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("0")}
                    >
                    <Text style={styles.text}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("=")}
                    >
                    <Text style={styles.text}>=</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.onClick("/")}
                    >
                    <Text style={styles.text}>/</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default KeyPadComponent;