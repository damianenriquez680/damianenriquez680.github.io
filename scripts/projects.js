// ── Detalle de cada proyecto en cada idioma ──
const projects = {
    'calculadora': {
        icon: '📐',
        tags: ['Java'],
        repo: 'https://github.com/damianenriquez680/calculadora_coordenadas',
        es: {
        title: 'Calculadora de Sistemas de Coordenadas',
        desc: 'Aplicación de consola que realiza conversiones entre sistemas de coordenadas y calcula distancias entre puntos, tanto en dos como en tres dimensiones.',
        features: [
            'Conversión 2D: rectangulares ↔ polares',
            'Conversión 3D: rectangulares, cilíndricas y esféricas entre sí',
            'Cálculo de distancia entre puntos en cualquier combinación de sistemas',
            'Código organizado en clases por tipo de coordenada'
        ]
        },
        en: {
        title: 'Coordinate Systems Calculator',
        desc: 'Console application that converts between coordinate systems and calculates distances between points, in both two and three dimensions.',
        features: [
            '2D conversion: rectangular ↔ polar',
            '3D conversion: rectangular, cylindrical and spherical, in any direction',
            'Distance between points in any combination of systems',
            'Code organized into classes by coordinate type'
        ]
        }
    },
    'sistema-escolar': {
        icon: '🗃️',
        tags: ['C#', 'SQL Server', 'Windows Forms'],
        repo: 'https://github.com/damianenriquez680/sistema_escolar',
        es: {
        title: 'Sistema Escolar con Base de Datos',
        desc: 'Aplicación de escritorio para la gestión académica de una institución educativa, con operaciones CRUD completas sobre una base de datos relacional de 11 tablas interconectadas: alumnos, académicos, materias, grupos, aulas, carreras y más.',
        features: [
            'Catálogos de Materia, Aula, Académico, Alumno, Carrera, Ciudad, Estado, País y Estatus',
            'Gestión de Grupos con maestro, aula, horario y carrera asignados',
            'Registro de Reinscripciones con calificaciones',
            'Interfaz Windows Forms con navegación centralizada',
            'Proyecto en equipo — Desarrollo de Sistemas 3'
        ]
        },
        en: {
        title: 'School System with Database',
        desc: 'Desktop application for the academic management of an educational institution, with full CRUD operations over a relational database of 11 interconnected tables: students, faculty, subjects, groups, classrooms, degree programs and more.',
        features: [
            'Catalogs for Subject, Classroom, Faculty, Student, Degree Program, City, State, Country and Status',
            'Group management with assigned teacher, classroom, schedule and degree program',
            'Re-enrollment records with grades',
            'Windows Forms interface with centralized navigation',
            'Team project — Systems Development 3'
        ]
        }
    },
    'generador-alumnos': {
        icon: '🎓',
        tags: ['HTML', 'JavaScript', 'Tailwind CSS', 'SQL'],
        repo: 'https://github.com/damianenriquez680/generador_alumnos',
        es: {
        title: 'Generador de Datos Estudiantiles',
        desc: 'Herramienta web que genera hasta 50,000 registros ficticios de alumnos en SQL, CSV y JSON para poblar y probar bases de datos.',
        features: [
            'Formatos de salida: SQL (MySQL/MariaDB), CSV y JSON, con descarga de archivo',
            'Datos ficticios: apellidos mexicanos y rusos, nombres mexicanos y franceses',
            'Matrículas consecutivas y correo institucional',
            'Entre 1 y 50,000 registros por generación',
            'Proyecto individual — Base de Datos 2, Universidad de Sonora (marzo de 2026)',
            'Realizado con el apoyo del profesor Jose Humberto Abril Garcia'
        ]
        },
        en: {
        title: 'Student Data Generator',
        desc: 'Web tool that generates up to 50,000 fake student records in SQL, CSV and JSON to populate and test databases.',
        features: [
            'Output formats: SQL (MySQL/MariaDB), CSV and JSON, with file download',
            'Fake data: Mexican and Russian last names, Mexican and French first names',
            'Sequential student IDs and institutional email',
            'Between 1 and 50,000 records per run',
            'Individual project — Database 2, University of Sonora (March 2026)',
            'Built with the support of Professor Jose Humberto Abril Garcia'
        ]
        }
    },
    'biblioteca': {
        icon: '📚',
        tags: ['Flask', 'SQLite', 'Python', 'HTML', 'CSS'],
        repo: 'https://github.com/damianenriquez680/biblioteca_flask',
        es: {
        title: 'BiblioTeca — Sistema de Gestión de Biblioteca',
        desc: 'API REST construida con Flask y SQLite para administrar libros y préstamos de una biblioteca, con interfaz HTML conectada al backend.',
        features: [
            'Endpoints REST completos para libros y préstamos',
            'Control automático de stock al crear o eliminar préstamos',
            'Validación de email, ISBN y año de publicación',
            'Queries parametrizadas para prevenir inyección SQL',
            'Estadísticas generales vía endpoint /stats',
            'Proyecto en equipo'
        ]
        },
        en: {
        title: 'BiblioTeca — Library Management System',
        desc: 'REST API built with Flask and SQLite to manage a library\'s books and loans, with an HTML interface connected to the backend.',
        features: [
            'Complete REST endpoints for books and loans',
            'Automatic stock control when creating or deleting loans',
            'Email, ISBN and publication year validation',
            'Parameterized queries to prevent SQL injection',
            'General statistics via the /stats endpoint',
            'Team project'
        ]
        }
    },
    'juego-2d': {
        icon: '🎮',
        wip: true,
        tags: ['JavaScript', 'HTML5 Canvas'],
        repo: 'https://github.com/damianenriquez680/minijuego_2d',
        play: 'https://damianenriquez680.github.io/minijuego_2d/',
        es: {
        title: 'Juego 2D de Supervivencia',
        desc: 'Juego 2D tipo arcade hecho con JavaScript puro y HTML5 Canvas, sin frameworks ni librerías. Proyecto en desarrollo: ya cuenta con movimiento y colisiones, y siguen los enemigos, el puntaje y el game over.',
        features: [
            'Movimiento con flechas o WASD',
            'Game loop con requestAnimationFrame (update + draw)',
            'Velocidad normalizada en diagonal',
            'Colisiones AABB con un obstáculo, resueltas por ejes para deslizarse por los bordes',
            'Próximamente: enemigos que persiguen, puntaje, game over y dificultad progresiva',
            'Proyecto individual'
        ]
        },
        en: {
        title: '2D Survival Game',
        desc: 'Arcade-style 2D game built with plain JavaScript and HTML5 Canvas, with no frameworks or libraries. Work in progress: movement and collisions are done; enemies, scoring and game over are next.',
        features: [
            'Movement with arrow keys or WASD',
            'Game loop with requestAnimationFrame (update + draw)',
            'Diagonal speed normalization',
            'AABB collisions with an obstacle, resolved per axis so the player slides along edges',
            'Coming soon: chasing enemies, score, game over and progressive difficulty',
            'Individual project'
        ]
        }
    },
    'facturas': {
        icon: '🧾',
        wip: true,
        tags: ['Flask', 'SQLite', 'Python'],
        repo: 'https://github.com/damianenriquez680/generador_facturas',
        es: {
        title: 'Generador de Facturas',
        desc: 'Sistema para generar facturas y presupuestos, con una API REST en Flask y base de datos SQLite. Proyecto en curso: faltan la generación de PDF y la interfaz web.',
        features: [
            'API REST completa para clientes, productos y facturas (GET, POST, PUT y DELETE)',
            'Al consultar una factura por id, incluye su detalle con los productos',
            'Fecha de emisión y estatus asignados automáticamente por la base de datos',
            'Base de datos SQLite con 4 tablas: clientes, productos, facturas y detalle',
            'Probada con Postman',
            'En desarrollo: generación de PDF con WeasyPrint e interfaz en HTML, CSS y JavaScript'
        ]
        },
        en: {
        title: 'Invoice Generator',
        desc: 'System to generate invoices and quotes, with a REST API in Flask and a SQLite database. Work in progress: PDF generation and the web interface are still missing.',
        features: [
            'Complete REST API for customers, products and invoices (GET, POST, PUT and DELETE)',
            'Fetching an invoice by id includes its detail with the products',
            'Issue date and status assigned automatically by the database',
            'SQLite database with 4 tables: customers, products, invoices and invoice detail',
            'Tested with Postman',
            'In development: PDF generation with WeasyPrint and an HTML, CSS and JavaScript interface'
        ]
        }
    },
    'blog': {
        layout: 'blog',
        icon: '📊',
        tags: ['Python', 'SciPy', 'Pandas', 'Excel', 'Google Forms'],
        repo: 'https://drive.google.com/drive/folders/1FcnSOAf4jtINZaZrklkCC7M6od9lOR-c?usp=sharing'
    }
};
