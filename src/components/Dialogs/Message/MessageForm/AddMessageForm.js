import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/Forms Controls/Forms Controls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import s from "./AddVessageForm.css"

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}className={s.padding}>
            <div >
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       placeholder='Enter your message' name="newMessageBody" />
            </div>
            <div>
                <button className="button">Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);
