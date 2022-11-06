import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function DrinkItem(props) {
    const { item, navigation, index } = props;
    const goToDetail = () => {
        if (navigation) {
            navigation.navigate('DrinkDetailScreen', {
                item: item,
            });
        }
    };
    return ( <
        TouchableOpacity style = {
            {...styles.container, marginLeft: index == 0 ? 12 : 22 } }
        onPress = { goToDetail } >
        <
        Image style = { styles.imageStyle }
        source = {
            { uri: item.image } }
        /> <
        View style = { styles.infoContainer } >
        <
        Text numberOfLines = { 1 }
        style = {
            {
                color: '#000',
                fontWeight: 'bold',
                marginVertical: 8,
            }
        } >
        { item ? .name } <
        /Text> <
        View style = {
            { flexDirection: 'row' } } >
        <
        Text style = {
            { color: '#2FDBBC', fontWeight: 'bold', flex: 1 } } > { item ? .price }
        VND <
        /Text> <
        View style = {
            {
                padding: 2,
                backgroundColor: '#2FDBBC',
                borderRadius: 8,
                alignItems: 'center',
            }
        } >
        <
        Image style = {
            {
                height: 20,
                width: 20,
                tintColor: '#fff',
            }
        }
        source = { require('../assets/Basket.png') }
        /> <
        /View> <
        /View> <
        /View> <
        /TouchableOpacity>
    );
}

export default DrinkItem;

const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: 150,
        borderRadius: 14,
    },
    container: {
        width: 150,
        borderRadius: 14,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginLeft: 12,
        flex: 1,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    },
    infoContainer: {
        paddingHorizontal: 12,
        marginBottom: 12,
    },
});