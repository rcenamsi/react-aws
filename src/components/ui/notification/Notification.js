import React, {useState} from 'react';
import classes from './Notification.module.css';
import { Toast } from 'react-bootstrap';

export const Notification = (props) => {

    

return (
<Toast show={props.show} onClose={props.close} animation={true}  className={classes.top_right} delay={300} autohide>
    <Toast.Header>
    <strong className="mr-auto">Created Successfully!</strong>
    <small>just now</small>
    </Toast.Header>
    <Toast.Body>New Todo list has been added</Toast.Body>
</Toast>
)}


