- Lab 9: Introducción a React 
- Descripción
Aplicación simple de lista de tareas desarrollada con React y TypeScript

Permite agregar, eliminar y marcar tareas como completadas.  
Además, las tareas se guardan automáticamente en localStorage para no perderse al recargar la página.

-Parte 1
    -Guardado persistente conlocalStorage  
    -Contador de tareas pendientes  
    -Componentes separados: TaskInput y TaskList
    
-Parte 2

Implementé un "Custom Hook" llamado useLocalStorage que:
    -Guarda los datos en localStorage.
    -Recupera los datos al iniciar la app.
    -Usa useEffect para sincronizar los cambios.
