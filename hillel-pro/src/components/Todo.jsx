import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  // Валідація
  const validationSchema = Yup.object({
    task: Yup.string()
      .min(5, "Мінімум 5 символів")
      .required("Обов'язкове поле"),
  });

  const handleSubmit = (values, { resetForm }) => {
    setTodos([...todos, values.task]);
    resetForm();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>TODO List</h2>

      <Formik
        initialValues={{ task: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="task" placeholder="Введіть задачу" />
          <ErrorMessage name="task" component="div" style={{ color: "red" }} />

          <button type="submit">Додати</button>
        </Form>
      </Formik>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;