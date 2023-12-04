import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    padding: 20px;
    background-color: #fff;
    margin-top: 20px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;
export const Description = styled.Text`
    font-size: 16px;
    color: #999;
    margin-top: 5px;
    line-height: 24px;
`;

export const BottomView = styled.View`
    flex-direction: row;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
`;

export const UserView = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const Username = styled.Text`
    font-size: 16px;
    color: #999;
`;

export const ActionView = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const IconButton = styled.TouchableOpacity`
    align-items: center;
    height: 42px;
    width: 42px;
    justify-content: center;
    border-radius: 21px;
    background-color: #3C424E;
`;

export const UserText = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
`;