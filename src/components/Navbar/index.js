import React, {useState} from 'react';
import {Text, View, StatusBar, TouchableOpacity} from 'react-native';

import {Colors, Typography, Mixins} from '../../styles';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Navbar = ({navigation, title = '', rightChildren = null}) => {
  return (
    <Row style={styles.containerNav}>
      <Col size={15}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
          style={styles.backButton}>
          <Icon name="ios-arrow-back" size={30} color={Colors.PRIMARY} />
        </TouchableOpacity>
        {/* <Icon name="ios-close" size={30} color="#4F8EF7" /> */}
      </Col>
      <Col size={70} style={styles.containerTextNav}>
        <Text style={styles.titleNav}>{title}</Text>
      </Col>
      <Col size={15}>{rightChildren != null && rightChildren}</Col>
    </Row>
  );
};

export default Navbar;
