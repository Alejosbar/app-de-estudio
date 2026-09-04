// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DATOS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const tareas = [
    { id: 1, materia: "Matemáticas", titulo: "Ejercicios de matematicas ", descripcion: "Traer resuelto los ejercicios de funciones trigonometricas", entrega: "14 agosto 2026", estado: "entregada", profesor: "Profesora gema garavito" },
    { id: 2, materia: "lengua castellana", titulo: "literatura medieval", descripcion: "Ensayo de 3 páginas con bibliografía de la literatura medieval", entrega: "25 septiembre 2026", estado: "pendiente", profesor: "Profesora zulay riveros" },
    { id: 3, materia: "quimica", titulo: "Informe de laboratorio experimento de  la sal", descripcion: "Completar el informe del experimento realizado en el laboratorio", entrega: "15 ogosto 2026", estado: "vencida", profesor: "Profesor carlos acosta" },
    { id: 4, materia: "filosofia", titulo: "Línea de tiempo: Revolución Industrial", descripcion: "Elaborar línea de tiempo con al menos 15 eventos clave.", entrega: "19 ogosto 2026", estado: "pendiente", profesor: "Profesora carolina roberto" },
    { id: 5, materia: "Educación Física", titulo: "Registro de actividad semanal", descripcion: "Subir al portal el diario de actividad física de la semana.", entrega: "16 agosto 2026", estado: "pendiente", profesor: "Profesor sergio martinez" },
];

const observaciones = [
    { id: 1, fecha: "15 jul 2026", tipo: "positiva", materia: "Matemáticas", profesor: "Profesora gema garavito", texto: "Oscar demostró excelente comprensión durante la clase. Ayudó a sus compañeros a entender los conceptos. Se recomienda participar mas matemáticas" },
    { id: 2, fecha: "10 jul 2026", tipo: "negativa", materia: "Filosofia", profesor: "Profesora carolina roberto", texto: "el estudiante no presentó el trabajo de clase en la fecha acordada. Se solicita ponerse al día antes del 22 de julio para no la nota de esa actividad" },
    { id: 3, fecha: "8 jul 2026", tipo: "neutra", materia: "Convivencial", profesor: "Psicóloga nora balsero", texto: "Se realizó sesión de orientación vocacional. el estudiante mostró interés en la orientacion Se agenda próxima sesión para el 5 de agosto." },
    { id: 4, fecha: "3 jul 2026", tipo: "positiva", materia: "Lengua", profesor: "Profesora zulay riveros", texto: "Presentación oral sobresaliente. La lectura expresiva y la argumentación fueron notables. Se otorga reconocimiento por mejor presentación del trimestre." },
];

const calificaciones = [
    { materia: "Matemáticas", nota: 8.5, promedio: 7.2, tendencia: "up" },
    { materia: "Lengua", nota: 9.2, promedio: 8.0, tendencia: "up" },
    { materia: "Ciencias", nota: 7.8, promedio: 7.5, tendencia: "flat" },
    { materia: "Historia", nota: 6.4, promedio: 7.0, tendencia: "down" },
    { materia: "Ed. Física", nota: 9.5, promedio: 8.8, tendencia: "up" },
    { materia: "Inglés", nota: 8.0, promedio: 7.6, tendencia: "flat" },
    { materia: "Arte", nota: 9.0, promedio: 8.2, tendencia: "up" },
];

const historialNotas = [
    { mes: "Feb", promedio: 7.4 },
    { mes: "Mar", promedio: 7.8 },
    { mes: "Abr", promedio: 7.5 },
    { mes: "May", promedio: 8.0 },
    { mes: "Jun", promedio: 8.3 },
    { mes: "Jul", promedio: 8.2 },
];

const contactosEmergencia = [
    { id: 1, nombre: "oscar gonzales", relacion: "estudiante", telefono: "+57 310 3292572", email: "oscargonzale098@gmail.com", principal: true },
    { id: 2, nombre: "carlos arturo gonzales porras",relacion: "Padre", telefono: "+57 3169756838", email: "carlosporras900@gmail.com", principal: false },
    { id: 3, nombre: "mariela barbosa leon", relacion: "madre", telefono: "+57 3170894900", email: "marielabarbosa8899@gmail.com", principal: false },
];

const eventos = [
    { id: 1, tipo: "evento", titulo: "Festival de la hortaliza 2026", fecha: "16 agosto 2026", descripcion: "El colegio celebra su festival de la hortaliza anual con exposiciones, danzas y teatro estudiantil.", imagen: "./img/festival de la hortaliza 2026.jpg" },
    { id: 2, tipo: "noticia", titulo: "Nuestros estudiantes ganan el festival de la hortaliza", fecha: "14 agosto 2026", descripcion: "los estudiantes del colegio obtuvo el tercer lugar en la feria de la hortaliza 2026.", imagen: "./img/hortaliza.jpg" },
    { id: 3, tipo: "aviso", titulo: "Cambio en horario de clases – Semana del 29 al 26 jul", fecha: "29 agosto 2026", descripcion: "Por autorizacion de coordinacion las clases de la mañana iniciarán a las 7:00 AM durante esa semana.", imagen: "./img/cambio de clases metacrack.jpeg" },
    { id: 4, tipo: "noticia", titulo: "Apertura de inscripciones para intercolegiados 2026", fecha: "5 jul 2026", descripcion: "Ya están disponibles los cupos para los intercolegiados de la institucion.", imagen: "./img/apertura intercolegiados.jpg" },
];

const fechasImportantes = [
    { fecha: "19 julio 2026", titulo: "funciones basicas de html", tipo: "tarea", urgente: false },
    { fecha: "22 julio 2026", titulo: "Examen de funciones trigonometricas ", tipo: "examen", urgente: true },
    { fecha: "25 julio 2026", titulo: "sustentacion del taller de laliteratura medieval", tipo: "examen", urgente: true },
    { fecha: "30 julio 2026", titulo: "Línea de tiempo de la colonizacion", tipo: "tarea", urgente: false },
    { fecha: "31 julio 2026", titulo: "Cierre inscripciones de intercolegiados", tipo: "institucional", urgente: false },
    { fecha: "14 agosto 2026", titulo: "Festival de la hortaliza 2026", tipo: "evento", urgente: false },
    { fecha: "15 agosto 2026", titulo: "Exámenes de Mitad de Periodo", tipo: "examen", urgente: false },
    { fecha: "20 agosto 2026", titulo: "Entrega boletín 3 periodo", tipo: "institucional", urgente: false },
    { fecha: "5 septiembre 2026", titulo: "Inicio vacaciones final de año", tipo: "institucional", urgente: false },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  HELPERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function getPromedioGeneral() {
    return calificaciones.reduce((s, c) => s + c.nota, 0) / calificaciones.length;
}

function getNotaColorClass(nota) {
    if (nota >= 9) return 'text-success';
    if (nota >= 7) return 'text-primary';
    if (nota >= 6) return 'text-warning';
    return 'text-danger';
}

function getNotaBadge(nota) {
    if (nota >= 9) return 'excelente';
    if (nota >= 7) return 'buena';
    if (nota >= 6) return 'regular';
    return 'mala';
}

function getEstadoBadge(estado) {
    const map = {
        'entregada': '<span class="estado-tarea entregada"><i class="fas fa-check-circle"></i> Entregada</span>',
        'pendiente': '<span class="estado-tarea pendiente"><i class="fas fa-clock"></i> Pendiente</span>',
        'vencida': '<span class="estado-tarea vencida"><i class="fas fa-exclamation-circle"></i> Vencida</span>',
    };
    return map[estado] || estado;
}

function getTipoBadge(tipo) {
    const map = {
        'examen': 'stat-badge danger',
        'tarea': 'stat-badge warning',
        'evento': 'stat-badge info',
        'institucional': 'stat-badge primary',
    };
    return map[tipo] || 'stat-badge neutral';
}

function getTipoLabel(tipo) {
    const map = {
        'examen': 'Examen',
        'tarea': 'Tarea',
        'evento': 'Evento',
        'institucional': 'Institucional',
    };
    return map[tipo] || tipo;
}

function getDotClass(tipo) {
    const map = {
        'examen': 'dot-examen',
        'tarea': 'dot-tarea',
        'evento': 'dot-evento',
        'institucional': 'dot-institucional',
    };
    return map[tipo] || 'dot-institucional';
}

function getTendenciaIcon(tendencia) {
    const map = {
        'up': '<i class="fas fa-arrow-up text-success" style="font-size: 0.7rem;"></i>',
        'down': '<i class="fas fa-arrow-down text-danger" style="font-size: 0.7rem;"></i>',
        'flat': '<i class="fas fa-minus text-secondary" style="font-size: 0.7rem;"></i>',
    };
    return map[tendencia] || '';
}

function getObservacionTipo(tipo) {
    const map = {
        'positiva': { bg: 'bg-success bg-opacity-10', border: 'border-success', text: 'text-success', label: 'Positiva' },
        'negativa': { bg: 'bg-danger bg-opacity-10', border: 'border-danger', text: 'text-danger', label: 'Negativa' },
        'neutra': { bg: 'bg-secondary bg-opacity-10', border: 'border-secondary', text: 'text-secondary', label: 'Neutra' },
    };
    return map[tipo] || map['neutra'];
}

function getEventoTipo(tipo) {
    const map = {
        'evento': 'stat-badge info',
        'noticia': 'stat-badge primary',
        'aviso': 'stat-badge warning',
    };
    return map[tipo] || 'stat-badge neutral';
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  RENDER VIEWS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function renderDashboard() {
    const pendientes = tareas.filter(t => t.estado === 'pendiente').length;
    const vencidas = tareas.filter(t => t.estado === 'vencida').length;
    const promedio = getPromedioGeneral();
    const aprobando = promedio >= 6;

    let html = `
        <div class="row g-4">
            <!-- Welcome -->
            <div class="col-12">
                <div class="card border-0 rounded-4 text-white overflow-hidden" style="background: var(--primary-blue);">
                    <div class="card-body p-4 position-relative" style="z-index: 1;">
                        <p class="text-blue-200 small fw-medium mb-1">Viernes, 18 de julio 2026</p>
                        <h2 class="font-display h4 fw-semibold mb-1">Bienvenido Oscar gonzales 👋</h2>
                        <p class="text-blue-100 small mb-3">Grado 11° · Jornada unica · I.E.D instituto parcelas</p>
                        <div class="d-flex gap-3 flex-wrap">
                            <div class="bg-white bg-opacity-10 rounded-3 px-3 py-2 text-center" style="backdrop-filter: blur(4px);">
                                <div class="font-mono h5 fw-medium mb-0">${promedio.toFixed(1)}</div>
                                <div class="text-blue-200 small" style="font-size: 0.65rem;">Promedio general</div>
                            </div>
                            <div class="bg-white bg-opacity-10 rounded-3 px-3 py-2 text-center" style="backdrop-filter: blur(4px);">
                                <div class="font-mono h5 fw-medium mb-0 text-warning">${pendientes}</div>
                                <div class="text-blue-200 small" style="font-size: 0.65rem;">Tareas pendientes</div>
                            </div>
                            <div class="bg-white bg-opacity-10 rounded-3 px-3 py-2 text-center" style="backdrop-filter: blur(4px);">
                                <div class="font-mono h5 fw-medium mb-0 ${aprobando ? 'text-success' : 'text-danger'}">${aprobando ? 'SÍ' : 'NO'}</div>
                                <div class="text-blue-200 small" style="font-size: 0.65rem;">Aprobando período</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;

    if (vencidas > 0) {
        html += `
            <div class="col-12">
                <div class="alert alert-danger border-0 d-flex align-items-start gap-3 rounded-3">
                    <i class="fas fa-exclamation-circle text-danger mt-1"></i>
                    <div>
                        <p class="fw-semibold mb-0 small">Tienes ${vencidas} tarea(s) vencida(s)</p>
                        <p class="small text-danger-emphasis mb-0">Contacta a tus profesores para ponerte al día.</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Quick Access
    const quickItems = [
        { icon: 'fa-clipboard-list', label: 'Tareas', view: 'tareas', color: 'bg-violet-50 text-violet-600' },
        { icon: 'fa-comment-dots', label: 'Observaciones', view: 'observaciones', color: 'bg-orange-50 text-orange-600' },
        { icon: 'fa-chart-bar', label: 'Calificaciones', view: 'calificaciones', color: 'bg-blue-50 text-blue-600' },
        { icon: 'fa-phone', label: 'Contacto', view: 'contacto', color: 'bg-emerald-50 text-emerald-600' },
        { icon: 'fa-newspaper', label: 'Noticias', view: 'eventos', color: 'bg-amber-50 text-amber-600' },
        { icon: 'fa-calendar-days', label: 'Calendario', view: 'fechas', color: 'bg-rose-50 text-rose-600' },
    ];

    html += `
        <div class="col-12">
            <div class="row g-3">
    `;

    quickItems.forEach(item => {
        html += `
            <div class="col-4 col-sm-3">
                <button class="btn w-100 d-flex flex-column align-items-center gap-2 p-3 rounded-3 border-0 ${item.color} card-hover" onclick="navigateTo('${item.view}')" style="font-size: 0.7rem; font-weight: 600;">
                    <i class="fas ${item.icon}" style="font-size: 1.2rem;"></i>
                    ${item.label}
                </button>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    // Próximas fechas
    html += `
        <div class="col-12">
            <h3 class="font-display h6 fw-semibold text-primary-blue mb-3">Próximas fechas</h3>
            <div class="d-flex flex-column gap-2">
    `;

    fechasImportantes.slice(0, 4).forEach(f => {
        html += `
            <div class="bg-white rounded-3 px-3 py-2 d-flex align-items-center gap-3 border">
                <span class="dot-indicator ${getDotClass(f.tipo)}"></span>
                <div class="flex-grow-1">
                    <p class="small fw-medium text-dark mb-0">${f.titulo}</p>
                    <p class="small text-muted mb-0">${f.fecha}</p>
                </div>
                ${f.urgente ? '<span class="stat-badge danger" style="font-size: 0.6rem;">Urgente</span>' : ''}
            </div>
        `;
    });

    html += `
            </div>
        </div>
    </div>
    `;

    document.getElementById('contentArea').innerHTML = html;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function renderTareas() {
    const filtro = document.getElementById('tareasFiltro')?.value || 'todas';
    const filtered = filtro === 'todas' ? tareas : tareas.filter(t => t.estado === filtro);

    let html = `
        <div class="row g-4">
            <div class="col-12">
                <h2 class="font-display h4 fw-semibold text-primary-blue">Tareas asignadas</h2>
                <p class="text-muted small">Listado de actividades dejadas por los profesores</p>
            </div>

            <div class="col-12">
                <div class="d-flex gap-2 flex-wrap">
                    <button class="btn btn-sm rounded-pill border ${filtro === 'todas' ? 'btn-primary' : 'btn-light'}" onclick="setFiltroTareas('todas')">Todas</button>
                    <button class="btn btn-sm rounded-pill border ${filtro === 'pendiente' ? 'btn-primary' : 'btn-light'}" onclick="setFiltroTareas('pendiente')">Pendientes</button>
                    <button class="btn btn-sm rounded-pill border ${filtro === 'entregada' ? 'btn-primary' : 'btn-light'}" onclick="setFiltroTareas('entregada')">Entregadas</button>
                    <button class="btn btn-sm rounded-pill border ${filtro === 'vencida' ? 'btn-primary' : 'btn-light'}" onclick="setFiltroTareas('vencida')">Vencidas</button>
                </div>
            </div>

            <div class="col-12">
                <div class="d-flex flex-column gap-3">
    `;

    if (filtered.length === 0) {
        html += `
            <div class="text-center py-5 text-muted">
                <i class="fas fa-clipboard-list" style="font-size: 2rem; opacity: 0.3;"></i>
                <p class="small mt-2">No hay tareas en esta categoría</p>
            </div>
        `;
    }

    filtered.forEach(t => {
        html += `
            <div class="bg-white rounded-3 border p-3 card-hover">
                <div class="d-flex flex-wrap align-items-start gap-2 mb-2">
                    <span class="stat-badge info">${t.materia}</span>
                    ${getEstadoBadge(t.estado)}
                </div>
                <h4 class="h6 fw-semibold text-dark">${t.titulo}</h4>
                <p class="small text-muted mb-2">${t.descripcion}</p>
                <div class="d-flex justify-content-between small text-muted">
                    <span>${t.profesor}</span>
                    <span><i class="fas fa-calendar-days me-1"></i>Entrega: ${t.entrega}</span>
                </div>
            </div>
        `;
    });

    html += `
                </div>
            </div>
        </div>
    `;

    document.getElementById('contentArea').innerHTML = html;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function renderObservaciones() {
    let html = `
        <div class="row g-4">
            <div class="col-12">
                <h2 class="font-display h4 fw-semibold text-primary-blue">Observador del estudiante</h2>
                <p class="text-muted small">Registro de observaciones académicas y de convivencia</p>
            </div>

            <div class="col-12">
                <div class="d-flex flex-column gap-3">
    `;

    observaciones.forEach(o => {
        const tipo = getObservacionTipo(o.tipo);
        html += `
            <div class="rounded-3 border p-3 ${tipo.bg} ${tipo.border}">
                <div class="d-flex gap-3">
                    <div class="rounded-3 ${tipo.bg} px-2 py-1" style="height: fit-content;">
                        <span class="stat-badge ${o.tipo === 'positiva' ? 'success' : o.tipo === 'negativa' ? 'danger' : 'neutral'}">${tipo.label}</span>
                    </div>
                    <div class="flex-grow-1">
                        <div class="d-flex flex-wrap gap-2 mb-2">
                            <span class="small text-muted">${o.materia}</span>
                        </div>
                        <p class="small text-dark mb-2">${o.texto}</p>
                        <div class="d-flex justify-content-between small text-muted">
                            <span>${o.profesor}</span>
                            <span>${o.fecha}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    html += `
                </div>
            </div>
        </div>
    `;

    document.getElementById('contentArea').innerHTML = html;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let chartsInitialized = false;
let chartInstances = {};

function renderCalificaciones() {
    const promedio = getPromedioGeneral();
    const aprobando = promedio >= 6;

    let html = `
        <div class="row g-4">
            <div class="col-12">
                <h2 class="font-display h4 fw-semibold text-primary-blue">Calificaciones y rendimiento</h2>
                <p class="text-muted small">Notas del período académico actual · 2026</p>
            </div>

            <div class="col-12">
                <div class="rounded-3 p-3 text-white d-flex align-items-center gap-3" style="background: ${aprobando ? '#059669' : '#ef4444'};">
                    <div class="text-center">
                        <div class="font-mono h3 fw-medium mb-0">${promedio.toFixed(2)}</div>
                        <div class="small opacity-75">Promedio general</div>
                    </div>
                    <div class="border-start border-white border-opacity-25 ps-3">
                        <p class="fw-semibold mb-0">${aprobando ? 'Aprobando el período' : 'En riesgo de reprobar'}</p>
                        <p class="small opacity-75 mb-0">${aprobando ? 'Mantén el esfuerzo. Vas por buen camino.' : 'Busca apoyo con tus profesores y acudiente.'}</p>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="d-flex flex-column gap-2">
    `;

    calificaciones.forEach(c => {
        const color = getNotaColorClass(c.nota);
        const badge = getNotaBadge(c.nota);
        const barClass = badge === 'excelente' ? 'progress-bar-excelente' : 
                         badge === 'buena' ? 'progress-bar-buena' : 
                         badge === 'regular' ? 'progress-bar-regular' : 'progress-bar-mala';
        html += `
            <div class="bg-white rounded-3 border p-3">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="fw-semibold small text-dark">${c.materia}</span>
                    <div class="d-flex align-items-center gap-2">
                        ${getTendenciaIcon(c.tendencia)}
                        <span class="fw-medium ${color}">${c.nota.toFixed(1)}</span>
                    </div>
                </div>
                <div class="progress-custom mt-2">
                    <div class="progress-bar ${barClass}" style="width: ${(c.nota / 10) * 100}%; height: 100%; border-radius: 4px;"></div>
                </div>
                <div class="d-flex justify-content-between small text-muted mt-1">
                    <span>Promedio del curso: ${c.promedio}</span>
                    <span>/ 10.0</span>
                </div>
            </div>
        `;
    });

    html += `
                </div>
            </div>

            <div class="col-12">
                <div class="row g-3">
                    <div class="col-12 col-md-6">
                        <div class="bg-white rounded-3 border p-3">
                            <h6 class="fw-semibold small text-secondary mb-2">Evolución del promedio</h6>
                            <canvas id="chartEvolucion" height="150"></canvas>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="bg-white rounded-3 border p-3">
                            <h6 class="fw-semibold small text-secondary mb-2">Perfil por materias</h6>
                            <canvas id="chartRadar" height="150"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('contentArea').innerHTML = html;

    // Inicializar charts después de renderizar
    setTimeout(() => {
        initCharts();
    }, 100);
}

function initCharts() {
    // Destruir charts anteriores
    Object.values(chartInstances).forEach(chart => {
        if (chart) chart.destroy();
    });
    chartInstances = {};

    // Chart 1: Evolución
    const ctx1 = document.getElementById('chartEvolucion');
    if (ctx1) {
        chartInstances.evolucion = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: historialNotas.map(d => d.mes),
                datasets: [{
                    label: 'Promedio',
                    data: historialNotas.map(d => d.promedio),
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.3,
                    pointRadius: 3,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { min: 5, max: 10 }
                }
            }
        });
    }

    // Chart 2: Radar
    const ctx2 = document.getElementById('chartRadar');
    if (ctx2) {
        chartInstances.radar = new Chart(ctx2, {
            type: 'radar',
            data: {
                labels: calificaciones.map(c => c.materia.substring(0, 5)),
                datasets: [{
                    label: 'Nota',
                    data: calificaciones.map(c => c.nota),
                    borderColor: '#1e3a5f',
                    backgroundColor: 'rgba(30, 58, 95, 0.15)',
                    pointRadius: 3,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    r: { min: 0, max: 10 }
                }
            }
        });
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function renderContacto() {
    let html = `
        <div class="row g-4">
            <div class="col-12">
                <h2 class="font-display h4 fw-semibold text-primary-blue">Contactos de emergencia</h2>
                <p class="text-muted small">Familiares o acudientes registrados para situaciones de urgencia</p>
            </div>

            <div class="col-12">
                <div class="alert alert-warning border-0 d-flex align-items-start gap-3 rounded-3">
                    <i class="fas fa-exclamation-triangle text-warning mt-1"></i>
                    <p class="small mb-0">Para actualizar los datos de contacto, comunícate con secretaría académica del colegio.</p>
                </div>
            </div>

            <div class="col-12">
                <div class="d-flex flex-column gap-3">
    `;

    contactosEmergencia.forEach(c => {
        html += `
            <div class="bg-white rounded-3 border p-3 ${c.principal ? 'border-primary' : ''}" style="${c.principal ? 'box-shadow: 0 0 0 1px rgba(30,58,95,0.15);' : ''}">
                <div class="d-flex gap-3">
                    <div class="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style="width: 44px; height: 44px; flex-shrink: 0;">
                        <i class="fas fa-user text-primary"></i>
                    </div>
                    <div class="flex-grow-1">
                        <div class="d-flex align-items-center gap-2">
                            <span class="fw-semibold text-dark">${c.nombre}</span>
                            ${c.principal ? '<span class="stat-badge primary small d-flex align-items-center gap-1"><i class="fas fa-star" style="font-size: 0.5rem;"></i> Principal</span>' : ''}
                        </div>
                        <p class="small text-muted mb-2">${c.relacion}</p>
                        <div class="d-flex flex-column gap-1">
                            <a href="tel:${c.telefono}" class="small text-primary text-decoration-none">
                                <i class="fas fa-phone me-1"></i> ${c.telefono}
                            </a>
                            ${c.email ? `<span class="small text-muted"><i class="fas fa-envelope me-1"></i> ${c.email}</span>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    html += `
                </div>
            </div>
        </div>
    `;

    document.getElementById('contentArea').innerHTML = html;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function renderEventos() {
    let html = `
        <div class="row g-4">
            <div class="col-12">
                <h2 class="font-display h4 fw-semibold text-primary-blue">Noticias y eventos</h2>
                <p class="text-muted small">Comunicados y actividades del I.E.D instituto parcelas</p>
            </div>

            <div class="col-12">
                <div class="d-flex flex-column gap-3">
    `;

    eventos.forEach(e => {
        html += `
            <div class="bg-white rounded-3 border overflow-hidden card-hover">
                ${e.imagen ? `<img src="${e.imagen}" alt="${e.titulo}" class="img-event">` : ''}
                <div class="p-3">
                    <div class="d-flex align-items-center gap-2 mb-2">
                        <span class="stat-badge ${getEventoTipo(e.tipo)}">${e.tipo.charAt(0).toUpperCase() + e.tipo.slice(1)}</span>
                        <span class="small text-muted">${e.fecha}</span>
                    </div>
                    <h5 class="h6 fw-semibold text-dark">${e.titulo}</h5>
                    <p class="small text-muted mb-0">${e.descripcion}</p>
                </div>
            </div>
        `;
    });

    html += `
                </div>
            </div>
        </div>
    `;

    document.getElementById('contentArea').innerHTML = html;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function renderFechas() {
    let html = `
        <div class="row g-4">
            <div class="col-12">
                <h2 class="font-display h4 fw-semibold text-primary-blue">Fechas importantes</h2>
                <p class="text-muted small">Compromisos académicos e institucionales</p>
            </div>

            <div class="col-12">
                <div class="d-flex gap-3 flex-wrap mb-3">
                    <span class="small text-muted d-flex align-items-center gap-2"><span class="dot-examen" style="width: 10px; height: 10px; border-radius: 50%; display: inline-block;"></span> Examen</span>
                    <span class="small text-muted d-flex align-items-center gap-2"><span class="dot-tarea" style="width: 10px; height: 10px; border-radius: 50%; display: inline-block;"></span> Tarea</span>
                    <span class="small text-muted d-flex align-items-center gap-2"><span class="dot-evento" style="width: 10px; height: 10px; border-radius: 50%; display: inline-block;"></span> Evento</span>
                    <span class="small text-muted d-flex align-items-center gap-2"><span class="dot-institucional" style="width: 10px; height: 10px; border-radius: 50%; display: inline-block;"></span> Institucional</span>
                </div>
            </div>

            <div class="col-12">
                <div class="d-flex flex-column gap-2">
    `;

    fechasImportantes.forEach(f => {
        html += `
            <div class="bg-white rounded-3 border px-3 py-2 d-flex align-items-center gap-3">
                <span class="dot-indicator ${getDotClass(f.tipo)}"></span>
                <div class="flex-grow-1">
                    <p class="small fw-medium text-dark mb-0">${f.titulo}</p>
                    <p class="small text-muted mb-0">${f.fecha}</p>
                </div>
                <div class="d-flex gap-2 align-items-center flex-shrink-0">
                    ${f.urgente ? '<span class="stat-badge danger" style="font-size: 0.6rem;">Urgente</span>' : ''}
                    <span class="stat-badge ${getTipoBadge(f.tipo)}" style="font-size: 0.6rem;">${getTipoLabel(f.tipo)}</span>
                </div>
            </div>
        `;
    });

    html += `
                </div>
            </div>
        </div>
    `;

    document.getElementById('contentArea').innerHTML = html;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  NAVEGACIÓN
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const viewMap = {
    'dashboard': { title: 'Inicio', icon: 'fa-home', render: renderDashboard },
    'tareas': { title: 'Tareas', icon: 'fa-clipboard-list', render: renderTareas },
    'observaciones': { title: 'Observaciones', icon: 'fa-comment-dots', render: renderObservaciones },
    'calificaciones': { title: 'Calificaciones', icon: 'fa-chart-bar', render: renderCalificaciones },
    'contacto': { title: 'Contacto', icon: 'fa-phone', render: renderContacto },
    'eventos': { title: 'Noticias', icon: 'fa-newspaper', render: renderEventos },
    'fechas': { title: 'Calendario', icon: 'fa-calendar-days', render: renderFechas },
};

let currentView = 'dashboard';

function navigateTo(view) {
    if (!viewMap[view]) return;
    currentView = view;

    // Actualizar sidebar
    document.querySelectorAll('#navMenu .nav-link').forEach(el => {
        el.classList.toggle('active', el.dataset.view === view);
    });

    // Actualizar topbar
    document.getElementById('pageIcon').className = `fas ${viewMap[view].icon}`;
    document.getElementById('pageTitle').textContent = viewMap[view].title;

    // Renderizar vista
    viewMap[view].render();

    // Cerrar sidebar mobile
    closeSidebar();
}

function setFiltroTareas(filtro) {
    // Guardar filtro y re-renderizar
    const existing = document.getElementById('tareasFiltro');
    if (existing) {
        existing.value = filtro;
    } else {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.id = 'tareasFiltro';
        input.value = filtro;
        document.body.appendChild(input);
    }
    renderTareas();
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SIDEBAR TOGGLE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function openSidebar() {
    document.getElementById('sidebar').classList.add('show');
    document.getElementById('sidebarOverlay').classList.add('show');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('show');
    document.getElementById('sidebarOverlay').classList.remove('show');
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  LOGIN
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let loggedIn = false;

function showLogin() {
    document.getElementById('loginView').style.display = 'flex';
    document.getElementById('mainContent').style.display = 'none';
    loggedIn = false;
}

function showApp() {
    document.getElementById('loginView').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    loggedIn = true;
    navigateTo('dashboard');
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  EVENT LISTENERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar login por defecto
    showLogin();

    // Login form
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const user = document.getElementById('loginUser').value;
        const pass = document.getElementById('loginPass').value;
        const errorEl = document.getElementById('loginError');

        if (user === 'Oscar david gonzales' && pass === '1025543510') {
            errorEl.classList.add('d-none');
            showApp();
        } else {
            errorEl.textContent = 'Usuario o contraseña incorrectos. Prueba: Oscar david gonzales / 1025543510';
            errorEl.classList.remove('d-none');
        }
    });

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', function(e) {
        e.preventDefault();
        showLogin();
    });

    // Menu toggle (mobile)
    document.getElementById('menuToggle').addEventListener('click', function() {
        if (document.getElementById('sidebar').classList.contains('show')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    // Sidebar overlay
    document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

    // Navegación sidebar
    document.querySelectorAll('#navMenu .nav-link').forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            const view = this.dataset.view;
            if (view) navigateTo(view);
        });
    });

    // Si ya está logueado, cargar vista inicial
    if (loggedIn) {
        navigateTo('dashboard');
    }
});

// Para debugging: hacer accesible globalmente
window.navigateTo = navigateTo;
window.setFiltroTareas = setFiltroTareas;