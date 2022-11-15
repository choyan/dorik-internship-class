export function HomeChild({counter, increase}) {
    return (
        <div>
            <h1>This is HomeChild Component</h1>
            <p>{counter}</p>

            <button onClick={increase}>Increase</button>

        </div>
    )
}