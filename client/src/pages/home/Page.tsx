export function HomePage() {
    const loggedIn = false;
    return (
        <div>
            { loggedIn ? 
                // dialog
                <p>log in!</p>
                : <p>hello</p>
            }
        </div>
    )
}