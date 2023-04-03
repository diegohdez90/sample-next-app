import Head from "next/head";
import { Fragment } from "react";

const HeaderApp = (props) => {
    return (<Fragment>
        <Head>
            <title>{props.title}</title>
            {props.description && (
                <meta name='description' content={props.description}></meta>
            )}
        </Head>
    </Fragment>);
}

export default HeaderApp;
