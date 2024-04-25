import React from "react";

const TodoRow = ({ color, content }) => {
    return (
        <div className={`flex justify-between items-center py-3 px-6 bg-${color}-300 rounded-md`}>
            <h3>{content}</h3>
            <div>Edit | Delete</div>
        </div>
    );
}

export default TodoRow;