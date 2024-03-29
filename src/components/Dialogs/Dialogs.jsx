import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import TextAria from "./Message/TextAria";
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = props.state.messages.map( m => <Message message={m.message}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={styles.messages}>
                {messageElements}
            </div>
            <div>
                {<TextAria/>}
            </div>
        </div>
    )
}

export default Dialogs;