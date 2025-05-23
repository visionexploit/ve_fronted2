import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi there! I'm your VisionExploit AI Assistant. How can I help you today?", 
      sender: 'bot',
      link: null
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      link: null
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prevMessages => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          text: botResponse.text,
          sender: 'bot',
          link: botResponse.link
        }
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput) => {
    const userInputLower = userInput.toLowerCase();
    
    // General greetings
    if (userInputLower.includes('hello') || userInputLower.includes('hi')) {
      return {
        text: "Hello! I'm your VisionExploit AI Assistant. How can I help you with your study abroad journey today?",
        link: null
      };
    }
    
    // About VisionExploit
    else if (userInputLower.includes('visionexploit') || userInputLower.includes('vec')) {
      return {
        text: "VisionExploit is your trusted partner for studying abroad in Turkey. We provide comprehensive services including university applications, visa assistance, accommodation support, and personalized guidance throughout your educational journey.",
        link: { url: '/', text: 'Learn more about VisionExploit' }
      };
    }
    
    // Universities
    else if (userInputLower.includes('university') || userInputLower.includes('universities')) {
      return {
        text: "We partner with top universities in Turkey including Istanbul University, Bogazici University, METU, Bilkent, Koc University, and many more. Each university offers unique programs and opportunities. Would you like specific information about any particular university?",
        link: { url: '/universities', text: 'View our partner universities' }
      };
    }
    
    // Programs and Courses
    else if (userInputLower.includes('course') || userInputLower.includes('program') || userInputLower.includes('study')) {
      return {
        text: "We offer assistance with various programs including undergraduate, graduate, and PhD studies. Our partner universities provide programs in Engineering, Business, Medicine, Arts, and many other fields. What specific field are you interested in?",
        link: { url: '/programs', text: 'Explore our programs' }
      };
    }
    
    // Services
    else if (userInputLower.includes('service') || userInputLower.includes('help')) {
      return {
        text: "Our services include:\n1. University application assistance\n2. Visa guidance\n3. Accommodation support\n4. Airport pickup\n5. Language course enrollment\n6. Student residence permit help\n7. Bank account opening assistance\n8. Health insurance support\nWhich service would you like to know more about?",
        link: { url: '/services', text: 'View our services' }
      };
    }
    
    // Contact Information
    else if (userInputLower.includes('contact') || userInputLower.includes('reach') || userInputLower.includes('phone') || userInputLower.includes('number')) {
      return {
        text: "You can reach us through:\n1. WhatsApp: +905528117433\n2. Email: visionexploitconsultants@gmail.com\n3. Social Media: @visionexploit on Instagram and Facebook\nOur team is available to assist you Monday through Friday, 9 AM to 6 PM (Turkey time).",
        link: { url: 'https://whatsapp.com/channel/0029VallfVQKAwEr474NrW3P', text: 'Contact us on WhatsApp' }
      };
    }
    
    // Application Process
    else if (userInputLower.includes('apply') || userInputLower.includes('application') || userInputLower.includes('admission')) {
      return {
        text: "The application process involves:\n1. Initial consultation\n2. Document preparation\n3. University selection\n4. Application submission\n5. Acceptance letter\n6. Visa application\n7. Travel arrangements\nWould you like me to explain any of these steps in detail?",
        link: { url: '/sign-up', text: 'Start your application' }
      };
    }
    
    // Costs and Pricing
    else if (userInputLower.includes('cost') || userInputLower.includes('fee') || userInputLower.includes('price') || userInputLower.includes('pricing')) {
      return {
        text: "Our service fees vary depending on the package you choose. We offer different packages for different needs. Please visit our pricing page or contact us directly for detailed information about our current rates and packages.",
        link: { url: '/pricing', text: 'View our pricing packages' }
      };
    }
    
    // Registration
    else if (userInputLower.includes('sign up') || userInputLower.includes('register') || userInputLower.includes('signup')) {
      return {
        text: "You can register by clicking the 'REGISTER' button in the navigation menu. After registration, one of our consultants will contact you to discuss your study abroad plans and guide you through the next steps.",
        link: { url: '/sign-up', text: 'Register now' }
      };
    }
    
    // Login
    else if (userInputLower.includes('login') || userInputLower.includes('sign in')) {
      return {
        text: "You can sign in through the login button in the navigation menu. If you're having trouble accessing your account, please contact our support team.",
        link: { url: '/sign-up', text: 'Sign in to your account' }
      };
    }
    
    // Location/Address
    else if (userInputLower.includes('location') || userInputLower.includes('address') || userInputLower.includes('office')) {
      return {
        text: "Our main office is located in Istanbul, Turkey. We also have representatives in various cities across Turkey to better serve our students. Would you like specific directions to our office?",
        link: { url: 'https://maps.google.com', text: 'Find our location' }
      };
    }
    
    // Language Requirements
    else if (userInputLower.includes('language') || userInputLower.includes('english') || userInputLower.includes('turkish')) {
      return {
        text: "Most programs in Turkey are offered in English, but some are in Turkish. Language requirements vary by university and program. We can help you find programs that match your language proficiency level.",
        link: { url: '/programs', text: 'View language requirements' }
      };
    }
    
    // Accommodation
    else if (userInputLower.includes('accommodation') || userInputLower.includes('housing') || userInputLower.includes('dormitory') || userInputLower.includes('apartment')) {
      return {
        text: "We offer assistance with various accommodation options including university dormitories, private apartments, and student residences. We can help you find the best option that fits your budget and preferences.",
        link: { url: '/services', text: 'Learn about accommodation options' }
      };
    }
    
    // Visa Information
    else if (userInputLower.includes('visa') || userInputLower.includes('permit')) {
      return {
        text: "We provide comprehensive visa assistance including:\n1. Document preparation\n2. Application guidance\n3. Interview preparation\n4. Student residence permit help\nWould you like specific information about any of these services?",
        link: { url: '/services', text: 'View visa services' }
      };
    }
    
    // Thank you
    else if (userInputLower.includes('thank')) {
      return {
        text: "You're welcome! If you have any other questions about studying in Turkey, our services, or the application process, feel free to ask. I'm here to help!",
        link: null
      };
    }
    
    // Default response
    else {
      return {
        text: "Thank you for your message. I can help you with information about:\n1. Universities and programs\n2. Application process\n3. Visa requirements\n4. Accommodation options\n5. Our services and pricing\nPlease let me know what specific information you need!",
        link: { url: '/services', text: 'Explore our services' }
      };
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot Toggle Button */}
      <button 
        className="chatbot-toggle" 
        onClick={toggleChatbot}
        aria-label="Toggle chat support"
      >
        {isOpen ? (
          <span className="close-icon">×</span>
        ) : (
          <span className="chat-icon">💬</span>
        )}
      </button>
      
      {/* Chatbot Interface */}
      {isOpen && (
        <div className="chatbot-interface">
          <div className="chatbot-header">
            <h3>Support Chat</h3>
            <button className="minimize-button" onClick={toggleChatbot} aria-label="Minimize chat">
              −
            </button>
          </div>
          
          <div className="messages-container">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                <div className="message-text">{message.text}</div>
                {message.link && (
                  <a 
                    href={message.link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="message-link"
                  >
                    {message.link.text}
                  </a>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="message bot-message typing-indicator">
                <span>.</span><span>.</span><span>.</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form className="input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="message-input"
            />
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;