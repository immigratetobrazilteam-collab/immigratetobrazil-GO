
// Master JS for State: GO - Persona: Central Plains Farmer
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 800;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const go_index_section_immigrate_to_gois = document.getElementById('go-index-section-immigrate-to-gois');
  if (go_index_section_immigrate_to_gois) {
    gsap.fromTo('#go-index-section-immigrate-to-gois', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_form_immigrate_to_gois = document.getElementById('go-index-form-immigrate-to-gois');
  if (go_index_form_immigrate_to_gois) {
    gsap.from('#go-index-form-immigrate-to-gois input, #go-index-form-immigrate-to-gois textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section_state_vibe = document.getElementById('go-index-section-state-vibe');
  if (go_index_section_state_vibe) {
    gsap.fromTo('#go-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section_quick_facts_snapshot = document.getElementById('go-index-section-quick-facts-snapshot');
  if (go_index_section_quick_facts_snapshot) {
    gsap.fromTo('#go-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section_gois_map = document.getElementById('go-index-section-gois-map');
  if (go_index_section_gois_map) {
    gsap.fromTo('#go-index-section-gois-map', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section_cost_of_living_gois = document.getElementById('go-index-section-cost-of-living-gois');
  if (go_index_section_cost_of_living_gois) {
    gsap.fromTo('#go-index-section-cost-of-living-gois', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section_government_context = document.getElementById('go-index-section-government-context');
  if (go_index_section_government_context) {
    gsap.fromTo('#go-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_hero_immigration_notes = document.getElementById('go-index-hero-immigration-notes');
  if (go_index_hero_immigration_notes) {
    gsap.fromTo('#go-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_common_applicant_profiles = document.getElementById('go-index-list-common-applicant-profiles');
  if (go_index_list_common_applicant_profiles) {
    gsap.from('#go-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_economic_drivers = document.getElementById('go-index-list-economic-drivers');
  if (go_index_list_economic_drivers) {
    gsap.from('#go-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section_demographics = document.getElementById('go-index-section-demographics');
  if (go_index_section_demographics) {
    gsap.fromTo('#go-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section_regional_challenges = document.getElementById('go-index-section-regional-challenges');
  if (go_index_section_regional_challenges) {
    gsap.fromTo('#go-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section_regional_opportunities = document.getElementById('go-index-section-regional-opportunities');
  if (go_index_section_regional_opportunities) {
    gsap.fromTo('#go-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section_culture_daily_life = document.getElementById('go-index-section-culture-daily-life');
  if (go_index_section_culture_daily_life) {
    gsap.fromTo('#go-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_local_language_expressions = document.getElementById('go-index-list-local-language-expressions');
  if (go_index_list_local_language_expressions) {
    gsap.from('#go-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_food_cuisine = document.getElementById('go-index-list-food-cuisine');
  if (go_index_list_food_cuisine) {
    gsap.from('#go-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_festivals_traditions = document.getElementById('go-index-list-festivals-traditions');
  if (go_index_list_festivals_traditions) {
    gsap.from('#go-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_music_artistic_expression = document.getElementById('go-index-list-music-artistic-expression');
  if (go_index_list_music_artistic_expression) {
    gsap.from('#go-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_sports_recreation = document.getElementById('go-index-list-sports-recreation');
  if (go_index_list_sports_recreation) {
    gsap.from('#go-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_landmarks_historical_sites = document.getElementById('go-index-list-landmarks-historical-sites');
  if (go_index_list_landmarks_historical_sites) {
    gsap.from('#go-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_natural_features = document.getElementById('go-index-list-natural-features');
  if (go_index_list_natural_features) {
    gsap.from('#go-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_parks_protected_areas = document.getElementById('go-index-list-parks-protected-areas');
  if (go_index_list_parks_protected_areas) {
    gsap.from('#go-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_museums_cultural_institutions = document.getElementById('go-index-list-museums-cultural-institutions');
  if (go_index_list_museums_cultural_institutions) {
    gsap.from('#go-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section_image_gallery = document.getElementById('go-index-section-image-gallery');
  if (go_index_section_image_gallery) {
    gsap.fromTo('#go-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section_useful_government_links = document.getElementById('go-index-section-useful-government-links');
  if (go_index_section_useful_government_links) {
    gsap.fromTo('#go-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_hero_federal_police_immigration_links = document.getElementById('go-index-hero-federal-police-immigration-links');
  if (go_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#go-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section_external_references = document.getElementById('go-index-section-external-references');
  if (go_index_section_external_references) {
    gsap.fromTo('#go-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_immigration_services_overview = document.getElementById('go-index-list-immigration-services-overview');
  if (go_index_list_immigration_services_overview) {
    gsap.from('#go-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section_why_immigrate_here = document.getElementById('go-index-section-why-immigrate-here');
  if (go_index_section_why_immigrate_here) {
    gsap.fromTo('#go-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_travel_services = document.getElementById('go-index-list-travel-services');
  if (go_index_list_travel_services) {
    gsap.from('#go-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_list_how_the_process_works = document.getElementById('go-index-list-how-the-process-works');
  if (go_index_list_how_the_process_works) {
    gsap.from('#go-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_index_section__frequently_asked_questions_about_living_in_gois_ = document.getElementById('go-index-section--frequently-asked-questions-about-living-in-gois-');
  if (go_index_section__frequently_asked_questions_about_living_in_gois_) {
    gsap.fromTo('#go-index-section--frequently-asked-questions-about-living-in-gois-', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_contactcta_section_get_started_in_gois = document.getElementById('go-contactcta-section-get-started-in-gois');
  if (go_contactcta_section_get_started_in_gois) {
    gsap.fromTo('#go-contactcta-section-get-started-in-gois', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('go-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (go_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#go-renouncingcitizenship-form-renounce-brazilian-citizenship input, #go-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_list_quick_facts = document.getElementById('go-renouncingcitizenship-list-quick-facts');
  if (go_renouncingcitizenship_list_quick_facts) {
    gsap.from('#go-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('go-renouncingcitizenship-list-common-challenges-applicants-face');
  if (go_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#go-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('go-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (go_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#go-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_section_renunciation_overview = document.getElementById('go-renouncingcitizenship-section-renunciation-overview');
  if (go_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#go-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_form_who_is_this_for = document.getElementById('go-renouncingcitizenship-form-who-is-this-for');
  if (go_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#go-renouncingcitizenship-form-who-is-this-for input, #go-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_list_required_documents = document.getElementById('go-renouncingcitizenship-list-required-documents');
  if (go_renouncingcitizenship_list_required_documents) {
    gsap.from('#go-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_list_process = document.getElementById('go-renouncingcitizenship-list-process');
  if (go_renouncingcitizenship_list_process) {
    gsap.from('#go-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_section_timelines_deadlines = document.getElementById('go-renouncingcitizenship-section-timelines-deadlines');
  if (go_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#go-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_section_fees_costs = document.getElementById('go-renouncingcitizenship-section-fees-costs');
  if (go_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#go-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('go-renouncingcitizenship-list-risks-common-mistakes');
  if (go_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#go-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('go-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (go_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_section_gois_specific_context = document.getElementById('go-renouncingcitizenship-section-gois-specific-context');
  if (go_renouncingcitizenship_section_gois_specific_context) {
    gsap.fromTo('#go-renouncingcitizenship-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_section_what_our_clients_say = document.getElementById('go-renouncingcitizenship-section-what-our-clients-say');
  if (go_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#go-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('go-renouncingcitizenship-section-frequently-asked-questions');
  if (go_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#go-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_section_international_support = document.getElementById('go-renouncingcitizenship-section-international-support');
  if (go_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#go-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_list_our_credentials = document.getElementById('go-renouncingcitizenship-list-our-credentials');
  if (go_renouncingcitizenship_list_our_credentials) {
    gsap.from('#go-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_list_related_services = document.getElementById('go-renouncingcitizenship-list-related-services');
  if (go_renouncingcitizenship_list_related_services) {
    gsap.from('#go-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('go-renouncingcitizenship-section-youre-in-good-hands');
  if (go_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#go-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_renouncingcitizenship_section_21 = document.getElementById('go-renouncingcitizenship-section-21');
  if (go_renouncingcitizenship_section_21) {
    gsap.fromTo('#go-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('go-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (go_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#go-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #go-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_list_quick_facts = document.getElementById('go-provisional-list-quick-facts');
  if (go_provisional_list_quick_facts) {
    gsap.from('#go-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_list_common_challenges_applicants_face = document.getElementById('go-provisional-list-common-challenges-applicants-face');
  if (go_provisional_list_common_challenges_applicants_face) {
    gsap.from('#go-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_list_how_we_solve_these_challenges = document.getElementById('go-provisional-list-how-we-solve-these-challenges');
  if (go_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#go-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_section_naturalisation_overview = document.getElementById('go-provisional-section-naturalisation-overview');
  if (go_provisional_section_naturalisation_overview) {
    gsap.fromTo('#go-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_form_who_is_this_naturalisation_for = document.getElementById('go-provisional-form-who-is-this-naturalisation-for');
  if (go_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#go-provisional-form-who-is-this-naturalisation-for input, #go-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_list_required_documents = document.getElementById('go-provisional-list-required-documents');
  if (go_provisional_list_required_documents) {
    gsap.from('#go-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_list_application_process = document.getElementById('go-provisional-list-application-process');
  if (go_provisional_list_application_process) {
    gsap.from('#go-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_section_timelines_deadlines = document.getElementById('go-provisional-section-timelines-deadlines');
  if (go_provisional_section_timelines_deadlines) {
    gsap.fromTo('#go-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_section_fees_costs = document.getElementById('go-provisional-section-fees-costs');
  if (go_provisional_section_fees_costs) {
    gsap.fromTo('#go-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_list_risks_common_mistakes = document.getElementById('go-provisional-list-risks-common-mistakes');
  if (go_provisional_list_risks_common_mistakes) {
    gsap.from('#go-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_section_diy_vs_professional_assistance = document.getElementById('go-provisional-section-diy-vs-professional-assistance');
  if (go_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_section_gois_specific_context = document.getElementById('go-provisional-section-gois-specific-context');
  if (go_provisional_section_gois_specific_context) {
    gsap.fromTo('#go-provisional-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_section_what_our_clients_say = document.getElementById('go-provisional-section-what-our-clients-say');
  if (go_provisional_section_what_our_clients_say) {
    gsap.fromTo('#go-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_section_frequently_asked_questions = document.getElementById('go-provisional-section-frequently-asked-questions');
  if (go_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#go-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_section_international_support = document.getElementById('go-provisional-section-international-support');
  if (go_provisional_section_international_support) {
    gsap.fromTo('#go-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_list_our_credentials = document.getElementById('go-provisional-list-our-credentials');
  if (go_provisional_list_our_credentials) {
    gsap.from('#go-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_list_related_services = document.getElementById('go-provisional-list-related-services');
  if (go_provisional_list_related_services) {
    gsap.from('#go-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_section_youre_in_good_hands = document.getElementById('go-provisional-section-youre-in-good-hands');
  if (go_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#go-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_provisional_section_21 = document.getElementById('go-provisional-section-21');
  if (go_provisional_section_21) {
    gsap.fromTo('#go-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('go-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (go_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#go-special-form-special-naturalisation-in-brazil-for-particular-cases input, #go-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_list_quick_facts = document.getElementById('go-special-list-quick-facts');
  if (go_special_list_quick_facts) {
    gsap.from('#go-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_list_common_challenges_applicants_face = document.getElementById('go-special-list-common-challenges-applicants-face');
  if (go_special_list_common_challenges_applicants_face) {
    gsap.from('#go-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_list_how_we_solve_these_challenges = document.getElementById('go-special-list-how-we-solve-these-challenges');
  if (go_special_list_how_we_solve_these_challenges) {
    gsap.from('#go-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_section_naturalisation_overview = document.getElementById('go-special-section-naturalisation-overview');
  if (go_special_section_naturalisation_overview) {
    gsap.fromTo('#go-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_form_who_is_this_naturalisation_for = document.getElementById('go-special-form-who-is-this-naturalisation-for');
  if (go_special_form_who_is_this_naturalisation_for) {
    gsap.from('#go-special-form-who-is-this-naturalisation-for input, #go-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_list_required_documents = document.getElementById('go-special-list-required-documents');
  if (go_special_list_required_documents) {
    gsap.from('#go-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_list_application_process = document.getElementById('go-special-list-application-process');
  if (go_special_list_application_process) {
    gsap.from('#go-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_section_timelines_deadlines = document.getElementById('go-special-section-timelines-deadlines');
  if (go_special_section_timelines_deadlines) {
    gsap.fromTo('#go-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_section_fees_costs = document.getElementById('go-special-section-fees-costs');
  if (go_special_section_fees_costs) {
    gsap.fromTo('#go-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_list_risks_common_mistakes = document.getElementById('go-special-list-risks-common-mistakes');
  if (go_special_list_risks_common_mistakes) {
    gsap.from('#go-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_section_diy_vs_professional_assistance = document.getElementById('go-special-section-diy-vs-professional-assistance');
  if (go_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_section_gois_specific_context = document.getElementById('go-special-section-gois-specific-context');
  if (go_special_section_gois_specific_context) {
    gsap.fromTo('#go-special-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_section_what_our_clients_say = document.getElementById('go-special-section-what-our-clients-say');
  if (go_special_section_what_our_clients_say) {
    gsap.fromTo('#go-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_section_frequently_asked_questions = document.getElementById('go-special-section-frequently-asked-questions');
  if (go_special_section_frequently_asked_questions) {
    gsap.fromTo('#go-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_section_international_support = document.getElementById('go-special-section-international-support');
  if (go_special_section_international_support) {
    gsap.fromTo('#go-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_list_our_credentials = document.getElementById('go-special-list-our-credentials');
  if (go_special_list_our_credentials) {
    gsap.from('#go-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_list_related_services = document.getElementById('go-special-list-related-services');
  if (go_special_list_related_services) {
    gsap.from('#go-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_section_youre_in_good_hands = document.getElementById('go-special-section-youre-in-good-hands');
  if (go_special_section_youre_in_good_hands) {
    gsap.fromTo('#go-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_special_section_21 = document.getElementById('go-special-section-21');
  if (go_special_section_21) {
    gsap.fromTo('#go-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('go-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (go_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#go-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #go-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_list_quick_facts = document.getElementById('go-ordinary-list-quick-facts');
  if (go_ordinary_list_quick_facts) {
    gsap.from('#go-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_list_common_challenges_applicants_face = document.getElementById('go-ordinary-list-common-challenges-applicants-face');
  if (go_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#go-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_list_how_we_solve_these_challenges = document.getElementById('go-ordinary-list-how-we-solve-these-challenges');
  if (go_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#go-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_section_naturalisation_overview = document.getElementById('go-ordinary-section-naturalisation-overview');
  if (go_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#go-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_form_who_is_this_naturalisation_for = document.getElementById('go-ordinary-form-who-is-this-naturalisation-for');
  if (go_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#go-ordinary-form-who-is-this-naturalisation-for input, #go-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_list_required_documents = document.getElementById('go-ordinary-list-required-documents');
  if (go_ordinary_list_required_documents) {
    gsap.from('#go-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_list_application_process = document.getElementById('go-ordinary-list-application-process');
  if (go_ordinary_list_application_process) {
    gsap.from('#go-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_section_timelines_deadlines = document.getElementById('go-ordinary-section-timelines-deadlines');
  if (go_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#go-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_section_fees_costs = document.getElementById('go-ordinary-section-fees-costs');
  if (go_ordinary_section_fees_costs) {
    gsap.fromTo('#go-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_list_risks_common_mistakes = document.getElementById('go-ordinary-list-risks-common-mistakes');
  if (go_ordinary_list_risks_common_mistakes) {
    gsap.from('#go-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_section_diy_vs_professional_assistance = document.getElementById('go-ordinary-section-diy-vs-professional-assistance');
  if (go_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_section_gois_specific_context = document.getElementById('go-ordinary-section-gois-specific-context');
  if (go_ordinary_section_gois_specific_context) {
    gsap.fromTo('#go-ordinary-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_section_what_our_clients_say = document.getElementById('go-ordinary-section-what-our-clients-say');
  if (go_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#go-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_section_frequently_asked_questions = document.getElementById('go-ordinary-section-frequently-asked-questions');
  if (go_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#go-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_section_international_support = document.getElementById('go-ordinary-section-international-support');
  if (go_ordinary_section_international_support) {
    gsap.fromTo('#go-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_list_our_credentials = document.getElementById('go-ordinary-list-our-credentials');
  if (go_ordinary_list_our_credentials) {
    gsap.from('#go-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_list_related_services = document.getElementById('go-ordinary-list-related-services');
  if (go_ordinary_list_related_services) {
    gsap.from('#go-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_section_youre_in_good_hands = document.getElementById('go-ordinary-section-youre-in-good-hands');
  if (go_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#go-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_ordinary_section_21 = document.getElementById('go-ordinary-section-21');
  if (go_ordinary_section_21) {
    gsap.fromTo('#go-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('go-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (go_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#go-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #go-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_list_quick_facts = document.getElementById('go-extraordinary-list-quick-facts');
  if (go_extraordinary_list_quick_facts) {
    gsap.from('#go-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_list_common_challenges_applicants_face = document.getElementById('go-extraordinary-list-common-challenges-applicants-face');
  if (go_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#go-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_list_how_we_solve_these_challenges = document.getElementById('go-extraordinary-list-how-we-solve-these-challenges');
  if (go_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#go-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_section_naturalisation_overview = document.getElementById('go-extraordinary-section-naturalisation-overview');
  if (go_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#go-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('go-extraordinary-form-who-is-this-naturalisation-for');
  if (go_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#go-extraordinary-form-who-is-this-naturalisation-for input, #go-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_list_required_documents = document.getElementById('go-extraordinary-list-required-documents');
  if (go_extraordinary_list_required_documents) {
    gsap.from('#go-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_list_application_process = document.getElementById('go-extraordinary-list-application-process');
  if (go_extraordinary_list_application_process) {
    gsap.from('#go-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_section_timelines_deadlines = document.getElementById('go-extraordinary-section-timelines-deadlines');
  if (go_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#go-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_section_fees_costs = document.getElementById('go-extraordinary-section-fees-costs');
  if (go_extraordinary_section_fees_costs) {
    gsap.fromTo('#go-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_list_risks_common_mistakes = document.getElementById('go-extraordinary-list-risks-common-mistakes');
  if (go_extraordinary_list_risks_common_mistakes) {
    gsap.from('#go-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_section_diy_vs_professional_assistance = document.getElementById('go-extraordinary-section-diy-vs-professional-assistance');
  if (go_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_section_gois_specific_context = document.getElementById('go-extraordinary-section-gois-specific-context');
  if (go_extraordinary_section_gois_specific_context) {
    gsap.fromTo('#go-extraordinary-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_section_what_our_clients_say = document.getElementById('go-extraordinary-section-what-our-clients-say');
  if (go_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#go-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_section_frequently_asked_questions = document.getElementById('go-extraordinary-section-frequently-asked-questions');
  if (go_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#go-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_section_international_support = document.getElementById('go-extraordinary-section-international-support');
  if (go_extraordinary_section_international_support) {
    gsap.fromTo('#go-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_list_our_credentials = document.getElementById('go-extraordinary-list-our-credentials');
  if (go_extraordinary_list_our_credentials) {
    gsap.from('#go-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_list_related_services = document.getElementById('go-extraordinary-list-related-services');
  if (go_extraordinary_list_related_services) {
    gsap.from('#go-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_section_youre_in_good_hands = document.getElementById('go-extraordinary-section-youre-in-good-hands');
  if (go_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#go-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extraordinary_section_21 = document.getElementById('go-extraordinary-section-21');
  if (go_extraordinary_section_21) {
    gsap.fromTo('#go-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('go-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (go_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#go-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #go-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_list_quick_facts = document.getElementById('go-reacquisitioncitizenship-list-quick-facts');
  if (go_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#go-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('go-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (go_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#go-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('go-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (go_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#go-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('go-reacquisitioncitizenship-section-reacquisition-overview');
  if (go_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#go-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('go-reacquisitioncitizenship-form-who-is-this-for');
  if (go_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#go-reacquisitioncitizenship-form-who-is-this-for input, #go-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_list_required_documents = document.getElementById('go-reacquisitioncitizenship-list-required-documents');
  if (go_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#go-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_list_process = document.getElementById('go-reacquisitioncitizenship-list-process');
  if (go_reacquisitioncitizenship_list_process) {
    gsap.from('#go-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('go-reacquisitioncitizenship-section-timelines-deadlines');
  if (go_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#go-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_section_fees_costs = document.getElementById('go-reacquisitioncitizenship-section-fees-costs');
  if (go_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#go-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('go-reacquisitioncitizenship-list-risks-common-mistakes');
  if (go_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#go-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('go-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (go_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_section_gois_specific_context = document.getElementById('go-reacquisitioncitizenship-section-gois-specific-context');
  if (go_reacquisitioncitizenship_section_gois_specific_context) {
    gsap.fromTo('#go-reacquisitioncitizenship-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('go-reacquisitioncitizenship-section-what-our-clients-say');
  if (go_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#go-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('go-reacquisitioncitizenship-section-frequently-asked-questions');
  if (go_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#go-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_section_international_support = document.getElementById('go-reacquisitioncitizenship-section-international-support');
  if (go_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#go-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_list_our_credentials = document.getElementById('go-reacquisitioncitizenship-list-our-credentials');
  if (go_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#go-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_list_related_services = document.getElementById('go-reacquisitioncitizenship-list-related-services');
  if (go_reacquisitioncitizenship_list_related_services) {
    gsap.from('#go-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('go-reacquisitioncitizenship-section-youre-in-good-hands');
  if (go_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#go-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_reacquisitioncitizenship_section_21 = document.getElementById('go-reacquisitioncitizenship-section-21');
  if (go_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#go-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('go-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (go_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#go-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #go-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_list_quick_facts = document.getElementById('go-scientificresearch-list-quick-facts');
  if (go_scientificresearch_list_quick_facts) {
    gsap.from('#go-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_list_common_challenges_applicants_face = document.getElementById('go-scientificresearch-list-common-challenges-applicants-face');
  if (go_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#go-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('go-scientificresearch-list-how-we-solve-these-challenges');
  if (go_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#go-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_section_residency_overview = document.getElementById('go-scientificresearch-section-residency-overview');
  if (go_scientificresearch_section_residency_overview) {
    gsap.fromTo('#go-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_form_who_is_this_residency_for = document.getElementById('go-scientificresearch-form-who-is-this-residency-for');
  if (go_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#go-scientificresearch-form-who-is-this-residency-for input, #go-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_list_required_documents = document.getElementById('go-scientificresearch-list-required-documents');
  if (go_scientificresearch_list_required_documents) {
    gsap.from('#go-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_list_application_process = document.getElementById('go-scientificresearch-list-application-process');
  if (go_scientificresearch_list_application_process) {
    gsap.from('#go-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_section_timelines_deadlines = document.getElementById('go-scientificresearch-section-timelines-deadlines');
  if (go_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#go-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_section_fees_costs = document.getElementById('go-scientificresearch-section-fees-costs');
  if (go_scientificresearch_section_fees_costs) {
    gsap.fromTo('#go-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_list_risks_common_mistakes = document.getElementById('go-scientificresearch-list-risks-common-mistakes');
  if (go_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#go-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('go-scientificresearch-section-diy-vs-professional-assistance');
  if (go_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_section_gois_specific_context = document.getElementById('go-scientificresearch-section-gois-specific-context');
  if (go_scientificresearch_section_gois_specific_context) {
    gsap.fromTo('#go-scientificresearch-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_section_what_our_clients_say = document.getElementById('go-scientificresearch-section-what-our-clients-say');
  if (go_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#go-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_section_frequently_asked_questions = document.getElementById('go-scientificresearch-section-frequently-asked-questions');
  if (go_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#go-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_section_international_support = document.getElementById('go-scientificresearch-section-international-support');
  if (go_scientificresearch_section_international_support) {
    gsap.fromTo('#go-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_list_our_credentials = document.getElementById('go-scientificresearch-list-our-credentials');
  if (go_scientificresearch_list_our_credentials) {
    gsap.from('#go-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_list_related_services = document.getElementById('go-scientificresearch-list-related-services');
  if (go_scientificresearch_list_related_services) {
    gsap.from('#go-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_section_youre_in_good_hands = document.getElementById('go-scientificresearch-section-youre-in-good-hands');
  if (go_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#go-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_scientificresearch_section_21 = document.getElementById('go-scientificresearch-section-21');
  if (go_scientificresearch_section_21) {
    gsap.fromTo('#go-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_form_study_in_brazil_with_study_residency = document.getElementById('go-study-form-study-in-brazil-with-study-residency');
  if (go_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#go-study-form-study-in-brazil-with-study-residency input, #go-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_list_quick_facts = document.getElementById('go-study-list-quick-facts');
  if (go_study_list_quick_facts) {
    gsap.from('#go-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_list_common_challenges_applicants_face = document.getElementById('go-study-list-common-challenges-applicants-face');
  if (go_study_list_common_challenges_applicants_face) {
    gsap.from('#go-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_list_how_we_solve_these_challenges = document.getElementById('go-study-list-how-we-solve-these-challenges');
  if (go_study_list_how_we_solve_these_challenges) {
    gsap.from('#go-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_section_residency_overview = document.getElementById('go-study-section-residency-overview');
  if (go_study_section_residency_overview) {
    gsap.fromTo('#go-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_form_who_is_this_residency_for = document.getElementById('go-study-form-who-is-this-residency-for');
  if (go_study_form_who_is_this_residency_for) {
    gsap.from('#go-study-form-who-is-this-residency-for input, #go-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_list_required_documents = document.getElementById('go-study-list-required-documents');
  if (go_study_list_required_documents) {
    gsap.from('#go-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_list_application_process = document.getElementById('go-study-list-application-process');
  if (go_study_list_application_process) {
    gsap.from('#go-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_section_timelines_deadlines = document.getElementById('go-study-section-timelines-deadlines');
  if (go_study_section_timelines_deadlines) {
    gsap.fromTo('#go-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_section_fees_costs = document.getElementById('go-study-section-fees-costs');
  if (go_study_section_fees_costs) {
    gsap.fromTo('#go-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_list_risks_common_mistakes = document.getElementById('go-study-list-risks-common-mistakes');
  if (go_study_list_risks_common_mistakes) {
    gsap.from('#go-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_section_diy_vs_professional_assistance = document.getElementById('go-study-section-diy-vs-professional-assistance');
  if (go_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_section_gois_specific_context = document.getElementById('go-study-section-gois-specific-context');
  if (go_study_section_gois_specific_context) {
    gsap.fromTo('#go-study-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_section_what_our_clients_say = document.getElementById('go-study-section-what-our-clients-say');
  if (go_study_section_what_our_clients_say) {
    gsap.fromTo('#go-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_section_frequently_asked_questions = document.getElementById('go-study-section-frequently-asked-questions');
  if (go_study_section_frequently_asked_questions) {
    gsap.fromTo('#go-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_section_international_support = document.getElementById('go-study-section-international-support');
  if (go_study_section_international_support) {
    gsap.fromTo('#go-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_list_our_credentials = document.getElementById('go-study-list-our-credentials');
  if (go_study_list_our_credentials) {
    gsap.from('#go-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_list_related_services = document.getElementById('go-study-list-related-services');
  if (go_study_list_related_services) {
    gsap.from('#go-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_section_youre_in_good_hands = document.getElementById('go-study-section-youre-in-good-hands');
  if (go_study_section_youre_in_good_hands) {
    gsap.fromTo('#go-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_study_section_21 = document.getElementById('go-study-section-21');
  if (go_study_section_21) {
    gsap.fromTo('#go-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('go-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (go_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#go-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #go-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_list_quick_facts = document.getElementById('go-educationalexchange-list-quick-facts');
  if (go_educationalexchange_list_quick_facts) {
    gsap.from('#go-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_list_common_challenges_applicants_face = document.getElementById('go-educationalexchange-list-common-challenges-applicants-face');
  if (go_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#go-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('go-educationalexchange-list-how-we-solve-these-challenges');
  if (go_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#go-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_section_residency_overview = document.getElementById('go-educationalexchange-section-residency-overview');
  if (go_educationalexchange_section_residency_overview) {
    gsap.fromTo('#go-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_form_who_is_this_residency_for = document.getElementById('go-educationalexchange-form-who-is-this-residency-for');
  if (go_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#go-educationalexchange-form-who-is-this-residency-for input, #go-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_list_required_documents = document.getElementById('go-educationalexchange-list-required-documents');
  if (go_educationalexchange_list_required_documents) {
    gsap.from('#go-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_list_application_process = document.getElementById('go-educationalexchange-list-application-process');
  if (go_educationalexchange_list_application_process) {
    gsap.from('#go-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_section_timelines_deadlines = document.getElementById('go-educationalexchange-section-timelines-deadlines');
  if (go_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#go-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_section_fees_costs = document.getElementById('go-educationalexchange-section-fees-costs');
  if (go_educationalexchange_section_fees_costs) {
    gsap.fromTo('#go-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_list_risks_common_mistakes = document.getElementById('go-educationalexchange-list-risks-common-mistakes');
  if (go_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#go-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('go-educationalexchange-section-diy-vs-professional-assistance');
  if (go_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_section_gois_specific_context = document.getElementById('go-educationalexchange-section-gois-specific-context');
  if (go_educationalexchange_section_gois_specific_context) {
    gsap.fromTo('#go-educationalexchange-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_section_what_our_clients_say = document.getElementById('go-educationalexchange-section-what-our-clients-say');
  if (go_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#go-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_section_frequently_asked_questions = document.getElementById('go-educationalexchange-section-frequently-asked-questions');
  if (go_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#go-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_section_international_support = document.getElementById('go-educationalexchange-section-international-support');
  if (go_educationalexchange_section_international_support) {
    gsap.fromTo('#go-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_list_our_credentials = document.getElementById('go-educationalexchange-list-our-credentials');
  if (go_educationalexchange_list_our_credentials) {
    gsap.from('#go-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_list_related_services = document.getElementById('go-educationalexchange-list-related-services');
  if (go_educationalexchange_list_related_services) {
    gsap.from('#go-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_section_youre_in_good_hands = document.getElementById('go-educationalexchange-section-youre-in-good-hands');
  if (go_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#go-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_educationalexchange_section_21 = document.getElementById('go-educationalexchange-section-21');
  if (go_educationalexchange_section_21) {
    gsap.fromTo('#go-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('go-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (go_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#go-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #go-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_list_quick_facts = document.getElementById('go-humanitarian-list-quick-facts');
  if (go_humanitarian_list_quick_facts) {
    gsap.from('#go-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_list_common_challenges_applicants_face = document.getElementById('go-humanitarian-list-common-challenges-applicants-face');
  if (go_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#go-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_list_how_we_solve_these_challenges = document.getElementById('go-humanitarian-list-how-we-solve-these-challenges');
  if (go_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#go-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_section_residency_overview = document.getElementById('go-humanitarian-section-residency-overview');
  if (go_humanitarian_section_residency_overview) {
    gsap.fromTo('#go-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_form_who_is_this_residency_for = document.getElementById('go-humanitarian-form-who-is-this-residency-for');
  if (go_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#go-humanitarian-form-who-is-this-residency-for input, #go-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_list_required_documents = document.getElementById('go-humanitarian-list-required-documents');
  if (go_humanitarian_list_required_documents) {
    gsap.from('#go-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_list_application_process = document.getElementById('go-humanitarian-list-application-process');
  if (go_humanitarian_list_application_process) {
    gsap.from('#go-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_section_timelines_deadlines = document.getElementById('go-humanitarian-section-timelines-deadlines');
  if (go_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#go-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_section_fees_costs = document.getElementById('go-humanitarian-section-fees-costs');
  if (go_humanitarian_section_fees_costs) {
    gsap.fromTo('#go-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_list_risks_common_mistakes = document.getElementById('go-humanitarian-list-risks-common-mistakes');
  if (go_humanitarian_list_risks_common_mistakes) {
    gsap.from('#go-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_section_diy_vs_professional_assistance = document.getElementById('go-humanitarian-section-diy-vs-professional-assistance');
  if (go_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_section_gois_specific_context = document.getElementById('go-humanitarian-section-gois-specific-context');
  if (go_humanitarian_section_gois_specific_context) {
    gsap.fromTo('#go-humanitarian-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_section_what_our_clients_say = document.getElementById('go-humanitarian-section-what-our-clients-say');
  if (go_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#go-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_section_frequently_asked_questions = document.getElementById('go-humanitarian-section-frequently-asked-questions');
  if (go_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#go-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_section_international_support = document.getElementById('go-humanitarian-section-international-support');
  if (go_humanitarian_section_international_support) {
    gsap.fromTo('#go-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_list_our_credentials = document.getElementById('go-humanitarian-list-our-credentials');
  if (go_humanitarian_list_our_credentials) {
    gsap.from('#go-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_list_related_services = document.getElementById('go-humanitarian-list-related-services');
  if (go_humanitarian_list_related_services) {
    gsap.from('#go-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_section_youre_in_good_hands = document.getElementById('go-humanitarian-section-youre-in-good-hands');
  if (go_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#go-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_humanitarian_section_21 = document.getElementById('go-humanitarian-section-21');
  if (go_humanitarian_section_21) {
    gsap.fromTo('#go-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('go-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (go_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#go-digitalnomad-form-digital-nomad-residency-in-brazil input, #go-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_list_quick_facts = document.getElementById('go-digitalnomad-list-quick-facts');
  if (go_digitalnomad_list_quick_facts) {
    gsap.from('#go-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_list_common_challenges_applicants_face = document.getElementById('go-digitalnomad-list-common-challenges-applicants-face');
  if (go_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#go-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('go-digitalnomad-list-how-we-solve-these-challenges');
  if (go_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#go-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_section_residency_overview = document.getElementById('go-digitalnomad-section-residency-overview');
  if (go_digitalnomad_section_residency_overview) {
    gsap.fromTo('#go-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_form_who_is_this_residency_for = document.getElementById('go-digitalnomad-form-who-is-this-residency-for');
  if (go_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#go-digitalnomad-form-who-is-this-residency-for input, #go-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_list_required_documents = document.getElementById('go-digitalnomad-list-required-documents');
  if (go_digitalnomad_list_required_documents) {
    gsap.from('#go-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_list_application_process = document.getElementById('go-digitalnomad-list-application-process');
  if (go_digitalnomad_list_application_process) {
    gsap.from('#go-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_section_timelines_deadlines = document.getElementById('go-digitalnomad-section-timelines-deadlines');
  if (go_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#go-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_section_fees_costs = document.getElementById('go-digitalnomad-section-fees-costs');
  if (go_digitalnomad_section_fees_costs) {
    gsap.fromTo('#go-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_list_risks_common_mistakes = document.getElementById('go-digitalnomad-list-risks-common-mistakes');
  if (go_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#go-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('go-digitalnomad-section-diy-vs-professional-assistance');
  if (go_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_section_gois_specific_context = document.getElementById('go-digitalnomad-section-gois-specific-context');
  if (go_digitalnomad_section_gois_specific_context) {
    gsap.fromTo('#go-digitalnomad-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_section_what_our_clients_say = document.getElementById('go-digitalnomad-section-what-our-clients-say');
  if (go_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#go-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_section_frequently_asked_questions = document.getElementById('go-digitalnomad-section-frequently-asked-questions');
  if (go_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#go-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_section_international_support = document.getElementById('go-digitalnomad-section-international-support');
  if (go_digitalnomad_section_international_support) {
    gsap.fromTo('#go-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_list_our_credentials = document.getElementById('go-digitalnomad-list-our-credentials');
  if (go_digitalnomad_list_our_credentials) {
    gsap.from('#go-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_list_related_services = document.getElementById('go-digitalnomad-list-related-services');
  if (go_digitalnomad_list_related_services) {
    gsap.from('#go-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_section_youre_in_good_hands = document.getElementById('go-digitalnomad-section-youre-in-good-hands');
  if (go_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#go-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_digitalnomad_section_21 = document.getElementById('go-digitalnomad-section-21');
  if (go_digitalnomad_section_21) {
    gsap.fromTo('#go-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('go-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (go_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#go-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #go-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_list_quick_facts = document.getElementById('go-familyreunion-list-quick-facts');
  if (go_familyreunion_list_quick_facts) {
    gsap.from('#go-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_list_common_challenges_applicants_face = document.getElementById('go-familyreunion-list-common-challenges-applicants-face');
  if (go_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#go-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_list_how_we_solve_these_challenges = document.getElementById('go-familyreunion-list-how-we-solve-these-challenges');
  if (go_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#go-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_section_residency_overview = document.getElementById('go-familyreunion-section-residency-overview');
  if (go_familyreunion_section_residency_overview) {
    gsap.fromTo('#go-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_form_who_is_this_residency_for = document.getElementById('go-familyreunion-form-who-is-this-residency-for');
  if (go_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#go-familyreunion-form-who-is-this-residency-for input, #go-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_list_required_documents = document.getElementById('go-familyreunion-list-required-documents');
  if (go_familyreunion_list_required_documents) {
    gsap.from('#go-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_list_application_process = document.getElementById('go-familyreunion-list-application-process');
  if (go_familyreunion_list_application_process) {
    gsap.from('#go-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_section_timelines_deadlines = document.getElementById('go-familyreunion-section-timelines-deadlines');
  if (go_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#go-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_section_fees_costs = document.getElementById('go-familyreunion-section-fees-costs');
  if (go_familyreunion_section_fees_costs) {
    gsap.fromTo('#go-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_list_risks_common_mistakes = document.getElementById('go-familyreunion-list-risks-common-mistakes');
  if (go_familyreunion_list_risks_common_mistakes) {
    gsap.from('#go-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_section_diy_vs_professional_assistance = document.getElementById('go-familyreunion-section-diy-vs-professional-assistance');
  if (go_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_section_gois_specific_context = document.getElementById('go-familyreunion-section-gois-specific-context');
  if (go_familyreunion_section_gois_specific_context) {
    gsap.fromTo('#go-familyreunion-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_section_what_our_clients_say = document.getElementById('go-familyreunion-section-what-our-clients-say');
  if (go_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#go-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_section_frequently_asked_questions = document.getElementById('go-familyreunion-section-frequently-asked-questions');
  if (go_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#go-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_section_international_support = document.getElementById('go-familyreunion-section-international-support');
  if (go_familyreunion_section_international_support) {
    gsap.fromTo('#go-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_list_our_credentials = document.getElementById('go-familyreunion-list-our-credentials');
  if (go_familyreunion_list_our_credentials) {
    gsap.from('#go-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_list_related_services = document.getElementById('go-familyreunion-list-related-services');
  if (go_familyreunion_list_related_services) {
    gsap.from('#go-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_section_youre_in_good_hands = document.getElementById('go-familyreunion-section-youre-in-good-hands');
  if (go_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#go-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_familyreunion_section_21 = document.getElementById('go-familyreunion-section-21');
  if (go_familyreunion_section_21) {
    gsap.fromTo('#go-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('go-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (go_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#go-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #go-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_list_quick_facts = document.getElementById('go-mercosul-list-quick-facts');
  if (go_mercosul_list_quick_facts) {
    gsap.from('#go-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_list_common_challenges_applicants_face = document.getElementById('go-mercosul-list-common-challenges-applicants-face');
  if (go_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#go-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_list_how_we_solve_these_challenges = document.getElementById('go-mercosul-list-how-we-solve-these-challenges');
  if (go_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#go-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_section_residency_overview = document.getElementById('go-mercosul-section-residency-overview');
  if (go_mercosul_section_residency_overview) {
    gsap.fromTo('#go-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_form_who_is_this_residency_for = document.getElementById('go-mercosul-form-who-is-this-residency-for');
  if (go_mercosul_form_who_is_this_residency_for) {
    gsap.from('#go-mercosul-form-who-is-this-residency-for input, #go-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_list_required_documents = document.getElementById('go-mercosul-list-required-documents');
  if (go_mercosul_list_required_documents) {
    gsap.from('#go-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_list_application_process = document.getElementById('go-mercosul-list-application-process');
  if (go_mercosul_list_application_process) {
    gsap.from('#go-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_section_timelines_deadlines = document.getElementById('go-mercosul-section-timelines-deadlines');
  if (go_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#go-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_section_fees_costs = document.getElementById('go-mercosul-section-fees-costs');
  if (go_mercosul_section_fees_costs) {
    gsap.fromTo('#go-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_list_risks_common_mistakes = document.getElementById('go-mercosul-list-risks-common-mistakes');
  if (go_mercosul_list_risks_common_mistakes) {
    gsap.from('#go-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_section_diy_vs_professional_assistance = document.getElementById('go-mercosul-section-diy-vs-professional-assistance');
  if (go_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_section_gois_specific_context = document.getElementById('go-mercosul-section-gois-specific-context');
  if (go_mercosul_section_gois_specific_context) {
    gsap.fromTo('#go-mercosul-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_section_what_our_clients_say = document.getElementById('go-mercosul-section-what-our-clients-say');
  if (go_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#go-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_section_frequently_asked_questions = document.getElementById('go-mercosul-section-frequently-asked-questions');
  if (go_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#go-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_section_international_support = document.getElementById('go-mercosul-section-international-support');
  if (go_mercosul_section_international_support) {
    gsap.fromTo('#go-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_list_our_credentials = document.getElementById('go-mercosul-list-our-credentials');
  if (go_mercosul_list_our_credentials) {
    gsap.from('#go-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_list_related_services = document.getElementById('go-mercosul-list-related-services');
  if (go_mercosul_list_related_services) {
    gsap.from('#go-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_section_youre_in_good_hands = document.getElementById('go-mercosul-section-youre-in-good-hands');
  if (go_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#go-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_mercosul_section_21 = document.getElementById('go-mercosul-section-21');
  if (go_mercosul_section_21) {
    gsap.fromTo('#go-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('go-retiree-form-retire-in-brazil-with-retiree-residency');
  if (go_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#go-retiree-form-retire-in-brazil-with-retiree-residency input, #go-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_list_quick_facts = document.getElementById('go-retiree-list-quick-facts');
  if (go_retiree_list_quick_facts) {
    gsap.from('#go-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_list_common_challenges_applicants_face = document.getElementById('go-retiree-list-common-challenges-applicants-face');
  if (go_retiree_list_common_challenges_applicants_face) {
    gsap.from('#go-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_list_how_we_solve_these_challenges = document.getElementById('go-retiree-list-how-we-solve-these-challenges');
  if (go_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#go-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_section_residency_overview = document.getElementById('go-retiree-section-residency-overview');
  if (go_retiree_section_residency_overview) {
    gsap.fromTo('#go-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_form_who_is_this_residency_for = document.getElementById('go-retiree-form-who-is-this-residency-for');
  if (go_retiree_form_who_is_this_residency_for) {
    gsap.from('#go-retiree-form-who-is-this-residency-for input, #go-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_list_required_documents = document.getElementById('go-retiree-list-required-documents');
  if (go_retiree_list_required_documents) {
    gsap.from('#go-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_list_application_process = document.getElementById('go-retiree-list-application-process');
  if (go_retiree_list_application_process) {
    gsap.from('#go-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_section_timelines_deadlines = document.getElementById('go-retiree-section-timelines-deadlines');
  if (go_retiree_section_timelines_deadlines) {
    gsap.fromTo('#go-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_section_fees_costs = document.getElementById('go-retiree-section-fees-costs');
  if (go_retiree_section_fees_costs) {
    gsap.fromTo('#go-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_list_risks_common_mistakes = document.getElementById('go-retiree-list-risks-common-mistakes');
  if (go_retiree_list_risks_common_mistakes) {
    gsap.from('#go-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_section_diy_vs_professional_assistance = document.getElementById('go-retiree-section-diy-vs-professional-assistance');
  if (go_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_section_gois_specific_context = document.getElementById('go-retiree-section-gois-specific-context');
  if (go_retiree_section_gois_specific_context) {
    gsap.fromTo('#go-retiree-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_section_what_our_clients_say = document.getElementById('go-retiree-section-what-our-clients-say');
  if (go_retiree_section_what_our_clients_say) {
    gsap.fromTo('#go-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_section_frequently_asked_questions = document.getElementById('go-retiree-section-frequently-asked-questions');
  if (go_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#go-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_section_international_support = document.getElementById('go-retiree-section-international-support');
  if (go_retiree_section_international_support) {
    gsap.fromTo('#go-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_list_our_credentials = document.getElementById('go-retiree-list-our-credentials');
  if (go_retiree_list_our_credentials) {
    gsap.from('#go-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_list_related_services = document.getElementById('go-retiree-list-related-services');
  if (go_retiree_list_related_services) {
    gsap.from('#go-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_section_youre_in_good_hands = document.getElementById('go-retiree-section-youre-in-good-hands');
  if (go_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#go-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_retiree_section_21 = document.getElementById('go-retiree-section-21');
  if (go_retiree_section_21) {
    gsap.fromTo('#go-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('go-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (go_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#go-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #go-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_list_quick_facts = document.getElementById('go-volunteer-list-quick-facts');
  if (go_volunteer_list_quick_facts) {
    gsap.from('#go-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_list_common_challenges_applicants_face = document.getElementById('go-volunteer-list-common-challenges-applicants-face');
  if (go_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#go-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_list_how_we_solve_these_challenges = document.getElementById('go-volunteer-list-how-we-solve-these-challenges');
  if (go_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#go-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_section_residency_overview = document.getElementById('go-volunteer-section-residency-overview');
  if (go_volunteer_section_residency_overview) {
    gsap.fromTo('#go-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_form_who_is_this_residency_for = document.getElementById('go-volunteer-form-who-is-this-residency-for');
  if (go_volunteer_form_who_is_this_residency_for) {
    gsap.from('#go-volunteer-form-who-is-this-residency-for input, #go-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_list_required_documents = document.getElementById('go-volunteer-list-required-documents');
  if (go_volunteer_list_required_documents) {
    gsap.from('#go-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_list_application_process = document.getElementById('go-volunteer-list-application-process');
  if (go_volunteer_list_application_process) {
    gsap.from('#go-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_section_timelines_deadlines = document.getElementById('go-volunteer-section-timelines-deadlines');
  if (go_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#go-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_section_fees_costs = document.getElementById('go-volunteer-section-fees-costs');
  if (go_volunteer_section_fees_costs) {
    gsap.fromTo('#go-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_list_risks_common_mistakes = document.getElementById('go-volunteer-list-risks-common-mistakes');
  if (go_volunteer_list_risks_common_mistakes) {
    gsap.from('#go-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_section_diy_vs_professional_assistance = document.getElementById('go-volunteer-section-diy-vs-professional-assistance');
  if (go_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_section_gois_specific_context = document.getElementById('go-volunteer-section-gois-specific-context');
  if (go_volunteer_section_gois_specific_context) {
    gsap.fromTo('#go-volunteer-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_section_what_our_clients_say = document.getElementById('go-volunteer-section-what-our-clients-say');
  if (go_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#go-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_section_frequently_asked_questions = document.getElementById('go-volunteer-section-frequently-asked-questions');
  if (go_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#go-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_section_international_support = document.getElementById('go-volunteer-section-international-support');
  if (go_volunteer_section_international_support) {
    gsap.fromTo('#go-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_list_our_credentials = document.getElementById('go-volunteer-list-our-credentials');
  if (go_volunteer_list_our_credentials) {
    gsap.from('#go-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_list_related_services = document.getElementById('go-volunteer-list-related-services');
  if (go_volunteer_list_related_services) {
    gsap.from('#go-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_section_youre_in_good_hands = document.getElementById('go-volunteer-section-youre-in-good-hands');
  if (go_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#go-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_volunteer_section_21 = document.getElementById('go-volunteer-section-21');
  if (go_volunteer_section_21) {
    gsap.fromTo('#go-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('go-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (go_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#go-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #go-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_list_quick_facts = document.getElementById('go-skilledworker-list-quick-facts');
  if (go_skilledworker_list_quick_facts) {
    gsap.from('#go-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_list_common_challenges_applicants_face = document.getElementById('go-skilledworker-list-common-challenges-applicants-face');
  if (go_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#go-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_list_how_we_solve_these_challenges = document.getElementById('go-skilledworker-list-how-we-solve-these-challenges');
  if (go_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#go-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_section_residency_overview = document.getElementById('go-skilledworker-section-residency-overview');
  if (go_skilledworker_section_residency_overview) {
    gsap.fromTo('#go-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_form_who_is_this_residency_for = document.getElementById('go-skilledworker-form-who-is-this-residency-for');
  if (go_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#go-skilledworker-form-who-is-this-residency-for input, #go-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_list_required_documents = document.getElementById('go-skilledworker-list-required-documents');
  if (go_skilledworker_list_required_documents) {
    gsap.from('#go-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_list_application_process = document.getElementById('go-skilledworker-list-application-process');
  if (go_skilledworker_list_application_process) {
    gsap.from('#go-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_section_timelines_deadlines = document.getElementById('go-skilledworker-section-timelines-deadlines');
  if (go_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#go-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_section_fees_costs = document.getElementById('go-skilledworker-section-fees-costs');
  if (go_skilledworker_section_fees_costs) {
    gsap.fromTo('#go-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_list_risks_common_mistakes = document.getElementById('go-skilledworker-list-risks-common-mistakes');
  if (go_skilledworker_list_risks_common_mistakes) {
    gsap.from('#go-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_section_diy_vs_professional_assistance = document.getElementById('go-skilledworker-section-diy-vs-professional-assistance');
  if (go_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_section_gois_specific_context = document.getElementById('go-skilledworker-section-gois-specific-context');
  if (go_skilledworker_section_gois_specific_context) {
    gsap.fromTo('#go-skilledworker-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_section_what_our_clients_say = document.getElementById('go-skilledworker-section-what-our-clients-say');
  if (go_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#go-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_section_frequently_asked_questions = document.getElementById('go-skilledworker-section-frequently-asked-questions');
  if (go_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#go-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_section_international_support = document.getElementById('go-skilledworker-section-international-support');
  if (go_skilledworker_section_international_support) {
    gsap.fromTo('#go-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_list_our_credentials = document.getElementById('go-skilledworker-list-our-credentials');
  if (go_skilledworker_list_our_credentials) {
    gsap.from('#go-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_list_related_services = document.getElementById('go-skilledworker-list-related-services');
  if (go_skilledworker_list_related_services) {
    gsap.from('#go-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_section_youre_in_good_hands = document.getElementById('go-skilledworker-section-youre-in-good-hands');
  if (go_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#go-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_skilledworker_section_21 = document.getElementById('go-skilledworker-section-21');
  if (go_skilledworker_section_21) {
    gsap.fromTo('#go-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('go-religious-form-religious-residency-in-brazil-for-missions');
  if (go_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#go-religious-form-religious-residency-in-brazil-for-missions input, #go-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_list_quick_facts = document.getElementById('go-religious-list-quick-facts');
  if (go_religious_list_quick_facts) {
    gsap.from('#go-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_list_common_challenges_applicants_face = document.getElementById('go-religious-list-common-challenges-applicants-face');
  if (go_religious_list_common_challenges_applicants_face) {
    gsap.from('#go-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_list_how_we_solve_these_challenges = document.getElementById('go-religious-list-how-we-solve-these-challenges');
  if (go_religious_list_how_we_solve_these_challenges) {
    gsap.from('#go-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_section_residency_overview = document.getElementById('go-religious-section-residency-overview');
  if (go_religious_section_residency_overview) {
    gsap.fromTo('#go-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_form_who_is_this_residency_for = document.getElementById('go-religious-form-who-is-this-residency-for');
  if (go_religious_form_who_is_this_residency_for) {
    gsap.from('#go-religious-form-who-is-this-residency-for input, #go-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_list_required_documents = document.getElementById('go-religious-list-required-documents');
  if (go_religious_list_required_documents) {
    gsap.from('#go-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_list_application_process = document.getElementById('go-religious-list-application-process');
  if (go_religious_list_application_process) {
    gsap.from('#go-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_section_timelines_deadlines = document.getElementById('go-religious-section-timelines-deadlines');
  if (go_religious_section_timelines_deadlines) {
    gsap.fromTo('#go-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_section_fees_costs = document.getElementById('go-religious-section-fees-costs');
  if (go_religious_section_fees_costs) {
    gsap.fromTo('#go-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_list_risks_common_mistakes = document.getElementById('go-religious-list-risks-common-mistakes');
  if (go_religious_list_risks_common_mistakes) {
    gsap.from('#go-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_section_diy_vs_professional_assistance = document.getElementById('go-religious-section-diy-vs-professional-assistance');
  if (go_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_section_gois_specific_context = document.getElementById('go-religious-section-gois-specific-context');
  if (go_religious_section_gois_specific_context) {
    gsap.fromTo('#go-religious-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_section_what_our_clients_say = document.getElementById('go-religious-section-what-our-clients-say');
  if (go_religious_section_what_our_clients_say) {
    gsap.fromTo('#go-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_section_frequently_asked_questions = document.getElementById('go-religious-section-frequently-asked-questions');
  if (go_religious_section_frequently_asked_questions) {
    gsap.fromTo('#go-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_section_international_support = document.getElementById('go-religious-section-international-support');
  if (go_religious_section_international_support) {
    gsap.fromTo('#go-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_list_our_credentials = document.getElementById('go-religious-list-our-credentials');
  if (go_religious_list_our_credentials) {
    gsap.from('#go-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_list_related_services = document.getElementById('go-religious-list-related-services');
  if (go_religious_list_related_services) {
    gsap.from('#go-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_section_youre_in_good_hands = document.getElementById('go-religious-section-youre-in-good-hands');
  if (go_religious_section_youre_in_good_hands) {
    gsap.fromTo('#go-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_religious_section_21 = document.getElementById('go-religious-section-21');
  if (go_religious_section_21) {
    gsap.fromTo('#go-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('go-investor-form-gain-residency-in-brazil-through-investment');
  if (go_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#go-investor-form-gain-residency-in-brazil-through-investment input, #go-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_list_quick_facts = document.getElementById('go-investor-list-quick-facts');
  if (go_investor_list_quick_facts) {
    gsap.from('#go-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_list_common_challenges_applicants_face = document.getElementById('go-investor-list-common-challenges-applicants-face');
  if (go_investor_list_common_challenges_applicants_face) {
    gsap.from('#go-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_list_how_we_solve_these_challenges = document.getElementById('go-investor-list-how-we-solve-these-challenges');
  if (go_investor_list_how_we_solve_these_challenges) {
    gsap.from('#go-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_section_residency_overview = document.getElementById('go-investor-section-residency-overview');
  if (go_investor_section_residency_overview) {
    gsap.fromTo('#go-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_form_who_is_this_residency_for = document.getElementById('go-investor-form-who-is-this-residency-for');
  if (go_investor_form_who_is_this_residency_for) {
    gsap.from('#go-investor-form-who-is-this-residency-for input, #go-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_list_required_documents = document.getElementById('go-investor-list-required-documents');
  if (go_investor_list_required_documents) {
    gsap.from('#go-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_list_application_process = document.getElementById('go-investor-list-application-process');
  if (go_investor_list_application_process) {
    gsap.from('#go-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_section_timelines_deadlines = document.getElementById('go-investor-section-timelines-deadlines');
  if (go_investor_section_timelines_deadlines) {
    gsap.fromTo('#go-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_section_fees_costs = document.getElementById('go-investor-section-fees-costs');
  if (go_investor_section_fees_costs) {
    gsap.fromTo('#go-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_list_risks_common_mistakes = document.getElementById('go-investor-list-risks-common-mistakes');
  if (go_investor_list_risks_common_mistakes) {
    gsap.from('#go-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_section_diy_vs_professional_assistance = document.getElementById('go-investor-section-diy-vs-professional-assistance');
  if (go_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_section_gois_specific_context = document.getElementById('go-investor-section-gois-specific-context');
  if (go_investor_section_gois_specific_context) {
    gsap.fromTo('#go-investor-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_section_what_our_clients_say = document.getElementById('go-investor-section-what-our-clients-say');
  if (go_investor_section_what_our_clients_say) {
    gsap.fromTo('#go-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_section_frequently_asked_questions = document.getElementById('go-investor-section-frequently-asked-questions');
  if (go_investor_section_frequently_asked_questions) {
    gsap.fromTo('#go-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_section_international_support = document.getElementById('go-investor-section-international-support');
  if (go_investor_section_international_support) {
    gsap.fromTo('#go-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_list_our_credentials = document.getElementById('go-investor-list-our-credentials');
  if (go_investor_list_our_credentials) {
    gsap.from('#go-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_list_related_services = document.getElementById('go-investor-list-related-services');
  if (go_investor_list_related_services) {
    gsap.from('#go-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_section_youre_in_good_hands = document.getElementById('go-investor-section-youre-in-good-hands');
  if (go_investor_section_youre_in_good_hands) {
    gsap.fromTo('#go-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_investor_section_21 = document.getElementById('go-investor-section-21');
  if (go_investor_section_21) {
    gsap.fromTo('#go-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('go-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (go_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#go-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #go-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_list_quick_facts = document.getElementById('go-healthtreatment-list-quick-facts');
  if (go_healthtreatment_list_quick_facts) {
    gsap.from('#go-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_list_common_challenges_applicants_face = document.getElementById('go-healthtreatment-list-common-challenges-applicants-face');
  if (go_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#go-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('go-healthtreatment-list-how-we-solve-these-challenges');
  if (go_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#go-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_section_residency_overview = document.getElementById('go-healthtreatment-section-residency-overview');
  if (go_healthtreatment_section_residency_overview) {
    gsap.fromTo('#go-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_form_who_is_this_residency_for = document.getElementById('go-healthtreatment-form-who-is-this-residency-for');
  if (go_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#go-healthtreatment-form-who-is-this-residency-for input, #go-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_list_required_documents = document.getElementById('go-healthtreatment-list-required-documents');
  if (go_healthtreatment_list_required_documents) {
    gsap.from('#go-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_list_application_process = document.getElementById('go-healthtreatment-list-application-process');
  if (go_healthtreatment_list_application_process) {
    gsap.from('#go-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_section_timelines_deadlines = document.getElementById('go-healthtreatment-section-timelines-deadlines');
  if (go_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#go-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_section_fees_costs = document.getElementById('go-healthtreatment-section-fees-costs');
  if (go_healthtreatment_section_fees_costs) {
    gsap.fromTo('#go-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_list_risks_common_mistakes = document.getElementById('go-healthtreatment-list-risks-common-mistakes');
  if (go_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#go-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('go-healthtreatment-section-diy-vs-professional-assistance');
  if (go_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_section_gois_specific_context = document.getElementById('go-healthtreatment-section-gois-specific-context');
  if (go_healthtreatment_section_gois_specific_context) {
    gsap.fromTo('#go-healthtreatment-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_section_what_our_clients_say = document.getElementById('go-healthtreatment-section-what-our-clients-say');
  if (go_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#go-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_section_frequently_asked_questions = document.getElementById('go-healthtreatment-section-frequently-asked-questions');
  if (go_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#go-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_section_international_support = document.getElementById('go-healthtreatment-section-international-support');
  if (go_healthtreatment_section_international_support) {
    gsap.fromTo('#go-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_list_our_credentials = document.getElementById('go-healthtreatment-list-our-credentials');
  if (go_healthtreatment_list_our_credentials) {
    gsap.from('#go-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_list_related_services = document.getElementById('go-healthtreatment-list-related-services');
  if (go_healthtreatment_list_related_services) {
    gsap.from('#go-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_section_youre_in_good_hands = document.getElementById('go-healthtreatment-section-youre-in-good-hands');
  if (go_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#go-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_healthtreatment_section_21 = document.getElementById('go-healthtreatment-section-21');
  if (go_healthtreatment_section_21) {
    gsap.fromTo('#go-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('go-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (go_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#go-cplp-form-residency-for-cplp-citizens-in-brazil input, #go-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_list_quick_facts = document.getElementById('go-cplp-list-quick-facts');
  if (go_cplp_list_quick_facts) {
    gsap.from('#go-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_list_common_challenges_applicants_face = document.getElementById('go-cplp-list-common-challenges-applicants-face');
  if (go_cplp_list_common_challenges_applicants_face) {
    gsap.from('#go-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_list_how_we_solve_these_challenges = document.getElementById('go-cplp-list-how-we-solve-these-challenges');
  if (go_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#go-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_section_residency_overview = document.getElementById('go-cplp-section-residency-overview');
  if (go_cplp_section_residency_overview) {
    gsap.fromTo('#go-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_form_who_is_this_residency_for = document.getElementById('go-cplp-form-who-is-this-residency-for');
  if (go_cplp_form_who_is_this_residency_for) {
    gsap.from('#go-cplp-form-who-is-this-residency-for input, #go-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_list_required_documents = document.getElementById('go-cplp-list-required-documents');
  if (go_cplp_list_required_documents) {
    gsap.from('#go-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_list_application_process = document.getElementById('go-cplp-list-application-process');
  if (go_cplp_list_application_process) {
    gsap.from('#go-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_section_timelines_deadlines = document.getElementById('go-cplp-section-timelines-deadlines');
  if (go_cplp_section_timelines_deadlines) {
    gsap.fromTo('#go-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_section_fees_costs = document.getElementById('go-cplp-section-fees-costs');
  if (go_cplp_section_fees_costs) {
    gsap.fromTo('#go-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_list_risks_common_mistakes = document.getElementById('go-cplp-list-risks-common-mistakes');
  if (go_cplp_list_risks_common_mistakes) {
    gsap.from('#go-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_section_diy_vs_professional_assistance = document.getElementById('go-cplp-section-diy-vs-professional-assistance');
  if (go_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_section_gois_specific_context = document.getElementById('go-cplp-section-gois-specific-context');
  if (go_cplp_section_gois_specific_context) {
    gsap.fromTo('#go-cplp-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_section_what_our_clients_say = document.getElementById('go-cplp-section-what-our-clients-say');
  if (go_cplp_section_what_our_clients_say) {
    gsap.fromTo('#go-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_section_frequently_asked_questions = document.getElementById('go-cplp-section-frequently-asked-questions');
  if (go_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#go-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_section_international_support = document.getElementById('go-cplp-section-international-support');
  if (go_cplp_section_international_support) {
    gsap.fromTo('#go-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_list_our_credentials = document.getElementById('go-cplp-list-our-credentials');
  if (go_cplp_list_our_credentials) {
    gsap.from('#go-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_list_related_services = document.getElementById('go-cplp-list-related-services');
  if (go_cplp_list_related_services) {
    gsap.from('#go-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_section_youre_in_good_hands = document.getElementById('go-cplp-section-youre-in-good-hands');
  if (go_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#go-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_cplp_section_21 = document.getElementById('go-cplp-section-21');
  if (go_cplp_section_21) {
    gsap.fromTo('#go-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('go-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (go_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#go-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #go-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_list_quick_facts = document.getElementById('go-youthexchange-list-quick-facts');
  if (go_youthexchange_list_quick_facts) {
    gsap.from('#go-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_list_common_challenges_applicants_face = document.getElementById('go-youthexchange-list-common-challenges-applicants-face');
  if (go_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#go-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_list_how_we_solve_these_challenges = document.getElementById('go-youthexchange-list-how-we-solve-these-challenges');
  if (go_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#go-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_section_residency_overview = document.getElementById('go-youthexchange-section-residency-overview');
  if (go_youthexchange_section_residency_overview) {
    gsap.fromTo('#go-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_form_who_is_this_residency_for = document.getElementById('go-youthexchange-form-who-is-this-residency-for');
  if (go_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#go-youthexchange-form-who-is-this-residency-for input, #go-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_list_required_documents = document.getElementById('go-youthexchange-list-required-documents');
  if (go_youthexchange_list_required_documents) {
    gsap.from('#go-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_list_application_process = document.getElementById('go-youthexchange-list-application-process');
  if (go_youthexchange_list_application_process) {
    gsap.from('#go-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_section_timelines_deadlines = document.getElementById('go-youthexchange-section-timelines-deadlines');
  if (go_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#go-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_section_fees_costs = document.getElementById('go-youthexchange-section-fees-costs');
  if (go_youthexchange_section_fees_costs) {
    gsap.fromTo('#go-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_list_risks_common_mistakes = document.getElementById('go-youthexchange-list-risks-common-mistakes');
  if (go_youthexchange_list_risks_common_mistakes) {
    gsap.from('#go-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_section_diy_vs_professional_assistance = document.getElementById('go-youthexchange-section-diy-vs-professional-assistance');
  if (go_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_section_gois_specific_context = document.getElementById('go-youthexchange-section-gois-specific-context');
  if (go_youthexchange_section_gois_specific_context) {
    gsap.fromTo('#go-youthexchange-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_section_what_our_clients_say = document.getElementById('go-youthexchange-section-what-our-clients-say');
  if (go_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#go-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_section_frequently_asked_questions = document.getElementById('go-youthexchange-section-frequently-asked-questions');
  if (go_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#go-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_section_international_support = document.getElementById('go-youthexchange-section-international-support');
  if (go_youthexchange_section_international_support) {
    gsap.fromTo('#go-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_list_our_credentials = document.getElementById('go-youthexchange-list-our-credentials');
  if (go_youthexchange_list_our_credentials) {
    gsap.from('#go-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_list_related_services = document.getElementById('go-youthexchange-list-related-services');
  if (go_youthexchange_list_related_services) {
    gsap.from('#go-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_section_youre_in_good_hands = document.getElementById('go-youthexchange-section-youre-in-good-hands');
  if (go_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#go-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_youthexchange_section_21 = document.getElementById('go-youthexchange-section-21');
  if (go_youthexchange_section_21) {
    gsap.fromTo('#go-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('go-work-form-work-and-reside-in-brazil-with-work-residency');
  if (go_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#go-work-form-work-and-reside-in-brazil-with-work-residency input, #go-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_list_quick_facts = document.getElementById('go-work-list-quick-facts');
  if (go_work_list_quick_facts) {
    gsap.from('#go-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_list_common_challenges_applicants_face = document.getElementById('go-work-list-common-challenges-applicants-face');
  if (go_work_list_common_challenges_applicants_face) {
    gsap.from('#go-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_list_how_we_solve_these_challenges = document.getElementById('go-work-list-how-we-solve-these-challenges');
  if (go_work_list_how_we_solve_these_challenges) {
    gsap.from('#go-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_section_residency_overview = document.getElementById('go-work-section-residency-overview');
  if (go_work_section_residency_overview) {
    gsap.fromTo('#go-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_form_who_is_this_residency_for = document.getElementById('go-work-form-who-is-this-residency-for');
  if (go_work_form_who_is_this_residency_for) {
    gsap.from('#go-work-form-who-is-this-residency-for input, #go-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_list_required_documents = document.getElementById('go-work-list-required-documents');
  if (go_work_list_required_documents) {
    gsap.from('#go-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_list_application_process = document.getElementById('go-work-list-application-process');
  if (go_work_list_application_process) {
    gsap.from('#go-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_section_timelines_deadlines = document.getElementById('go-work-section-timelines-deadlines');
  if (go_work_section_timelines_deadlines) {
    gsap.fromTo('#go-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_section_fees_costs = document.getElementById('go-work-section-fees-costs');
  if (go_work_section_fees_costs) {
    gsap.fromTo('#go-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_list_risks_common_mistakes = document.getElementById('go-work-list-risks-common-mistakes');
  if (go_work_list_risks_common_mistakes) {
    gsap.from('#go-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_section_diy_vs_professional_assistance = document.getElementById('go-work-section-diy-vs-professional-assistance');
  if (go_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_section_gois_specific_context = document.getElementById('go-work-section-gois-specific-context');
  if (go_work_section_gois_specific_context) {
    gsap.fromTo('#go-work-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_section_what_our_clients_say = document.getElementById('go-work-section-what-our-clients-say');
  if (go_work_section_what_our_clients_say) {
    gsap.fromTo('#go-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_section_frequently_asked_questions = document.getElementById('go-work-section-frequently-asked-questions');
  if (go_work_section_frequently_asked_questions) {
    gsap.fromTo('#go-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_section_international_support = document.getElementById('go-work-section-international-support');
  if (go_work_section_international_support) {
    gsap.fromTo('#go-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_list_our_credentials = document.getElementById('go-work-list-our-credentials');
  if (go_work_list_our_credentials) {
    gsap.from('#go-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_list_related_services = document.getElementById('go-work-list-related-services');
  if (go_work_list_related_services) {
    gsap.from('#go-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_section_youre_in_good_hands = document.getElementById('go-work-section-youre-in-good-hands');
  if (go_work_section_youre_in_good_hands) {
    gsap.fromTo('#go-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_work_section_21 = document.getElementById('go-work-section-21');
  if (go_work_section_21) {
    gsap.fromTo('#go-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('go-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (go_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#go-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #go-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_list_quick_facts = document.getElementById('go-startup-list-quick-facts');
  if (go_startup_list_quick_facts) {
    gsap.from('#go-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_list_common_challenges_applicants_face = document.getElementById('go-startup-list-common-challenges-applicants-face');
  if (go_startup_list_common_challenges_applicants_face) {
    gsap.from('#go-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_list_how_we_solve_these_challenges = document.getElementById('go-startup-list-how-we-solve-these-challenges');
  if (go_startup_list_how_we_solve_these_challenges) {
    gsap.from('#go-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_section_visa_overview = document.getElementById('go-startup-section-visa-overview');
  if (go_startup_section_visa_overview) {
    gsap.fromTo('#go-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_form_who_is_this_visa_for = document.getElementById('go-startup-form-who-is-this-visa-for');
  if (go_startup_form_who_is_this_visa_for) {
    gsap.from('#go-startup-form-who-is-this-visa-for input, #go-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_list_required_documents = document.getElementById('go-startup-list-required-documents');
  if (go_startup_list_required_documents) {
    gsap.from('#go-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_list_application_process = document.getElementById('go-startup-list-application-process');
  if (go_startup_list_application_process) {
    gsap.from('#go-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_section_timelines_deadlines = document.getElementById('go-startup-section-timelines-deadlines');
  if (go_startup_section_timelines_deadlines) {
    gsap.fromTo('#go-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_section_fees_costs = document.getElementById('go-startup-section-fees-costs');
  if (go_startup_section_fees_costs) {
    gsap.fromTo('#go-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_list_risks_common_mistakes = document.getElementById('go-startup-list-risks-common-mistakes');
  if (go_startup_list_risks_common_mistakes) {
    gsap.from('#go-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_section_diy_vs_professional_assistance = document.getElementById('go-startup-section-diy-vs-professional-assistance');
  if (go_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_section_gois_specific_context = document.getElementById('go-startup-section-gois-specific-context');
  if (go_startup_section_gois_specific_context) {
    gsap.fromTo('#go-startup-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_section_what_our_clients_say = document.getElementById('go-startup-section-what-our-clients-say');
  if (go_startup_section_what_our_clients_say) {
    gsap.fromTo('#go-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_section_frequently_asked_questions = document.getElementById('go-startup-section-frequently-asked-questions');
  if (go_startup_section_frequently_asked_questions) {
    gsap.fromTo('#go-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_section_international_support = document.getElementById('go-startup-section-international-support');
  if (go_startup_section_international_support) {
    gsap.fromTo('#go-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_list_our_credentials = document.getElementById('go-startup-list-our-credentials');
  if (go_startup_list_our_credentials) {
    gsap.from('#go-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_list_related_services = document.getElementById('go-startup-list-related-services');
  if (go_startup_list_related_services) {
    gsap.from('#go-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_section_youre_in_good_hands = document.getElementById('go-startup-section-youre-in-good-hands');
  if (go_startup_section_youre_in_good_hands) {
    gsap.fromTo('#go-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_startup_section_21 = document.getElementById('go-startup-section-21');
  if (go_startup_section_21) {
    gsap.fromTo('#go-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('go-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (go_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#go-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #go-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_list_quick_facts = document.getElementById('go-family-list-quick-facts');
  if (go_family_list_quick_facts) {
    gsap.from('#go-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_list_common_challenges_applicants_face = document.getElementById('go-family-list-common-challenges-applicants-face');
  if (go_family_list_common_challenges_applicants_face) {
    gsap.from('#go-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_list_how_we_solve_these_challenges = document.getElementById('go-family-list-how-we-solve-these-challenges');
  if (go_family_list_how_we_solve_these_challenges) {
    gsap.from('#go-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_section_visa_overview = document.getElementById('go-family-section-visa-overview');
  if (go_family_section_visa_overview) {
    gsap.fromTo('#go-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_form_who_is_this_visa_for = document.getElementById('go-family-form-who-is-this-visa-for');
  if (go_family_form_who_is_this_visa_for) {
    gsap.from('#go-family-form-who-is-this-visa-for input, #go-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_list_required_documents = document.getElementById('go-family-list-required-documents');
  if (go_family_list_required_documents) {
    gsap.from('#go-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_list_application_process = document.getElementById('go-family-list-application-process');
  if (go_family_list_application_process) {
    gsap.from('#go-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_section_timelines_deadlines = document.getElementById('go-family-section-timelines-deadlines');
  if (go_family_section_timelines_deadlines) {
    gsap.fromTo('#go-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_section_fees_costs = document.getElementById('go-family-section-fees-costs');
  if (go_family_section_fees_costs) {
    gsap.fromTo('#go-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_list_risks_common_mistakes = document.getElementById('go-family-list-risks-common-mistakes');
  if (go_family_list_risks_common_mistakes) {
    gsap.from('#go-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_section_diy_vs_professional_assistance = document.getElementById('go-family-section-diy-vs-professional-assistance');
  if (go_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_section_gois_specific_context = document.getElementById('go-family-section-gois-specific-context');
  if (go_family_section_gois_specific_context) {
    gsap.fromTo('#go-family-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_section_what_our_clients_say = document.getElementById('go-family-section-what-our-clients-say');
  if (go_family_section_what_our_clients_say) {
    gsap.fromTo('#go-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_section_frequently_asked_questions = document.getElementById('go-family-section-frequently-asked-questions');
  if (go_family_section_frequently_asked_questions) {
    gsap.fromTo('#go-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_section_international_support = document.getElementById('go-family-section-international-support');
  if (go_family_section_international_support) {
    gsap.fromTo('#go-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_list_our_credentials = document.getElementById('go-family-list-our-credentials');
  if (go_family_list_our_credentials) {
    gsap.from('#go-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_list_related_services = document.getElementById('go-family-list-related-services');
  if (go_family_list_related_services) {
    gsap.from('#go-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_section_youre_in_good_hands = document.getElementById('go-family-section-youre-in-good-hands');
  if (go_family_section_youre_in_good_hands) {
    gsap.fromTo('#go-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_family_section_21 = document.getElementById('go-family-section-21');
  if (go_family_section_21) {
    gsap.fromTo('#go-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('go-sports-form-compete-in-brazil-with-the-sports-visa');
  if (go_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#go-sports-form-compete-in-brazil-with-the-sports-visa input, #go-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_list_quick_facts = document.getElementById('go-sports-list-quick-facts');
  if (go_sports_list_quick_facts) {
    gsap.from('#go-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_list_common_challenges_applicants_face = document.getElementById('go-sports-list-common-challenges-applicants-face');
  if (go_sports_list_common_challenges_applicants_face) {
    gsap.from('#go-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_list_how_we_solve_these_challenges = document.getElementById('go-sports-list-how-we-solve-these-challenges');
  if (go_sports_list_how_we_solve_these_challenges) {
    gsap.from('#go-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_section_visa_overview = document.getElementById('go-sports-section-visa-overview');
  if (go_sports_section_visa_overview) {
    gsap.fromTo('#go-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_form_who_is_this_visa_for = document.getElementById('go-sports-form-who-is-this-visa-for');
  if (go_sports_form_who_is_this_visa_for) {
    gsap.from('#go-sports-form-who-is-this-visa-for input, #go-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_list_required_documents = document.getElementById('go-sports-list-required-documents');
  if (go_sports_list_required_documents) {
    gsap.from('#go-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_list_application_process = document.getElementById('go-sports-list-application-process');
  if (go_sports_list_application_process) {
    gsap.from('#go-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_section_timelines_deadlines = document.getElementById('go-sports-section-timelines-deadlines');
  if (go_sports_section_timelines_deadlines) {
    gsap.fromTo('#go-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_section_fees_costs = document.getElementById('go-sports-section-fees-costs');
  if (go_sports_section_fees_costs) {
    gsap.fromTo('#go-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_list_risks_common_mistakes = document.getElementById('go-sports-list-risks-common-mistakes');
  if (go_sports_list_risks_common_mistakes) {
    gsap.from('#go-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_section_diy_vs_professional_assistance = document.getElementById('go-sports-section-diy-vs-professional-assistance');
  if (go_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_section_gois_specific_context = document.getElementById('go-sports-section-gois-specific-context');
  if (go_sports_section_gois_specific_context) {
    gsap.fromTo('#go-sports-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_section_what_our_clients_say = document.getElementById('go-sports-section-what-our-clients-say');
  if (go_sports_section_what_our_clients_say) {
    gsap.fromTo('#go-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_section_frequently_asked_questions = document.getElementById('go-sports-section-frequently-asked-questions');
  if (go_sports_section_frequently_asked_questions) {
    gsap.fromTo('#go-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_section_international_support = document.getElementById('go-sports-section-international-support');
  if (go_sports_section_international_support) {
    gsap.fromTo('#go-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_list_our_credentials = document.getElementById('go-sports-list-our-credentials');
  if (go_sports_list_our_credentials) {
    gsap.from('#go-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_list_related_services = document.getElementById('go-sports-list-related-services');
  if (go_sports_list_related_services) {
    gsap.from('#go-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_section_youre_in_good_hands = document.getElementById('go-sports-section-youre-in-good-hands');
  if (go_sports_section_youre_in_good_hands) {
    gsap.fromTo('#go-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_sports_section_21 = document.getElementById('go-sports-section-21');
  if (go_sports_section_21) {
    gsap.fromTo('#go-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('go-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (go_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#go-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #go-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_list_quick_facts = document.getElementById('go-medical-list-quick-facts');
  if (go_medical_list_quick_facts) {
    gsap.from('#go-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_list_common_challenges_applicants_face = document.getElementById('go-medical-list-common-challenges-applicants-face');
  if (go_medical_list_common_challenges_applicants_face) {
    gsap.from('#go-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_list_how_we_solve_these_challenges = document.getElementById('go-medical-list-how-we-solve-these-challenges');
  if (go_medical_list_how_we_solve_these_challenges) {
    gsap.from('#go-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_section_visa_overview = document.getElementById('go-medical-section-visa-overview');
  if (go_medical_section_visa_overview) {
    gsap.fromTo('#go-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_form_who_is_this_visa_for = document.getElementById('go-medical-form-who-is-this-visa-for');
  if (go_medical_form_who_is_this_visa_for) {
    gsap.from('#go-medical-form-who-is-this-visa-for input, #go-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_list_required_documents = document.getElementById('go-medical-list-required-documents');
  if (go_medical_list_required_documents) {
    gsap.from('#go-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_list_application_process = document.getElementById('go-medical-list-application-process');
  if (go_medical_list_application_process) {
    gsap.from('#go-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_section_timelines_deadlines = document.getElementById('go-medical-section-timelines-deadlines');
  if (go_medical_section_timelines_deadlines) {
    gsap.fromTo('#go-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_section_fees_costs = document.getElementById('go-medical-section-fees-costs');
  if (go_medical_section_fees_costs) {
    gsap.fromTo('#go-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_list_risks_common_mistakes = document.getElementById('go-medical-list-risks-common-mistakes');
  if (go_medical_list_risks_common_mistakes) {
    gsap.from('#go-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_section_diy_vs_professional_assistance = document.getElementById('go-medical-section-diy-vs-professional-assistance');
  if (go_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_section_gois_specific_context = document.getElementById('go-medical-section-gois-specific-context');
  if (go_medical_section_gois_specific_context) {
    gsap.fromTo('#go-medical-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_section_what_our_clients_say = document.getElementById('go-medical-section-what-our-clients-say');
  if (go_medical_section_what_our_clients_say) {
    gsap.fromTo('#go-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_section_frequently_asked_questions = document.getElementById('go-medical-section-frequently-asked-questions');
  if (go_medical_section_frequently_asked_questions) {
    gsap.fromTo('#go-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_section_international_support = document.getElementById('go-medical-section-international-support');
  if (go_medical_section_international_support) {
    gsap.fromTo('#go-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_list_our_credentials = document.getElementById('go-medical-list-our-credentials');
  if (go_medical_list_our_credentials) {
    gsap.from('#go-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_list_related_services = document.getElementById('go-medical-list-related-services');
  if (go_medical_list_related_services) {
    gsap.from('#go-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_section_youre_in_good_hands = document.getElementById('go-medical-section-youre-in-good-hands');
  if (go_medical_section_youre_in_good_hands) {
    gsap.fromTo('#go-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_medical_section_21 = document.getElementById('go-medical-section-21');
  if (go_medical_section_21) {
    gsap.fromTo('#go-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('go-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (go_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#go-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #go-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_list_quick_facts = document.getElementById('go-tourist-list-quick-facts');
  if (go_tourist_list_quick_facts) {
    gsap.from('#go-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_list_common_challenges_applicants_face = document.getElementById('go-tourist-list-common-challenges-applicants-face');
  if (go_tourist_list_common_challenges_applicants_face) {
    gsap.from('#go-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_list_how_we_solve_these_challenges = document.getElementById('go-tourist-list-how-we-solve-these-challenges');
  if (go_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#go-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_section_visa_overview = document.getElementById('go-tourist-section-visa-overview');
  if (go_tourist_section_visa_overview) {
    gsap.fromTo('#go-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_form_who_is_this_visa_for = document.getElementById('go-tourist-form-who-is-this-visa-for');
  if (go_tourist_form_who_is_this_visa_for) {
    gsap.from('#go-tourist-form-who-is-this-visa-for input, #go-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_list_required_documents = document.getElementById('go-tourist-list-required-documents');
  if (go_tourist_list_required_documents) {
    gsap.from('#go-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_list_application_process = document.getElementById('go-tourist-list-application-process');
  if (go_tourist_list_application_process) {
    gsap.from('#go-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_section_timelines_deadlines = document.getElementById('go-tourist-section-timelines-deadlines');
  if (go_tourist_section_timelines_deadlines) {
    gsap.fromTo('#go-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_section_fees_costs = document.getElementById('go-tourist-section-fees-costs');
  if (go_tourist_section_fees_costs) {
    gsap.fromTo('#go-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_list_risks_common_mistakes = document.getElementById('go-tourist-list-risks-common-mistakes');
  if (go_tourist_list_risks_common_mistakes) {
    gsap.from('#go-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_section_diy_vs_professional_assistance = document.getElementById('go-tourist-section-diy-vs-professional-assistance');
  if (go_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_section_gois_specific_context = document.getElementById('go-tourist-section-gois-specific-context');
  if (go_tourist_section_gois_specific_context) {
    gsap.fromTo('#go-tourist-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_section_what_our_clients_say = document.getElementById('go-tourist-section-what-our-clients-say');
  if (go_tourist_section_what_our_clients_say) {
    gsap.fromTo('#go-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_section_frequently_asked_questions = document.getElementById('go-tourist-section-frequently-asked-questions');
  if (go_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#go-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_section_international_support = document.getElementById('go-tourist-section-international-support');
  if (go_tourist_section_international_support) {
    gsap.fromTo('#go-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_list_our_credentials = document.getElementById('go-tourist-list-our-credentials');
  if (go_tourist_list_our_credentials) {
    gsap.from('#go-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_list_related_services = document.getElementById('go-tourist-list-related-services');
  if (go_tourist_list_related_services) {
    gsap.from('#go-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_section_youre_in_good_hands = document.getElementById('go-tourist-section-youre-in-good-hands');
  if (go_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#go-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_tourist_section_21 = document.getElementById('go-tourist-section-21');
  if (go_tourist_section_21) {
    gsap.fromTo('#go-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('go-transit-form-transit-through-brazil-with-the-transit-visa');
  if (go_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#go-transit-form-transit-through-brazil-with-the-transit-visa input, #go-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_list_quick_facts = document.getElementById('go-transit-list-quick-facts');
  if (go_transit_list_quick_facts) {
    gsap.from('#go-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_list_common_challenges_applicants_face = document.getElementById('go-transit-list-common-challenges-applicants-face');
  if (go_transit_list_common_challenges_applicants_face) {
    gsap.from('#go-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_list_how_we_solve_these_challenges = document.getElementById('go-transit-list-how-we-solve-these-challenges');
  if (go_transit_list_how_we_solve_these_challenges) {
    gsap.from('#go-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_section_visa_overview = document.getElementById('go-transit-section-visa-overview');
  if (go_transit_section_visa_overview) {
    gsap.fromTo('#go-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_form_who_is_this_visa_for = document.getElementById('go-transit-form-who-is-this-visa-for');
  if (go_transit_form_who_is_this_visa_for) {
    gsap.from('#go-transit-form-who-is-this-visa-for input, #go-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_list_required_documents = document.getElementById('go-transit-list-required-documents');
  if (go_transit_list_required_documents) {
    gsap.from('#go-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_list_application_process = document.getElementById('go-transit-list-application-process');
  if (go_transit_list_application_process) {
    gsap.from('#go-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_section_timelines_deadlines = document.getElementById('go-transit-section-timelines-deadlines');
  if (go_transit_section_timelines_deadlines) {
    gsap.fromTo('#go-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_section_fees_costs = document.getElementById('go-transit-section-fees-costs');
  if (go_transit_section_fees_costs) {
    gsap.fromTo('#go-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_list_risks_common_mistakes = document.getElementById('go-transit-list-risks-common-mistakes');
  if (go_transit_list_risks_common_mistakes) {
    gsap.from('#go-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_section_diy_vs_professional_assistance = document.getElementById('go-transit-section-diy-vs-professional-assistance');
  if (go_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_section_gois_specific_context = document.getElementById('go-transit-section-gois-specific-context');
  if (go_transit_section_gois_specific_context) {
    gsap.fromTo('#go-transit-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_section_what_our_clients_say = document.getElementById('go-transit-section-what-our-clients-say');
  if (go_transit_section_what_our_clients_say) {
    gsap.fromTo('#go-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_section_frequently_asked_questions = document.getElementById('go-transit-section-frequently-asked-questions');
  if (go_transit_section_frequently_asked_questions) {
    gsap.fromTo('#go-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_section_international_support = document.getElementById('go-transit-section-international-support');
  if (go_transit_section_international_support) {
    gsap.fromTo('#go-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_list_our_credentials = document.getElementById('go-transit-list-our-credentials');
  if (go_transit_list_our_credentials) {
    gsap.from('#go-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_list_related_services = document.getElementById('go-transit-list-related-services');
  if (go_transit_list_related_services) {
    gsap.from('#go-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_section_youre_in_good_hands = document.getElementById('go-transit-section-youre-in-good-hands');
  if (go_transit_section_youre_in_good_hands) {
    gsap.fromTo('#go-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_transit_section_21 = document.getElementById('go-transit-section-21');
  if (go_transit_section_21) {
    gsap.fromTo('#go-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_form_study_in_brazil_with_the_student_visa = document.getElementById('go-student-form-study-in-brazil-with-the-student-visa');
  if (go_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#go-student-form-study-in-brazil-with-the-student-visa input, #go-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_list_quick_facts = document.getElementById('go-student-list-quick-facts');
  if (go_student_list_quick_facts) {
    gsap.from('#go-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_list_common_challenges_applicants_face = document.getElementById('go-student-list-common-challenges-applicants-face');
  if (go_student_list_common_challenges_applicants_face) {
    gsap.from('#go-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_list_how_we_solve_these_challenges = document.getElementById('go-student-list-how-we-solve-these-challenges');
  if (go_student_list_how_we_solve_these_challenges) {
    gsap.from('#go-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_section_visa_overview = document.getElementById('go-student-section-visa-overview');
  if (go_student_section_visa_overview) {
    gsap.fromTo('#go-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_form_who_is_this_visa_for = document.getElementById('go-student-form-who-is-this-visa-for');
  if (go_student_form_who_is_this_visa_for) {
    gsap.from('#go-student-form-who-is-this-visa-for input, #go-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_list_required_documents = document.getElementById('go-student-list-required-documents');
  if (go_student_list_required_documents) {
    gsap.from('#go-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_list_application_process = document.getElementById('go-student-list-application-process');
  if (go_student_list_application_process) {
    gsap.from('#go-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_section_timelines_deadlines = document.getElementById('go-student-section-timelines-deadlines');
  if (go_student_section_timelines_deadlines) {
    gsap.fromTo('#go-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_section_fees_costs = document.getElementById('go-student-section-fees-costs');
  if (go_student_section_fees_costs) {
    gsap.fromTo('#go-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_list_risks_common_mistakes = document.getElementById('go-student-list-risks-common-mistakes');
  if (go_student_list_risks_common_mistakes) {
    gsap.from('#go-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_section_diy_vs_professional_assistance = document.getElementById('go-student-section-diy-vs-professional-assistance');
  if (go_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_section_gois_specific_context = document.getElementById('go-student-section-gois-specific-context');
  if (go_student_section_gois_specific_context) {
    gsap.fromTo('#go-student-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_section_what_our_clients_say = document.getElementById('go-student-section-what-our-clients-say');
  if (go_student_section_what_our_clients_say) {
    gsap.fromTo('#go-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_section_frequently_asked_questions = document.getElementById('go-student-section-frequently-asked-questions');
  if (go_student_section_frequently_asked_questions) {
    gsap.fromTo('#go-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_section_international_support = document.getElementById('go-student-section-international-support');
  if (go_student_section_international_support) {
    gsap.fromTo('#go-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_list_our_credentials = document.getElementById('go-student-list-our-credentials');
  if (go_student_list_our_credentials) {
    gsap.from('#go-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_list_related_services = document.getElementById('go-student-list-related-services');
  if (go_student_list_related_services) {
    gsap.from('#go-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_section_youre_in_good_hands = document.getElementById('go-student-section-youre-in-good-hands');
  if (go_student_section_youre_in_good_hands) {
    gsap.fromTo('#go-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_student_section_21 = document.getElementById('go-student-section-21');
  if (go_student_section_21) {
    gsap.fromTo('#go-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('go-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (go_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#go-business-form-conduct-business-in-brazil-with-the-business-visa input, #go-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_list_quick_facts = document.getElementById('go-business-list-quick-facts');
  if (go_business_list_quick_facts) {
    gsap.from('#go-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_list_common_challenges_applicants_face = document.getElementById('go-business-list-common-challenges-applicants-face');
  if (go_business_list_common_challenges_applicants_face) {
    gsap.from('#go-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_list_how_we_solve_these_challenges = document.getElementById('go-business-list-how-we-solve-these-challenges');
  if (go_business_list_how_we_solve_these_challenges) {
    gsap.from('#go-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_section_visa_overview = document.getElementById('go-business-section-visa-overview');
  if (go_business_section_visa_overview) {
    gsap.fromTo('#go-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_form_who_is_this_visa_for = document.getElementById('go-business-form-who-is-this-visa-for');
  if (go_business_form_who_is_this_visa_for) {
    gsap.from('#go-business-form-who-is-this-visa-for input, #go-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_list_required_documents = document.getElementById('go-business-list-required-documents');
  if (go_business_list_required_documents) {
    gsap.from('#go-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_list_application_process = document.getElementById('go-business-list-application-process');
  if (go_business_list_application_process) {
    gsap.from('#go-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_section_timelines_deadlines = document.getElementById('go-business-section-timelines-deadlines');
  if (go_business_section_timelines_deadlines) {
    gsap.fromTo('#go-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_section_fees_costs = document.getElementById('go-business-section-fees-costs');
  if (go_business_section_fees_costs) {
    gsap.fromTo('#go-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_list_risks_common_mistakes = document.getElementById('go-business-list-risks-common-mistakes');
  if (go_business_list_risks_common_mistakes) {
    gsap.from('#go-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_section_diy_vs_professional_assistance = document.getElementById('go-business-section-diy-vs-professional-assistance');
  if (go_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_section_gois_specific_context = document.getElementById('go-business-section-gois-specific-context');
  if (go_business_section_gois_specific_context) {
    gsap.fromTo('#go-business-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_section_what_our_clients_say = document.getElementById('go-business-section-what-our-clients-say');
  if (go_business_section_what_our_clients_say) {
    gsap.fromTo('#go-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_section_frequently_asked_questions = document.getElementById('go-business-section-frequently-asked-questions');
  if (go_business_section_frequently_asked_questions) {
    gsap.fromTo('#go-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_section_international_support = document.getElementById('go-business-section-international-support');
  if (go_business_section_international_support) {
    gsap.fromTo('#go-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_list_our_credentials = document.getElementById('go-business-list-our-credentials');
  if (go_business_list_our_credentials) {
    gsap.from('#go-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_list_related_services = document.getElementById('go-business-list-related-services');
  if (go_business_list_related_services) {
    gsap.from('#go-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_section_youre_in_good_hands = document.getElementById('go-business-section-youre-in-good-hands');
  if (go_business_section_youre_in_good_hands) {
    gsap.fromTo('#go-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_business_section_21 = document.getElementById('go-business-section-21');
  if (go_business_section_21) {
    gsap.fromTo('#go-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('go-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (go_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#go-research-form-conduct-research-in-brazil-with-the-research-visa input, #go-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_list_quick_facts = document.getElementById('go-research-list-quick-facts');
  if (go_research_list_quick_facts) {
    gsap.from('#go-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_list_common_challenges_applicants_face = document.getElementById('go-research-list-common-challenges-applicants-face');
  if (go_research_list_common_challenges_applicants_face) {
    gsap.from('#go-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_list_how_we_solve_these_challenges = document.getElementById('go-research-list-how-we-solve-these-challenges');
  if (go_research_list_how_we_solve_these_challenges) {
    gsap.from('#go-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_section_visa_overview = document.getElementById('go-research-section-visa-overview');
  if (go_research_section_visa_overview) {
    gsap.fromTo('#go-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_form_who_is_this_visa_for = document.getElementById('go-research-form-who-is-this-visa-for');
  if (go_research_form_who_is_this_visa_for) {
    gsap.from('#go-research-form-who-is-this-visa-for input, #go-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_list_required_documents = document.getElementById('go-research-list-required-documents');
  if (go_research_list_required_documents) {
    gsap.from('#go-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_list_application_process = document.getElementById('go-research-list-application-process');
  if (go_research_list_application_process) {
    gsap.from('#go-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_section_timelines_deadlines = document.getElementById('go-research-section-timelines-deadlines');
  if (go_research_section_timelines_deadlines) {
    gsap.fromTo('#go-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_section_fees_costs = document.getElementById('go-research-section-fees-costs');
  if (go_research_section_fees_costs) {
    gsap.fromTo('#go-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_list_risks_common_mistakes = document.getElementById('go-research-list-risks-common-mistakes');
  if (go_research_list_risks_common_mistakes) {
    gsap.from('#go-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_section_diy_vs_professional_assistance = document.getElementById('go-research-section-diy-vs-professional-assistance');
  if (go_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_section_gois_specific_context = document.getElementById('go-research-section-gois-specific-context');
  if (go_research_section_gois_specific_context) {
    gsap.fromTo('#go-research-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_section_what_our_clients_say = document.getElementById('go-research-section-what-our-clients-say');
  if (go_research_section_what_our_clients_say) {
    gsap.fromTo('#go-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_section_frequently_asked_questions = document.getElementById('go-research-section-frequently-asked-questions');
  if (go_research_section_frequently_asked_questions) {
    gsap.fromTo('#go-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_section_international_support = document.getElementById('go-research-section-international-support');
  if (go_research_section_international_support) {
    gsap.fromTo('#go-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_list_our_credentials = document.getElementById('go-research-list-our-credentials');
  if (go_research_list_our_credentials) {
    gsap.from('#go-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_list_related_services = document.getElementById('go-research-list-related-services');
  if (go_research_list_related_services) {
    gsap.from('#go-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_section_youre_in_good_hands = document.getElementById('go-research-section-youre-in-good-hands');
  if (go_research_section_youre_in_good_hands) {
    gsap.fromTo('#go-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_research_section_21 = document.getElementById('go-research-section-21');
  if (go_research_section_21) {
    gsap.fromTo('#go-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('go-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (go_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#go-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #go-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_list_quick_facts = document.getElementById('go-diplomatic-list-quick-facts');
  if (go_diplomatic_list_quick_facts) {
    gsap.from('#go-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_list_common_challenges_applicants_face = document.getElementById('go-diplomatic-list-common-challenges-applicants-face');
  if (go_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#go-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_list_how_we_solve_these_challenges = document.getElementById('go-diplomatic-list-how-we-solve-these-challenges');
  if (go_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#go-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_section_visa_overview = document.getElementById('go-diplomatic-section-visa-overview');
  if (go_diplomatic_section_visa_overview) {
    gsap.fromTo('#go-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_form_who_is_this_visa_for = document.getElementById('go-diplomatic-form-who-is-this-visa-for');
  if (go_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#go-diplomatic-form-who-is-this-visa-for input, #go-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_list_required_documents = document.getElementById('go-diplomatic-list-required-documents');
  if (go_diplomatic_list_required_documents) {
    gsap.from('#go-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_list_application_process = document.getElementById('go-diplomatic-list-application-process');
  if (go_diplomatic_list_application_process) {
    gsap.from('#go-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_section_timelines_deadlines = document.getElementById('go-diplomatic-section-timelines-deadlines');
  if (go_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#go-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_section_fees_costs = document.getElementById('go-diplomatic-section-fees-costs');
  if (go_diplomatic_section_fees_costs) {
    gsap.fromTo('#go-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_list_risks_common_mistakes = document.getElementById('go-diplomatic-list-risks-common-mistakes');
  if (go_diplomatic_list_risks_common_mistakes) {
    gsap.from('#go-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_section_diy_vs_professional_assistance = document.getElementById('go-diplomatic-section-diy-vs-professional-assistance');
  if (go_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_section_gois_specific_context = document.getElementById('go-diplomatic-section-gois-specific-context');
  if (go_diplomatic_section_gois_specific_context) {
    gsap.fromTo('#go-diplomatic-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_section_what_our_clients_say = document.getElementById('go-diplomatic-section-what-our-clients-say');
  if (go_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#go-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_section_frequently_asked_questions = document.getElementById('go-diplomatic-section-frequently-asked-questions');
  if (go_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#go-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_section_international_support = document.getElementById('go-diplomatic-section-international-support');
  if (go_diplomatic_section_international_support) {
    gsap.fromTo('#go-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_list_our_credentials = document.getElementById('go-diplomatic-list-our-credentials');
  if (go_diplomatic_list_our_credentials) {
    gsap.from('#go-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_list_related_services = document.getElementById('go-diplomatic-list-related-services');
  if (go_diplomatic_list_related_services) {
    gsap.from('#go-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_section_youre_in_good_hands = document.getElementById('go-diplomatic-section-youre-in-good-hands');
  if (go_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#go-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_diplomatic_section_21 = document.getElementById('go-diplomatic-section-21');
  if (go_diplomatic_section_21) {
    gsap.fromTo('#go-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('go-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (go_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#go-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #go-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_list_quick_facts = document.getElementById('go-journalist-list-quick-facts');
  if (go_journalist_list_quick_facts) {
    gsap.from('#go-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_list_common_challenges_applicants_face = document.getElementById('go-journalist-list-common-challenges-applicants-face');
  if (go_journalist_list_common_challenges_applicants_face) {
    gsap.from('#go-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_list_how_we_solve_these_challenges = document.getElementById('go-journalist-list-how-we-solve-these-challenges');
  if (go_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#go-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_section_visa_overview = document.getElementById('go-journalist-section-visa-overview');
  if (go_journalist_section_visa_overview) {
    gsap.fromTo('#go-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_form_who_is_this_visa_for = document.getElementById('go-journalist-form-who-is-this-visa-for');
  if (go_journalist_form_who_is_this_visa_for) {
    gsap.from('#go-journalist-form-who-is-this-visa-for input, #go-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_list_required_documents = document.getElementById('go-journalist-list-required-documents');
  if (go_journalist_list_required_documents) {
    gsap.from('#go-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_list_application_process = document.getElementById('go-journalist-list-application-process');
  if (go_journalist_list_application_process) {
    gsap.from('#go-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_section_timelines_deadlines = document.getElementById('go-journalist-section-timelines-deadlines');
  if (go_journalist_section_timelines_deadlines) {
    gsap.fromTo('#go-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_section_fees_costs = document.getElementById('go-journalist-section-fees-costs');
  if (go_journalist_section_fees_costs) {
    gsap.fromTo('#go-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_list_risks_common_mistakes = document.getElementById('go-journalist-list-risks-common-mistakes');
  if (go_journalist_list_risks_common_mistakes) {
    gsap.from('#go-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_section_diy_vs_professional_assistance = document.getElementById('go-journalist-section-diy-vs-professional-assistance');
  if (go_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_section_gois_specific_context = document.getElementById('go-journalist-section-gois-specific-context');
  if (go_journalist_section_gois_specific_context) {
    gsap.fromTo('#go-journalist-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_section_what_our_clients_say = document.getElementById('go-journalist-section-what-our-clients-say');
  if (go_journalist_section_what_our_clients_say) {
    gsap.fromTo('#go-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_section_frequently_asked_questions = document.getElementById('go-journalist-section-frequently-asked-questions');
  if (go_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#go-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_section_international_support = document.getElementById('go-journalist-section-international-support');
  if (go_journalist_section_international_support) {
    gsap.fromTo('#go-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_list_our_credentials = document.getElementById('go-journalist-list-our-credentials');
  if (go_journalist_list_our_credentials) {
    gsap.from('#go-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_list_related_services = document.getElementById('go-journalist-list-related-services');
  if (go_journalist_list_related_services) {
    gsap.from('#go-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_section_youre_in_good_hands = document.getElementById('go-journalist-section-youre-in-good-hands');
  if (go_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#go-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_journalist_section_21 = document.getElementById('go-journalist-section-21');
  if (go_journalist_section_21) {
    gsap.fromTo('#go-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('go-fines-form-resolve-immigration-fines-in-brazil');
  if (go_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#go-fines-form-resolve-immigration-fines-in-brazil input, #go-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_list_quick_facts = document.getElementById('go-fines-list-quick-facts');
  if (go_fines_list_quick_facts) {
    gsap.from('#go-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_list_common_challenges_applicants_face = document.getElementById('go-fines-list-common-challenges-applicants-face');
  if (go_fines_list_common_challenges_applicants_face) {
    gsap.from('#go-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_list_how_we_solve_these_challenges = document.getElementById('go-fines-list-how-we-solve-these-challenges');
  if (go_fines_list_how_we_solve_these_challenges) {
    gsap.from('#go-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_section_service_overview = document.getElementById('go-fines-section-service-overview');
  if (go_fines_section_service_overview) {
    gsap.fromTo('#go-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_form_who_is_this_service_for = document.getElementById('go-fines-form-who-is-this-service-for');
  if (go_fines_form_who_is_this_service_for) {
    gsap.from('#go-fines-form-who-is-this-service-for input, #go-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_list_required_documents = document.getElementById('go-fines-list-required-documents');
  if (go_fines_list_required_documents) {
    gsap.from('#go-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_list_process = document.getElementById('go-fines-list-process');
  if (go_fines_list_process) {
    gsap.from('#go-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_section_timelines_deadlines = document.getElementById('go-fines-section-timelines-deadlines');
  if (go_fines_section_timelines_deadlines) {
    gsap.fromTo('#go-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_section_fees_costs = document.getElementById('go-fines-section-fees-costs');
  if (go_fines_section_fees_costs) {
    gsap.fromTo('#go-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_list_risks_common_mistakes = document.getElementById('go-fines-list-risks-common-mistakes');
  if (go_fines_list_risks_common_mistakes) {
    gsap.from('#go-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_section_diy_vs_professional_assistance = document.getElementById('go-fines-section-diy-vs-professional-assistance');
  if (go_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_section_gois_specific_context = document.getElementById('go-fines-section-gois-specific-context');
  if (go_fines_section_gois_specific_context) {
    gsap.fromTo('#go-fines-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_section_what_our_clients_say = document.getElementById('go-fines-section-what-our-clients-say');
  if (go_fines_section_what_our_clients_say) {
    gsap.fromTo('#go-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_section_frequently_asked_questions = document.getElementById('go-fines-section-frequently-asked-questions');
  if (go_fines_section_frequently_asked_questions) {
    gsap.fromTo('#go-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_section_international_support = document.getElementById('go-fines-section-international-support');
  if (go_fines_section_international_support) {
    gsap.fromTo('#go-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_list_our_credentials = document.getElementById('go-fines-list-our-credentials');
  if (go_fines_list_our_credentials) {
    gsap.from('#go-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_list_related_services = document.getElementById('go-fines-list-related-services');
  if (go_fines_list_related_services) {
    gsap.from('#go-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_section_youre_in_good_hands = document.getElementById('go-fines-section-youre-in-good-hands');
  if (go_fines_section_youre_in_good_hands) {
    gsap.fromTo('#go-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_fines_section_21 = document.getElementById('go-fines-section-21');
  if (go_fines_section_21) {
    gsap.fromTo('#go-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_form_deportation_assistance_in_brazil = document.getElementById('go-deportation-form-deportation-assistance-in-brazil');
  if (go_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#go-deportation-form-deportation-assistance-in-brazil input, #go-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_list_quick_facts = document.getElementById('go-deportation-list-quick-facts');
  if (go_deportation_list_quick_facts) {
    gsap.from('#go-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_list_common_challenges_applicants_face = document.getElementById('go-deportation-list-common-challenges-applicants-face');
  if (go_deportation_list_common_challenges_applicants_face) {
    gsap.from('#go-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_list_how_we_solve_these_challenges = document.getElementById('go-deportation-list-how-we-solve-these-challenges');
  if (go_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#go-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_section_service_overview = document.getElementById('go-deportation-section-service-overview');
  if (go_deportation_section_service_overview) {
    gsap.fromTo('#go-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_form_who_is_this_service_for = document.getElementById('go-deportation-form-who-is-this-service-for');
  if (go_deportation_form_who_is_this_service_for) {
    gsap.from('#go-deportation-form-who-is-this-service-for input, #go-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_list_required_documents = document.getElementById('go-deportation-list-required-documents');
  if (go_deportation_list_required_documents) {
    gsap.from('#go-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_list_process = document.getElementById('go-deportation-list-process');
  if (go_deportation_list_process) {
    gsap.from('#go-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_section_timelines_deadlines = document.getElementById('go-deportation-section-timelines-deadlines');
  if (go_deportation_section_timelines_deadlines) {
    gsap.fromTo('#go-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_section_fees_costs = document.getElementById('go-deportation-section-fees-costs');
  if (go_deportation_section_fees_costs) {
    gsap.fromTo('#go-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_list_risks_common_mistakes = document.getElementById('go-deportation-list-risks-common-mistakes');
  if (go_deportation_list_risks_common_mistakes) {
    gsap.from('#go-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_section_diy_vs_professional_assistance = document.getElementById('go-deportation-section-diy-vs-professional-assistance');
  if (go_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_section_gois_specific_context = document.getElementById('go-deportation-section-gois-specific-context');
  if (go_deportation_section_gois_specific_context) {
    gsap.fromTo('#go-deportation-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_section_what_our_clients_say = document.getElementById('go-deportation-section-what-our-clients-say');
  if (go_deportation_section_what_our_clients_say) {
    gsap.fromTo('#go-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_section_frequently_asked_questions = document.getElementById('go-deportation-section-frequently-asked-questions');
  if (go_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#go-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_section_international_support = document.getElementById('go-deportation-section-international-support');
  if (go_deportation_section_international_support) {
    gsap.fromTo('#go-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_list_our_credentials = document.getElementById('go-deportation-list-our-credentials');
  if (go_deportation_list_our_credentials) {
    gsap.from('#go-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_list_related_services = document.getElementById('go-deportation-list-related-services');
  if (go_deportation_list_related_services) {
    gsap.from('#go-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_section_youre_in_good_hands = document.getElementById('go-deportation-section-youre-in-good-hands');
  if (go_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#go-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_deportation_section_21 = document.getElementById('go-deportation-section-21');
  if (go_deportation_section_21) {
    gsap.fromTo('#go-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('go-translation-form-sworn-document-translation-services-in-brazil');
  if (go_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#go-translation-form-sworn-document-translation-services-in-brazil input, #go-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_list_quick_facts = document.getElementById('go-translation-list-quick-facts');
  if (go_translation_list_quick_facts) {
    gsap.from('#go-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_list_common_challenges_applicants_face = document.getElementById('go-translation-list-common-challenges-applicants-face');
  if (go_translation_list_common_challenges_applicants_face) {
    gsap.from('#go-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_list_how_we_solve_these_challenges = document.getElementById('go-translation-list-how-we-solve-these-challenges');
  if (go_translation_list_how_we_solve_these_challenges) {
    gsap.from('#go-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_section_service_overview = document.getElementById('go-translation-section-service-overview');
  if (go_translation_section_service_overview) {
    gsap.fromTo('#go-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_form_who_is_this_service_for = document.getElementById('go-translation-form-who-is-this-service-for');
  if (go_translation_form_who_is_this_service_for) {
    gsap.from('#go-translation-form-who-is-this-service-for input, #go-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_list_required_documents = document.getElementById('go-translation-list-required-documents');
  if (go_translation_list_required_documents) {
    gsap.from('#go-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_list_process = document.getElementById('go-translation-list-process');
  if (go_translation_list_process) {
    gsap.from('#go-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_section_timelines_deadlines = document.getElementById('go-translation-section-timelines-deadlines');
  if (go_translation_section_timelines_deadlines) {
    gsap.fromTo('#go-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_section_fees_costs = document.getElementById('go-translation-section-fees-costs');
  if (go_translation_section_fees_costs) {
    gsap.fromTo('#go-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_list_risks_common_mistakes = document.getElementById('go-translation-list-risks-common-mistakes');
  if (go_translation_list_risks_common_mistakes) {
    gsap.from('#go-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_section_diy_vs_professional_assistance = document.getElementById('go-translation-section-diy-vs-professional-assistance');
  if (go_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_section_gois_specific_context = document.getElementById('go-translation-section-gois-specific-context');
  if (go_translation_section_gois_specific_context) {
    gsap.fromTo('#go-translation-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_section_what_our_clients_say = document.getElementById('go-translation-section-what-our-clients-say');
  if (go_translation_section_what_our_clients_say) {
    gsap.fromTo('#go-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_section_frequently_asked_questions = document.getElementById('go-translation-section-frequently-asked-questions');
  if (go_translation_section_frequently_asked_questions) {
    gsap.fromTo('#go-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_section_international_support = document.getElementById('go-translation-section-international-support');
  if (go_translation_section_international_support) {
    gsap.fromTo('#go-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_list_our_credentials = document.getElementById('go-translation-list-our-credentials');
  if (go_translation_list_our_credentials) {
    gsap.from('#go-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_list_related_services = document.getElementById('go-translation-list-related-services');
  if (go_translation_list_related_services) {
    gsap.from('#go-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_section_youre_in_good_hands = document.getElementById('go-translation-section-youre-in-good-hands');
  if (go_translation_section_youre_in_good_hands) {
    gsap.fromTo('#go-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_translation_section_21 = document.getElementById('go-translation-section-21');
  if (go_translation_section_21) {
    gsap.fromTo('#go-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('go-expulsion-form-expulsion-assistance-in-brazil');
  if (go_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#go-expulsion-form-expulsion-assistance-in-brazil input, #go-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_list_quick_facts = document.getElementById('go-expulsion-list-quick-facts');
  if (go_expulsion_list_quick_facts) {
    gsap.from('#go-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_list_common_challenges_applicants_face = document.getElementById('go-expulsion-list-common-challenges-applicants-face');
  if (go_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#go-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_list_how_we_solve_these_challenges = document.getElementById('go-expulsion-list-how-we-solve-these-challenges');
  if (go_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#go-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_section_service_overview = document.getElementById('go-expulsion-section-service-overview');
  if (go_expulsion_section_service_overview) {
    gsap.fromTo('#go-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_form_who_is_this_service_for = document.getElementById('go-expulsion-form-who-is-this-service-for');
  if (go_expulsion_form_who_is_this_service_for) {
    gsap.from('#go-expulsion-form-who-is-this-service-for input, #go-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_list_required_documents = document.getElementById('go-expulsion-list-required-documents');
  if (go_expulsion_list_required_documents) {
    gsap.from('#go-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_list_process = document.getElementById('go-expulsion-list-process');
  if (go_expulsion_list_process) {
    gsap.from('#go-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_section_timelines_deadlines = document.getElementById('go-expulsion-section-timelines-deadlines');
  if (go_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#go-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_section_fees_costs = document.getElementById('go-expulsion-section-fees-costs');
  if (go_expulsion_section_fees_costs) {
    gsap.fromTo('#go-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_list_risks_common_mistakes = document.getElementById('go-expulsion-list-risks-common-mistakes');
  if (go_expulsion_list_risks_common_mistakes) {
    gsap.from('#go-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_section_diy_vs_professional_assistance = document.getElementById('go-expulsion-section-diy-vs-professional-assistance');
  if (go_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_section_gois_specific_context = document.getElementById('go-expulsion-section-gois-specific-context');
  if (go_expulsion_section_gois_specific_context) {
    gsap.fromTo('#go-expulsion-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_section_what_our_clients_say = document.getElementById('go-expulsion-section-what-our-clients-say');
  if (go_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#go-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_section_frequently_asked_questions = document.getElementById('go-expulsion-section-frequently-asked-questions');
  if (go_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#go-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_section_international_support = document.getElementById('go-expulsion-section-international-support');
  if (go_expulsion_section_international_support) {
    gsap.fromTo('#go-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_list_our_credentials = document.getElementById('go-expulsion-list-our-credentials');
  if (go_expulsion_list_our_credentials) {
    gsap.from('#go-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_list_related_services = document.getElementById('go-expulsion-list-related-services');
  if (go_expulsion_list_related_services) {
    gsap.from('#go-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_section_youre_in_good_hands = document.getElementById('go-expulsion-section-youre-in-good-hands');
  if (go_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#go-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_expulsion_section_21 = document.getElementById('go-expulsion-section-21');
  if (go_expulsion_section_21) {
    gsap.fromTo('#go-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('go-appeals-form-appeal-immigration-denials-in-brazil');
  if (go_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#go-appeals-form-appeal-immigration-denials-in-brazil input, #go-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_list_quick_facts = document.getElementById('go-appeals-list-quick-facts');
  if (go_appeals_list_quick_facts) {
    gsap.from('#go-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_list_common_challenges_applicants_face = document.getElementById('go-appeals-list-common-challenges-applicants-face');
  if (go_appeals_list_common_challenges_applicants_face) {
    gsap.from('#go-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_list_how_we_solve_these_challenges = document.getElementById('go-appeals-list-how-we-solve-these-challenges');
  if (go_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#go-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_section_service_overview = document.getElementById('go-appeals-section-service-overview');
  if (go_appeals_section_service_overview) {
    gsap.fromTo('#go-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_form_who_is_this_service_for = document.getElementById('go-appeals-form-who-is-this-service-for');
  if (go_appeals_form_who_is_this_service_for) {
    gsap.from('#go-appeals-form-who-is-this-service-for input, #go-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_list_required_documents = document.getElementById('go-appeals-list-required-documents');
  if (go_appeals_list_required_documents) {
    gsap.from('#go-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_list_appeal_process = document.getElementById('go-appeals-list-appeal-process');
  if (go_appeals_list_appeal_process) {
    gsap.from('#go-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_section_timelines_deadlines = document.getElementById('go-appeals-section-timelines-deadlines');
  if (go_appeals_section_timelines_deadlines) {
    gsap.fromTo('#go-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_section_fees_costs = document.getElementById('go-appeals-section-fees-costs');
  if (go_appeals_section_fees_costs) {
    gsap.fromTo('#go-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_list_risks_common_mistakes = document.getElementById('go-appeals-list-risks-common-mistakes');
  if (go_appeals_list_risks_common_mistakes) {
    gsap.from('#go-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_section_diy_vs_professional_assistance = document.getElementById('go-appeals-section-diy-vs-professional-assistance');
  if (go_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_section_gois_specific_context = document.getElementById('go-appeals-section-gois-specific-context');
  if (go_appeals_section_gois_specific_context) {
    gsap.fromTo('#go-appeals-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_section_what_our_clients_say = document.getElementById('go-appeals-section-what-our-clients-say');
  if (go_appeals_section_what_our_clients_say) {
    gsap.fromTo('#go-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_section_frequently_asked_questions = document.getElementById('go-appeals-section-frequently-asked-questions');
  if (go_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#go-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_section_international_support = document.getElementById('go-appeals-section-international-support');
  if (go_appeals_section_international_support) {
    gsap.fromTo('#go-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_list_our_credentials = document.getElementById('go-appeals-list-our-credentials');
  if (go_appeals_list_our_credentials) {
    gsap.from('#go-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_list_related_services = document.getElementById('go-appeals-list-related-services');
  if (go_appeals_list_related_services) {
    gsap.from('#go-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_section_youre_in_good_hands = document.getElementById('go-appeals-section-youre-in-good-hands');
  if (go_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#go-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_appeals_section_21 = document.getElementById('go-appeals-section-21');
  if (go_appeals_section_21) {
    gsap.fromTo('#go-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('go-consular-form-consular-services-in-brazil-for-citizens');
  if (go_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#go-consular-form-consular-services-in-brazil-for-citizens input, #go-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_list_quick_facts = document.getElementById('go-consular-list-quick-facts');
  if (go_consular_list_quick_facts) {
    gsap.from('#go-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_list_common_challenges_applicants_face = document.getElementById('go-consular-list-common-challenges-applicants-face');
  if (go_consular_list_common_challenges_applicants_face) {
    gsap.from('#go-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_list_how_we_solve_these_challenges = document.getElementById('go-consular-list-how-we-solve-these-challenges');
  if (go_consular_list_how_we_solve_these_challenges) {
    gsap.from('#go-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_section_service_overview = document.getElementById('go-consular-section-service-overview');
  if (go_consular_section_service_overview) {
    gsap.fromTo('#go-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_form_who_is_this_service_for = document.getElementById('go-consular-form-who-is-this-service-for');
  if (go_consular_form_who_is_this_service_for) {
    gsap.from('#go-consular-form-who-is-this-service-for input, #go-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_list_required_documents = document.getElementById('go-consular-list-required-documents');
  if (go_consular_list_required_documents) {
    gsap.from('#go-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_list_process = document.getElementById('go-consular-list-process');
  if (go_consular_list_process) {
    gsap.from('#go-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_section_timelines_deadlines = document.getElementById('go-consular-section-timelines-deadlines');
  if (go_consular_section_timelines_deadlines) {
    gsap.fromTo('#go-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_section_fees_costs = document.getElementById('go-consular-section-fees-costs');
  if (go_consular_section_fees_costs) {
    gsap.fromTo('#go-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_list_risks_common_mistakes = document.getElementById('go-consular-list-risks-common-mistakes');
  if (go_consular_list_risks_common_mistakes) {
    gsap.from('#go-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_section_diy_vs_professional_assistance = document.getElementById('go-consular-section-diy-vs-professional-assistance');
  if (go_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_section_gois_specific_context = document.getElementById('go-consular-section-gois-specific-context');
  if (go_consular_section_gois_specific_context) {
    gsap.fromTo('#go-consular-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_section_what_our_clients_say = document.getElementById('go-consular-section-what-our-clients-say');
  if (go_consular_section_what_our_clients_say) {
    gsap.fromTo('#go-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_section_frequently_asked_questions = document.getElementById('go-consular-section-frequently-asked-questions');
  if (go_consular_section_frequently_asked_questions) {
    gsap.fromTo('#go-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_section_international_support = document.getElementById('go-consular-section-international-support');
  if (go_consular_section_international_support) {
    gsap.fromTo('#go-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_list_our_credentials = document.getElementById('go-consular-list-our-credentials');
  if (go_consular_list_our_credentials) {
    gsap.from('#go-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_list_related_services = document.getElementById('go-consular-list-related-services');
  if (go_consular_list_related_services) {
    gsap.from('#go-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_section_youre_in_good_hands = document.getElementById('go-consular-section-youre-in-good-hands');
  if (go_consular_section_youre_in_good_hands) {
    gsap.fromTo('#go-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_consular_section_21 = document.getElementById('go-consular-section-21');
  if (go_consular_section_21) {
    gsap.fromTo('#go-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('go-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (go_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#go-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #go-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_list_quick_facts = document.getElementById('go-criminalrecords-list-quick-facts');
  if (go_criminalrecords_list_quick_facts) {
    gsap.from('#go-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_list_common_challenges_applicants_face = document.getElementById('go-criminalrecords-list-common-challenges-applicants-face');
  if (go_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#go-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('go-criminalrecords-list-how-we-solve-these-challenges');
  if (go_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#go-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_section_service_overview = document.getElementById('go-criminalrecords-section-service-overview');
  if (go_criminalrecords_section_service_overview) {
    gsap.fromTo('#go-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_form_who_is_this_service_for = document.getElementById('go-criminalrecords-form-who-is-this-service-for');
  if (go_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#go-criminalrecords-form-who-is-this-service-for input, #go-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_list_required_documents = document.getElementById('go-criminalrecords-list-required-documents');
  if (go_criminalrecords_list_required_documents) {
    gsap.from('#go-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_list_process = document.getElementById('go-criminalrecords-list-process');
  if (go_criminalrecords_list_process) {
    gsap.from('#go-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_section_timelines_deadlines = document.getElementById('go-criminalrecords-section-timelines-deadlines');
  if (go_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#go-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_section_fees_costs = document.getElementById('go-criminalrecords-section-fees-costs');
  if (go_criminalrecords_section_fees_costs) {
    gsap.fromTo('#go-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_list_risks_common_mistakes = document.getElementById('go-criminalrecords-list-risks-common-mistakes');
  if (go_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#go-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('go-criminalrecords-section-diy-vs-professional-assistance');
  if (go_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_section_gois_specific_context = document.getElementById('go-criminalrecords-section-gois-specific-context');
  if (go_criminalrecords_section_gois_specific_context) {
    gsap.fromTo('#go-criminalrecords-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_section_what_our_clients_say = document.getElementById('go-criminalrecords-section-what-our-clients-say');
  if (go_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#go-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_section_frequently_asked_questions = document.getElementById('go-criminalrecords-section-frequently-asked-questions');
  if (go_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#go-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_section_international_support = document.getElementById('go-criminalrecords-section-international-support');
  if (go_criminalrecords_section_international_support) {
    gsap.fromTo('#go-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_list_our_credentials = document.getElementById('go-criminalrecords-list-our-credentials');
  if (go_criminalrecords_list_our_credentials) {
    gsap.from('#go-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_list_related_services = document.getElementById('go-criminalrecords-list-related-services');
  if (go_criminalrecords_list_related_services) {
    gsap.from('#go-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_section_youre_in_good_hands = document.getElementById('go-criminalrecords-section-youre-in-good-hands');
  if (go_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#go-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_criminalrecords_section_21 = document.getElementById('go-criminalrecords-section-21');
  if (go_criminalrecords_section_21) {
    gsap.fromTo('#go-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_form_extradition_assistance_in_brazil = document.getElementById('go-extradition-form-extradition-assistance-in-brazil');
  if (go_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#go-extradition-form-extradition-assistance-in-brazil input, #go-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_list_quick_facts = document.getElementById('go-extradition-list-quick-facts');
  if (go_extradition_list_quick_facts) {
    gsap.from('#go-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_list_common_challenges_applicants_face = document.getElementById('go-extradition-list-common-challenges-applicants-face');
  if (go_extradition_list_common_challenges_applicants_face) {
    gsap.from('#go-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_list_how_we_solve_these_challenges = document.getElementById('go-extradition-list-how-we-solve-these-challenges');
  if (go_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#go-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_section_service_overview = document.getElementById('go-extradition-section-service-overview');
  if (go_extradition_section_service_overview) {
    gsap.fromTo('#go-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_form_who_is_this_service_for = document.getElementById('go-extradition-form-who-is-this-service-for');
  if (go_extradition_form_who_is_this_service_for) {
    gsap.from('#go-extradition-form-who-is-this-service-for input, #go-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_list_required_documents = document.getElementById('go-extradition-list-required-documents');
  if (go_extradition_list_required_documents) {
    gsap.from('#go-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_list_process = document.getElementById('go-extradition-list-process');
  if (go_extradition_list_process) {
    gsap.from('#go-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_section_timelines_deadlines = document.getElementById('go-extradition-section-timelines-deadlines');
  if (go_extradition_section_timelines_deadlines) {
    gsap.fromTo('#go-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_section_fees_costs = document.getElementById('go-extradition-section-fees-costs');
  if (go_extradition_section_fees_costs) {
    gsap.fromTo('#go-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_list_risks_common_mistakes = document.getElementById('go-extradition-list-risks-common-mistakes');
  if (go_extradition_list_risks_common_mistakes) {
    gsap.from('#go-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_section_diy_vs_professional_assistance = document.getElementById('go-extradition-section-diy-vs-professional-assistance');
  if (go_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_section_gois_specific_context = document.getElementById('go-extradition-section-gois-specific-context');
  if (go_extradition_section_gois_specific_context) {
    gsap.fromTo('#go-extradition-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_section_what_our_clients_say = document.getElementById('go-extradition-section-what-our-clients-say');
  if (go_extradition_section_what_our_clients_say) {
    gsap.fromTo('#go-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_section_frequently_asked_questions = document.getElementById('go-extradition-section-frequently-asked-questions');
  if (go_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#go-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_section_international_support = document.getElementById('go-extradition-section-international-support');
  if (go_extradition_section_international_support) {
    gsap.fromTo('#go-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_list_our_credentials = document.getElementById('go-extradition-list-our-credentials');
  if (go_extradition_list_our_credentials) {
    gsap.from('#go-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_list_related_services = document.getElementById('go-extradition-list-related-services');
  if (go_extradition_list_related_services) {
    gsap.from('#go-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_section_youre_in_good_hands = document.getElementById('go-extradition-section-youre-in-good-hands');
  if (go_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#go-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_extradition_section_21 = document.getElementById('go-extradition-section-21');
  if (go_extradition_section_21) {
    gsap.fromTo('#go-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_form_discover_the_north_amazon_and_beyond = document.getElementById('go-north-form-discover-the-north-amazon-and-beyond');
  if (go_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#go-north-form-discover-the-north-amazon-and-beyond input, #go-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_list_quick_facts = document.getElementById('go-north-list-quick-facts');
  if (go_north_list_quick_facts) {
    gsap.from('#go-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_list_common_challenges_applicants_face = document.getElementById('go-north-list-common-challenges-applicants-face');
  if (go_north_list_common_challenges_applicants_face) {
    gsap.from('#go-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_list_how_we_solve_these_challenges = document.getElementById('go-north-list-how-we-solve-these-challenges');
  if (go_north_list_how_we_solve_these_challenges) {
    gsap.from('#go-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_section_trip_overview = document.getElementById('go-north-section-trip-overview');
  if (go_north_section_trip_overview) {
    gsap.fromTo('#go-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_form_who_is_this_trip_for = document.getElementById('go-north-form-who-is-this-trip-for');
  if (go_north_form_who_is_this_trip_for) {
    gsap.from('#go-north-form-who-is-this-trip-for input, #go-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_list_required_documents = document.getElementById('go-north-list-required-documents');
  if (go_north_list_required_documents) {
    gsap.from('#go-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_list_booking_process = document.getElementById('go-north-list-booking-process');
  if (go_north_list_booking_process) {
    gsap.from('#go-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_section_timelines_deadlines = document.getElementById('go-north-section-timelines-deadlines');
  if (go_north_section_timelines_deadlines) {
    gsap.fromTo('#go-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_section_fees_costs = document.getElementById('go-north-section-fees-costs');
  if (go_north_section_fees_costs) {
    gsap.fromTo('#go-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_list_risks_common_mistakes = document.getElementById('go-north-list-risks-common-mistakes');
  if (go_north_list_risks_common_mistakes) {
    gsap.from('#go-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_section_diy_vs_professional_assistance = document.getElementById('go-north-section-diy-vs-professional-assistance');
  if (go_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_section_gois_specific_context = document.getElementById('go-north-section-gois-specific-context');
  if (go_north_section_gois_specific_context) {
    gsap.fromTo('#go-north-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_section_what_our_clients_say = document.getElementById('go-north-section-what-our-clients-say');
  if (go_north_section_what_our_clients_say) {
    gsap.fromTo('#go-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_section_frequently_asked_questions = document.getElementById('go-north-section-frequently-asked-questions');
  if (go_north_section_frequently_asked_questions) {
    gsap.fromTo('#go-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_section_international_support = document.getElementById('go-north-section-international-support');
  if (go_north_section_international_support) {
    gsap.fromTo('#go-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_list_our_credentials = document.getElementById('go-north-list-our-credentials');
  if (go_north_list_our_credentials) {
    gsap.from('#go-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_list_related_services = document.getElementById('go-north-list-related-services');
  if (go_north_list_related_services) {
    gsap.from('#go-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_section_youre_in_good_hands = document.getElementById('go-north-section-youre-in-good-hands');
  if (go_north_section_youre_in_good_hands) {
    gsap.fromTo('#go-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_north_section_21 = document.getElementById('go-north-section-21');
  if (go_north_section_21) {
    gsap.fromTo('#go-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('go-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (go_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#go-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #go-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_list_quick_facts = document.getElementById('go-centralwest-list-quick-facts');
  if (go_centralwest_list_quick_facts) {
    gsap.from('#go-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_list_common_challenges_applicants_face = document.getElementById('go-centralwest-list-common-challenges-applicants-face');
  if (go_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#go-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_list_how_we_solve_these_challenges = document.getElementById('go-centralwest-list-how-we-solve-these-challenges');
  if (go_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#go-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_section_trip_overview = document.getElementById('go-centralwest-section-trip-overview');
  if (go_centralwest_section_trip_overview) {
    gsap.fromTo('#go-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_form_who_is_this_trip_for = document.getElementById('go-centralwest-form-who-is-this-trip-for');
  if (go_centralwest_form_who_is_this_trip_for) {
    gsap.from('#go-centralwest-form-who-is-this-trip-for input, #go-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_list_required_documents = document.getElementById('go-centralwest-list-required-documents');
  if (go_centralwest_list_required_documents) {
    gsap.from('#go-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_list_booking_process = document.getElementById('go-centralwest-list-booking-process');
  if (go_centralwest_list_booking_process) {
    gsap.from('#go-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_section_timelines_deadlines = document.getElementById('go-centralwest-section-timelines-deadlines');
  if (go_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#go-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_section_fees_costs = document.getElementById('go-centralwest-section-fees-costs');
  if (go_centralwest_section_fees_costs) {
    gsap.fromTo('#go-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_list_risks_common_mistakes = document.getElementById('go-centralwest-list-risks-common-mistakes');
  if (go_centralwest_list_risks_common_mistakes) {
    gsap.from('#go-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_section_diy_vs_professional_assistance = document.getElementById('go-centralwest-section-diy-vs-professional-assistance');
  if (go_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_section_gois_specific_context = document.getElementById('go-centralwest-section-gois-specific-context');
  if (go_centralwest_section_gois_specific_context) {
    gsap.fromTo('#go-centralwest-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_section_what_our_clients_say = document.getElementById('go-centralwest-section-what-our-clients-say');
  if (go_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#go-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_section_frequently_asked_questions = document.getElementById('go-centralwest-section-frequently-asked-questions');
  if (go_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#go-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_section_international_support = document.getElementById('go-centralwest-section-international-support');
  if (go_centralwest_section_international_support) {
    gsap.fromTo('#go-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_list_our_credentials = document.getElementById('go-centralwest-list-our-credentials');
  if (go_centralwest_list_our_credentials) {
    gsap.from('#go-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_list_related_services = document.getElementById('go-centralwest-list-related-services');
  if (go_centralwest_list_related_services) {
    gsap.from('#go-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_section_youre_in_good_hands = document.getElementById('go-centralwest-section-youre-in-good-hands');
  if (go_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#go-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_centralwest_section_21 = document.getElementById('go-centralwest-section-21');
  if (go_centralwest_section_21) {
    gsap.fromTo('#go-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('go-southeast-form-dynamic-southeast-cities-and-history');
  if (go_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#go-southeast-form-dynamic-southeast-cities-and-history input, #go-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_list_quick_facts = document.getElementById('go-southeast-list-quick-facts');
  if (go_southeast_list_quick_facts) {
    gsap.from('#go-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_list_common_challenges_applicants_face = document.getElementById('go-southeast-list-common-challenges-applicants-face');
  if (go_southeast_list_common_challenges_applicants_face) {
    gsap.from('#go-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_list_how_we_solve_these_challenges = document.getElementById('go-southeast-list-how-we-solve-these-challenges');
  if (go_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#go-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_section_trip_overview = document.getElementById('go-southeast-section-trip-overview');
  if (go_southeast_section_trip_overview) {
    gsap.fromTo('#go-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_form_who_is_this_trip_for = document.getElementById('go-southeast-form-who-is-this-trip-for');
  if (go_southeast_form_who_is_this_trip_for) {
    gsap.from('#go-southeast-form-who-is-this-trip-for input, #go-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_list_required_documents = document.getElementById('go-southeast-list-required-documents');
  if (go_southeast_list_required_documents) {
    gsap.from('#go-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_list_booking_process = document.getElementById('go-southeast-list-booking-process');
  if (go_southeast_list_booking_process) {
    gsap.from('#go-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_section_timelines_deadlines = document.getElementById('go-southeast-section-timelines-deadlines');
  if (go_southeast_section_timelines_deadlines) {
    gsap.fromTo('#go-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_section_fees_costs = document.getElementById('go-southeast-section-fees-costs');
  if (go_southeast_section_fees_costs) {
    gsap.fromTo('#go-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_list_risks_common_mistakes = document.getElementById('go-southeast-list-risks-common-mistakes');
  if (go_southeast_list_risks_common_mistakes) {
    gsap.from('#go-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_section_diy_vs_professional_assistance = document.getElementById('go-southeast-section-diy-vs-professional-assistance');
  if (go_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_section_gois_specific_context = document.getElementById('go-southeast-section-gois-specific-context');
  if (go_southeast_section_gois_specific_context) {
    gsap.fromTo('#go-southeast-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_section_what_our_clients_say = document.getElementById('go-southeast-section-what-our-clients-say');
  if (go_southeast_section_what_our_clients_say) {
    gsap.fromTo('#go-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_section_frequently_asked_questions = document.getElementById('go-southeast-section-frequently-asked-questions');
  if (go_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#go-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_section_international_support = document.getElementById('go-southeast-section-international-support');
  if (go_southeast_section_international_support) {
    gsap.fromTo('#go-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_list_our_credentials = document.getElementById('go-southeast-list-our-credentials');
  if (go_southeast_list_our_credentials) {
    gsap.from('#go-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_list_related_services = document.getElementById('go-southeast-list-related-services');
  if (go_southeast_list_related_services) {
    gsap.from('#go-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_section_youre_in_good_hands = document.getElementById('go-southeast-section-youre-in-good-hands');
  if (go_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#go-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_southeast_section_21 = document.getElementById('go-southeast-section-21');
  if (go_southeast_section_21) {
    gsap.fromTo('#go-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('go-northeast-form-vibrant-northeast-beaches-and-culture');
  if (go_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#go-northeast-form-vibrant-northeast-beaches-and-culture input, #go-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_list_quick_facts = document.getElementById('go-northeast-list-quick-facts');
  if (go_northeast_list_quick_facts) {
    gsap.from('#go-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_list_common_challenges_applicants_face = document.getElementById('go-northeast-list-common-challenges-applicants-face');
  if (go_northeast_list_common_challenges_applicants_face) {
    gsap.from('#go-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_list_how_we_solve_these_challenges = document.getElementById('go-northeast-list-how-we-solve-these-challenges');
  if (go_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#go-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_section_trip_overview = document.getElementById('go-northeast-section-trip-overview');
  if (go_northeast_section_trip_overview) {
    gsap.fromTo('#go-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_form_who_is_this_trip_for = document.getElementById('go-northeast-form-who-is-this-trip-for');
  if (go_northeast_form_who_is_this_trip_for) {
    gsap.from('#go-northeast-form-who-is-this-trip-for input, #go-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_list_required_documents = document.getElementById('go-northeast-list-required-documents');
  if (go_northeast_list_required_documents) {
    gsap.from('#go-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_list_booking_process = document.getElementById('go-northeast-list-booking-process');
  if (go_northeast_list_booking_process) {
    gsap.from('#go-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_section_timelines_deadlines = document.getElementById('go-northeast-section-timelines-deadlines');
  if (go_northeast_section_timelines_deadlines) {
    gsap.fromTo('#go-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_section_fees_costs = document.getElementById('go-northeast-section-fees-costs');
  if (go_northeast_section_fees_costs) {
    gsap.fromTo('#go-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_list_risks_common_mistakes = document.getElementById('go-northeast-list-risks-common-mistakes');
  if (go_northeast_list_risks_common_mistakes) {
    gsap.from('#go-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_section_diy_vs_professional_assistance = document.getElementById('go-northeast-section-diy-vs-professional-assistance');
  if (go_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_section_gois_specific_context = document.getElementById('go-northeast-section-gois-specific-context');
  if (go_northeast_section_gois_specific_context) {
    gsap.fromTo('#go-northeast-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_section_what_our_clients_say = document.getElementById('go-northeast-section-what-our-clients-say');
  if (go_northeast_section_what_our_clients_say) {
    gsap.fromTo('#go-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_section_frequently_asked_questions = document.getElementById('go-northeast-section-frequently-asked-questions');
  if (go_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#go-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_section_international_support = document.getElementById('go-northeast-section-international-support');
  if (go_northeast_section_international_support) {
    gsap.fromTo('#go-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_list_our_credentials = document.getElementById('go-northeast-list-our-credentials');
  if (go_northeast_list_our_credentials) {
    gsap.from('#go-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_list_related_services = document.getElementById('go-northeast-list-related-services');
  if (go_northeast_list_related_services) {
    gsap.from('#go-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_section_youre_in_good_hands = document.getElementById('go-northeast-section-youre-in-good-hands');
  if (go_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#go-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_northeast_section_21 = document.getElementById('go-northeast-section-21');
  if (go_northeast_section_21) {
    gsap.fromTo('#go-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_form_charming_south_wine_and_gauchos = document.getElementById('go-south-form-charming-south-wine-and-gauchos');
  if (go_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#go-south-form-charming-south-wine-and-gauchos input, #go-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_list_quick_facts = document.getElementById('go-south-list-quick-facts');
  if (go_south_list_quick_facts) {
    gsap.from('#go-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_list_common_challenges_applicants_face = document.getElementById('go-south-list-common-challenges-applicants-face');
  if (go_south_list_common_challenges_applicants_face) {
    gsap.from('#go-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_list_how_we_solve_these_challenges = document.getElementById('go-south-list-how-we-solve-these-challenges');
  if (go_south_list_how_we_solve_these_challenges) {
    gsap.from('#go-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_section_trip_overview = document.getElementById('go-south-section-trip-overview');
  if (go_south_section_trip_overview) {
    gsap.fromTo('#go-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_form_who_is_this_trip_for = document.getElementById('go-south-form-who-is-this-trip-for');
  if (go_south_form_who_is_this_trip_for) {
    gsap.from('#go-south-form-who-is-this-trip-for input, #go-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_list_required_documents = document.getElementById('go-south-list-required-documents');
  if (go_south_list_required_documents) {
    gsap.from('#go-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_list_booking_process = document.getElementById('go-south-list-booking-process');
  if (go_south_list_booking_process) {
    gsap.from('#go-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_section_timelines_deadlines = document.getElementById('go-south-section-timelines-deadlines');
  if (go_south_section_timelines_deadlines) {
    gsap.fromTo('#go-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_section_fees_costs = document.getElementById('go-south-section-fees-costs');
  if (go_south_section_fees_costs) {
    gsap.fromTo('#go-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_list_risks_common_mistakes = document.getElementById('go-south-list-risks-common-mistakes');
  if (go_south_list_risks_common_mistakes) {
    gsap.from('#go-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_section_diy_vs_professional_assistance = document.getElementById('go-south-section-diy-vs-professional-assistance');
  if (go_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#go-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_section_gois_specific_context = document.getElementById('go-south-section-gois-specific-context');
  if (go_south_section_gois_specific_context) {
    gsap.fromTo('#go-south-section-gois-specific-context', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_section_what_our_clients_say = document.getElementById('go-south-section-what-our-clients-say');
  if (go_south_section_what_our_clients_say) {
    gsap.fromTo('#go-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_section_frequently_asked_questions = document.getElementById('go-south-section-frequently-asked-questions');
  if (go_south_section_frequently_asked_questions) {
    gsap.fromTo('#go-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_section_international_support = document.getElementById('go-south-section-international-support');
  if (go_south_section_international_support) {
    gsap.fromTo('#go-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_list_our_credentials = document.getElementById('go-south-list-our-credentials');
  if (go_south_list_our_credentials) {
    gsap.from('#go-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_list_related_services = document.getElementById('go-south-list-related-services');
  if (go_south_list_related_services) {
    gsap.from('#go-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_section_youre_in_good_hands = document.getElementById('go-south-section-youre-in-good-hands');
  if (go_south_section_youre_in_good_hands) {
    gsap.fromTo('#go-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

  const go_south_section_21 = document.getElementById('go-south-section-21');
  if (go_south_section_21) {
    gsap.fromTo('#go-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.24, ease: 'power1.inOut'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
