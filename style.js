import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
    background-color: ${(props) => props.theme['PRIMARY_COLOR']};
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 20px;
    padding-top: ${Constants.statusBarHeight + 'px'};
`;

export const Header = styled.View`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;
export const ThemeButton = styled.Pressable`
    padding: 10px;
    border: 1px solid ${(props) => props.theme['BUTTON_COLOR']};
`;

export const ThemeButtonText = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme['BUTTON_COLOR']};
`;

export const TitleText = styled.Text`
    font-weight: 600;
    font-size: ${(props) => props.fontSize || '18px'};
    color: ${(props) => props.theme['TITLE_COLOR']};
`;

export const PostContainer = styled.View`
    padding: 10px 20px;
    width: 100%;
`;
export const PostText = styled.Text`
    color: ${(props) => props.theme['SECONDARY_COLOR']};
    font-size: 16px;
    padding: 10px 0 0;
    font-weight: ${(props) => props.fontWeight || '400'};
`;
