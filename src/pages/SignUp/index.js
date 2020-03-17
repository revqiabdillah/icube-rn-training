import React, {useContext, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import ButtonCustom from '../../components/Button';
import Button from '../../components/ButtonSign';
import Checkbox from '../../components/Checkbox';
import Href from '../../components/Href';
import Navbar from '../../components/Navbar';
import Input from '../../components/TextField';
import {AuthContext} from '../../navigations/auth-navigator';
import appStyles from '../../styles/app';
import styles from './styles';

const SignIn = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = useContext(AuthContext);
  const {t, i18n} = useTranslation();

  useEffect(() => {}, []);

  const LabelTos = (
    <Text>
      {t('labelAccept')} <Href label={t('labelTos')} />
    </Text>
  );

  return (
    <View style={[appStyles.container]}>
      <Navbar navigation={navigation} title={t('signup')} />
      <View style={[styles.containerSignin]}>
        <View style={styles.form}>
          <Input placeholder={t('fname')} style={styles.fieldSignup} />
          <Input placeholder={t('lname')} style={styles.fieldSignup} />
        </View>
        <View style={styles.form}>
          <Input
            placeholder={t('emailPlaceholder')}
            style={styles.fieldSignup}
          />
          <Input
            placeholder={t('passwordPlaceholder')}
            style={styles.fieldSignup}
          />
        </View>
        <View style={styles.viewOtp}>
          <View style={styles.inlineForm}>
            <Input
              placeholder={t('phonePlaceholder')}
              style={styles.fieldInline}
            />
            <ButtonCustom
              label={t('labelOtp')}
              type="contained"
              style={styles.btnInline}
            />
          </View>
          <View style={styles.inlineForm}>
            <Input
              placeholder={t('otpPlaceholder')}
              style={styles.fieldInline}
            />
            <ButtonCustom
              type="contained"
              label={t('labelVerify')}
              style={[styles.btnInline, styles.btnVerify]}
            />
          </View>
        </View>
        <View style={styles.viewOtp}>
          <Checkbox label={t('labelNewsLater')} />
          <Checkbox label={LabelTos} />
        </View>
        <Button label={t('signup')} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(SignIn);
