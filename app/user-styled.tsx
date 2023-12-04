import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;
`;

export const Body = styled.View`
    flex: 1;
    background-color: #F1F6F9;
    padding-left: 20px;
    padding-right: 20px;
`;

export const UserContainer = styled.View`
    padding: 20px;
    background-color: #fff;
    margin-top: 20px;
    flex: 1;
    align-items: center;
`;

export const Username = styled.Text`
    font-size: 18px;
    color: #333;
    font-weight: bold;
`;

export const Icon = styled.View`
    align-items: center;
    height: 84px;
    width: 84px;
    justify-content: center;
    border-radius: 42px;
    background-color: #3C424E;
    margin-bottom: 10px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: #ccc;
    margin-top: 10px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    gap: 10px;
    width: 100%;
`;

export const UserInfoTextBold = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #3C424E;
`;

export const UserInfoText = styled.Text`
        font-size: 16px;
    color: #3C424E;
`;

export const NoResultsFoundText = styled.Text`
    font-size: 16px;
    color: #999;
    margin-top: 20px;
    text-align: center;
`;
