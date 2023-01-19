import { useState } from "react";

export const useLocalStorage = () => {
    const [key, setKey] = useState("");
    const [initialValue, setInitialValue] = useState("")

    return [key, initialValue];
}