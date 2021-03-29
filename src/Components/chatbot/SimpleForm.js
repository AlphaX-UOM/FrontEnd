import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// all available theme props
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Roboto',
    headerBgColor: '#54e775',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#54e775',
    botFontColor: '#fff', //white
    userBubbleColor: '#fff', //white
    userFontColor: '#4a4a4a',
};
// all available config props
const config = {
    width: "350px",
    height: "450px",
    floating: true,
};

class SimpleForm extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot
                    steps={[
                        {
                            id: 'intro',
                            message: 'Do you agree to the Terms and Conditions?',
                            trigger: 'intro-user',
                        },
                        {
                            id: 'intro-user',
                            options: [
                                { value: 'y', label: 'Yes', trigger: 'yes-response' },
                                { value: 'n', label: 'No', trigger: 'no-response' },
                            ]
                        },
                        {
                            id: 'yes-response',
                            message: 'Great!',
                            trigger: 'user-select-module-initaiate',
                        },
                        {
                            id: 'no-response',
                            message: 'Sorry to hear that.',
                            end: true,
                        },
                        {
                            id: 'user-select-module-initaiate',
                            message: 'How can I help you?',
                            trigger: 'user-select-module',
                        },
                        {
                            id: 'user-select-module',
                            options: [
                                { value: 's', label: 'Suggest a tour', trigger: 'Suggest-a-tour' },
                                { value: 't', label: 'Transport Service', trigger: 'Transport-Service' },
                                { value: 'g', label: 'Tour Guides Service', trigger: 'Tour-Guides-Service' },
                                { value: 'e', label: 'Events', trigger: 'Events' },
                                { value: 'h', label: 'Hotels', trigger: 'Hotels' },
                                { value: 'b', label: 'Back', trigger: 'Back' },
                            ]
                        },
                        {
                            id: 'Suggest-a-tour',
                            message: 'Great!',
                            end: true,
                        },
                        {
                            id: 'Transport-Service',
                            message: 'Great!',
                            end: true,
                        },
                        {
                            id: 'Tour-Guides-Service',
                            message: 'Great!',
                            end: true,
                        },
                        {
                            id: 'Events',
                            message: 'Great!',
                            end: true,
                        },
                        {
                            id: 'Hotels',
                            message: 'Great!',
                            end: true,
                        },
                        {
                            id: 'Back',
                            message: 'Sorry to hear that.',
                            trigger: 'intro',
                        },
                    ]}
                    {...config}
                />
            </ThemeProvider>
        );
    }

}

export default SimpleForm;