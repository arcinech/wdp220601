import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

const SimpleForm = () => {
  const [state, setState] = useState({ opened: false });

  const toggleFloating = ({ opened }) => {
    setState({ opened });
  };
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Poppins',
    headerBgColor: '#d58e32',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#d58e32',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  const { opened } = state;
  const steps = [
    {
      id: '1',
      message: 'Hi! how can I help you?',
      trigger: '2',
    },
    { id: '2', user: true },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle='Chatbot'
        steps={steps}
        floating={true}
        opened={opened}
        toggleFloating={toggleFloating}
        floatingStyle={{
          left: 'calc(4% - 28px)',
          right: 'initial',
          transformOrigin: 'bottom center',
          borderRadius: 50,
        }}
        style={{
          left: 'calc(10% - 175px)',
        }}
      />
    </ThemeProvider>
  );
};

export default SimpleForm;
