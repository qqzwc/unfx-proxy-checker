import React from 'react';
import { ipcRenderer } from 'electron';

import '../../public/styles/Titlebar.postcss';

export default class Titlebar extends React.PureComponent {
    state = {
        maximized: false
    };

    componentDidMount = () => {
        ipcRenderer.on('on-window-unmaximize', () => {
            this.setState({ maximized: false });
        });

        ipcRenderer.on('on-window-maximize', () => {
            this.setState({ maximized: true });
        });
    };

    close = () => {
        ipcRenderer.send('window-close');
    };

    minimize = () => {
        ipcRenderer.send('window-minimize');
    };

    maximize = () => {
        ipcRenderer.send('window-maximize');
    };

    unmaximize = () => {
        ipcRenderer.send('window-unmaximize');
    };

    render = () => {
        const { dark, toggleDark } = this.props;

        return (
            <div className={`titlebar ${dark ? 'dark' : ''}`}>
                <svg viewBox="0 0 396.821 396.821" className="icon">
                    <path d="M394.583,8.054c-0.422-3.413-3.11-6.101-6.522-6.523c-30.748-3.803-62.477-0.488-91.767,9.583c-29.293,10.072-56.355,26.973-78.258,48.876l-49.983,49.983l-72.149,9.305c-1.645,0.212-3.172,0.963-4.345,2.135l-69.563,69.563c-1.969,1.969-2.685,4.868-1.858,7.528c0.825,2.66,3.058,4.643,5.796,5.15l52.597,9.742l10.335,10.335l-22.003,11.915c-2.082,1.127-3.51,3.172-3.851,5.515s0.444,4.709,2.118,6.383l83.438,83.438c1.417,1.417,3.329,2.197,5.304,2.197c0.358,0,0.72-0.026,1.08-0.078c2.343-0.341,4.388-1.769,5.515-3.851l11.916-22.003l10.335,10.335l9.742,52.597c0.508,2.739,2.49,4.971,5.15,5.797c0.731,0.227,1.48,0.337,2.224,0.337c1.96,0,3.876-0.769,5.305-2.197l69.563-69.563c1.172-1.172,1.923-2.7,2.135-4.344l9.306-72.15l49.983-49.984c21.903-21.903,38.804-48.964,48.876-78.257C395.072,70.528,398.385,38.795,394.583,8.054z M79.674,198.355l-36.989-6.851l57.673-57.675l50.332-6.491L79.674,198.355zM152.065,313.268L82.846,244.05l17.085-9.252l61.385,61.386L152.065,313.268z M262.285,295.756l-57.674,57.674l-6.852-36.988l71.017-71.017L262.285,295.756z M325.517,167.471l-135.85,135.85l-96.874-96.874l135.85-135.851c19.738-19.739,44.002-35.076,70.287-44.49c3.395,17.492,11.948,33.719,24.654,46.424c12.705,12.706,28.931,21.259,46.424,24.655C360.593,123.468,345.255,147.732,325.517,167.471z M374.523,82.774c-15.203-2.593-29.345-9.863-40.333-20.85c-10.988-10.987-18.257-25.13-20.85-40.333c21.741-5.859,44.579-7.857,66.99-5.807C382.381,38.195,380.382,61.033,374.523,82.774z" />
                    <path d="M221.325,110.443c-17.74,17.741-17.74,46.606,0,64.347c8.871,8.871,20.521,13.305,32.174,13.305c11.649,0,23.304-4.436,32.173-13.305h0.001c17.74-17.74,17.74-46.606-0.001-64.347C267.931,92.703,239.065,92.704,221.325,110.443z M275.066,164.183c-11.894,11.893-31.244,11.891-43.134,0c-11.893-11.892-11.893-31.242,0-43.134c5.945-5.946,13.756-8.918,21.566-8.918c7.811,0,15.621,2.973,21.566,8.918C286.957,132.941,286.957,152.291,275.066,164.183z" />
                    <path d="M98.365,299.165c-2.93-2.929-7.678-2.929-10.607,0L23.41,363.512c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l64.347-64.347C101.293,306.843,101.293,302.094,98.365,299.165z" />
                    <path d="M108.263,319.671l-28.991,28.991c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l28.991-28.991c2.929-2.929,2.929-7.678,0-10.606C115.941,316.742,111.193,316.742,108.263,319.671z" />
                    <path d="M69.123,361.919c-3.138,0-6.002,2.024-7.062,4.973c-1.078,2.998-0.075,6.441,2.416,8.416c2.547,2.02,6.266,2.13,8.928,0.265c2.84-1.99,3.992-5.81,2.639-9.024C74.931,363.774,72.099,361.919,69.123,361.919z" />
                    <path d="M76.044,366.549C76.234,367,75.864,366.099,76.044,366.549L76.044,366.549z" />
                    <path d="M47.91,380.025l-3.992,3.992c-2.93,2.929-2.93,7.678-0.001,10.607c1.465,1.464,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196l3.992-3.992c2.93-2.929,2.93-7.678,0.001-10.606C55.588,377.099,50.838,377.096,47.91,380.025z" />
                    <path d="M42.502,314.014c-2.93-2.929-7.678-2.929-10.607,0L2.904,343.005c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l28.991-28.991C45.431,321.692,45.431,316.943,42.502,314.014z" />
                    <path d="M54.472,311.136c3.043-0.765,5.327-3.417,5.644-6.537c0.311-3.055-1.369-6.049-4.096-7.427c-2.895-1.464-6.523-0.853-8.769,1.494c-2.405,2.513-2.752,6.426-0.852,9.335c-0.06-0.09-0.106-0.156,0.015,0.029c0.126,0.185,0.083,0.118,0.023,0.029C48.204,310.626,51.429,311.901,54.472,311.136z" />
                    <path d="M73.867,293.257l3.991-3.992c2.929-2.929,2.929-7.678-0.001-10.606c-2.932-2.93-7.681-2.929-10.606,0.001l-3.991,3.992c-2.929,2.929-2.929,7.678,0.001,10.606c1.465,1.464,3.384,2.196,5.303,2.196C70.483,295.454,72.403,294.722,73.867,293.257z" />
                </svg>
                <span className="title">Unfx Proxy Checker</span>
                <div className="misc">
                    <svg viewBox="-82 0 512 512.00163" onClick={toggleDark}>
                        <path d="m329.089844 94.824219c-1.921875-3.75-6.515625-5.230469-10.265625-3.3125-3.75 1.921875-5.234375 6.519531-3.3125 10.269531 11.523437 22.5 17.367187 46.820312 17.367187 72.285156 0 34.808594-11.054687 67.855469-31.96875 95.5625-8.675781 11.496094-13.453125 25.953125-13.453125 40.707032v.972656c0 20.777344-16.902343 37.679687-37.675781 37.679687h-68.085938v-96.597656c27.527344-3.738281 48.820313-27.382813 48.820313-55.917969 0-4.214844-3.417969-7.628906-7.628906-7.628906-4.214844 0-7.628907 3.414062-7.628907 7.628906 0 22.710938-18.476562 41.191406-41.191406 41.191406s-41.191406-18.480468-41.191406-41.191406c0-4.214844-3.414062-7.628906-7.628906-7.628906-4.210938 0-7.628906 3.414062-7.628906 7.628906 0 28.535156 21.292968 52.179688 48.820312 55.917969v96.597656h-68.085938c-20.773437 0-37.675781-16.902343-37.675781-37.679687v-.984375c0-14.839844-4.816406-29.128907-13.929687-41.324219-20.273438-27.144531-31.160156-59.441406-31.484375-93.394531-.402344-42.5 15.941406-82.65625 46.015625-113.074219 30.066406-30.40625 70.015625-47.195312 112.492187-47.273438h.300781c49.964844 0 96.007813 22.804688 126.355469 62.601563 2.558594 3.347656 7.34375 3.992187 10.691407 1.4375 3.351562-2.554687 3.996093-7.339844 1.441406-10.6875-15.933594-20.898437-36.722656-38.191406-60.117188-50.007813-24.539062-12.394531-51.058594-18.6718745-78.699218-18.601562-46.574219.0859375-90.367188 18.484375-123.3125 51.800781-32.957032 33.332031-50.863282 77.351563-50.4218755 123.949219.3554685 37.21875 12.2890625 72.621094 34.5195315 102.378906 7.125 9.539063 10.890625 20.671875 10.890625 32.195313v.984375c0 16.269531 7.382812 30.839844 18.964843 40.558594-11.171874 5.074218-18.964843 16.328124-18.964843 29.375 0 14.832031 10.070312 27.351562 23.726562 31.101562-3.539062 5.175781-5.609375 11.425781-5.609375 18.152344 0 17.785156 14.46875 32.253906 32.253906 32.253906h21.652344c3.742188 27.769531 27.578125 49.25 56.355469 49.25s52.613281-21.484375 56.351563-49.25h21.652343c17.785157 0 32.253907-14.46875 32.253907-32.253906 0-6.726563-2.070313-12.976563-5.605469-18.152344 13.65625-3.75 23.722656-16.269531 23.722656-31.101562 0-12.910157-7.628906-24.066407-18.609375-29.214844 11.691406-9.71875 19.152344-24.359375 19.152344-40.714844v-.972656c0-11.460938 3.683594-22.652344 10.371094-31.519532 22.925781-30.375 35.046874-66.601562 35.046874-104.75 0-27.910156-6.40625-54.570312-19.042968-79.246093zm-155.292969 401.921875c-20.347656 0-37.316406-14.679688-40.910156-33.996094h81.820312c-3.59375 19.316406-20.566406 33.996094-40.910156 33.996094zm96.121094-132.5c9.375 0 17 7.625 17 16.996094 0 9.375-7.625 17-17 17h-132.792969c-4.210938 0-7.628906 3.414062-7.628906 7.625 0 4.214843 3.417968 7.628906 7.628906 7.628906h114.675781c9.375 0 17 7.625 17 17 0 9.371094-7.625 16.996094-17 16.996094h-156.011719c-9.371093 0-16.996093-7.625-16.996093-16.996094 0-9.375 7.625-17 16.996093-17h10.824219c4.210938 0 7.625-3.414063 7.625-7.628906 0-4.210938-3.414062-7.625-7.625-7.625h-28.941406c-9.371094 0-16.996094-7.628907-16.996094-17 0-9.375 7.625-16.996094 16.996094-16.996094zm0 0" />
                    </svg>
                </div>
                <ul className="buttons">
                    <li onClick={this.minimize}>
                        <svg viewBox="0 0 512 512" className="minimize">
                            <path d="M471.695 411.923v47.823a6.913 6.913 0 0 1-6.913 6.913H47.217a6.913 6.913 0 0 1-6.913-6.913v-47.823a6.913 6.913 0 0 1 6.913-6.913h417.566a6.913 6.913 0 0 1 6.912 6.913z" />
                        </svg>
                    </li>
                    {this.state.maximized ? (
                        <li onClick={this.unmaximize}>
                            <svg viewBox="0 0 294.834 294.834">
                                <path d="M288.834,0H47.413c-3.313,0-6,2.687-6,6v17.398c0,3.313,2.687,6,6,6s6-2.687,6-6V12h229.421v229.421h-11.398   c-3.313,0-6,2.687-6,6s2.687,6,6,6h17.398c3.313,0,6-2.687,6-6V6C294.834,2.687,292.147,0,288.834,0z" />
                                <path d="M247.421,41.413H6c-3.313,0-6,2.687-6,6v241.421c0,3.313,2.687,6,6,6h241.421c3.313,0,6-2.687,6-6V47.413   C253.421,44.1,250.734,41.413,247.421,41.413z M241.421,282.834H12V53.413h229.421V282.834z" />
                            </svg>
                        </li>
                    ) : (
                        <li onClick={this.maximize}>
                            <svg viewBox="0 0 448 448">
                                <path d="m144 0h-144v144h16v-128h128zm0 0" />
                                <path d="m432 144h16v-144h-144v16h128zm0 0" />
                                <path d="m16 304h-16v144h144v-16h-128zm0 0" />
                                <path d="m448 304h-16v128h-128v16h144zm0 0" />
                            </svg>
                        </li>
                    )}
                    <li onClick={this.close}>
                        <svg viewBox="0 0 224.512 224.512">
                            <polygon points="224.507,6.997 217.521,0 112.256,105.258 6.998,0 0.005,6.997 105.263,112.254    0.005,217.512 6.998,224.512 112.256,119.24 217.521,224.512 224.507,217.512 119.249,112.254  " />
                        </svg>
                    </li>
                </ul>
            </div>
        );
    };
}