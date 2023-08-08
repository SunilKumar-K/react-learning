const project_1 = (
    <div>
        <img src="data:image/jpeg;base64,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"></img>
    <h1>
        Fun facts about React
    </h1>

    <ul>
        <li>
            was first released in 2013
        </li>
        <li>
            was originally created by jordon walke
        </li>
        <li>
            has well over 100k stars on github
        </li>
        <li>
            is maintained by facebook
        </li>
        <li>
            powers thousands of enterprise apps, including mobile apps
        </li>
    </ul>
    </div>
)

ReactDOM.render(project_1,document.getElementById("root"))