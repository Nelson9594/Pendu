import React from "react";
import { Card } from "react-bootstrap";

export default function DisplayCard({position, username, score}) {
    return (
        <Card bg="dark" style={{ width: '18rem' }}>
            <Card.Img 
                style={{

                }} 
                variant="top" 
                src={`https://avatars.dicebear.com/api/micah/${username}.svg`} 
            />
            <Card.Body>
                <Card.Title>#{position} : {username}</Card.Title>
                <Card.Text>
                    {score} victoires
                </Card.Text>
            </Card.Body>
        </Card>
    )
}