import React from "react";
import { Image, View, TouchableWithoutFeedback } from "react-native";
import { Title, Card, Paragraph } from 'react-native-paper';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface CardItemProps {
    content: string;
    mail: string;
    subject: string;
    name:string
}

const CommentCard = ({ content, mail, subject,name }: CardItemProps) => {
    const navigation=useNavigation()

    const handlePress=(name:string,mail:string)=>{
        navigation.navigate('Person',{name,mail});
    }
    return (
        <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
                <View style={styles.contentContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://picsum.photos/700' }}
                    />
                    <TouchableWithoutFeedback onPress={()=>handlePress(name,mail)}>
                       <Title style={styles.id}>{mail}</Title>
                    </TouchableWithoutFeedback>
                </View>
                <Title style={styles.id}>{subject}</Title>
                <Paragraph style={styles.text}>{content}</Paragraph>
            </Card.Content>
        </Card>
    )
}

export default CommentCard;
