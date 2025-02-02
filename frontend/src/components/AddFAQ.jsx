import { useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from 'ckeditor5';

const AddFAQ = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('Saving Response');
        try {
            await axios.post('http://localhost:3000/api/faqs/add-faq', {
                question,
                answer,
            });
            alert('FAQ added successfully');
            setQuestion('');
            setAnswer('');
        } catch (error) {
            console.error('Error adding FAQ:', error);
        }
    };

    return (
        <div style={{ 
            padding: '2rem', 
            backgroundColor: '#f8f9fa', 
            minHeight: '100vh',
            fontFamily: "'Roboto', sans-serif" 
        }}>
            <div style={{ 
                maxWidth: '600px', 
                margin: '0 auto', 
                padding: '2rem', 
                backgroundColor: '#fff', 
                borderRadius: '12px', 
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' 
            }}>
                <h1 style={{ 
                    color: '#0F1A3C', 
                    marginBottom: '1.5rem', 
                    fontFamily: "'Montserrat', sans-serif", 
                    fontSize: '2rem', 
                    fontWeight: 600,
                    letterSpacing: '-0.5px'
                }}>
                    Add FAQ
                </h1>
                <form onSubmit={handleSubmit}>
                    <label style={{ display: 'block', marginBottom: '10px', color: '#333' }}>
                        Question:
                    </label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                        style={{
                            width: '100%', 
                            padding: '12px',
                            marginBottom: '20px',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            transition: 'border-color 0.3s',
                            outline: 'none',
                            '&:focus': {
                                borderColor: '#007bff'
                            }
                        }}
                    />
                    <label style={{ display: 'block', marginBottom: '10px', color: '#333' }}>
                        Answer:
                    </label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={answer}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setAnswer(data);
                        }}
                        config={{
                            licenseKey: '<Your License Key>',
                            plugins: [Essentials, Paragraph, Bold, Italic],
                            toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter'],
                            initialData: '<p>Type your answer here...</p>',
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            marginTop: '20px',
                            padding: '12px 24px',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: 500,
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
                    >
                        Add FAQ
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFAQ;
