import { Fragment, useRef } from "react";

const Feedback = (props) => {

    const nameRef = useRef();
    const emailRef = useRef();
    const feedbackRef = useRef();

    const onSubmitEvent = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const feedback = feedbackRef.current.value;
        props.onSummit(name, email, feedback);
    }
    return (<Fragment>
        <form onSubmit={onSubmitEvent}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    ref={nameRef} />
            </label>
            <label>
                Email
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    ref={emailRef} />
            </label>
            <label>
                Feedback
                <textarea
                    placeholder="Type your feedback here"
                    ref={feedbackRef}
                    rows={5}></textarea>
            </label>
            <input type="submit" value="Submit" />
        </form>
    </Fragment>)
}

export default Feedback;