import { useDorikStore } from "./store/useDorikStore"

export function About() {
    const [counter, increase, mode, changeMode] = useDorikStore((state) => [state.counter, state.increase, state.mode, state.changeMode])


    return (
        <div>
            <h1>This is the About page</h1>
            <p>{counter}</p>

            <button onClick={increase}>Increase</button>

            <p>{mode}</p>
            <button onClick={() => changeMode('light')}>Change To Light Mode</button>

        </div>
    )
}