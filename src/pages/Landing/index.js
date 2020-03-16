import React, { useState, useEffect } from 'react';
import {
  Text,
  Image,
  View,
  ImageBackground,
} from 'react-native';

import appStyles from '../../styles/app';
import styles from './styles';

import ButtonCustom from '../../components/Button';

import routes from '../../navigations/routes';
import { useTranslation } from 'react-i18next';

const Landing = ({
    navigation
}) => {
    const logoImageURL = 'https://lh6.googleusercontent.com/proxy/uqFmR22CryFrSNA_VOvR0F4Pvg_Tc_F1LAlaEVprBaHrtF2hlU95U31D8GUqFI2s9ABC1LIaGcSNfgOiuggy7fPBeSwfWV0I06RS7_OX-v7dXohpKkmZLAjYlhVwYrkMSJ67-uvHFCRdw7Zp_zkveyxHD0hgbKwEegrMAVDMTd65y9aPMlPPh24=s0-d';
    const [image, setImage] = useState(logoImageURL);
    const [imageProperty, setImageProperty] = useState({});
  	const { t, i18n } = useTranslation();

    const getLogoImage = () => {
        Image.getSize( logoImageURL, ( width, height ) => {
            setImageProperty({
                width: width, 
                height: height,
                error: false,
                loading: false
            });
        }, 
        ( error ) => {
            setImageProperty({ 
                width: null, 
                height: null,
                error: true,
                loading: false
            });
        });
    }

    useEffect(() => {
        getLogoImage();
    }, []);

    return (
        <ImageBackground source={{
            uri: logoImageURL
        }} style={[appStyles.matchParent]}>
            <View style={[styles.signContainer]}>
                <Text style={[styles.welcomeText]}>{t('welcome')}</Text>
                <Text style={[styles.welcomeTextDescription]}>
                    {t("lorem")}
                </Text>
                <ButtonCustom
                    rounded
                    label={t('signin').toUpperCase()}
                    click={() => navigation.navigate(routes.SIGNIN.name)}
                    style={{ marginTop: 20 }}/>
                <ButtonCustom
                    rounded
                    label={t('signup').toUpperCase()}
                    click={() => navigation.navigate(routes.SIGNUP.name) }/>
            </View>
        </ImageBackground>
    );
}

export default Landing;