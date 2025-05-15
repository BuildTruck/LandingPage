// js/i18n.js
$(document).ready(function() {
    // Complete translations for both languages
    const resources = {
      en: {
        translation: {
          // Navigation
          "navProduct": "Products",
          "navAbout": "About Us",
          "navPlans": "Plans",
          "navRegister": "Register",
          "navLogin": "Login",
          
          // Hero Section
          "heroTitle": "TRANSFORMING<br><span class=\"hero-highlight\">MANAGEMENT</span> ON SITE",
          "heroSubtitle": "Your project, under control. With BuildTruck, make data-driven decisions and improve efficiency every day.",
          "heroButton": "Learn More",
          
          // Features Section
          "featuresTitle": "Features that make the difference",
          "featuresButton": "See how it works",
          "feature1Title": "Smart Warehouse Management",
          "feature1Item1": "Entries and exits registration",
          "feature1Item2": "Low stock alerts",
          "feature1Item3": "Quick inventory lookup",
          "feature1Item4": "Traceability by dates and responsibles",
          
          "feature2Title": "Attendance and Personnel Control",
          "feature2Item1": "Daily attendance registration",
          "feature2Item2": "Identification by role or crew",
          "feature2Item3": "Working hours visualization",
          
          "feature3Title": "Reports and Progress Tracking",
          "feature3Item1": "Export reports in PDF or Excel",
          "feature3Item2": "Physical progress monitoring",
          "feature3Item3": "Direct delivery to administrative offices",
          
          "feature4Title": "Alerts and Notifications",
          "feature4Item1": "Low stock alerts",
          "feature4Item2": "Field incident notifications",
          "feature4Item3": "Critical pending tasks monitoring",
          
          // BuildWise Section
          "buildwiseTitle": "A solution created by engineers, for construction",
          "buildwiseDesc": "BuildWise is a tech startup founded by Software Engineering students from the University of Applied Sciences.",
          "buildwiseMission": "Mission: Facilitate the management of resources, personnel and operations with a simple, efficient and accessible digital platform.",
          "buildwiseVision": "Vision: Be leaders in construction technology in Latin America, transforming site management with intelligent solutions.",
          
          // Plans Section
          "plansTitle": "PLANS",
          "basicPlanTitle": "Basic Plan",
          "basicPlanPrice": "50$",
          "basicPlanItem1": "Inventory management",
          "basicPlanItem2": "Personnel and attendance registration",
          "basicPlanItem3": "Daily/weekly report generation",
          "basicPlanItem4": "PDF/Excel export",
          "basicPlanItem5": "Chat support (business hours)",
          "basicPlanItem6": "Automatic low stock alerts",
          
          "proPlanTitle": "Pro Plan",
          "proPlanPrice": "90$",
          "proPlanItem1": "Automatic low stock alerts",
          "proPlanItem2": "Personnel assignment by project",
          "proPlanItem3": "Control of multiple works from a single account",
          "proPlanItem4": "Comparative reports between projects",
          "proPlanItem5": "Priority support via chat and phone",
          "proPlanItem6": "Online training included",
          
          "enterprisePlanTitle": "Enterprise Plan",
          "enterprisePlanPrice": "150$",
          "enterprisePlanItem1": "Module customization by work type",
          "enterprisePlanItem2": "ERP/accounting integration (on request)",
          "enterprisePlanItem3": "24/7 technical support",
          "enterprisePlanItem4": "Multi-user access with custom roles",
          "enterprisePlanItem5": "Centralized admin panel for multiple locations",
          "enterprisePlanItem6": "Consulting on operational process digitization",
          
          // FAQ Section
          "faqTitle": "FREQUENTLY ASKED QUESTIONS",
          "faq1Question": "How does BuildTrack work?",
          "faq1Answer": "BuildTrack allows you to register, monitor and control in real time the status of materials in storage, the entry/exit of products, and the management of personnel and workers on site.",
          
          "faq2Question": "Who is BuildTrack for?",
          "faq2Answer": "For construction companies, contractors, and site logistics managers who want to optimize warehouse management, improve personnel control, and reduce losses due to poor material handling or untracked tasks.",
          
          "faq3Question": "What do I need to start using it?",
          "faq3Answer": "You only need internet access and a device (PC, tablet or mobile). BuildTrack is designed to be accessible from anywhere, even in the field.",
          
          // Contact Section
          "contactTitle": "CONTACT US",
          "formName": "First Name",
          "formSurname": "Last Name",
          "formEmail": "Email",
          "formAddress": "Address",
          "formDescription": "Description",
          "formSubmit": "Submit",
          
          // Footer
          "copyright": "© 2025 BuildTrack All rights reserved"
        }
      },
      es: {
        translation: {
          // Navegación
          "navProduct": "Producto",
          "navAbout": "Nosotros",
          "navPlans": "Planes",
          "navRegister": "Registrar",
          "navLogin": "Iniciar Sesión",
          
          // Sección Hero
          "heroTitle": "TRANSFORMANDO LA<br><span class=\"hero-highlight\">GESTIÓN</span> EN OBRA",
          "heroSubtitle": "Tú obra, bajo control. Con BuildTruck, toma decisiones con datos reales y gana eficiencia todos los días.",
          "heroButton": "Conoce más",
          
          // Sección Características
          "featuresTitle": "Características que hacen la diferencia",
          "featuresButton": "Ver cómo funciona",
          "feature1Title": "Gestión inteligente de almacén",
          "feature1Item1": "Registro de entradas y salidas",
          "feature1Item2": "Alertas de stock bajo",
          "feature1Item3": "Consulta rápida del inventario disponible",
          "feature1Item4": "Trazabilidad por fechas y responsables",
          
          "feature2Title": "Control de asistencia y personal",
          "feature2Item1": "Registro diario de asistencia",
          "feature2Item2": "Identificación por rol o cuadrilla",
          "feature2Item3": "Visualización de horas trabajadas",
          
          "feature3Title": "Reportes y seguimiento del avance",
          "feature3Item1": "Exportación de reportes en PDF o Excel",
          "feature3Item2": "Seguimiento de avances físicos",
          "feature3Item3": "Envío directo a oficinas administrativas",
          
          "feature4Title": "Alertas y notificaciones",
          "feature4Item1": "Alertas por bajo stock",
          "feature4Item2": "Notificaciones de incidencias en campo",
          "feature4Item3": "Seguimiento de pendientes críticos",
          
          // Sección BuildWise
          "buildwiseTitle": "Una solución creada por ingenieros, para la construcción",
          "buildwiseDesc": "BuildWise es una startup tecnológica fundada por estudiantes de Ingeniería de Software de la Universidad de Ciencias Aplicadas.",
          "buildwiseMission": "Misión: Facilitar la gestión de recursos, personal y operaciones con una plataforma digital simple, eficiente y accesible.",
          "buildwiseVision": "Visión: Ser líderes en tecnología para la construcción en Latinoamérica, transformando la gestión en obra con soluciones inteligentes.",
          
          // Sección Planes
          "plansTitle": "PLANES",
          "basicPlanTitle": "Plan Básico",
          "basicPlanPrice": "50$",
          "basicPlanItem1": "Gestión de inventario",
          "basicPlanItem2": "Registro de personal y asistencia",
          "basicPlanItem3": "Generación de reportes diarios/semanales",
          "basicPlanItem4": "Exportación en PDF/Excel",
          "basicPlanItem5": "Soporte vía chat (horario laboral)",
          "basicPlanItem6": "Alertas automáticas por bajo stock",
          
          "proPlanTitle": "Plan Pro",
          "proPlanPrice": "90$",
          "proPlanItem1": "Alertas automáticas por bajo stock",
          "proPlanItem2": "Asignación de personal por proyecto",
          "proPlanItem3": "Control de múltiples obras desde una sola cuenta",
          "proPlanItem4": "Reportes comparativos entre proyectos",
          "proPlanItem5": "Soporte prioritario por chat y teléfono",
          "proPlanItem6": "Capacitación online incluida",
          
          "enterprisePlanTitle": "Plan Empresarial",
          "enterprisePlanPrice": "150$",
          "enterprisePlanItem1": "Personalización de módulos según tipo de obra",
          "enterprisePlanItem2": "Integración con ERP/contabilidad (bajo solicitud)",
          "enterprisePlanItem3": "Soporte técnico 24/7",
          "enterprisePlanItem4": "Acceso multiusuario con roles personalizados",
          "enterprisePlanItem5": "Panel administrativo centralizado para múltiples sedes",
          "enterprisePlanItem6": "Consultoría en digitalización de procesos operativos",
          
          // Sección Preguntas Frecuentes
          "faqTitle": "PREGUNTAS FRECUENTES",
          "faq1Question": "¿Cómo funciona BuildTrack?",
          "faq1Answer": "BuildTrack permite registrar, supervisar y controlar en tiempo real el estado de los materiales en almacén, el ingreso/salida de productos, y la gestión de personal y obreros en obra.",
          
          "faq2Question": "¿A quién está dirigido BuildTrack?",
          "faq2Answer": "A empresas constructoras, contratistas y encargados de logística de obra que desean optimizar la gestión de almacenes, mejorar el control del personal y reducir pérdidas por mal manejo de materiales o tareas sin seguimiento.",
          
          "faq3Question": "¿Qué necesito para empezar a usarlo?",
          "faq3Answer": "Solo necesitas acceso a internet y un dispositivo (PC, tablet o celular). BuildTrack está pensado para ser accesible desde cualquier lugar, incluso en campo.",
          
          // Sección Contacto
          "contactTitle": "CONTÁCTANOS",
          "formName": "Nombre",
          "formSurname": "Apellido",
          "formEmail": "Email",
          "formAddress": "Dirección",
          "formDescription": "Descripción",
          "formSubmit": "Enviar",
          
          // Pie de página
          "copyright": "© 2025 BuildTrack Todos los derechos reservados"
        }
      }
    };
  
    // Initialize i18next
    i18next
      .use(i18nextBrowserLanguageDetector)
      .init({
        debug: false,
        fallbackLng: 'es',
        resources: resources
      }, function(err, t) {
        updateContent();
        updateActiveLanguageButton(i18next.language);
      });
  
    function updateContent() {
      // Navigation
      $('nav a:nth-child(1)').text(i18next.t('navProduct'));
      $('nav a:nth-child(2)').text(i18next.t('navAbout'));
      $('nav a:nth-child(3)').text(i18next.t('navPlans'));
      $('nav a.rg-button').text(i18next.t('navRegister'));
      $('nav a.cta-button').text(i18next.t('navLogin'));
      
      // Hero Section
      $('#heroTitle').html(i18next.t('heroTitle'));
      $('#heroSubtitle').text(i18next.t('heroSubtitle'));
      $('.hero-button').text(i18next.t('heroButton'));
      
      // Features Section
      $('#featuresTitle').text(i18next.t('featuresTitle'));
      $('#featuresButton').text(i18next.t('featuresButton'));
      
      // Feature Cards
      $('.feature-card:nth-child(1) h3').text(i18next.t('feature1Title'));
      $('.feature-card:nth-child(1) li:nth-child(1)').text(i18next.t('feature1Item1'));
      $('.feature-card:nth-child(1) li:nth-child(2)').text(i18next.t('feature1Item2'));
      $('.feature-card:nth-child(1) li:nth-child(3)').text(i18next.t('feature1Item3'));
      $('.feature-card:nth-child(1) li:nth-child(4)').text(i18next.t('feature1Item4'));
      
      $('.feature-card:nth-child(2) h3').text(i18next.t('feature2Title'));
      $('.feature-card:nth-child(2) li:nth-child(1)').text(i18next.t('feature2Item1'));
      $('.feature-card:nth-child(2) li:nth-child(2)').text(i18next.t('feature2Item2'));
      $('.feature-card:nth-child(2) li:nth-child(3)').text(i18next.t('feature2Item3'));
      
      $('.feature-card:nth-child(3) h3').text(i18next.t('feature3Title'));
      $('.feature-card:nth-child(3) li:nth-child(1)').text(i18next.t('feature3Item1'));
      $('.feature-card:nth-child(3) li:nth-child(2)').text(i18next.t('feature3Item2'));
      $('.feature-card:nth-child(3) li:nth-child(3)').text(i18next.t('feature3Item3'));
      
      $('.feature-card:nth-child(4) h3').text(i18next.t('feature4Title'));
      $('.feature-card:nth-child(4) li:nth-child(1)').text(i18next.t('feature4Item1'));
      $('.feature-card:nth-child(4) li:nth-child(2)').text(i18next.t('feature4Item2'));
      $('.feature-card:nth-child(4) li:nth-child(3)').text(i18next.t('feature4Item3'));
      
      // BuildWise Section
      $('.buildwise-title').text(i18next.t('buildwiseTitle'));
      $('.buildwise-description').text(i18next.t('buildwiseDesc'));
      $('.buildwise-mission-vision p:nth-child(1)').html('<strong>Misión:</strong> ' + i18next.t('buildwiseMission').substring(8));
      $('.buildwise-mission-vision p:nth-child(2)').html('<strong>Visión:</strong> ' + i18next.t('buildwiseVision').substring(8));
      
      // Plans Section
      $('.planes-title').text(i18next.t('plansTitle'));
      
      // Basic Plan
      $('.plan-card:nth-child(1) .plan-title').text(i18next.t('basicPlanTitle'));
      $('.plan-card:nth-child(1) .plan-price').text(i18next.t('basicPlanPrice'));
      $('.plan-card:nth-child(1) li:nth-child(1)').text(i18next.t('basicPlanItem1'));
      $('.plan-card:nth-child(1) li:nth-child(2)').text(i18next.t('basicPlanItem2'));
      $('.plan-card:nth-child(1) li:nth-child(3)').text(i18next.t('basicPlanItem3'));
      $('.plan-card:nth-child(1) li:nth-child(4)').text(i18next.t('basicPlanItem4'));
      $('.plan-card:nth-child(1) li:nth-child(5)').text(i18next.t('basicPlanItem5'));
      $('.plan-card:nth-child(1) li:nth-child(6)').text(i18next.t('basicPlanItem6'));
      
      // Pro Plan
      $('.plan-card:nth-child(2) .plan-title').text(i18next.t('proPlanTitle'));
      $('.plan-card:nth-child(2) .plan-price').text(i18next.t('proPlanPrice'));
      $('.plan-card:nth-child(2) li:nth-child(1)').text(i18next.t('proPlanItem1'));
      $('.plan-card:nth-child(2) li:nth-child(2)').text(i18next.t('proPlanItem2'));
      $('.plan-card:nth-child(2) li:nth-child(3)').text(i18next.t('proPlanItem3'));
      $('.plan-card:nth-child(2) li:nth-child(4)').text(i18next.t('proPlanItem4'));
      $('.plan-card:nth-child(2) li:nth-child(5)').text(i18next.t('proPlanItem5'));
      $('.plan-card:nth-child(2) li:nth-child(6)').text(i18next.t('proPlanItem6'));
      
      // Enterprise Plan
      $('.plan-card:nth-child(3) .plan-title').text(i18next.t('enterprisePlanTitle'));
      $('.plan-card:nth-child(3) .plan-price').text(i18next.t('enterprisePlanPrice'));
      $('.plan-card:nth-child(3) li:nth-child(1)').text(i18next.t('enterprisePlanItem1'));
      $('.plan-card:nth-child(3) li:nth-child(2)').text(i18next.t('enterprisePlanItem2'));
      $('.plan-card:nth-child(3) li:nth-child(3)').text(i18next.t('enterprisePlanItem3'));
      $('.plan-card:nth-child(3) li:nth-child(4)').text(i18next.t('enterprisePlanItem4'));
      $('.plan-card:nth-child(3) li:nth-child(5)').text(i18next.t('enterprisePlanItem5'));
      $('.plan-card:nth-child(3) li:nth-child(6)').text(i18next.t('enterprisePlanItem6'));
      
      // FAQ Section
      $('#faqTitle').text(i18next.t('faqTitle'));
      $('.faq-item:nth-child(1) .faq-question h3').text(i18next.t('faq1Question'));
      $('.faq-item:nth-child(1) .faq-answer p').text(i18next.t('faq1Answer'));
      $('.faq-item:nth-child(2) .faq-question h3').text(i18next.t('faq2Question'));
      $('.faq-item:nth-child(2) .faq-answer p').text(i18next.t('faq2Answer'));
      $('.faq-item:nth-child(3) .faq-question h3').text(i18next.t('faq3Question'));
      $('.faq-item:nth-child(3) .faq-answer p').text(i18next.t('faq3Answer'));
      
      // Contact Section
      $('#contactTitle').text(i18next.t('contactTitle'));
      $('#nombre-label').text(i18next.t('formName'));
      $('#apellido-label').text(i18next.t('formSurname'));
      $('#email-label').text(i18next.t('formEmail'));
      $('#direccion-label').text(i18next.t('formAddress'));
      $('#descripcion-label').text(i18next.t('formDescription'));
      $('.submit-btn').text(i18next.t('formSubmit'));
      
      // Footer
      $('.footer-bottom p').text(i18next.t('copyright'));
    }
  
    // Update active language button
    function updateActiveLanguageButton(language) {
      $('#language-switcher button').removeClass('active');
      $('#language-switcher button[data-language="' + language + '"]').addClass('active');
    }
  
    // Set up language change function
    window.changeLanguage = function(lng) {
      i18next.changeLanguage(lng, function() {
        updateContent();
        updateActiveLanguageButton(lng);
        
        // Save language preference
        localStorage.setItem('i18nextLng', lng);
      });
    };
  });