import { useEffect } from "react";

const Input = () => {
    return (
        <>
            <div className="flex items-center justify-center w-full h-12 my-4">
                <input
                    type="text"
                    placeholder="집의 종류(호텔)"
                    className="w-full h-full pl-4 border border-gray-200 border-solid rounded-md"
                />
            </div>
        </>
    );
};

export default Input;
