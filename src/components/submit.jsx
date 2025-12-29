// submit.js

import { BsFillSendFill } from "react-icons/bs";

export const SubmitButton = () => {

    return (
        <button type="submit" className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded cursor-pointer text-sm">
            <BsFillSendFill color="white"/>
            Submit
        </button>
    );
}
