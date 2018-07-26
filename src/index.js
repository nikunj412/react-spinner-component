import React from "react";
import ReactDOM from "react-dom";
import { ReactLoadingView } from './lib';

ReactDOM.render(<div>
    <ReactLoadingView
        loading={true}
        // loading={this.state.loadingscrenDisplay}
        bgColor='#f1f1f1'
        spinnerColor='#E88634'
        textColor='#676767'
        textStyle='700'
        logoSrc='https://cdn-images-1.medium.com/max/512/1*6kK9j74vyOmXYm1gN6ARhQ.png'
        LoaderView='line-scale'
        customheight='100%'
        // logoSrc={window.location.origin + '/images/45.gif'}
        text='Let Fire Up the React'
        customClassAdd='class'
    />
</div>, document.getElementById("root"));