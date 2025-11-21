// ========== BANNER (OPCIONAL: só se você estiver usando a section#banner) ==========
const banner = document.getElementById('banner');
const imagens = [
  'conjunto estefany.webp',
  'conjunto ana lis.jpg',
  'conjunto Elise.jpg'
];

let bannerIndex = 0;

if (banner && imagens.length > 0) {
  banner.style.backgroundImage = `url('${imagens[bannerIndex]}')`;

  function trocarImagem() {
    banner.classList.add('fade-out');
    setTimeout(() => {
      bannerIndex = (bannerIndex + 1) % imagens.length;
      banner.style.backgroundImage = `url('${imagens[bannerIndex]}')`;
      banner.classList.remove('fade-out');
    }, 1000);
  }

  setInterval(trocarImagem, 5000);
}


// ========== CARROSSEL ==========
const track = document.querySelector('.carousel-track');
const slides = Array.from(track?.children || []);
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');
const indicators = document.querySelectorAll('.carousel-indicators button');

let currentIndex = 0;

function updateCarousel(index) {
  if (slides.length === 0) return;

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${slideWidth * index}px)`;

  // Atualiza indicadores
  indicators.forEach(btn => btn.classList.remove('active'));
  if (indicators[index]) {
    indicators[index].classList.add('active');
  }

  currentIndex = index;
}

// Botões de navegação
prevBtn?.addEventListener('click', () => {
  updateCarousel(currentIndex - 1);
});

nextBtn?.addEventListener('click', () => {
  updateCarousel(currentIndex + 1);
});

// Indicadores clicáveis
indicators.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    updateCarousel(idx);
  });
});

// Atualiza carrossel após carregamento das imagens
window.addEventListener('load', () => {
  updateCarousel(currentIndex);
});


// ========== POPUP ==========
window.onload = function() {
  const popup = document.getElementById('popup');
  const close = document.getElementById('close');

  // Mostra o popup após 2 segundos
  setTimeout(() => {
    popup.classList.add('show');
  }, 2000);

  // Botão de fechar
  close.addEventListener('click', () => {
    popup.classList.remove('show');
  });

  // Fecha o popup ao clicar fora dele
  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('show');
    }
  });
};
