import React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';


export default function MuscleModal({visible, setVisible}:any) {

const containerStyle = {backgroundColor: 'white', padding: 20};
  return (
    <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={containerStyle}>
        <Text>Muscle Modal. Click outside this area to dismiss.</Text>
    </Modal>
);
}
