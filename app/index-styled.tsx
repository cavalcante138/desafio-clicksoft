import styled from "styled-components/native";
import Animated from "react-native-reanimated";


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #F1F6F9;
`;

export const Body = styled.View`
    flex: 1;
    background-color: #F1F6F9;
    padding-left: 20px;
    padding-right: 20px;
`;

export const PostContainer = styled(Animated.View)`
    padding: 10px;
    background-color: #F1F6F9;
    margin-top: 20px;
    flex: 1;
`;