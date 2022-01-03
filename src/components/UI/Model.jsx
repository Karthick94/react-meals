import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import classes from './Model.module.scss';

const Backdrop = props => (
    <div className={classes.backdrop} onClick={props.onClose} />
);

const ModelOverlay = props => (
    <div className={classes['model-overlay']}>
        <div className={classes.content}>{props.children}</div>
    </div>
);

const portalElement = document.getElementById('overlays');

const Model = props => {
    return (
        <Fragment>
            {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {createPortal(
                <ModelOverlay>{props.children}</ModelOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Model;
