/**
 * Renderiza la interfaz principal del Dashboard.
 */
function doGet() {
  return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setTitle('TalentMetrics Pro')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

/**
 * MOTOR DE ALTA VELOCIDAD: Carga las filas en un único bloque de memoria.
 */
function getDashboardData() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Hoja 1');
    if (!sheet) return { error: "No se encontró la pestaña llamada 'Hoja 1'." };
    
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) return []; 
    
    // Captura estrictamente las 7 columnas del rango ocupado (A2:G)
    const values = sheet.getRange(2, 1, lastRow - 1, 7).getValues();
    
    return values.map((row, index) => {
      return {
        id: index + 1, // ID virtual basado en la posición relativa
        empleado: row[0] ? row[0].toString().trim() : 'Sin Nombre',
        edad: isNaN(row[1]) || row[1] === '' ? 0 : Number(row[1]),       
        horas: isNaN(row[2]) || row[2] === '' ? 0 : Number(row[2]),            
        sueldoBase: isNaN(row[3]) || row[3] === '' ? 0 : Number(row[3]),       
        bono: isNaN(row[4]) || row[4] === '' ? 0 : Number(row[4]),  
        sueldoTotal: isNaN(row[5]) || row[5] === '' ? 0 : Number(row[5]),      
        categoria: row[6] && row[6].toString().trim() !== '' ? row[6].toString().trim() : 'General'     
      };
    });
  } catch (error) {
    return { error: "Error de sincronización: " + error.toString() };
  }
}

function addEmployeeToSheet(newEmp) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Hoja 1');
    if (!sheet) return { error: "No se encontró la pestaña 'Hoja 1'." };
    
    const base = Number(newEmp.sueldoBase) || 0;
    const bono = Number(newEmp.bono) || 0;

    sheet.appendRow([
      newEmp.empleado,
      Number(newEmp.edad) || 0, 
      Number(newEmp.horas) || 0,      
      base,
      bono,                           
      (base + bono),                 
      newEmp.categoria
    ]);
    return { success: true };
  } catch (error) {
    return { error: error.toString() };
  }
}

function updateEmployeeInSheet(emp) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Hoja 1');
    if (!sheet) return { error: "No se encontró la pestaña 'Hoja 1'." };
    
    const targetRow = Number(emp.id) + 1; // Mapea el ID de vuelta a su fila real (Fila 2 en adelante)
    const base = Number(emp.sueldoBase) || 0;
    const bono = Number(emp.bono) || 0;

    const range = sheet.getRange(targetRow, 1, 1, 7);
    range.setValues([[
      emp.empleado,
      Number(emp.edad) || 0, 
      Number(emp.horas) || 0,      
      base,
      bono,                           
      (base + bono),                 
      emp.categoria
    ]]);
    return { success: true };
  } catch (error) {
    return { error: error.toString() };
  }
}

function deleteEmployeeFromSheet(id) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Hoja 1');
    if (!sheet) return { error: "No se encontró la pestaña 'Hoja 1'." };
    
    const targetRow = Number(id) + 1;
    if (targetRow >= 2 && targetRow <= sheet.getLastRow()) {
      sheet.deleteRow(targetRow);
    }
    return { success: true };
  } catch (error) {
    return { error: error.toString() };
  }
}