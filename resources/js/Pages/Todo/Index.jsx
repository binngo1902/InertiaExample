import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from "@inertiajs/react";
import TodoForm from "@/Components/Todo/TodoForm";
const Todo = ({ auth }) => {
    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Todo</h2>}
    >
            <Head title="Todo" />
            <TodoForm />
        </AuthenticatedLayout>
    )

};

export default Todo;