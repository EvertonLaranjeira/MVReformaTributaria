/* Rodapé compartilhado: todas as páginas carregam este arquivo. */
document.querySelectorAll('[data-site-footer]').forEach((footer) => {
  footer.innerHTML = `
    <div class="container footer-content footer-contact-expanded">
      <div>
        <a class="brand brand-footer" href="index.html">
          <img class="brand-logo" src="IMG/logo-escritorio.png" alt="Logo do escritório" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'" />
          <span class="brand-name logo-fallback">Logo do escritório</span>
        </a>
        <p>Portal da Reforma Tributária.<br />Conteúdo técnico, claro e atualizado.</p>
      </div>
      <div class="footer-contact">
        <p class="footer-title">Contato</p>
        <p class="footer-address">Av. Gentil Bitencourt, 1096, Sala 06 e 07<br />66035-115, Bairro Nazaré<br />Belém - PA, Brasil</p>
        <div class="contact-links">
          <a href="tel:+559132491682"><strong>Telefone</strong><span>(91) 3249-1682</span></a>
          <a href="https://wa.me/5591982193911?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20os%20servi%C3%A7os%20cont%C3%A1beis%20da%20empresa." target="_blank" rel="noopener noreferrer"><strong>WhatsApp</strong><span>+55 91 98219-3911</span></a>
          <a href="mailto:atendimento@mvcontadores.com.br"><strong>E-mail</strong><span>atendimento@mvcontadores.com.br</span></a>
        </div>
        <p class="footer-update">Última atualização: julho de 2026</p>
      </div>
    </div>
    <div class="container footer-bottom">© 2026 MV Contadores. Todos os direitos reservados.</div>`;
});

/* Mantém os links das páginas que já migraram para o portal local. */
const localRoutes = {
  '/conceitos-fundamentais': 'conceitos.html',
  '/base-legal-da-reforma-tribut%C3%A1ria': 'base-legal.html',
  '/ibs': 'ibs.html',
  '/cbs': 'cbs.html'
};
document.querySelectorAll('a[href]').forEach((link) => {
  const href = link.getAttribute('href');
  if (!href) return;
  for (const [legacyPath, localFile] of Object.entries(localRoutes)) {
    if (href.includes(legacyPath)) {
      link.setAttribute('href', localFile);
      break;
    }
  }
});
