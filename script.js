// Para fechar o menu e levar ao final do site
document.addEventListener('DOMContentLoaded', function () {
  var contactLink = document.getElementById('contact-link');
  var offcanvasNavbar = document.getElementById('offcanvasNavbar2');

  contactLink.addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    // Verifica se o menu offcanvas está aberto
    if (offcanvasNavbar.classList.contains('show')) {
      var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
      offcanvasInstance.hide();

      // Aguarda o menu fechar antes de fazer o scroll suave
      setTimeout(function () {
        window.scrollTo({
          top: document.getElementById('footer').offsetTop,
          behavior: 'smooth'
        });
      }, 300); // Aguardar 300ms para o menu fechar
    } else {
      // Scroll suave diretamente
      window.scrollTo({
        top: document.getElementById('footer').offsetTop,
        behavior: 'smooth'
      });
    }
  });
});


// Para o scroll do ícone
let lastScrollPosition = 0;
let rotation = 0;
const rotationFactor = 0.3; // Ajuste este valor para aumentar ou diminuir a rotação

// Função para atualizar a rotação do ícone com base no scroll
function updateRotation() {
  const currentScrollPosition = window.scrollY;
  const scrollDifference = currentScrollPosition - lastScrollPosition;

  rotation += scrollDifference * rotationFactor; // Reduz a quantidade de rotação
  lastScrollPosition = currentScrollPosition;

  const icon = document.querySelector('.icon');
  icon.style.transform = `rotate(${rotation}deg)`;
}

// Adiciona um ouvinte de evento de rolagem para chamar a função de atualização de rotação
window.addEventListener('scroll', updateRotation);


// Animação dos títulos ao entrar na viewport
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll('.animated-element');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('fadeIn')) {
          entry.target.classList.add('animate__animated', 'animate__fadeIn');
        } else if (entry.target.classList.contains('fadeInUp')) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
        observer.unobserve(entry.target);  // Parar de observar após adicionar a animação
      }
    });
  }, {
    threshold: 0.1  // Disparar quando 10% do elemento está visível
  });

  animatedElements.forEach(element => {
    observer.observe(element);
  });
});


// Troca de imagens dos projetos
function restaurarImagem(imagem, srcOriginal) {
  imagem.src = srcOriginal;
}

function trocarImagem(imagem, novaSrc, aumentar) {
  imagem.src = novaSrc;
  if (aumentar) {
    imagem.classList.add('imagem-aumentada');
    imagem.classList.remove('imagem-reduzida');
  } else {
    imagem.classList.add('imagem-reduzida');
    imagem.classList.remove('imagem-aumentada');
  }
}


// Botão de contacto (rolagem suave)
document.addEventListener("DOMContentLoaded", function () {
  var btnContacto = document.getElementById("btn-contacto");
  var btnTopo = document.getElementById("btn-topo");

  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var offset = section.offsetTop;

    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }

  btnContacto.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToSection("contacto");
  });

  btnTopo.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToSection("topo");
  });
});


// Ver mais e ver menos
document.addEventListener('DOMContentLoaded', function () {
  var verMaisMenosBtns = document.getElementsByClassName('verMaisMenos');
  var verEquipaBtns = document.getElementsByClassName('verEquipa');

  function toggleText(btn, expandedText, collapsedText) {
    var isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.innerText = isExpanded ? collapsedText : expandedText;
    btn.setAttribute('aria-expanded', !isExpanded);
  }

  Array.from(verMaisMenosBtns).forEach(function (btn) {
    btn.addEventListener('click', function () {
      toggleText(this, 'Ver mais', 'Ver menos');
    });
  });

  Array.from(verEquipaBtns).forEach(function (btn) {
    btn.addEventListener('click', function () {
      toggleText(this, 'Ver Equipa', 'Ocultar Equipa');
    });
  });
});


// Botão de copiar email
document.addEventListener('DOMContentLoaded', function () {
  var emailButton = document.getElementById('btn-copy-email');
  var popover = new bootstrap.Popover(emailButton, {
    trigger: 'manual'
  });

  emailButton.addEventListener('click', function () {
    var email = 'bernardofilipefigueiredo@gmail.com';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(function () {
        showPopover();
      }).catch(function () {
        fallbackCopyTextToClipboard(email);
        showPopover();
      });
    } else {
      fallbackCopyTextToClipboard(email);
      showPopover();
    }
  });

  function showPopover() {
    popover.show();
    setTimeout(function () {
      popover.hide();
    }, 2000);
  }

  function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
  }
});


// Cria um novo elemento <script> para JSON-LD
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(jsonLd);

// Adiciona o elemento <script> ao <head> do documento
document.head.appendChild(script);

var offcanvasElement = document.getElementById('offcanvasNavbar2');
var offcanvas = new bootstrap.Offcanvas(offcanvasElement);
