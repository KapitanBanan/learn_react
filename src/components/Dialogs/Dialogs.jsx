import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    let DialogElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let MessageElement = props.state.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogElement}
            </div>
            <div className={s.messages}>
                {MessageElement}
                <div className={s.sending}>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={ sendMessage }>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;