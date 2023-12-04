import { Platform } from "react-native";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
    background-color: #fff;
    height: 80px;
    position: relative;
`;

export const Logo = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: #000;
    padding-top: 15px;
`;

export const GoBackText = styled.Text`
    font-size: 28px;
    font-weight: bold;
    color: #000;
`;

export const GoBackButton = styled.TouchableOpacity`
    position: absolute;
    left: 10px;
    top: 30px;
`;