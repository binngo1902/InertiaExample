import { router, useForm, usePage } from "@inertiajs/react";
import React from "react";

const TodoInsert = () => {
    const { data, setData, reset } = useForm({
        content: "",
    });

    const { flash } = usePage().props;

    const storeTodo = (e) => {
        e.preventDefault();
        router.post('/todo', data, {
            onSuccess: () => {
                reset()
            },
            onError: (errors) => {
                console.log(errors)
            },
        
        });
    };
    return (
       
        <form onSubmit={storeTodo}>
            {flash?.message && (
                <div className="flex justify-between items-center py-3 px-6 bg-green-300 rounded-md mb-5">
                    {flash.message}
                </div>
            )}
            <div className="flex gap-4 items-center mb-6">
                <input
                    type="text"
                    className="px-4 py-2 rounded-md grow"
                    placeholder="Add a new todo"
                    onChange={(e) => setData("content", e.target.value)}
                    value={data.content}
                />
                <button className="py-2 px-4 rounded-mb bg-indigo-500">Add</button>
            </div>
        </form>
    );
};

export default TodoInsert;