const element = (
    <nav>
        <h1>
            StoryLinkApp
        </h1>
        <ul>
            <li>
                Home
            </li>
            <li>
                Menu
            </li>
            <li>
                contact us.
            </li>
        </ul>
    </nav>
)

console.log(element);

ReactDOM.render(element,document.getElementById("root"));

//ReactDOM.createRoot(document.getElementById("root")).render(element)