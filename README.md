# Introducción:
Desarrollar una aplicación de línea de comandos (CLI) que procese un archivo CSV con transacciones bancarias y genere un reporte que incluya:

* **Balance Final:**
  * Suma de los montos de las transacciones de tipo "Crédito" menos la suma de los montos de las transacciones de tipo "Débito".

* **Transacción de Mayor Monto:**
  * Identificar el ID y el monto de la transacción con el valor más alto.

* **Conteo de Transacciones:**
  * Número total de transacciones para cada tipo ("Crédito" y "Débito").

# Instrucciones de Ejecución:
Para ejecutar la aplicación debe ingresar el siguiente comando en la raiz del proyecto:
```
npm run start "data/entrada.csv"
```

**Importante:** el último argumento es la ruta relativa del archivo CSV de entrada. Si no lo ingresa tomará el archivo CSV por defecto del proyecto ubicado en data/entrada.csv.

**El proyecto NO tiene dependencias**

# Enfoque y Solución:
La aplicación realiza la siguiente lógica:

1. Obtiene el argumento de la ruta relativa del archivo CSV de entrada.
2. Si no se ha ingresado el argumento anterior se procesará el archivo por defecto **data/entrada.csv**.
3. Se abre el archivo CSV.
4. Se procesa el archivo línea por línea. Si es la primera línea, esta no es procesada ya que es la cabecera del archivo.
5. Se genera el reporte.
6. Finalmente se imprime el reporte por consola.

# Estructura del Proyecto:
- Raíz
- ── data       : carpeta donde se encuentra el archivo CSV por defecto
- index.js      : programa javascript principal
- package.json  : archivo de texto en formato JSON que contiene información sobre el proyecto



