function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");

        // Criar novo item de lista
        var listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.innerText = taskText;

        // Adicionar botão de marcar como concluída
        var completeBtn = document.createElement("button");
        completeBtn.className = "btn btn-light btn-sm ml-2";
        completeBtn.innerText = "Concluir";
        completeBtn.onclick = function() {
            listItem.classList.toggle("completed");
        };
        listItem.appendChild(completeBtn);

        // Adicionar item à lista
        taskList.appendChild(listItem);

        // Limpar campo de entrada
        taskInput.value = "";
    }
}

function sendViaWhatsApp() {
    var taskListItems = document.querySelectorAll("#taskList .list-group-item");
    var message = "Minhas Tarefas:\n";

    taskListItems.forEach(function(item) {
        var taskText = item.childNodes[0].nodeValue.trim(); // Obtém o texto da primeira criança do item
        var taskStatus = item.classList.contains("completed") ? "Concluída" : "Não Concluída"; // Verifica se a tarefa está concluída

        message += "- " + taskText + " (" + taskStatus + ")\n";
    });

    // Substitua 'seu-número-de-telefone' pelo número de telefone para enviar a mensagem
    var whatsappURL = "https://wa.me/?text=" + encodeURIComponent(message);
    window.open(whatsappURL, "_blank");
}

