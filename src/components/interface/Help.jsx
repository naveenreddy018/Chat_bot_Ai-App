import React, { useState } from 'react';
import './Help.css';

function Help() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="help-container">
      <h1>Help & Support</h1>


      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <div className="question" onClick={() => toggleAnswer(1)}>
            <h3>How do I use Gemini AI?</h3>
            <span  style={{fontSize : "30px"}}>{activeQuestion === 1 ? '−' : "+"}</span>
          </div>
          {activeQuestion === 1 && (
            <div className="answer">
              <ul>
                <li>Step 1: Enter your query or request in the input box.</li>
                <li>Step 2: Press the "Submit" button to send the query to Gemini AI.</li>
                <li>Step 3: Wait for the AI to process and generate a response.</li>
                <li>Step 4: View the AI's response in the designated response area.</li>
                <li>Step 5: You can modify your query or provide additional context for better results.</li>
                <li>Step 6: Use the AI for various tasks like answering questions, generating ideas, or summarizing data.</li>
                <li>Step 7: The AI learns and adapts based on your interactions over time.</li>
                <li>Step 8: You can ask the AI to follow up with more specific queries after it provides a response.</li>
                <li>Step 9: If the AI's response isn't accurate, provide feedback so it can improve.</li>
                <li>Step 10: For complex queries, break them down into smaller, more specific questions to get the best results.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="question" onClick={() => toggleAnswer(2)}>
            <h3>What can Gemini AI do?</h3>
            <span style={{fontSize : "30px"}}>{activeQuestion === 2 ? '−' : '+'}</span>
          </div>
          {activeQuestion === 2 && (
            <div className="answer">
              <ul>
                <li>Gemini AI can answer a wide range of questions, including general knowledge and technical queries.</li>
                <li>It can summarize text and provide key points from lengthy documents.</li>
                <li>It can suggest improvements for writing, code, and other content.</li>
                <li>Gemini AI can generate ideas based on user input, such as brainstorming topics or providing creative suggestions.</li>
                <li>It is capable of translating text between multiple languages.</li>
                <li>Gemini AI can assist in learning by providing explanations and breaking down complex topics.</li>
                <li>It can help with decision-making by offering pros and cons or presenting different perspectives.</li>
                <li>It can integrate with other systems for automated workflows and process improvements.</li>
                <li>Gemini AI can interact with users to simulate conversations, acting as a chatbot.</li>
                <li>It can be customized for specific tasks like research, marketing, or software development.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="faq-item">
          <div className="question" onClick={() => toggleAnswer(3)}>
            <h3>How do I contact support?</h3>
            <span  style={{fontSize : "30px"}}>{activeQuestion === 3 ? '−' : '+'}</span>
          </div>
          {activeQuestion === 3 && (
            <div className="answer">
              <ul>
                <li>You can contact Gemini AI support through our contact page.</li>
                <li>Email us directly at <a href="mailto:support@gemini.ai">support@gemini.ai</a>.</li>
                <li>For urgent issues, call us at +123-456-7890.</li>
                <li>Our support team is available 24/7 to assist you.</li>
                <li>If your query is related to technical support, please provide detailed information about the issue.</li>
                <li>For billing or account-related inquiries, include your account number and relevant details.</li>
                <li>We offer live chat support for quicker responses during business hours.</li>
                <li>Visit our FAQs for answers to common questions before reaching out.</li>
                <li>Support is available in multiple languages—please specify your preferred language.</li>
                <li>For non-urgent queries, you can expect a response within 24-48 hours.</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="how-to-use">
        <h2>How to Use Gemini AI</h2>
        <ul>
          <li>Step 1: Enter your query or request in the input box.</li>
          <li>Step 2: Press "Submit" to send the query to Gemini AI.</li>
          <li>Step 3: Wait for the AI's response, which will be displayed in the response area.</li>
        </ul>
      </div>

      <div className="support-call">
        <h2>Support Call</h2>
        <p>If you're experiencing any issues or need help, don't hesitate to reach out to us:</p>
        <ul>
          <li>Email: <a href="mailto:support@gemini.ai">support@gemini.ai</a></li>
          <li>Phone: +123-456-7890</li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
