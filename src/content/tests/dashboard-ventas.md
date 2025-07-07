---
    title: Dashboard ventas
    description: Eres analista de inteligencia comercial en una empresa de tecnología. Tu objetivo es analizar el comportamiento de ventas para mejorar las decisiones de negocio.
    dificulty: Intermedio
    time: 45 min
    archives: 
        - /resource/dashboard-ventas.xlsx
    solution:
        - /solution/dashboard-ventas.png
    mainAdvantage: 
        - Dax            
        - Vizualizacion            
        - Filtros
---

# 📌 Requisitos

## 1. Modelo de datos

Relaciona:

- `ventas.cliente_id` → `clientes.cliente_id`
- `ventas.producto_id` → `productos.producto_id`

---

## 2. Indicadores principales (usar tarjetas)

- Total de ventas (suma de `total_venta`)
- Total de productos vendidos (suma de `cantidad`)
- Ticket promedio (`total_venta` / total transacciones)

---

## 3. Gráficos requeridos

### Tabla

- `nombre_producto`
- Total vendido
- Unidades vendidas

### Gráfico de columnas apiladas

- Total vendido por mes
- Diferenciar por categoría de producto

### Gráfico circular o de barras

- Ventas por segmento de cliente (`segmento`)

### Gráfico de líneas

- Evolución mensual del total de ventas

---

## 4. Interactividad

Filtros por:

- Año
- Ciudad
- Categoría

---

## 5. Opcional (bonus)

- Medida DAX para calcular **crecimiento mensual** (comparar ventas de este mes con el anterior)
- Crear un **semáforo** para destacar los productos más vendidos (íconos o colores)
