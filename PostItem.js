import * as Linking from 'expo-linking';
import { PostContainer, TitleText, PostText } from './style';

const PostItem = ({ item }) => {
    return (
        <PostContainer>
            <TitleText onPress={() => Linking.openURL(item.url)}>{item.title}</TitleText>
            <PostText>{item.body}...</PostText>
            <PostText fontWeight='600'>{item.date}</PostText>
        </PostContainer>
    );
};

export default PostItem;
