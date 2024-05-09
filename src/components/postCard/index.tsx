import React from "react";
import { Image, View, TouchableWithoutFeedback } from "react-native";
import { Title, Card, Paragraph } from 'react-native-paper';
import styles from "./styles";

interface CardItemProps {
    title: string;
    userId: number;
    postId: number;
    onPress: (id: number) => void;
}

const CardItem = ({ title, userId, onPress, postId }: CardItemProps) => {
    return (
        <TouchableWithoutFeedback onPress={() => onPress(postId)}>
            <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                    <View style={styles.contentContainer}>
                        <Image
                            style={styles.image}
                            source={{ uri: 'https://picsum.photos/700' }}
                        />
                        <TouchableWithoutFeedback onPress={() => onPress(userId)}>
                            <Title style={styles.id}>{userId}</Title>
                        </TouchableWithoutFeedback>
                    </View>
                    <Paragraph style={styles.text}>{title}</Paragraph>
                </Card.Content>
            </Card>
        </TouchableWithoutFeedback>
    )
}

export default CardItem;
