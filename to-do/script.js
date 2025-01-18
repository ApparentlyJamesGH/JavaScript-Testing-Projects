const button = document.getElementById("add");

button.onclick = async function() {
    try {
        const response = await fetch("template.html")
        if (response.ok) {
            const container = document.getElementById("container");

            const rawTemplate = await response.text()
            const newTask = document.createElement("div")

            newTask.setAttribute("class", "task")
            newTask.innerHTML = rawTemplate

            container.appendChild(newTask)
        } else {
            alert("An unknown error occurred.")
        }
    } catch (e) {
        alert("An error occurred: " + e)
    }
};