# TalentMetrics Pro 👔

**TalentMetrics Pro** es un sistema integral de auditoría y análisis de capital humano en tiempo real. Permite gestionar una nómina de empleados a través de una interfaz web premium (diseño profesional Slate & Indigo, modo oscuro nativo, gráficos interactivos) conectada de forma bidireccional y directa con **Google Sheets** utilizando **Google Apps Script**.

---

## 🚀 Características Principales

- **Sincronización de Alta Velocidad:** Lectura y escritura en matriz de memoria optimizada para evitar latencias en Google Workspace.
- **Análisis Estadístico Avanzado:** Gráficos dinámicos utilizando `Chart.js` para la distribución presupuestaria por categorías y esfuerzo individual vs. incentivos.
- **Métricas Avanzadas en Tiempo Real:** Algoritmo integrado en el frontend que detecta automáticamente:
  - Alertas de fatiga extrema (más de 175 horas mensuales).
  - Identificación de máximos rendimientos (bonos destacados).
  - Auditoría salarial preventiva ante asimetrías de pago.
- **CRUD Completo:** Flujo operativo para Añadir, Modificar, Listar y Eliminar colaboradores directamente desde la web app hacia la hoja de cálculo.
- **Diseño Premium:** Interfaz responsiva construida con `Tailwind CSS`, soporte completo para modo oscuro (`dark mode`) y animaciones fluidas de transición.

---

## 🛠️ Tecnologías Utilizadas

- **Backend / Base de Datos:** Google Apps Script, Google Sheets API.
- **Frontend:** HTML5, JavaScript (ES6+), Tailwind CSS v4.
- **Gráficos:** Chart.js.

---

## 📋 Estructura de Datos (Google Sheets)

El sistema mapea de forma exacta las siguientes columnas de la pestaña `"Hoja 1"`:
1. `Empleado` (Texto)
2. `Edad` (Numérico)
3. `Horas Trabajadas` (Numérico)
4. `Sueldo Base` (Moneda)
5. `Bono de Productividad` (Moneda)
6. `Sueldo Total` (Fórmula / Calculado)
7. `Categoria` (Texto / Escalafón)

---

## ⚙️ Instrucciones de Instalación y Despliegue

1. Abre tu archivo de **Google Sheets**.
2. Ve a **Extensiones** > **Apps Script**.
3. Crea un archivo de tipo secuencia de comandos llamado `Código.gs` y pega el código del servidor.
4. Crea un archivo de tipo HTML llamado `index.html` y pega el código de la interfaz.
5. Haz clic en **Desplegar** > **Nuevo despliegue**.
6. Selecciona tipo **Aplicación web**, configura el acceso ("Cualquiera") y ejecuta el despliegue para obtener tu URL pública.