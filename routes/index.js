/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Braulio Soncco - Web Developer' });
};

exports.portfolio = function(req, res){
  var _path = '/port';
  // TODO: Usar MongoDB
  var _drupal = [
    {
      image: _path + '/amazonwildlife.jpg',
      description: 'Amazon Wild Life Perú',
      url: 'amazonwildlifeperu.com',
    },
    {
      image: _path + '/cienciano.jpg',
      description: 'Web Oficial del Club Cienciano del Cusco',
      url: 'cienciano.com',
    },
    {
      image: _path + '/intercultural.jpg',
      description: 'Directorio Intercultural',
      url: 'intercultural.edu.pe',
    },
    {
      image: _path + '/cpiis.jpg',
      description: 'Ingeniería Informática y de Sistemas - UNSAAC',
      url: 'iisunsaac.com',
    },
    {
      image: _path + '/itegra.jpg',
      description: 'Itegracion',
      url: 'itegracion.com',
    },
    {
      image: _path + '/its.jpg',
      description: 'Inkas Travel Services',
      url: 'inkastravelservice.com',
    },
    {
      image: _path + '/legacy.jpg',
      description: 'Legacy Humanitarian',
      url: 'legacyperu.org',
    },
    {
      image: _path + '/patagonia.jpg',
      description: 'Patagonia Elements',
      url: 'patagoniaelements.com',
    },
    {
      image: _path + '/punto.jpg',
      description: 'Grupo Punto Azul',
      url: 'grupopuntoazul.com',
    },
    {
      image: _path + '/re.jpg',
      description: 'River Explorers',
      url: 'riverexplorers.com',
    },
    {
      image: _path + '/hp.jpg',
      description: 'Hoteles Perú',
      url: 'hotelesperu.com',
    },
  ];

  res.render('portfolio', {
    title: 'Braulio Soncco - Portfolio',
    drupal: _drupal
  });

};