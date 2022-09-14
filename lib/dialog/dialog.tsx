import React, { Fragment } from "react";
import './dialog.scss';
import {Icon} from "../index";

interface Props {
    children?: React.ReactNode;
    visible: boolean;
}

const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ? 
            <Fragment>
                <div className="random-react-dialog-mask">
                </div>
                <div className="random-react-dialog">
                    <div className="random-react-close">
                        <Icon name="close"/>
                    </div>
                    <header className="random-react-header">
                        提示
                    </header>
                    <main className="random-react-main">
                        {props.children}
                    </main>
                    <footer className="random-react-footer">
                        <button>ok</button>
                        <button>cancel</button>
                    </footer>
                </div>
            </Fragment>
            : null
            
    )
}
export default Dialog;