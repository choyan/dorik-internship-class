import { useState } from "react";
import { HomeChild } from "./HomeChild";
import { useDorikStore } from "./store/useDorikStore";

export function Home() {
    // const [counter, setCounter] = useState(0)
    // const increase = () => setCounter(counter + 1);

    const [counter, decrease, mode, changeMode, updateProfile] = useDorikStore((state) => [state.counter, state.decrease, state.mode, state.changeMode, state.updateProfile])
    // const decrease = useDorikStore((state) => state.decrease)

    return (
        <div>
            <h1>This is the Home Page</h1>
            
            <p>{counter}</p>

            <button onClick={decrease}>Decrease</button>

            <p>{mode}</p>

            <button onClick={() => changeMode('dark')}>Change To Dark</button>


            <button onClick={() => updateProfile({
                name: 'Mizan',
                age: '34',
                address: 'Sylhet'
            })}>Update Profile</button>

            {/* <HomeChild counter={counter}  increase={increase} /> */}
        </div>
    )
}