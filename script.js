// ==========================================
// 1. FUNCIÓN PRINCIPAL PARA CAMBIAR PESTAÑAS
// ==========================================
function mostrarPestaña(idCategoria, event) {
    // Ocultar todos los bloques de productos
    const bloques = document.querySelectorAll('.bloque-categoria');
    bloques.forEach(bloque => {
        bloque.style.display = 'none';
    });

    // Mostrar solo el bloque seleccionado
    const idLimpio = idCategoria.toLowerCase().trim();
    const bloqueActivo = document.getElementById('caja-' + idLimpio);
    if (bloqueActivo) {
        bloqueActivo.style.display = 'grid'; // Activa las 2 columnas
    }

    // Apagar el color rojo de todos los botones
    const botones = document.querySelectorAll('.btn-categoria');
    botones.forEach(boton => {
        boton.classList.remove('active');
    });

    // Encender el color rojo en el botón presionado
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// ==========================================
// 2. FUNCIONES BASE PARA LOS PRODUCTOS
// ==========================================
function agregarAlCarrito(nombreProducto, precio) {
    console.log("Producto agregado:", nombreProducto, precio);
    alert("Se agregó al carrito: " + nombreProducto + " - S/ " + precio);
}

function verDetalles(nombreProducto) {
    console.log("Viendo detalles de:", nombreProducto);
    alert("Detalles de: " + nombreProducto);
}
// CONTROL MATEMÁTICO: PRIMERA RECARGA
let cantidadesPrimera = { prim1: 0, prim2: 0, prim3: 0, prim4: 0, prim5: 0, prim6: 0 };
let totalPrimeraModal = 0;

function cambiarCantidadPrimera(packId, cambio) {
    let nuevaCantidad = cantidadesPrimera[packId] + cambio;
    if (nuevaCantidad >= 0) {
        cantidadesPrimera[packId] = nuevaCantidad;
        
        // Cambia el número pequeño en la pantalla
        const contador = document.getElementById(packId + '-qty');
        if (contador) contador.innerText = nuevaCantidad;
        
        calcularTotalPrimera();
    }
}

function calcularTotalPrimera() {
    let p1 = cantidadesPrimera.prim1 * 3.00;
    let p2 = cantidadesPrimera.prim2 * 9.00;
    let p3 = cantidadesPrimera.prim3 * 15.00;
    let p4 = cantidadesPrimera.prim4 * 25.00;
    let p5 = cantidadesPrimera.prim5 * 45.00;
    let p6 = cantidadesPrimera.prim6 * 115.00;
    
    totalPrimeraModal = p1 + p2 + p3 + p4 + p5 + p6;
    
    const pantallaTotal = document.getElementById('modal-primera-total-display');
    if (pantallaTotal) pantallaTotal.innerText = "S/ " + totalPrimeraModal.toFixed(2);
    
    const btn = document.getElementById('btn-finalizar-primera');
    if (btn) {
        if (totalPrimeraModal > 0) {
            btn.removeAttribute("disabled");
            btn.style.backgroundColor = "#00e676";
            btn.style.color = "#000000";
            btn.style.cursor = "pointer";
            btn.innerText = "Continuar con la compra";
        } else {
            btn.setAttribute("disabled", "true");
            btn.style.backgroundColor = "#2c2e36";
            btn.style.color = "#a0a5b5";
            btn.style.cursor = "not-allowed";
            btn.innerText = "Elige al menos un paquete";
        }
    }
}

function procesarCompraPrimera() {
    let resumen = "Hola, quiero Primera Recarga:\n";
    if(cantidadesPrimera.prim1 > 0) resumen += `- 100 Diamantes x${cantidadesPrimera.prim1}\n`;
    if(cantidadesPrimera.prim2 > 0) resumen += `- 310 Diamantes x${cantidadesPrimera.prim2}\n`;
    if(cantidadesPrimera.prim3 > 0) resumen += `- 520 Diamantes x${cantidadesPrimera.prim3}\n`;
    if(cantidadesPrimera.prim4 > 0) resumen += `- 1060 Diamantes x${cantidadesPrimera.prim4}\n`;
    if(cantidadesPrimera.prim5 > 0) resumen += `- 2180 Diamantes x${cantidadesPrimera.prim5}\n`;
    if(cantidadesPrimera.prim6 > 0) resumen += `- 5600 Diamantes x${cantidadesPrimera.prim6}\n`;
    resumen += `\nTotal a pagar: S/ ${totalPrimeraModal.toFixed(2)}`;
    alert(resumen);
}
// CONTROL MATEMÁTICO: RECARGAS ILIMITADAS
let cantidadesRecargas = { rec1: 0, rec2: 0, rec3: 0, rec4: 0 };
let totalRecargasModal = 0;

function cambiarCantidadRecargas(packId, cambio) {
    let nuevaCantidad = cantidadesRecargas[packId] + cambio;
    if (nuevaCantidad >= 0) {
        cantidadesRecargas[packId] = nuevaCantidad;
        
        // Cambia el número pequeño en la pantalla
        const contador = document.getElementById(packId + '-qty');
        if (contador) contador.innerText = nuevaCantidad;
        
        calcularTotalRecargas();
    }
}

function calcularTotalRecargas() {
    let r1 = cantidadesRecargas.rec1 * 18.00;
    let r2 = cantidadesRecargas.rec2 * 35.00;
    let r3 = cantidadesRecargas.rec3 * 60.00;
    let r4 = cantidadesRecargas.rec4 * 135.00;
    
    totalRecargasModal = r1 + r2 + r3 + r4;
    
    const pantallaTotal = document.getElementById('modal-total-display');
    if (pantallaTotal) pantallaTotal.innerText = "S/ " + totalRecargasModal.toFixed(2);
    
    const btn = document.getElementById('btn-finalizar-modal');
    if (btn) {
        if (totalRecargasModal > 0) {
            btn.removeAttribute("disabled");
            btn.style.backgroundColor = "#00e676";
            btn.style.color = "#000000";
            btn.style.cursor = "pointer";
            btn.innerText = "Continuar con la compra";
        } else {
            btn.setAttribute("disabled", "true");
            btn.style.backgroundColor = "#2c2e36";
            btn.style.color = "#a0a5b5";
            btn.style.cursor = "not-allowed";
            btn.innerText = "Elige al menos un paquete";
        }
    }
}

function procesarCompraRecargas() {
    let resumen = "Hola, quiero Recargas Ilimitadas:\n";
    if(cantidadesRecargas.rec1 > 0) resumen += `- 520 Diamantes x${cantidadesRecargas.rec1}\n`;
    if(cantidadesRecargas.rec2 > 0) resumen += `- 1060 Diamantes x${cantidadesRecargas.rec2}\n`;
    if(cantidadesRecargas.rec3 > 0) resumen += `- 2180 Diamantes x${cantidadesRecargas.rec3}\n`;
    if(cantidadesRecargas.rec4 > 0) resumen += `- 5600 Diamantes x${cantidadesRecargas.rec4}\n`;
    resumen += `\nTotal a pagar: S/ ${totalRecargasModal.toFixed(2)}`;
    alert(resumen);
}
// Base de datos de productos de envío y sus valores individuales
let miCarrito = {
    usd: { cantidad: 0, precio: 3.80 },
    eur: { cantidad: 0, precio: 4.15 },
    pen: { cantidad: 0, precio: 1.00 }
};

// 1. CONTROLADOR DE VISIBILIDAD: Muestra la lista al presionar Agregar
function mostrarSeccion(tipo) {
    if (tipo === 'enviar') {
        const contenedorLista = document.getElementById("seccion-lista-enviar");
        
        // Alternador (Si está oculto lo muestra, si está abierto lo cierra)
        if (contenedorLista.style.display === "none") {
            contenedorLista.style.display = "block";
            // Desplazamiento suave para mejorar la navegación del cliente
            contenedorLista.scrollIntoView({ behavior: 'smooth' });
        } else {
            contenedorLista.style.display = "none";
        }
    }
}

// 2. CONTROLADOR DE CANTIDADES: Sumar y restar unidades
function cambiarCantidad(idItem, operacion) {
    let item = miCarrito[idItem];
    
    if (item) {
        let resultado = item.cantidad + operacion;
        
        // Impedir que la cantidad caiga por debajo de cero
        if (resultado >= 0) {
            item.cantidad = resultado;
            
            // Actualizar número en pantalla de forma instantánea
            document.getElementById(`${idItem}-qty`).innerText = resultado;
            
            // Ejecutar recálculo financiero de la compra
            calcularTotales();
        }
    }
}

// 3. MOTOR MATEMÁTICO: Suma total automatizada
function calcularTotales() {
    let subtotalGeneral = 0;
    
    for (let clave in miCarrito) {
        subtotalGeneral += miCarrito[clave].cantidad * miCarrito[clave].precio;
    }
    
    // Inserción del resultado formateado en Soles (S/)
    document.getElementById("total-global").innerText = `S/ ${subtotalGeneral.toFixed(2)}`;
}
// Base de datos completa con las 10 monedas y sus valores asignados
let miCarrito = {
    usd:  { cantidad: 0, precio: 3.80 },
    eur:  { cantidad: 0, precio: 4.15 },
    pen:  { cantidad: 0, precio: 1.00 },
    ars:  { cantidad: 0, precio: 0.05 },
    mxn:  { cantidad: 0, precio: 0.22 },
    bob:  { cantidad: 0, precio: 0.55 },
    cop:  { cantidad: 0, precio: 0.01 },
    clp:  { cantidad: 0, precio: 0.04 },
    brl:  { cantidad: 0, precio: 0.75 },
    usdt: { cantidad: 0, precio: 3.85 }
};

// Función limpia para abrir modales sin romper las secciones del catálogo
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        // Usamos flex y aseguramos que no interfiera con otros contenedores
        modal.style.setProperty('display', 'flex', 'important');
    }
}

// Función para cerrar el modal flotante
function cerrarModalEnviar() {
    const modal = document.getElementById("modal-enviar");
    modal.style.display = "none"; // Se oculta
}

// Suma y resta de monedas asegurando valores positivos
function cambiarCantidad(idItem, operacion) {
    let item = miCarrito[idItem];
    
    if (item) {
        let resultado = item.cantidad + operacion;
        
        if (resultado >= 0) {
            item.cantidad = resultado;
            
            // Actualiza el número de la interfaz automáticamente
            document.getElementById(`${idItem}-qty`).innerText = resultado;
            
            // Recalcula el total general inmediatamente
            calcularTotales();
        }
    }
}

// Sumatoria matemática de los elementos del carrito
function calcularTotales() {
    let subtotalGeneral = 0;
    
    for (let clave in miCarrito) {
        subtotalGeneral += miCarrito[clave].cantidad * miCarrito[clave].precio;
    }
    
    // Renderiza el total en pantalla en soles (S/) con 2 decimales
    document.getElementById("total-global").innerText = `S/ ${subtotalGeneral.toFixed(2)}`;
}
// CÓDIGO DE EMERGENCIA: Conecta el botón automáticamente al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    // 1. Buscamos todas las tarjetas de la tienda
    const tarjetas = document.querySelectorAll("div, section, article");
    
    tarjetas.forEach(tarjeta => {
        // 2. Si la tarjeta contiene el texto "ENVIAR" y "TRANSF. / REMESAS"
        if (tarjeta.innerText && tarjeta.innerText.includes("ENVIAR") && tarjeta.innerText.includes("REMESAS")) {
            // 3. Buscamos el botón de "Agregar" dentro de esa tarjeta específica
            const botonAgregar = tarjeta.querySelector("button");
            
            if (botonAgregar) {
                // 4. Le asignamos la función de abrir el modal a la fuerza
                botonAgregar.onclick = function() {
                    mostrarSeccion('enviar');
                };
                console.log("¡Botón de Enviar conectado con éxito de forma automática!");
            }
        }
    });
});

// Funciones globales de apertura y cierre limpias
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.style.display = "flex";
    }
}

function cerrarModalEnviar() {
    const modal = document.getElementById("modal-enviar");
    if (modal) modal.style.setProperty('display', 'none', 'important');
}

function cerrarModalRecibir() {
    const modal = document.getElementById("modal-recibir");
    if (modal) modal.style.setProperty('display', 'none', 'important');
}

    if (monedaActivaId) {
        txtSeleccion.innerText = nombresMonedas[monedaActivaId];
        btnContinuar.disabled = false;
        btnContinuar.innerText = "Continuar";
        btnContinuar.style.setProperty("background-color", "#38383d", "important");
        btnContinuar.style.setProperty("color", "#fff", "important");
    } else {
        txtSeleccion.innerText = "Ninguna";
        btnContinuar.disabled = true;
        btnContinuar.innerText = "Elige una opción";
        btnContinuar.style.setProperty("background-color", "#2d2d30", "important");
        btnContinuar.style.setProperty("color", "#75757a", "important");
    }

// Lógica de selección exclusiva de Recibir
function seleccionarRecibirLocal(opcionId, accion) {
    if (accion === -1) {
        if (recibirActivaId === opcionId) {
            document.getElementById(`recibir-${opcionId}-qty`).innerText = "0";
            recibirActivaId = null;
        }
    } else if (accion === 1) {
        if (recibirActivaId && recibirActivaId !== opcionId) {
            document.getElementById(`recibir-${recibirActivaId}-qty`).innerText = "0";
        }
        recibirActivaId = opcionId;
        document.getElementById(`recibir-${opcionId}-qty`).innerText = "1";
    }

    const txtSeleccion = document.getElementById("local-recibir-seleccionada");
    const btnContinuar = document.getElementById("btn-continuar-recibir");

    if (recibirActivaId) {
        txtSeleccion.innerText = opcionesRecibir[recibirActivaId];
        btnContinuar.disabled = false;
        btnContinuar.innerText = "Continuar";
        btnContinuar.style.setProperty("background-color", "#38383d", "important");
        btnContinuar.style.setProperty("color", "#fff", "important");
    } else {
        txtSeleccion.innerText = "Ninguna";
        btnContinuar.disabled = true;
        btnContinuar.innerText = "Elige una opción";
        btnContinuar.style.setProperty("background-color", "#2d2d30", "important");
        btnContinuar.style.setProperty("color", "#75757a", "important");
    }
}

// Redirecciones independientes hacia tu chat de WhatsApp
function enviarPedidoWhatsApp() {
    if (!monedaActivaId) return;
    const tuNumeroTelefono = "51925515732"; 
    const nombreDivisa = nombresMonedas[monedaActivaId];
    const mensajeTexto = `Hola, vengo de la app Mi Tienda Premium. Deseo realizar un envío en la opción de: ${nombreDivisa}. ¿Me podrías indicar las tasas actuales, comisiones y los pasos a seguir?`;
    window.open(`https://whatsapp.com{tuNumeroTelefono}&text=${encodeURIComponent(mensajeTexto)}`, '_blank');
}

function enviarRecibirWhatsApp() {
    if (!recibirActivaId) return;
    const tuNumeroTelefono = "51925515732"; 
    const nombreOpcion = opcionesRecibir[recibirActivaId];
    const mensajeTexto = `Hola, vengo de la app Mi Tienda Premium. Deseo utilizar la opción de: ${nombreOpcion}. ¿Me podrías brindar los datos necesarios y los pasos a seguir para realizar mi depósito?`;
    window.open(`https://whatsapp.com{tuNumeroTelefono}&text=${encodeURIComponent(mensajeTexto)}`, '_blank');
}
// 4. Dibuja las tarjetas idénticas a tu diseño
function renderizarCarritoVisual() {
    const lista = document.getElementById('lista-productos-carrito');
    const totalElemento = document.getElementById('total-carrito');
    if (!lista) return;

    // Si el carrito no tiene nada, dibuja el tacho de basura 3D
    if (window.carrito.length === 0) {
        lista.innerHTML = `
            <div style="text-align: center; padding: 30px 0;">
                <div style="font-size: 60px; margin-bottom: 10px; filter: drop-shadow(0px 4px 8px rgba(0,0,0,0.5));">🗑️</div>
                <h3 style="color: white; margin: 0; font-size: 16px; font-weight: bold; font-family: sans-serif;">Tu carrito está completamente vacío.</h3>
                <p style="color: #666; margin: 5px 0 0 0; font-size: 13px; font-family: sans-serif;">¡Añade algunos productos de la tienda!</p>
            </div>
        `;
        if (totalElemento) totalElemento.innerText = 'S/ 0.00';
              // Reiniciamos el método de pago seleccionado a "Ninguno"
        let txtMetodoElegido = document.getElementById('metodo-elegido-txt') || document.getElementById('metodo-elegir-txt');
        if (txtMetodoElegido) {
            txtMetodoElegido.innerHTML = "Ninguno";
        }

        // Reseteamos las variables globales de comisiones en memoria
        window.comisionCalculada = 0;
        window.totalConComision = 0;
        return;
    }

    // Si tiene productos, limpia el tacho y dibuja las tarjetas de Netflix, HBO, etc.
    lista.innerHTML = '';
    let sumaTotal = 0;

    carrito.forEach((prod, index) => {
        sumaTotal += prod.precio;
        lista.innerHTML += `
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div>
                    <h4 style="color: white; margin: 0; font-size: 16px; font-weight: bold; font-family: sans-serif;">${prod.nombre}</h4>
                    <span style="color: #25D366; font-weight: bold; font-size: 15px; display: block; margin-top: 4px; font-family: sans-serif;">S/ ${prod.precio.toFixed(2)}</span>
                </div>
                <button onclick="eliminarDelCarrito(${index})" style="background: transparent; border: none; color: #ff3b30; font-size: 18px; cursor: pointer; font-weight: bold;">×</button>
            </div>
        `;
    });

    if (totalElemento) totalElemento.innerText = `S/ ${sumaTotal.toFixed(2)}`;
}

// 5. Envía la lista estructurada por WhatsApp con diseño mejorado
function enviarCarritoWhatsApp() {
    if (!window.carrito || window.carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    
    const inputNom = document.querySelector('#modal-carrito input[type="text"]') || document.getElementById("registroNombre");
    const nombre = (inputNom && inputNom.value.trim() !== "") ? inputNom.value.trim() : "Cliente";
    
    const spanTotal = document.getElementById('total-carrito');
    const total = spanTotal ? spanTotal.innerText.trim() : "S/ 0.00";

    let productosTexto = "";
    window.carrito.forEach(p => {
        productosTexto += `• ${p.nombre} (S/ ${p.precio})\n`;
    });

    try {
        if (typeof motorGamer !== 'undefined' && motorGamer.usuariosBD) {
            const nombreEnPerfil = document.getElementById('perfilNombre')?.innerText || document.querySelector('[id*="Nombre"]')?.innerText || nombre;
            let telActivo = motorGamer.usuarioActivo || "";
            if (!telActivo) {
                for (let tel in motorGamer.usuariosBD) {
                    if (motorGamer.usuariosBD[tel].nombre && (nombreEnPerfil.includes(motorGamer.usuariosBD[tel].nombre) || motorGamer.usuariosBD[tel].nombre.includes(nombreEnPerfil))) {
                        telActivo = tel;
                        break;
                    }
                }
            }

            if (telActivo && motorGamer.usuariosBD[telActivo]) {
                let clienteActual = motorGamer.usuariosBD[telActivo];

                if (!clienteActual.primeraCompraRealizada) {
                    clienteActual.primeraCompraRealizada = true;
                    const codigoAmigo = clienteActual.quienLoRefirio ? clienteActual.quienLoRefirio.trim().toUpperCase() : "";
                    
                    if (codigoAmigo !== "") {
                        clienteActual.puntos = (parseInt(clienteActual.puntos) || 100) + 20;

                        if (typeof motorNotificaciones !== 'undefined') {
                            motorNotificaciones.agregar(telActivo, `🎉 *¡Felicidades!* Acabas de ganar *+20 PUNTOS EXTRA* al usar tu código de referido.`);
                        }

                        for (let telAmigo in motorGamer.usuariosBD) {
                            if (motorGamer.usuariosBD[telAmigo].codigoPropio === codigoAmigo) {
                                motorGamer.usuariosBD[telAmigo].puntos = (parseInt(motorGamer.usuariosBD[telAmigo].puntos) || 0) + 150;
                                
                                if (typeof motorNotificaciones !== 'undefined') {
                                    motorNotificaciones.agregar(telAmigo, `👑 *¡Felicidades!* Acabas de ganar *+150 PUNTOS* por que alguien uso tu código de referido.`);
                                }
                                break;
                            }
                        }

                        localStorage.setItem('usuariosGamerBD', JSON.stringify(motorGamer.usuariosBD));
                        localStorage.setItem('jvx_sesion_activa', telActivo);

                        const marcadorVisual = document.getElementById("perfilPuntos") || document.querySelector('.puntos-totales');
                        if (marcadorVisual) {
                            marcadorVisual.innerText = clienteActual.puntos + " PTS";
                        }
                        if (typeof motorGamer.actualizarProgresoGrafico === 'function') {
                            motorGamer.actualizarProgresoGrafico(clienteActual.puntos);
                        }

                        alert(`🎁 ¡Primera compra completada, ${clienteActual.nombre}!\n\nSe han desbloqueado tus +20 PTS extra por usar código de referido (Total: 120 PTS).\n\n¡Tu amigo dueño del código ${codigoAmigo} acaba de recibir +150 PTS!`);
                    } else {
                        localStorage.setItem('usuariosGamerBD', JSON.stringify(motorGamer.usuariosBD));
                    }
                }
            }
        }
    } catch (e) {
        console.log("Error en procesador de referidos: ", e);
    }

    const mensaje = `🚀 *¡Hola JON VXNTS!*\n` +
                    `👤 Mi nombre es *${nombre}* y deseo concretar la compra de mis productos:\n\n` +
                    `📋 *Detalle del Pedido:*\n${productosTexto}\n` +
                    `💵 *Total a pagar:* *${total}*\n` +
                    `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                    `🖼️ *Adjunto el comprobante de pago.*\n` +
                    `⚡ _Quedo atento para la entrega de mi servicio._`;

    const urlWhatsApp = 'intent://send?phone=51925515732&text=' + encodeURIComponent(mensaje) + '#Intent;scheme=whatsapp;package=com.whatsapp;end';
    window.location.href = urlWhatsApp;
}
// Al hacer clic en el botón punteado, se activa el input oculto
document.getElementById('boton-captura').addEventListener('click', function() {
    document.getElementById('input-archivo').click();
});

// Opcional: Detectar cuando el cliente ya seleccionó la foto
document.getElementById('input-archivo').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        alert("¡Captura cargada con éxito!");
        // Aquí puedes cambiar el texto del botón si quieres mostrar el nombre del archivo
    }
});
function cerrarYLimpiarCarrito() {
    // 1. Limpiar el campo del Nombre
    const inputNombre = document.getElementById('nombre-client');
    if (inputNombre) inputNombre.value = '';

    // 2. Reiniciar el botón del comprobante a Rojo original
    const conComp = document.getElementById('contenedor-comprobante');
    const texComp = document.getElementById('texto-comprobante');
    const inpFile = document.getElementById('input-archivo');
    
    if (conComp && texComp) {
        conComp.style.borderColor = '#ff0000';
        texComp.style.color = '#ffffff';
        texComp.innerHTML = '📁 Toca para cargar la captura del pago';
    }
    
    // 3. Borrar el archivo cargado de la memoria del navegador
    if (inpFile) inpFile.value = '';

    // 4. AQUÍ EJECUTAS LA ACCIÓN ORIGINAL DE CERRAR EL CARRITO VISUALMENTE
    // Por lo general en tu plantilla se hace ocultando el div del carrito, por ejemplo:
    const divCarrito = document.getElementById('carrito-contenedor'); // Cambia este ID por el tuyo si es diferente
    if (divCarrito) {
        divCarrito.style.display = 'none';
    }
}
// Función exacta para abrir y cerrar el menú de la tuerca
function toggleMenuTuerca() {
  var menu = document.getElementById("menuDesplegable");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Funciones para que no recargue la página al hacer clic
function abrirModalIngreso(event) {
  event.preventDefault();
  alert("Aquí abriremos la interfaz de: Registrarse / Continuar sin registrarse");
}

function abrirModalTerminos(event) {
  event.preventDefault();
  alert("Aquí mostraremos tus Términos y Condiciones");
}
function cerrarModalIngreso() {
  document.getElementById('modalIngreso').style.display = 'none';
}
// Función para alternar visualmente entre Registro e Iniciar Sesión
function alternarVista(vista) {
    const seccionRegistro = document.getElementById('seccion-registro');
    const seccionLogin = document.getElementById('seccion-login');

    if (vista === 'login') {
        seccionRegistro.style.display = 'none';
        seccionLogin.style.display = 'block';
    } else {
        seccionLogin.style.display = 'none';
        seccionRegistro.style.display = 'block';
    }
}

// Función que se ejecuta cuando el usuario se registra con éxito
function mostrarExito() {
    // Cerramos el modal de ingreso actual
    document.getElementById('modalIngreso').style.display = 'none';
    // Abrimos tu modal de puntos ganados (Línea 87 de tu index.html)
    document.getElementById('modalExitoPuntos').style.display = 'block';
}

// 1. Forzar la aparición de la campanita en modo gris
const campana = document.getElementById("jvx-notif-btn");
if (campana) {
    campana.style.setProperty("display", "grid", "important");
    campana.style.filter = "grayscale(100%) opacity(0.6)"; // Color gris que combina con los botones
}

        // 2. Obtener los datos del nuevo cliente y guardarlos con seguridad
        const inputTelefono = document.getElementById("el-id-de-tu-input-de-telefono") || document.getElementById("registroTelefono");
        const inputPin = document.getElementById("registroPin");
        const inputNombre = document.getElementById("registroNombre");

        const numeroIngresado = inputTelefono ? inputTelefono.value.trim() : "";
        const pinCreado = inputPin ? inputPin.value.trim() : "";
        const nombreCliente = inputNombre ? inputNombre.value.trim() : "Cliente Nuevo";

        if (numeroIngresado && pinCreado) {
            // Guardamos el nuevo usuario con su PIN en la base de datos de JON VXNTS
            motorGamer.usuariosBD[numeroIngresado] = {
                nombre: nombreCliente,
                pin: pinCreado
            };
            localStorage.setItem("usuario_actual", numeroIngresado);
            motorGamer.usuarioActivo = numeroIngresado;
        }

// 3. Limpiar y preparar las alertas de este cliente específico
const listaNotif = document.getElementById("jvx-notif-lista");
if (listaNotif) {
    listaNotif.innerHTML = '<div style="color: #555; text-align: center; padding: 20px;">No tienes notificaciones pendientes.</div>';
}
// Función para cambiar entre el formulario de Registro y el de Login
function alternarVista(vista) {
    const seccionRegistro = document.getElementById('seccion-registro');
    const seccionLogin = document.getElementById('seccion-login');

    if (vista === 'login') {
        seccionRegistro.style.display = 'none';
        seccionLogin.style.display = 'block';
    } else {
        seccionLogin.style.display = 'none';
        seccionRegistro.style.display = 'block';
    }
}

// Lista simulada de números de WhatsApp ya registrados en tu tienda
let numerosRegistrados = ["925515731", "925515732", "900000000"];

// Función para mostrar avisos con estilo gamer
function mostrarAvisoGamer(mensaje, tipo = "exito") {
    const notificacion = document.getElementById("notificacionGamer");
    const texto = document.getElementById("notificacionTexto");
    const icono = document.getElementById("notificacionIcono");

    texto.innerText = mensaje;
    
    if (tipo === "error") {
        notificacion.style.borderColor = "#ffcc00"; // Color de alerta/error amarillo
        icono.innerText = "⚠️";
    } else {
        notificacion.style.borderColor = "#ff0044"; // Color rojo característico
        icono.innerText = "🔥";
    }

    notificacion.style.display = "flex";

    // Ocultar automáticamente a los 4 segundos
    setTimeout(() => {
        notificacion.style.display = "none";
    }, 4000);
}

// Lógica al enviar el formulario de Login
function procesarLoginForm() {
    const numeroIngresado = document.getElementById("login-whatsapp").value.trim();

    // Verificamos si el número existe en nuestra lista autorizada
    if (numerosRegistrados.includes(numeroIngresado)) {
        document.getElementById("modalIngreso").style.display = "none";
        mostrarAvisoGamer("¡Sesión iniciada con éxito! Bienvenido.");
    } else {
        mostrarAvisoGamer("El número no está registrado. ¡Crea una cuenta!", "error");
    }
}

// Lógica al enviar el formulario de Registro
function procesarRegistroForm() {
    const nuevoNumero = document.getElementById("registroTelefono")?.value.trim() || "";
    
    let codigoInvitadoUsado = "";
    const todosLosInputs = document.querySelectorAll('input[type="text"]');
    todosLosInputs.forEach(inp => {
        if (inp.value && inp.value.trim().toUpperCase().includes("JVX-")) {
            codigoInvitadoUsado = inp.value.trim().toUpperCase();
        }
    });

    if (nuevoNumero === "") return;

    if (!numerosRegistrados.includes(nuevoNumero)) {
        numerosRegistrados.push(nuevoNumero);
        
        motorGamer.usuarioActivo = nuevoNumero;

        const ultimosCuatro = String(nuevoNumero).slice(-4);
        const miCodigoUnico = "JVX-" + (ultimosCuatro || "7749");

        // REGLA DE ORO: Al registrarse todos arrancan con 100 PTS fijos
        let puntosIniciales = 100; 

        const nuevoNombre = document.getElementById("registroNombre")?.value.trim() || "Pro Gamer";
        
        motorGamer.usuariosBD[nuevoNumero] = {
            nombre: nuevoNombre,
            puntos: puntosIniciales,
            codigoPropio: miCodigoUnico,
            quienLoRefirio: codigoInvitadoUsado, // Se queda guardado "en secreto" para la compra
            primeraCompraRealizada: false
        };

        // Guardamos permanentemente en el disco del celular
        localStorage.setItem('usuariosGamerBD', JSON.stringify(motorGamer.usuariosBD));
        localStorage.setItem('jvx_sesion_activa', nuevoNumero);

        if (typeof motorGamer.actualizarProgresoGrafico === 'function') {
            motorGamer.actualizarProgresoGrafico(puntosIniciales);
        }
        if (typeof motorGamer.mostrarBloqueCanjes === 'function') {
            motorGamer.mostrarBloqueCanjes();
        }

        if (document.getElementById("perfilNombre")) document.getElementById("perfilNombre").innerText = nuevoNombre;
        if (document.getElementById("perfilPuntos")) document.getElementById("perfilPuntos").innerText = "100 PTS";
        if (document.getElementById("perfil-txt-codigo")) document.getElementById("perfil-txt-codigo").innerText = miCodigoUnico;

        const modalIng = document.getElementById("modalIngreso") || document.getElementById("modal-registro");
        if (modalIng) modalIng.style.display = "none";
        
        if (typeof mostrarAvisoGamer === 'function') {
            mostrarAvisoGamer("¡Registro exitoso! Recibiste 100 PTS de bienvenida. 🎁");
        }
    }
}
const motorGamer = {
    usuarioActivo: null,
            usuariosBD: {
            "925515732": { nombre: "Jhonatan rey", pin: "4321" },
            "925515731": { nombre: "Alex Mercer", pin: "8888" },
            "900000000": { nombre: "Pro Gamer", pin: "0000" }
        },
    
    actualizarProgresoGrafico: function(puntos) {
        let rangoActual = "SIN CLASIFICACIÓN";
        let rangoSiguiente = "BRONCE I 🛡️";
        let beneficio = "Ninguno (¡Llega a 300 PTS!)";
        let puntosMinimosNivel = 0;
        let puntosMaximosNivel = 300; 

        if (puntos >= 3500) {
            rangoActual = "LEYENDA ORO 👑";
            rangoSiguiente = "DIAMANTE MÁXIMO 💎";
            beneficio = "🚚 CONSULTAS C4 ILIMITADAS GRATIS";
            puntosMinimosNivel = 3500;
            puntosMaximosNivel = 3500; 
        } else if (puntos >= 300) {
            rangoActual = "BRONCE I 🛡️";
            rangoSiguiente = "LEYENDA ORO 👑";
            beneficio = "🎁 UNA RECARGA SORPRESA DE DIAMANTES";
            puntosMinimosNivel = 300;
            puntosMaximosNivel = 3500;
        }

        let porcentaje = 100;
        if (puntosMaximosNivel !== puntosMinimosNivel) {
            porcentaje = Math.floor(((puntos - puntosMinimosNivel) / (puntosMaximosNivel - puntosMinimosNivel)) * 100);
        }
        if (porcentaje > 100) porcentaje = 100;
        if (porcentaje < 0) porcentaje = 0;

        if(document.getElementById("rangoActualTxt")) document.getElementById("rangoActualTxt").innerText = rangoActual;
        if(document.getElementById("rangoSiguienteTxt")) document.getElementById("rangoSiguienteTxt").innerText = rangoSiguiente;
        if(document.getElementById("perfilBeneficioTxt")) document.getElementById("perfilBeneficioTxt").innerText = beneficio;
        if(document.getElementById("perfilPorcentaje")) document.getElementById("perfilPorcentaje").innerText = porcentaje + "%";
        if(document.getElementById("perfilBarraRelleno")) document.getElementById("perfilBarraRelleno").style.width = porcentaje + "%";
    },
    simularCompraGamer: function(montoSoles) {
        if (!this.usuarioActivo || !this.usuariosBD[this.usuarioActivo]) {
            this.mostrarAlerta("Debes iniciar sesión en tu cuenta para acumular puntos ⚠️", "error");
            return;
        }
        this.usuariosBD[this.usuarioActivo].puntos += montoSoles;
        const nuevosPuntos = this.usuariosBD[this.usuarioActivo].puntos;

        if(document.getElementById("perfilPuntos")) document.getElementById("perfilPuntos").innerText = nuevosPuntos + " PTS";
        this.actualizarProgresoGrafico(nuevosPuntos);
        this.mostrarBloqueCanjes(); 
        this.mostrarAlerta("¡Compra procesada! +" + montoSoles + " PTS añadidos 🛍️");
    },

    misionRecomendacion: function() {
        if (!this.usuarioActivo) { this.mostrarAlerta("Inicia sesión para hacer misiones ⚠️", "error"); return; }
        this.usuariosBD[this.usuarioActivo].puntos += 15;
        const nuevosPuntos = this.usuariosBD[this.usuarioActivo].puntos;
        if(document.getElementById("perfilPuntos")) document.getElementById("perfilPuntos").innerText = nuevosPuntos + " PTS";
        this.actualizarProgresoGrafico(nuevosPuntos);
        this.mostrarBloqueCanjes();
        this.mostrarAlerta("¡Gracias por tu recomendación! +15 PTS 🔥");
    },

    misionReferido: function() {
        if (!this.usuarioActivo) { this.mostrarAlerta("Inicia sesión para invitar amigos ⚠️", "error"); return; }
        const celAmigo = document.getElementById("inputReferido").value.trim();
        if (celAmigo === "" || celAmigo.length < 9) {
            this.mostrarAlerta("Ingresa un número de WhatsApp válido.", "error");
            return;
        }
        this.usuariosBD[this.usuarioActivo].puntos += 30;
        const nuevosPuntos = this.usuariosBD[this.usuarioActivo].puntos;
        if(document.getElementById("perfilPuntos")) document.getElementById("perfilPuntos").innerText = nuevosPuntos + " PTS";
        this.actualizarProgresoGrafico(nuevosPuntos);
        document.getElementById("inputReferido").value = ""; 
        this.mostrarBloqueCanjes();
        this.mostrarAlerta("¡Invitación registrada! +30 PTS obtenidos 👥");
    },

    mostrarBloqueCanjes: function() {
        let puntosActuales = 0;
        if (this.usuarioActivo && this.usuariosBD[this.usuarioActivo]) {
            puntosActuales = this.usuariosBD[this.usuarioActivo].puntos;
        }
        if(document.getElementById("centroCanjesMisPuntos")) {
            document.getElementById("centroCanjesMisPuntos").innerText = puntosActuales + " PTS";
        }

        const configuracionPremios = [
            { id: "ff100", costo: 100 },
            { id: "ff520", costo: 500 },
            { id: "c4", costo: 150 },
            { id: "net", costo: 1200 }
        ];

        configuracionPremios.forEach(premio => {
            const barra = document.getElementById("progresoCanje-" + premio.id);
            const boton = document.getElementById("btnCanje-" + premio.id);
            if(!barra || !boton) return;
            
            let pct = Math.floor((puntosActuales / premio.costo) * 100);
            if (pct > 100) pct = 100;
            barra.style.width = pct + "%";

            if (puntosActuales >= premio.costo) {
                boton.innerText = "CANJEAR PREMIO 🎁";
                boton.style.background = "#ff0044";
                boton.style.color = "#fff";
                boton.disabled = false;
            } else {
                const faltan = premio.costo - puntosActuales;
                boton.innerText = "FALTAN " + faltan + " PTS 🔒";
                boton.style.background = "#2a2a2e";
                boton.style.color = "#666";
                boton.disabled = true;
            }
        });

        if(document.getElementById("caja-canje")) {
            document.getElementById("caja-canje").style.setProperty('display', 'grid', 'important');
        }
    },
    ejecutarCanjePremio: function(costo, nombrePremio) {
        if (!this.usuarioActivo) return;
        const puntosActuales = this.usuariosBD[this.usuarioActivo].puntos;

        if (puntosActuales >= costo) {
            this.usuariosBD[this.usuarioActivo].puntos -= costo;
            const puntosRestantes = this.usuariosBD[this.usuarioActivo].puntos;

            if(document.getElementById("perfilPuntos")) document.getElementById("perfilPuntos").innerText = puntosRestantes + " PTS";
            if(document.getElementById("centroCanjesMisPuntos")) document.getElementById("centroCanjesMisPuntos").innerText = puntosRestantes + " PTS";
            this.actualizarProgresoGrafico(puntosRestantes);
            this.mostrarBloqueCanjes();
            this.mostrarAlerta("¡Canje Exitoso! Solicita tu " + nombrePremio + " al WhatsApp 🎁");
        }
    },

    mostrarAlerta: function(msg, est) {
        const panel = document.getElementById("notificacionGamer");
        const txt = document.getElementById("notificacionTexto");
        const ico = document.getElementById("notificacionIcono");
        if(!panel || !txt || !ico) return;
        
        txt.innerText = msg;
        if(est === "error") { panel.style.borderColor = "#ffcc00"; ico.innerText = "⚠️"; }
        else { panel.style.borderColor = "#ff0044"; ico.innerText = "🔥"; }
        panel.style.setProperty('display', 'flex', 'important');
        setTimeout(() => { panel.style.display = "none"; }, 4000);
    },
    
          loginUsuario: function() {
        const inputTel = document.getElementById("loginTelefono");
        const telefono = inputTel ? inputTel.value.trim() : "";
        const usuarioEncontrado = this.usuariosBD[telefono];

        if (usuarioEncontrado) {
            const inputPin = document.getElementById("loginPin");
            const pinIngresado = inputPin ? inputPin.value.trim() : "";

            if (usuarioEncontrado.pin === pinIngresado) {
                this.usuarioActivo = telefono;
                localStorage.setItem("usuario_actual", telefono);

                // --- MOSTRAR CAMPANA GRIS DE NOTIFICACIONES ---
                const campanaLogin = document.getElementById("jvx-notif-btn");
                if (campanaLogin) {
                    campanaLogin.style.setProperty("display", "grid", "important");
                    campanaLogin.style.filter = "grayscale(100%) opacity(0.6)";
                }

                // --- CARGAR ALERTAS DEL USUARIO ACTIVO ---
                const listaNotifLogin = document.getElementById("jvx-notif-list");
                if (listaNotifLogin) {
                    const alertas = JSON.parse(localStorage.getItem("jvx_notificaciones_bd") || "[]");
                    if (alertas.length === 0) {
                        listaNotifLogin.innerHTML = '<div style="color: #555; text-align: center; padding: 20px;">No tienes notificaciones hoy</div>';
                    } else {
                        listaNotifLogin.innerHTML = "";
                        alertas.forEach(alerta => {
                            listaNotifLogin.innerHTML += `<div style="padding: 10px; border-bottom: 1px solid #222; font-size: 13px;">${alerta.texto}</div>`;
                        });
                    }
                }

                // --- ACTUALIZAR INTERFAZ Y MOSTRAR BIENVENIDA ---
                if(document.getElementById("modalIngreso")) document.getElementById("modalIngreso").style.display = "none";
                this.mostrarBloqueCanjes();
                this.mostrarAlerta("¡Bienvenido de nuevo, " + usuarioEncontrado.nombre + "!");
                this.renderizar();

            } else {
                window.alert("❌ PIN de seguridad incorrecto. Acceso denegado.");
                return;
            }
        } else {
            window.alert("❌ El número de WhatsApp ingresado no está registrado.");
            return;
        }
    },  
        registrarUsuario: function() {
        // 1. Extraemos los campos del formulario de registro
        const nombreNuevo = document.getElementById("registroNombre")?.value.trim() || ""; 
        const telefonoNuevo = document.getElementById("registroTelefono")?.value.trim() || ""; 
        const inputReferido = document.getElementById("input-codigo-invitado");
        const codigoInvitadoUsado = inputReferido ? inputReferido.value.trim().toUpperCase() : "";

        if (nombreNuevo === "" || telefonoNuevo === "") {
            this.mostrarAlerta("⚠️ Por favor, ingresa tu nombre completo y número de WhatsApp.");
            return;
        }

        // 2. Buscamos de forma segura tu base de datos en el LocalStorage
        let claveBDReal = "usuariosGamerBD";
        for (let i = 0; i < localStorage.length; i++) {
            const clave = localStorage.key(i);
            if (clave && localStorage.getItem(clave).includes("puntos")) {
                claveBDReal = clave;
                break;
            }
        }
        
        if (!this.usuariosBD) {
    // this.usuariosBD = JSON.parse(localStorage.getItem("usuariosGamerBD")) || {};
}

        if (this.usuariosBD[telefonoNuevo]) {
            this.mostrarAlerta("❌ Este número de WhatsApp ya se encuentra registrado.");
            return;
        }

        // 3. Fabricamos el código de referido exclusivo para este nuevo usuario
        const ultimosCuatro = String(telefonoNuevo).slice(-4);
        const miCodigoUnico = "JVX-" + (ultimosCuatro || "7749");

        // 4. REGLA DE ORO DE JON VXNTS: ¿Ingresó el código de un amigo?
        let puntosIniciales = 100; // Puntos base de registro estándar
        
        if (codigoInvitadoUsado !== "") {
            // Si usó código, le sumamos los 20 PTS extra de golpe = 120 PTS en total
            puntosIniciales = 120;

            // Buscamos al amigo en la base de datos para inyectarle sus +150 PTS de una vez
            let amigoPremiado = false;
            for (let tel in this.usuariosBD) {
                if (this.usuariosBD[tel].codigoPropio === codigoInvitadoUsado) {
                    let puntosAmigo = parseInt(this.usuariosBD[tel].puntos) || 0;
                    this.usuariosBD[tel].puntos = puntosAmigo + 150;
                    amigoPremiado = true;
                    break;
                }
            }
        }

        // 5. Guardamos la ficha del nuevo usuario con sus puntos asignados
        this.usuariosBD[telefonoNuevo] = {
            nombre: nombreNuevo,
            puntos: puntosIniciales,
            nivel: "SIN CLASIFICACIÓN",
            codigoPropio: miCodigoUnico,
            quienLoRefirio: codigoInvitadoUsado,
            primeraCompraRealizada: true
        };
        
        this.usuarioActivo = telefonoNuevo;
        // --- MOSTRAR CAMPANA GRIS PARA NUEVO REGISTRO ---
        const campanaReg = document.getElementById("jvx-notif-btn");
        if (campanaReg) {
            campanaReg.style.setProperty("display", "grid", "important");
            campanaReg.style.filter = "grayscale(100%) opacity(0.6)";
        }
        const listaNotifReg = document.getElementById("jvx-notif-lista");
        if (listaNotifReg) {
            listaNotifReg.innerHTML = '<div style="color: #555; text-align: center; padding: 20px;">No tienes notificaciones pendientes.</div>';
        }
        // ----------------------------------------------
        // 6. Guardamos los cambios de forma permanente en el teléfono
        localStorage.setItem(claveBDReal, JSON.stringify(this.usuariosBD));

        // 7. Actualizamos las etiquetas de la pantalla en tiempo real
        if(document.getElementById("perfilNombre")) document.getElementById("perfilNombre").innerText = nombreNuevo;
        if(document.getElementById("perfilPuntos")) document.getElementById("perfilPuntos").innerText = puntosIniciales + " PTS";
        if(document.getElementById("perfil-txt-codigo")) document.getElementById("perfil-txt-codigo").innerText = miCodigoUnico;
        
        // Refrescamos tus barras y funciones nativas
        if(typeof this.actualizarProgresoGrafico === 'function') this.actualizarProgresoGrafico(puntosIniciales);
        if(typeof this.mostrarBloqueCanjes === 'function') this.mostrarBloqueCanjes();
        
        // Cerramos la ventana flotante de registro
        const modalReg = document.getElementById("modalRegistro") || document.getElementById("modal-registro");
        if(modalReg) modalReg.style.display = "none";

        // 8. Mensaje final épico de confirmación
        if (codigoInvitadoUsado !== "") {
            this.mostrarAlerta(`🎉 ¡Registro Exitoso, ${nombreNuevo}!\n\nActivaste el código de tu amigo. ¡Recibiste 100 PTS de registro + 20 PTS extra! Total: 120 PTS. 🎁`);
            setTimeout(() => { location.reload(); }, 600);
        } else {
            this.mostrarAlerta(`🎉 ¡Registro exitoso, ${nombreNuevo}! Recibiste 100 PTS base.`);
            setTimeout(() => { location.reload(); }, 600);
        }
    },

    cerrarSesion: function() {
        this.usuarioActivo = null;
        if(document.getElementById("perfilUsuarioMenu")) document.getElementById("perfilUsuarioMenu").style.display = "none";
        if(document.getElementById("botonIngresarMenu")) document.getElementById("botonIngresarMenu").style.display = "flex";
        this.mostrarBloqueCanjes(); 
        this.mostrarAlerta("Has cerrado sesión.");
    }
};
// Función global para copiar el código de referido al portapapeles del celular
function copiarCodigoReferidoJON() {
    const elCodigo = document.getElementById('perfil-txt-codigo');
    const codigoTexto = elCodigo ? elCodigo.innerText.trim() : "";

    if (codigoTexto === "JVX-CARGANDO" || codigoTexto === "JVX-INVITADO") {
        alert("⚠️ Registrate o inicia sesión para obtener tu código.");
        return;
    }

    navigator.clipboard.writeText(codigoTexto).then(() => {
        alert("📋 ¡Código copiado! Envíaselo a tus amigos para ganar 100 PTS.");
    }).catch(() => {
        alert("Tu código es: " + codigoTexto);
    });
}
// =================================================================
// MOTOR DE NOTIFICACIONES INMUNE POR LECTURA DE INTERFAZ - JON VXNTS
// =================================================================
const motorNotificaciones = {
    agregar: function(telefono, texto) {
        let notifBD = JSON.parse(localStorage.getItem('jvx_notificaciones_bd')) || {};
        if (!notifBD[telefono]) notifBD[telefono] = [];

        notifBD[telefono].push({
            id: "NT-" + Math.floor(1000 + Math.random() * 9000),
            mensaje: texto,
            fechaRegistro: Date.now()
        });

        localStorage.setItem('jvx_notificaciones_bd', JSON.stringify(notifBD));
        this.renderizar();
    },

    renderizar: function() {
        const btnCampana = document.getElementById("jvx-notif-btn");
        const badgeNotif = document.getElementById("jvx-notif-badge");
        const contenedorLista = document.getElementById("jvx-notif-lista");
        
        // TRUCO SUPREMO: Buscamos el nombre del usuario activo leyendo el texto real en la pantalla
        const txtBienvenida = document.body.innerText || "";
        const menuPerfilActivo = document.getElementById("perfilUsuarioMenu")?.style.display !== "none";
        const nombreEnMenu = document.getElementById("perfilNombre")?.innerText || "";
        
        // Detectamos si el aviso flotante o el menú dicen el nombre del cliente conectado
        let usuarioActivo = (typeof motorGamer !== 'undefined' && motorGamer.usuarioActivo) || localStorage.getItem('jvx_sesion_activa') || "";
        
        if (!usuarioActivo) {
            if (txtBienvenida.includes("¡Bienvenido de nuevo,") || nombreEnMenu !== "" || menuPerfilActivo) {
                // Si la pantalla muestra que está logueado, forzamos un identificador temporal para encender la campana
                usuarioActivo = nombreEnPerfil || "cliente_activo";
            }
        }

        // 🔒 SI NO HAY NINGUNA SEÑAL DE SESIÓN (VISITANTE REAL): Escondemos la campana
        if (!usuarioActivo || usuarioActivo === "" || txtBienvenida.includes("Cerrar Sesión") === false && !menuPerfilActivo && !txtBienvenida.includes("¡Bienvenido")) {
            if (btnCampana) btnCampana.style.display = "none";
            const panel = document.getElementById("jvx-notif-panel");
            if (panel) panel.style.display = "none";
            return;
        }

        // 🔓 SI DETECTAMOS AL CLIENTE: Hacemos aparecer la campanita al instante
        if (btnCampana) btnCampana.style.display = "inline-flex";

        let notifBD = JSON.parse(localStorage.getItem('jvx_notificaciones_bd')) || {};
        let misNotificaciones = notifBD[usuarioActivo] || notifBD["cliente_activa"] || [];

        const limite24Horas = 86400000; 
        const ahora = Date.now();

        misNotificaciones = misNotificaciones.filter(n => (ahora - n.fechaRegistro) < limite24Horas);

        if (!contenedorLista) return;
        contenedorLista.innerHTML = "";

        if (misNotificaciones.length === 0) {
            contenedorLista.innerHTML = `<div style="color: #555; text-align: center; padding: 20px;">No tienes notificaciones pendientes.</div>`;
            if (badgeNotif) badgeNotif.style.display = "none";
            return;
        }

        if (badgeNotif && document.getElementById("jvx-notif-panel")?.style.display !== "flex") {
            badgeNotif.style.display = "block";
        }

        misNotificaciones.reverse().forEach(n => {
            const item = document.createElement("div");
            item.style.cssText = "background: #111; border-left: 3px solid #ff0044; padding: 10px; border-radius: 4px; line-height: 1.4; box-sizing: border-box; text-align: left; margin-bottom: 4px;";
            item.innerHTML = `<div style="color:#fff;">${n.mensaje}</div><span style="font-size: 9px; color: #555; display: block; margin-top: 4px; text-align: right;">Bono Gamer</span>`;
            contenedorLista.appendChild(item);
        });
    },

    togglePanel: function() {
        const panel = document.getElementById("jvx-notif-panel");
        if (panel) {
            panel.style.display = (panel.style.display === "none") ? "flex" : "none";
            const badgeNotif = document.getElementById("jvx-notif-badge");
            if (badgeNotif) badgeNotif.style.display = "none";
        }
    }
};

// RELOJ DETECTOR: Escanea la interfaz del celular cada 300 milisegundos para actualizar la campana en vivo
setInterval(() => { 
    if (typeof motorNotificaciones !== 'undefined') motorNotificaciones.renderizar(); 
}, 300);
// Limpia y prepara el contenedor para recibir las alertas del cliente actual
function prepararNotificacionesCliente(telefono) {
    const lista = document.getElementById("jvx-notif-lista");
    if (lista) {
        lista.innerHTML = '<div style="color: #555; text-align: center; padding: 20px;">No tienes notificaciones pendientes.</div>';
    }
}
// FUNCIONES PARA CONTROLAR EL MODAL DE TÉRMINOS Y CONDICIONES (JON VXNTS)
function abrirTerminos() {
    var modal = document.getElementById('modalTerminos');
    if (modal) {
        modal.style.display = 'block';
    }
}

function cerrarTerminos() {
    var modal = document.getElementById('modalTerminos');
    if (modal) {
        modal.style.display = 'none';
    }
}
// FUNCIÓN PARA ENVIAR EL REPORTE DE SOPORTE A WHATSAPP – JON VXNTS
function enviarSoporteWhatsApp(event) {
    // Evita que la página se recargue por completo
    event.preventDefault();

    // Capturar lo que el cliente escribió en el cuadro de texto
    var descripcionProblema = document.getElementById('soporteProblema').value;

    // Tu número de WhatsApp de JON VXNTS en formato internacional (Perú)
    var numeroTelefono = "51925515732";

    // Diseñar el mensaje organizado con negritas para que lo leas rápido
    var mensajeCompleto = "¡Hola *JON VXNTS*! 👋\n\n" +
                          "Necesito soporte técnico para mi servicio. Aquí te dejo el resumen de lo sucedido:\n\n" +
                          "📌 *Problema:* " + descripcionProblema + "\n\n" +
                          "📷 _Ya tengo seleccionadas en mi galería la captura del error y mi comprobante de pago para enviártelas a continuación._";

    // Codificar el texto para que WhatsApp lo lea correctamente sin romper los espacios ni emojis
    var mensajeCodificado = encodeURIComponent(mensajeCompleto);

    // Armar el enlace oficial de la API de WhatsApp
    var enlaceWhatsApp = "https://whatsapp.com" + numeroTelefono + "&text=" + mensajeCodificado;

    // Cerrar la ventana flotante de soporte automáticamente
    document.getElementById('modalSoporte').style.display = 'none';

    // Limpiar los textos y reiniciar los botones a color rojo para la próxima vez
    document.getElementById('formSoporteJon').reset();
    document.getElementById('txtError').innerText = 'Seleccionar foto del error...';
    document.getElementById('btnError').innerText = '📁 BUSCAR';
    document.getElementById('btnError').style.backgroundColor = '#ff0055';
    document.getElementById('txtPago').innerText = 'Seleccionar comprobante...';
    document.getElementById('btnPago').innerText = '📁 BUSCAR';
    document.getElementById('btnPago').style.backgroundColor = '#ff0055';

    // Redirigir al cliente a la aplicación de WhatsApp al instante
    window.open(enlaceWhatsApp, '_blank');
}
// Funciones para Controlar el Modal de Testimonios
function abrirModalResena() {
    let overlay = document.getElementById('modalTestimonioVxnts');
    if (overlay) {
        overlay.style.setProperty('display', 'flex', 'important');
        document.body.style.overflow = 'hidden'; // Bloquea el scroll de fondo
    }
}

function cerrarModalResena() {
    let overlay = document.getElementById('modalTestimonioVxnts');
    if (overlay) {
        overlay.style.setProperty('display', 'none', 'important');
        document.body.style.removeProperty('overflow');
    }
}

// Lógica de calificación interactiva por estrellas
var calificacionSeleccionadaVxnts = 0;

document.addEventListener("DOMContentLoaded", function() {
    const estrellas = document.querySelectorAll('.estrella-vxnts');
    
    estrellas.forEach(estrella => {
        estrella.addEventListener('click', function() {
            calificacionSeleccionadaVxnts = parseInt(this.getAttribute('data-value'));
            
            // Pintamos las estrellas seleccionadas y apagamos el resto
            estrellas.forEach(est => {
                let val = parseInt(est.getAttribute('data-value'));
                if (val <= calificacionSeleccionadaVxnts) {
                    est.classList.add('activa');
                } else {
                    est.classList.remove('activa');
                }
            });
        });
    });
});

// Procesador simulado de envío (Para conectar luego a tu base de datos o alertas)
function procesarEnvioResena() {
    var nombre = document.getElementById('resenaNombre').value.trim();
    var msg = document.getElementById('resenaMensaje').value.trim();
    
    if (!nombre) {
        alert("Por favor, pon tu nombre o apodo.");
        return;
    }
    if (calificacionSeleccionadaVxnts === 0) {
        alert("Por favor, selecciona una calificación con las estrellas.");
        return;
    }
    
    // Alerta premium temporal de confirmación
    alert("¡Muchas gracias carnal! Tu testimonio ha sido enviado con éxito y pasará a revisión.");
    cerrarModalResena();
    
    // Limpiamos los campos para una nueva reseña
    document.getElementById('resenaNombre').value = '';
    document.getElementById('resenaMensaje').value = '';
    document.getElementById('resenaCategoria').selectedIndex = 0;
    document.querySelectorAll('.estrella-vxnts').forEach(e => e.classList.remove('activa'));
    calificacionSeleccionadaVxnts = 0;
}
// =======================================================
// LÓGICA DE CONTROL: RULETA DE LA FORTUNA GAMER (JON VXNTS)
// =======================================================
// =======================================================
// LÓGICA Y MONTAJE VIRTUAL DE LA RULETA (JON VXNTS)
// =======================================================

// 1. Funciones para controlar la visibilidad del modal de la estrella
function abrirModalRuleta() {
    const modal = document.getElementById('modal-ruleta');
    if (modal) {
        modal.style.setProperty('display', 'flex', 'important');
    }
    
    // Verificar si el usuario ya realizó su intento diario
    const verifGiro = localStorage.getItem('giroDiaVxnts');
    const fechaHoy = new Date().toDateString();
    
    if (verifGiro === fechaHoy) {
        

function cerrarModalRuleta() {
    const modal = document.getElementById('modal-ruleta');
    if (modal) {
        modal.style.setProperty('display', 'none', 'important');
    }
}

// 2. Procesamiento del giro y cálculo de probabilidades (80% Caparazones / 20% Premios)
function procesarGiroRuleta() {
    const btn = document.getElementById('btn-girar-ruleta');
    const rueda = document.getElementById('ruleta-circulo-giro');
    if (!btn || !rueda) return;
    
    btn.disabled = true;
    btn.innerText = '🎰 Girando suerte...';

    const suertePorcentaje = Math.floor(Math.random() * 100);
    let casillaGanadora = 1; 

    if (suertePorcentaje < 25) {
        casillaGanadora = 1; // Caparazón Rojo 1
    } else if (suertePorcentaje >= 25 && suertePorcentaje < 50) {
        casillaGanadora = 3; // Caparazón Rojo 2
    } else if (suertePorcentaje >= 50 && suertePorcentaje < 75) {
        casillaGanadora = 7; // Caparazón Rojo 3
    } else if (suertePorcentaje >= 75 && suertePorcentaje < 88) {
        casillaGanadora = 5; // Hongo Verde (Tiro Extra)
    } else if (suertePorcentaje >= 88 && suertePorcentaje < 94) {
        casillaGanadora = 4; // Cae directo en HBO Max
    } else {
        casillaGanadora = 2; // Premio Mayor: Netflix (2% de probabilidad exacta)
    }

    // Calcular grados exactos centrado en la flecha superior
    const gradosCasilla = (casillaGanadora - 1) * 45 + 22.5;
    const anguloFinalGiro = 2160 + (360 - gradosCasilla);

    rueda.style.transform = `rotate(${anguloFinalGiro}deg)`;

    setTimeout(() => {
        let mensajeAlerta = "";
        
        switch(casillaGanadora) {
            case 1: case 3: case 7:
                mensajeAlerta = "🐢 ¡Te golpeó un Caparazón Rojo! Te frenaron la carrera por hoy. ¡Sigue intentándolo mañana!";
                localStorage.setItem('giroDiaVxnts', new Date().toDateString());
                btn.innerText = '🔒 Vuelve Mañana';
                btn.style.background = '#27272a';
                btn.style.color = '#71717a';
                break;
                
            case 5: 
                mensajeAlerta = "🍄 ¡1-UP! El champiñón verde te da otra oportunidad. ¡Tienes un tiro adicional ahora mismo!";
                btn.disabled = false;
                btn.innerText = '🎰 ¡Girar de Nuevo!';
                rueda.style.transition = 'none';
                rueda.style.transform = 'rotate(0deg)';
                setTimeout(() => {
                    rueda.style.transition = 'transform 4.5s cubic-bezier(0.15, 0.75, 0.1, 1)';
                }, 50);
                break;

            case 2:
                mensajeAlerta = "🎉 ¡BRUTAL! Te acabas de ganar 1 PERFIL DE NETFLIX (1 Mes). Toma una captura completa de esta pantalla y envíala al Soporte por WhatsApp para reclamar tus accesos. 🍿";
                localStorage.setItem('giroDiaVxnts', new Date().toDateString());
                btn.innerText = '🔒 Vuelve Mañana';
                break;
            case 4:
                mensajeAlerta = "🎬 ¡Felicidades crack! Ganaste 1 PERFIL DE HBO MAX (1 Mes). Reclámalo enviando tu captura al WhatsApp de soporte.";
                localStorage.setItem('giroDiaVxnts', new Date().toDateString());
                btn.innerText = '🔒 Vuelve Mañana';
                break;
        }

        alert(mensajeAlerta);
    }, 4500);
}

// 3. Crear inyección del modal de forma automática al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    const contenedorVirtual = document.createElement('div');
    contenedorVirtual.id = 'modal-ruleta';
    contenedorVirtual.style.cssText = 'display: none; position: fixed !important; top: 0; left: 0; width: 100vw !important; height: 100vh !important; background: rgba(0, 0, 0, 0.9) !important; justify-content: center; align-items: center; z-index: 999999999 !important; padding: 15px; box-sizing: border-box;';
    
    contenedorVirtual.innerHTML = `
        <div style="background: #0d0d11 !important; border: 2px solid #ffcc00 !important; border-radius: 16px; padding: 30px 20px; text-align: center; width: 100%; max-width: 380px; position: relative; box-shadow: 0 0 30px rgba(255, 204, 0, 0.25) !important; font-family: sans-serif;">
            <span style="position: absolute; top: 12px; right: 18px; font-size: 32px; cursor: pointer; color: #71717a; user-select: none;" onclick="cerrarModalRuleta()">&times;</span>
            <h2 style="color: #ffffff; margin-bottom: 5px; font-size: 22px;">🌟 Ruleta de la Fortuna</h2>
            <p style="color: #888888; font-size: 13px; margin-bottom: 20px;">¡Evita el Caparazón Rojo y gana pantallas premium!</p>
            <div style="position: relative; width: 280px; height: 280px; margin: 0 auto 25px auto;">
                <div style="position: absolute; top: -18px; left: 50%; transform: translateX(-50%); color: #ffcc00; font-size: 28px; z-index: 100; filter: drop-shadow(0 0 8px #ff9900);">▼</div>
                <div id="ruleta-circulo-giro" style="width: 100%; height: 100%; border-radius: 50%; border: 6px solid #1a1a24; position: relative; overflow: hidden; transition: transform 4.5s cubic-bezier(0.15, 0.75, 0.1, 1); background: conic-gradient(#111115 0deg 45deg, #222530 45deg 90deg, #111115 90deg 135deg, #222530 135deg 180deg, #111115 180deg 225deg, #222530 225deg 270deg, #111115 270deg 315deg, #222530 315deg 360deg); box-shadow: inset 0 0 20px rgba(0,0,0,0.6);">
                    <div style="position: absolute; color: #ffffff; font-size: 11px; font-weight: bold; width: 100px; text-align: center; top: 25px; left: 90px; transform: rotate(22.5deg);">🐢 Caparazón</div>
                    <div style="position: absolute; color: #ff4a4a; font-size: 11px; font-weight: bold; width: 100px; text-align: center; top: 50px; left: 145px; transform: rotate(67.5deg);">🍿 Netflix</div>
                    <div style="position: absolute; color: #ffffff; font-size: 11px; font-weight: bold; width: 100px; text-align: center; top: 115px; left: 165px; transform: rotate(112.5deg);">🐢 Caparazón</div>
                    <div style="position: absolute; color: #4aa3ff; font-size: 11px; font-weight: bold; width: 100px; text-align: center; top: 170px; left: 145px; transform: rotate(157.5deg);">🎬 HBO Max</div>
                    <div style="position: absolute; color: #4aff4a; font-size: 11px; font-weight: bold; width: 100px; text-align: center; top: 200px; left: 90px; transform: rotate(202.5deg);">🍄 1-UP Extra</div>
                    <div style="position: absolute; color: #ffcc00; font-size: 11px; font-weight: bold; width: 100px; text-align: center; top: 170px; left: 35px; transform: rotate(247.5deg);">👑 Prime V.</div>
                    <div style="position: absolute; color: #ffffff; font-size: 11px; font-weight: bold; width: 100px; text-align: center; top: 115px; left: 15px; transform: rotate(292.5deg);">🐢 Caparazón</div>
                    <div style="position: absolute; color: #ff9900; font-size: 11px; font-weight: bold; width: 100px; text-align: center; top: 50px; left: 35px; transform: rotate(337.5deg);">🧡 Crunchy</div>
                </div>
            </div>
            <button id="btn-girar-ruleta" onclick="procesarGiroRuleta()" style="background: linear-gradient(135deg, #ffcc00, #ff9900) !important; border: none !important; color: #000000 !important; padding: 14px; font-weight: bold; font-size: 16px; border-radius: 8px; cursor: pointer; width: 100%; box-shadow: 0 4px 15px rgba(255, 204, 0, 0.3) !important; transition: transform 0.2s; user-select: none;">🎰 ¡Girar Gratis!</button>
        </div>
    `;
    document.body.appendChild(contenedorVirtual);
});
function enviarSoporteJonVxntsNativo(event) {
    event.preventDefault();
    let campoTexto = document.getElementById('soporteProblemaTxt');
    if (!campoTexto) return;
    
    let mensajeGamer = campoTexto.value;
    let textoEncriptado = encodeURIComponent('🛠️ ¡Hola JON VXNTS! Necesito ayuda.\n👤 Problema: ' + mensajeGamer);
    
    window.open('https://whatsapp.com' + textoEncriptado, '_blank');
}
document.addEventListener("DOMContentLoaded", function () {
    const contenedorGrid = document.getElementById("contenedor-grid-vendidas");
    const seccionVendidas = document.getElementById("seccion-vendidas");
    const contadorBadge = document.getElementById("contador-badge");
    
    if (typeof jvxStock !== 'undefined' && contenedorGrid) {
        let contadorVisibles = 0;
        const ahora = new Date();
        const veinticuatroHoras = 24 * 60 * 60 * 1000;

        jvxStock.forEach(cuenta => {
            if (cuenta.vendidaEl) {
                const fechaVenta = new Date(cuenta.vendidaEl.replace(/-/g, "/"));
                const diferenciaTiempo = ahora - fechaVenta;

                // Sigue dentro del rango de 24h
                if (diferenciaTiempo < veinticuatroHoras) {
                    const tarjetaHTML = `
                        <div class="tarjeta-vendida" style="text-align: center; margin-bottom: 5px;">
                            <img src="${cuenta.img}" style="max-width: 100%; border-radius: 8px;" alt="${cuenta.desc}">
                            <div style="color: #8a8a8a; font-size: 12px; font-weight: bold; margin-top: 8px; font-family: sans-serif;">
                                ${cuenta.desc}
                            </div>
                        </div>
                    `;
                    contenedorGrid.insertAdjacentHTML('beforeend', tarjetaHTML);
                    contadorVisibles++;
                }
            }
        });

        // Si hay cuentas, actualizamos el botón y lo mostramos
        if (contadorVisibles > 0) {
            if (contadorBadge) contadorBadge.innerText = contadorVisibles;
            if (seccionVendidas) seccionVendidas.style.display = "block";
        }
    }

    // FUNCIÓN GLOBAL PARA ABRIR Y CERRAR EL BOTÓN
    window.toggleCuentasVendidas = function() {
        const cajaDesplegable = document.getElementById("contenedor-desplegable-vendidas");
        if (cajaDesplegable) {
            if (cajaDesplegable.style.display === "none") {
                cajaDesplegable.style.display = "block";
            } else {
                cajaDesplegable.style.display = "none";
            }
        }
    };
});
function mostrarOtros() {
    // 1. Oculta todos los bloques de las otras categorías primero
    document.querySelectorAll('.bloque-categoria, #caja-streaming, #caja-ofertas, #caja-servicios').forEach(bloque => {
        bloque.style.display = 'none';
    });

    // 2. Muestra tu nueva grilla de celulares abajo
    const cajaOtros = document.getElementById('caja-otros');
    if (cajaOtros) {
        cajaOtros.style.setProperty('display', 'grid', 'important');
    }
}
function toggleMenuCelulares() {
    const menu = document.getElementById('menu-opciones-celulares');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function abrirModalCelulares(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'let juegoModuloActivo = null;
let bucleRenderRuletaReal = null;

window.abrirHubArcade_Vxnts = function() {
    // Forzar apertura sobreescribiendo bloqueos previos del CSS
    const modal = document.getElementById('miModalRuletaUnificada');
    if(modal) {
        modal.style.setProperty('display', 'flex', 'important');
    }
    window.volverAlMenúArcade();
};

window.cerrarHubU_Vxnts = function() {
    // Si estás dentro de un juego, actúa primero como botón para volver atrás
    if(juegoModuloActivo !== null) {
        window.volverAlMenúArcade();
    } else {
        // Cierre definitivo e inmediato del modal de la estrella
        const modal = document.getElementById('miModalRuletaUnificada');
        if(modal) {
            modal.style.setProperty('display', 'none', 'important');
        }
    }
};

window.volverAlMenúArcade = function() {
    if(bucleRenderRuletaReal) cancelAnimationFrame(bucleRenderRuletaReal);
    juegoModuloActivo = null;
    
    // Regresa el icono a su estado de "X" de cierre
    const btnCerrar = document.getElementById('btnCerrarHubGamer');
    if(btnCerrar) {
        btnCerrar.innerHTML = "&times;";
        btnCerrar.style.fontSize = "34px";
    }
    
    document.getElementById('headerHubVxnts').style.display = 'block';
    document.getElementById('view-menu-arcade').style.display = 'grid';
    document.getElementById('view-game-sandbox').style.display = 'none';
    document.getElementById('view-game-sandbox').innerHTML = '';
};

window.lanzarJuegoModulo = function(tipoJuego) {
    const loader = document.getElementById('loaderGamerVxnts');
    const txtLoader = document.getElementById('loader-text-vxnts');
    
    if(loader) loader.style.display = 'flex';
    if(txtLoader) txtLoader.innerText = "ESTABILIZANDO ENTRADA...";

    setTimeout(() => {
        if(txtLoader) txtLoader.innerText = "CARGANDO PROTOCOLOS DE JUEGO...";
        
        setTimeout(() => {
            inyectarCodigoDeJuego(tipoJuego);
            if(loader) loader.style.display = 'none';
            juegoModuloActivo = tipoJuego;
            
            // Cambiar la "X" por flecha atrás con espaciado balanceado
            const btnCerrar = document.getElementById('btnCerrarHubGamer');
            if(btnCerrar) {
                btnCerrar.innerHTML = "⬅️";
                btnCerrar.style.fontSize = "22px";
            }
        }, 1000);
    }, 800);
};

// Recuerda mantener abajo la función "inyectarCodigoDeJuego" con las lógicas internas que ya tienes armadas.
; 
        document.getElementById('menu-opciones-celulares').style.display = 'none';
    }
}

function cerrarModalCelulares(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

const catalogoCelulares = {
    android: [
        { nombre: "Samsung Galaxy S24 Ultra 🔥", precio: "S/ 3,490.00", img: "samsung.webp" },
        { nombre: "Xiaomi 14 Ultra Max 🚀", precio: "S/ 2,990.00", img: "xiaomi.webp" },
        { nombre: "RealMe GT 5 Pro ⚡", precio: "S/ 1,850.00", img: "realme.webp" }
    ],
    iphone: [
        { nombre: "iPhone 15 Pro Max 👑", precio: "S/ 4,200.00", img: "iphone15.webp" },
        { nombre: "iPhone 14 Pro Max ✨", precio: "S/ 3,350.00", img: "iphone14.webp" },
        { nombre: "iPhone 13 Pro 128GB 🍏", precio: "S/ 2,400.00", img: "iphone13.webp" }
    ]
};

let indiceAndroid = 0;
let indiceIphone = 0;

function navegarCelular(tipo, direccion) {
    const lista = catalogoCelulares[tipo];
    if (tipo === 'android') {
        indiceAndroid = (indiceAndroid + direccion + lista.length) % lista.length;
        actualizarVistaCelular('android', indiceAndroid);
    } else {
        indiceIphone = (indiceIphone + direccion + lista.length) % lista.length;
        actualizarVistaCelular('iphone', indiceIphone);
    }
}

function actualizarVistaCelular(tipo, indice) {
    const celular = catalogoCelulares[tipo][indice];
    const total = catalogoCelulares[tipo].length;
    document.getElementById(`img-${tipo}`).src = celular.img;
    document.getElementById(`nombre-${tipo}`).innerText = celular.nombre;
    document.getElementById(`precio-${tipo}`).innerText = celular.precio;
    document.getElementById(`contador-${tipo}`).innerText = `${indice + 1}/${total}`;
}

function agregarCelularAlCarrito(tipo) {
    const indice = tipo === 'android' ? indiceAndroid : indiceIphone;
    const cel = catalogoCelulares[tipo][indice];
    alert(`¡Añadido al carrito: ${cel.nombre} por ${cel.precio}!`);
}

function cotizarCelularPersonalizado(tipo) {
    const presupuesto = document.getElementById(`presupuesto-${tipo}`).value;
    const detalles = document.getElementById(`detalles-${tipo}`).value;
    if(!presupuesto || !detalles) {
        alert("Por favor rellena tu presupuesto y el celular ideal para enviarte la cotización.");
        return;
    }
    alert(`Cotización enviada para tu ${tipo.toUpperCase()} ideal con presupuesto de S/ ${presupuesto}. ¡Te contactaremos!`);
}
// ========================================================
// 📱 MOTOR DE INVENTARIO Y NAVEGACIÓN PARA CELULARES
// ========================================================

// 1. Índices manuales para controlar la posición del carrusel
window.jvxAndroidIdx = 0;
window.jvxIphoneIdx = 0;

// 2. Inventario oficial de tus teléfonos (Aquí puedes agregar más modelos en el futuro)
window.jvxAndroidStock = [
    { desc: "Samsung Galaxy S24 Ultra 🔥", precio: "S/ 3,490.00", img: "samsung.webp" },
    { desc: "Xiaomi 14 Ultra Max 🚀", precio: "S/ 2,990.00", img: "xiaomi.webp" },
    { desc: "RealMe GT 5 Pro ⚡", precio: "S/ 1,850.00", img: "realme.webp" }
];

window.jvxIphoneStock = [
    { desc: "iPhone 15 Pro Max 👑", precio: "S/ 4,200.00", img: "iphone15.webp" },
    { desc: "iPhone 14 Pro Max ✨", precio: "S/ 3,350.00", img: "iphone14.webp" },
    { desc: "iPhone 13 Pro 128GB 🍏", precio: "S/ 2,400.00", img: "iphone13.webp" }
];

// 3. Función interactiva de las flechas que actualiza la pantalla
window.navegarCelular = function(tipo, direccion) {
    if (tipo === 'android') {
        window.jvxAndroidIdx = (window.jvxAndroidIdx + direccion + window.jvxAndroidStock.length) % window.jvxAndroidStock.length;
        window.actualizarPantallaCelular('android', window.jvxAndroidIdx);
    } else {
        window.jvxIphoneIdx = (window.jvxIphoneIdx + direccion + window.jvxIphoneStock.length) % window.jvxIphoneStock.length;
        window.actualizarPantallaCelular('iphone', window.jvxIphoneIdx);
    }
};

// 4. Inyector dinámico que actualiza imágenes, textos y contadores en el HTML
window.actualizarPantallaCelular = function(tipo, idx) {
    const stock = tipo === 'android' ? window.jvxAndroidStock : window.jvxIphoneStock;
    const item = stock[idx];
    
    const cImg = document.getElementById(`img-${tipo}`);
    const cDesc = document.getElementById(`nombre-${tipo}`);
    const cPrecio = document.getElementById(`precio-${tipo}`);
    const cMarcador = document.getElementById(`contador-${tipo}`);
    
    if (cImg && cDesc && cPrecio && cMarcador) {
        cImg.src = item.img;
        cDesc.innerText = item.desc;
        cPrecio.innerText = item.precio;
        cMarcador.innerText = (idx + 1) + " / " + stock.length;
    }
};
// 5. Función que procesa el botón de Añadir y dispara tu notificación nativa
window.procesarCompraCelular = function(tipo) {
    const idx = tipo === 'android' ? window.jvxAndroidIdx : window.jvxIphoneIdx;
    const stock = tipo === 'android' ? window.jvxAndroidStock : window.jvxIphoneStock;
    const sel = stock[idx];
    
    // Ejecuta tu guardado original convirtiendo el precio a número
    if (typeof window.agregarAlCarrito === "function") {
        window.agregarAlCarrito(sel.desc, parseFloat(sel.precio.replace("S/ ", "").replace(",", "")));
    }
    
    // Dispara tu barra de notificación verde premium aprobada abajo
    if (typeof window.mostrarAlertaGamerToast === "function") {
        window.mostrarAlertaGamerToast("🛒 " + sel.desc + " añadida.", "#00e575");
    }
    
    // Cierra el modal de forma automática al añadir
    const modal = document.getElementById(`modal-${tipo}`);
    if (modal) {
        modal.style.setProperty('display', 'none', 'important');
    }
    document.body.style.overflow = 'auto';
};

// 6. Cotizador estructurado para WhatsApp adaptado a celulares
window.cotizarCelularPersonalizadoJon = function(tipo) {
    let pres = document.getElementById(`jvx-input-presupuesto-${tipo}`)?.value.trim();
    let desc = document.getElementById(`jvx-input-deseo-desc-${tipo}`)?.value.trim();
    
    if (!pres || !desc) { 
        alert("⚠️ Completa los campos."); 
        return; 
    }
    
    // Cambiamos el mensaje para que en WhatsApp te llegue limpio indicando el tipo de móvil
    let msg = '🔥 *JON VXNTS*! ENCARGO DE CELULAR ' + tipo.toUpperCase() + ' 📱\n- *Presupuesto:* S/ ' + pres + '\n- *Detalles:* ' + desc;
    window.location.href = 'whatsapp://send?phone=51925515733&text=' + encodeURIComponent(msg);
};
// Función encargada de abrir el modal de divisas centrado
function abrirModalCambio() {
  const modalDivisas = document.getElementById('modal-detalle-cambio');
  if (modalDivisas) {
    modalDivisas.style.display = 'flex'; // Activa el centrado vertical únicamente al hacer clic
    document.body.style.overflow = 'hidden'; // Opcional: bloquea el scroll de la página de fondo
  }
}

// Función encargada de cerrar el modal de divisas
function cerrarModalCambio() {
  const modalDivisas = document.getElementById('modal-detalle-cambio');
  if (modalDivisas) {
    modalDivisas.style.display = 'none'; // Se oculta por completo al presionar la 'X'
    document.body.style.overflow = 'auto'; // Devuelve el scroll a la página principal
  }
}
function jvxFiltrar(categoria) {
    var botones = document.querySelectorAll('.btn-filtro');
    botones.forEach(function(btn) { btn.classList.remove('active'); });
    if (event && event.currentTarget) { event.currentTarget.classList.add('active'); }

    var items = document.querySelectorAll('.item-galeria');
    items.forEach(function(item) {
        if (categoria === 'todos' || item.classList.contains(categoria)) {
            // ¡CORRECCIÓN CLAVE! Mantiene el flujo horizontal original de tu carrusel
            item.style.display = ''; 
        } else {
            item.style.display = 'none';
        }
    });
}
        