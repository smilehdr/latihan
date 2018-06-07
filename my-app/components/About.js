import React, { Component } from 'react';
import { Text, View} from 'react-native';

const About = (props) => {
    const { deskripsi } = props;
    return (
        <View>
            <Text>About the App</Text>
            <Text> {deskripsi}</Text>
        </View>
    )
}

// class About extends Component {
//     constructor() {
//         super();
//         this.state = {
//             aboutText: 'About the App'
//         }
//     }
//     // render() {
//     //     const {aboutText} = this.state;
//     //     this.props.deskripsi;
//     //     const { deskripsi } = this.props;
//     //     return (
//     //         <View>
//     //             <Text>{aboutText}</Text>
//     //             <Text> {deskripsi}</Text>
//     //         </View>
//     //     )
//     // }
// }
export default About;