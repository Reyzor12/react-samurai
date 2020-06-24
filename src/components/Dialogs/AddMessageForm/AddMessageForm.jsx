import React from "react";
import Textarea from "../../common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreater, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreater(50);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} placeholder='Enter your message' name="newMessageBody" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);