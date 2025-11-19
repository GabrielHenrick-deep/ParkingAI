//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false);
var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  dialog: {
    buttonOk: 'Sim',
    buttonCancel: 'Cancelar',
  },
  // Add default routes
  routes: [
    {
      path: '/index/',
      url: 'index.html',
      options: {
        transition: 'f7-parallax',
      },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
     $("#menuPrincipal").show("fast");
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
      $.getScript('js/index.js');
      document.querySelectorAll('.parking-spot').forEach(function(spot){
        spot.addEventListener('click', function(){
          var number = this.dataset.number;
          var floor = this.dataset.floor;
          var price = this.dataset.price;
          openParkingPopup(number, floor, price);
        });
      })
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        delay: 3000,
        loop: true,
        breakpoints: {
          50:{
            slidesPerView:1,
            spaceBetween: 30
          },
          640:{
            slidesPerView: 2,
            spaceBetween: 30
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      });

      var swiper2 = new Swiper(".categorias", {
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
          50:{
            slidesPerView:3,
            spaceBetween: 10
          },
          640:{
            slidesPerView: 6,
            spaceBetween: 10
          },
          992: {
            slidesPerView: 8,
            spaceBetween: 10
          },
          1200: {
            slidesPerView: 12,
            spaceBetween: 10
          }
        }
      });

		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/user/',
      url: 'user.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/telaLogin/',
      url: 'telaLogin.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
    
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/link4/',
      url: 'link4.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/detalhes/',
      url: 'detalhes.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
          var swiper = new Swiper('.garagemSwiper', {
            slidesPerView: 1,
            spaceBetween: 10,
        });
        
          $("#menuPrincipal").hide("fast");
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
          $.getScript('js/detalhes.js');
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        
      }
    },
    {
      path: '/carrinho/',
      url: 'carrinho.html',
      options: {
        transition: 'f7-push',
      },
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
      $("#menuPrincipal").hide("fast");
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/login',
      url: 'login.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
          $("#menuPrincipal").hide("fast");
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        
      }
    },
    {
      path: '/cadastro/',
      url: 'cadastro.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
          $("#menuPrincipal").hide("fast");
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        
      }
    },
    {
      path: '/cadastroVeiculo/',
      url: 'cadastroVeiculo.html',
      animate: false,
      on: {
        pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
          $("#menuPrincipal").hide("fast");
        },
        pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
        },
        pageInit: function (event, page) {
        },
        pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
        },
        
      }
    },
  ],
  views: {
    browserHistory: true,
    browserHistorySeparator: '',
  },
  // ... other parameters
});
//Para testes direto no navegador
var mainView = app.views.create('.view-main', { url: '/index/' });

//EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log(currentRoute);
  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });
  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) {
    targetEl.classList.add('active');
  }
});

// Função para abrir o sheet modal ao clicar na vaga
function openParkingSheet(number, floor, price) {
  // Preencher os detalhes no modal
  document.getElementById('parking-number').textContent = number;
  document.getElementById('parking-floor').textContent = floor;
  document.getElementById('parking-price').textContent = price;

  // Criar e abrir o sheet modal
  var sheet = app.sheet.create({
    el: '#parking-sheet',
    swipeToClose: true,
    swipeToStep: true,
    backdrop: true, // Adiciona um fundo escurecido atrás do modal
  });

  sheet.open();
}

// Evento de clique nas vagas de estacionamento
document.querySelectorAll('.parking-spot').forEach(function (spot) {
  spot.addEventListener('click', function () {
    var number = this.dataset.number; // Número da vaga
    var floor = this.dataset.floor;   // Andar da garagem
    openParkingSheet(number, floor);  // Abrir o sheet modal
  });
});


// Para testes direto no navegador
var mainView = app.views.create('.view-main', { url: '/index/' });

// Evento para detectar mudança de rota
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log(currentRoute);
  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });
  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) {
    targetEl.classList.add('active');
  }
});

function onDeviceReady() {
  // Quando rodando no celular
  var mainView = app.views.create('.view-main', { url: '/index/' });

  // Botão voltar no Android
  document.addEventListener("backbutton", function (e) {
    if (mainView.router.currentRoute.path === '/index/') {
      e.preventDefault();
      app.dialog.confirm('Deseja sair do aplicativo?', function () {
        navigator.app.exitApp();
      });
    } else {
      e.preventDefault();
      mainView.router.back({ force: true });
    }
  }, false);

  // Inicializar popups ou outros elementos relacionados ao dispositivo
  console.log('Dispositivo pronto!');
}