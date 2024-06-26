// import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useInput from "../../hooks/use-input";

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { isLoading, error, sendRequest } = useInput();

  const transformData = (dataFinal) => {
    const data = dataFinal.data
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: dataFinal.text };

    props.onAddTask(createdTask);
  }

  // const enterTaskHandler = async (taskText) => {
  //   debugger
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://react-api-database-updated-default-rtdb.firebaseio.com/tasks.json',
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({ text: taskText }),
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  //
  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }
  //
  //     const data = await response.json();
  //
  //     const generatedId = data.name; // firebase-specific => "name" contains generated id
  //     const createdTask = { id: generatedId, text: taskText };
  //
  //     props.onAddTask(createdTask);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  return (
    <Section>
      <TaskForm onEnterTask={sendRequest} loading={isLoading} transformData={transformData} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
