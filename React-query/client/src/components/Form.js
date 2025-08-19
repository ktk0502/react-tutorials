import React, { useState } from 'react'
import { useMutation,useQueryClient } from '@tanstack/react-query';

function Form() {
    const [text, setText] = useState('');
    const queryClient = useQueryClient();
    
    const todoMutation = useMutation({
        mutationFn: async (text) => {
            const response = await fetch('http://localhost:8000/todo/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title:text })
            });
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        }
    });

    const handleSubmit = () => {
        if (text.trim()) {
            todoMutation.mutate(text);
            setText(''); // Clear input after submission
        }
    };

    return (
        <div>
            <input 
                type='text' 
                value={text} 
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleSubmit}>Create</button>
        </div>
    )
}

export default Form
