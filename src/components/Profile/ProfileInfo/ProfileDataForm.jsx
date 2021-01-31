import React from "react";
import s from './ProfileInfo.module.css';
import {reduxForm} from "redux-form";
import style from "../../common/Forms Controls/FormsControls.module.css";
import {creatField, Input, Textarea} from "../../common/Forms Controls/Forms Controls";

const ProfileDataForm = ({handleSubmit, error, profile}) => {
    return <form onSubmit={handleSubmit}>
        <div><button className={s.button} onClick={() => { }}>save</button></div>
        {error && <div className={style.formSammaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {creatField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: { creatField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
        </div>

        <div>
            <b>My professional skills</b>:
            { creatField("My professional skills", "lookingForAJobDescription", [], Textarea  )}
        </div>


        <div>
            <b>About me</b>:
            { creatField("About me", "aboutMe", [], Textarea  )}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {creatField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;