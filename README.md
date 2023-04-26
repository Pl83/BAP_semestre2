# BAP_semestre2
Réaliser lors du semestre de 2éme année, nous avions carte blanche pour la partie web developement. 
Aprés brainstorming et réunion créative nous avons decider de faire 4 page pour intégrez nos idées : 
  <li> La refonte de la Home page </li>
  <li> La Page Map </li>
  <li> La Page Jeux </li>
  <li> La landing Page JO </li>
  
 Nous allons maintenant vous expliquez chaque page.
 
 ## Refonte Home Page
 Il s'agit d'une refonte de l'homepage de la mairie de Chaville. 
 Nous nous sommes inspirée du designe des sites d'autres villes. 
 On retrouve donc un petit dashboard pour permettre au riverain d'accéder rapidement aux fonctionaliter importantes. 
 De plus des sliders d'information permettront d'afficher les news et les actuent de la ville.

 ## Page Map
Cette page a pour but de mettre en avant les petits commerces de Chaville. 
 On y retrouve une liste de petit commerce classer par catégories avec leur information.
 La partie map interactive permet de visualiser l'emplacement de chaque commerce.
 
 ## Page Jeux
 Cette page est liée aux JO. Avec les JO un jeu ludique est mis en place. 
 Vous pourrez retrouver des explications du jeu, un suivie de votre progression et encore bien d'autres sur cette page.

 ## Landing Page JO
Un landing page en prévision des jeux olympiques de Paris. 
 Cette page montre l'implication de Chaville dans les JO, qui sera d'ailleurs traversée par une épreuve.
 Vous pourrez y trouver de nombreuses informations sur les JO.
 
 ### Instalation du projet et le run :
 
 Pour récupérer un projet faire un git clone : 
 
 `$ git clone git@github.com:Pl83/BAP_semestre2.git`
 
 Pour compiler le sass de la home page faire : 
 
 `$ cd css` 
 
 `$ sass --watch home.scss:home.css`
 
 Pour compiler le sass de la landing page et de la page jeux : 
 
 `$ cd css` 
 
 `$ sass --watch style.scss:build.css`


# La V2
La V2 se trouve sur la branch "backend". Elle n'est pas en ligne car nécessité un serveur pouvant héberger du node js.

### Différence :
<li>Les données de la map sont stocker sur un serveur MongoDb</li>
<li>Possibilité de rentrer son email pour obtenir un QrCode unique de promotion auprès des petits commerces de Chaville</li>
<li>Affichage des horaires d'ouverture des magasins</li>

### Instalation de la V2 et la run :

`$ git clone git@github.com:Pl83/BAP_semestre2.git`

`$ git switch backend`

`$ git pull `

`$ cd backend`

`$ npm start`
