---
    title: Centro de Eventos
    description: Diseñar un modelo de datos y un dashboard interactivo en Power BI que permita analizar el desempeño comercial de la empresa “XYZ”, facilitando la toma de decisiones estratégicas en base a ventas, ingresos, clientes y productos
    dificulty: Intermedio
    time: 45 min
    archives: 
        - /resource/convention_center.rar
    solution:
        - /solution/convention-center.png
    mainAdvantage: 
        - Dax            
        - KPIs            
        - Filtros
---
# 📌 Proyecto Power BI – Centro de Eventos

## 🔷 PARTE 1: Modelado de Datos

### Relaciones entre Tablas

Se establece un modelo de datos con relaciones **uno a muchos (1:N)**, asegurando que las conexiones estén **activas** para permitir la navegación entre tablas y cálculo de métricas cruzadas:


◦ Clientes por ID_Cliente
◦ Salones por ID_Salon
◦ Facturacion por ID_Evento
◦ Asistentes por ID_Evento

## 📊 PARTE 2: Construcción del Dashboard

### 🎯 Indicadores Clave (KPI Cards)

1. **Total de eventos realizados**
   ◦  Cuenta total de registros en la tabla `Eventos`.

2. **Total de ingresos del año**
   ◦  Suma de Facturación.Valor_Factura para el año filtrado.

3. **Promedio de ocupación general**
   ◦  Fórmula: Ocupación = SUM(Asistentes.Cantidad) / SUM(Salones.Capacidad)
   ◦  Relaciona Asistentes, Eventos y Salones.

4. **Clientes activos en el año**
   ◦  Conteo de clientes con al menos un evento en el año filtrado.

### 📈 Gráficos Requeridos

1. **Eventos por mes**
   ◦  Tipo: `Gráfico de columnas`
   ◦  Fuente: `Eventos.Fecha` (agrupado por mes y año)

2. **Top 5 tipos de evento más comunes**
   ◦  Tipo: `Gráfico de dona` o `barras horizontales`
   ◦  Fuente: `Eventos.Tipo_Evento`
   ◦  Ordenado por frecuencia y limitado a 5.

3. **Ingresos por cliente**
   ◦  Tipo: `Barras verticales`
   ◦  Fuente: Suma de `Facturación.Valor_Factura`, agrupado por `Clientes.Nombre`.

4. **Ocupación por salón**
   ◦  Tipo: Gráfico de columnas o Matriz
   ◦  Cálculo:   Ocupación por salón = SUM(Asistentes.Cantidad) / Salones.Capacidad
   ◦  Relaciona `Eventos`, `Salones`, y `Asistentes`.

### 🔍 Filtros Interactivos (Segmentadores)

Estos filtros permiten análisis dinámico del dashboard:

◦  **Año**
◦  **Tipo de evento**
◦  **Cliente**
◦  **Salón**
