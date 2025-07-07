---
    title: Solicitudes de EPP
    description: Eres un analista de datos en una empresa de distribución de Equipos de Protección Personal (EPP). Debes construir un reporte de Power BI que permita evaluar el comportamiento de solicitudes y entregas por parte de distintas áreas de la empresa.
    dificulty: Intermedio
    time: 45 min
    archives: 
        - /resource/epp-test.xlsx
    solution:
        - /solution/epp-test.png
    mainAdvantage: 
        - Dax            
        - Vizualizacion            
        - Filtros
---

# 📊 Informe Power BI – Gestión de EPP

## 📁 1. Archivos a cargar

Carga los siguientes archivos `.xlsx` en Power BI:

- **`epps.xlsx`**: Lista de elementos de protección personal (EPP).
- **`solicituds.xlsx`**: Registro de solicitudes realizadas.
- **`entregas.xlsx`**: Registro de entregas efectuadas.

---

## ✅ 2. Requerimientos del informe (10 pts c/u)

### 🧮 Tabla dinámica

Muestra por cada EPP:

- 🏷️ **Nombre del EPP**
- 📦 **Cantidad total solicitada**
- ✅ **Cantidad total entregada**

> 📌 **Nota:** Usa una medida DAX para calcular el total entregado, relacionando las tablas `public_solicituds` y `public_entregas`.

---

### 📊 Gráfico de columnas apiladas

Comparación mensual de:

- 🔹 Total de EPPs solicitados  
- 🔸 Total de EPPs entregados  

> 📆 Eje X: Mes  
> 📏 Eje Y: Cantidad

---

### 🎛️ Slicers (segmentaciones de datos)

Incluye filtros interactivos para:

- 🏢 **Área solicitante**
- 🧤 **Tipo de EPP**

---

### 📌 KPI Cards

Tarjetas con indicadores clave:

- 📋 **Total de solicitudes**
- 📦 **Total de entregas**
- 📈 **Porcentaje de cumplimiento**  
  `(Total entregado / Total solicitado) * 100`

---

### 🗂️ Matriz de entregas

Matriz cruzada que muestre:

- Entregas por **Área solicitante** y **Tipo de EPP**
- Ordenadas por **mayor cantidad entregada**

---

### 📈 Gráfico de líneas

Visualiza la **evolución mensual del porcentaje de cumplimiento**:

- Línea del tiempo por mes
- Cálculo: `(Entregas / Solicitudes) * 100`