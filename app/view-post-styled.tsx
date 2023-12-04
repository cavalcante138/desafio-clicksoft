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

export const PostContainer = styled.View`
    padding: 20px;
    background-color: #fff;
    margin-top: 20px;
    flex: 1;
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
    margin-top: 5px;
`;

export const Username = styled.Text`
    font-size: 16px;
    color: #999;
`;

export const IconButton = styled.TouchableOpacity`
    align-items: center;
    height: 42px;
    width: 42px;
    justify-content: center;
    border-radius: 21px;
    background-color: #3C424E;
`;
