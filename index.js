const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function addTask(indicator, description) {
  tasks.push({
    indicator,
    description,
    state: false,
  });
}

function deleteTask(indicator) {
  tasks = tasks.filter((task) => task.indicator !== indicator);
}

function completeTask(indicator) {
  tasks.forEach((task) => {
    if (task.indicator === indicator) {
      task.state = true;
    }
  });
}

while (true) {
  // Imprime el menú
  console.log("¿Qué quieres hacer?");
  console.log("1. Añadir tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Completar tarea");
  console.log("4. Salir");

  // Lee la entrada del usuario
  const option = rl.question("Opción: ");
   }