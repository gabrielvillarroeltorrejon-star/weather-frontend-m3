Weather Frontend M3

Este proyecto corresponde al portafolio del Módulo 3 y consiste en una app de clima enfocada en destinos turísticos. La idea principal fue tomar la base del módulo 2 y mejorar toda la parte visual, la organización de estilos y la estructura del proyecto.

Muestra una vista Home con distintos lugares turísticos en formato de cards, donde se puede ver información general del clima, como temperatura y estado del tiempo. Además, cada lugar tiene una vista de detalle con información más completa.

¿Qué mejoras se hicieron en este módulo?

Se trabajó principalmente en mejorar la interfaz y los estilos.

Se realizaron estas mejoras:

- Se reorganizó la estructura visual de la app.
- Se mejoró la presentación de las cards.
- Se hizo la app responsiva para que se vea mejor en celular y en pantallas más grandes.
- Se dejó un navbar fijo tipo sticky.
- Se mejoró la paleta de colores para que tuviera más identidad visual.
- Se agregaron ajustes visuales y pequeños efectos para que la experiencia se viera más moderna.

Metodología de estilos

Para organizar mejor las clases se utilizó una estructura basada en BEM.  
Esto ayudó a que los nombres de las clases fueran más ordenados y fáciles de entender.

Algunos ejemplos usados en el proyecto:

weather-app
weather-app__navbar
weather-app__hero
place-card
place-card__image
detail-card
detail-card__title

Estructura SASS

Se trabajó con SASS para separar mejor los estilos y no dejar todo en un solo archivo.

La estructura quedó organizada así:

assets/scss/
  base/
    _variables.scss
    _reset.scss
    _index.scss
  layout/
    _navbar.scss
    _hero.scss
    _footer.scss
    _index.scss
  components/
    _place-card.scss
    _detail-card.scss
    _index.scss
  styles.scss
