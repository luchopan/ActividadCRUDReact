# 🧩 React CRUD App

Esta es una aplicación web desarrollada con **React** que permite realizar operaciones **CRUD** (Crear, Leer, Actualizar y Eliminar) sobre una lista de usuarios. La aplicación utiliza los **estados (`useState` Y `useEffect`)** para manejar los datos en memoria y no requiere una base de datos externa.

## 🚀 Funcionalidades

- 📥 **Crear** un nuevo usuario (nombre y correo electrónico).
- 📋 **Listar** todos los usuarios registrados.
- 🔁 **Actualizar** los datos de un usuario existente.
- ❌ **Eliminar** usuarios de la lista.
- 🧼 **Sin autocompletado** del navegador para mantener los formularios limpios.

> Nota: Los datos se guardan de forma permanente. Al cerrar o recargar la página se mantienen, exceptuando al cerrar el navegador ya que guarda la información en cache .

## 💻 Tecnologías utilizadas

- React (Vite o Create React App)
- HTML + CSS (estilo minimalista)
- JavaScript (ES6+)
- React Hooks (`useState`)

## ▶️ Cómo ejecutar el proyecto

1. Clona el repositorio o descarga los archivos:
```bash
git clone https://github.com/luchopan/ActividadCRUDReact.git
cd ActividadCRUDReact
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia la aplicación:
```bash
npm start
```

4. Abre tu navegador y ve a:
```bash
http://localhost:3000
```

## 🧠 Notas adicionales

- Se desactivó el historial del navegador con autoComplete="off" en los formularios para evitar que se guarden los nombres y correos previamente escritos.

- Puedes personalizar los estilos directamente en el archivo CSS.

## 📄 Licencia

Este proyecto es de uso académico y puede ser modificado libremente con fines de aprendizaje.