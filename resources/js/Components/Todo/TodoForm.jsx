
import React from "react";
import TodoInsert from "./TodoInsert";
import TodoRow from "./TodoRow";

const TodoForm = () => {
    return (
        <div className="max-w-4xl mx-auto py-5">
            <TodoInsert />
            <div className="flex flex-col gap-4">
                <TodoRow color="green" content="123" />
                <TodoRow color="green" content="123" />
                <TodoRow color="green" content="123" />
            </div>
        </div>
    );
}

export default TodoForm;