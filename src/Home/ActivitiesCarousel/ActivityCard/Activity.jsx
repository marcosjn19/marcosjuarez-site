import React from 'react';
import './Activity.css'
import { Card, Image, Text, Group, Button} from '@mantine/core';

export default function Activity( {titulo, preview, date, imgSrc, link}){
    return(
        <Card style={{height:450, width:400}} className='cardActivity' radius={10}>
        <Card.Section>
            <Image
            src={imgSrc}
            href={link}
            height={200}
            />
        </Card.Section>
        <Group className='infoActivity' justify="space-between">
            <div className='infoActivity-title'>
            <Text size ="xl" fw={700} ta="center">{titulo}</Text>
            <Text size='sm' c="blue" ta="right">{date}</Text>            
            </div>

            <div className='infoActivity-description'>
            <Text size="lg" c="dimmed">
            {preview}
            </Text>
            
            {link && ( <Button onClick={() => window.open(link)}>More details...</Button>)}
            </div>
        </Group>
        </Card>
    );
}