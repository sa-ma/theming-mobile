import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'styled-components/native';
import { FlatList } from 'react-native';
import PostItem from './PostItem';
import data from './data';
import { Container, Header, ThemeButton, ThemeButtonText, TitleText } from './style';
import { darkTheme, lightTheme } from './theme';

export default function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        getTheme();
    }, []);

    const getTheme = async () => {
        try {
            const themeValue = await AsyncStorage.getItem('@theme');
            if (themeValue) setTheme(themeValue);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleTheme = async () => {
        const themeValue = theme === 'dark' ? 'light' : 'dark';
        try {
            await AsyncStorage.setItem('@theme', themeValue);
            setTheme(themeValue);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            <Container>
                <Header>
                    <TitleText fontSize='24px'>Blog</TitleText>
                    <ThemeButton>
                        <ThemeButtonText onPress={() => toggleTheme()}>
                            {theme === 'dark' ? 'Light' : 'Dark'} Mode
                        </ThemeButtonText>
                    </ThemeButton>
                </Header>
                <FlatList data={data} renderItem={PostItem} keyExtractor={(item) => item.id} />
                <StatusBar style='auto' />
            </Container>
        </ThemeProvider>
    );
}
