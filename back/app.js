let express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
let port = 4040;

const app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://db:27017/mongodb";

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))


app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})


app.set('port', port);


app.listen(app.get('port'), (err) =>{
    console.log(`Server running on port ${app.get('port')}`);
})


//40 PERSONAJES CARGADOS DEFAULD.
/*
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mongodb");
  var myobj = [
    {nombrePJ: 'Aquaman', nombre: 'Arthur Curry', añoApar: '1941', casaPert: 'Dc Comic', biografia: 'Aquaman es hijo del farero Thomas Curry y la reina de Atlántida, Atlanna. Al menos, así estaba establecido en la historias de la edad de plata. A partir de la serie Crisis en Tierras Infinitas, su origen cambió a completamente atlante. En esta nueva realidad, su padre es Atlan, un misterioso mago de Atlántida.', equipamiento: 'Tridente', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/dc-aquaman-1024x819.png'},
    {nombrePJ: 'Deadman', nombre: 'Arnold Drake', añoApar: '1967', casaPert: 'Dc Comic', biografia: 'Deadman es un antiguo acróbata de circo llamado Boston Brand, que fue asesinado durante un espectáculo de trapecio por un asaltante misterioso conocido sólo como el gancho.', equipamiento: 'nada', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/dc-deadman-1024x819.png'},
    {nombrePJ: 'Joker', nombre: 'Jack Napier', añoApar: '1940', casaPert: 'Dc Comic', biografia: ' Fue un comediante hasta que fue despedido después de ser acusado falsamente. Más tarde fue golpeado repetidamente por varias personas e intentó resucitar su carrera. También perdió el acceso a su medicación y terapeuta, lo que lo hizo sucumbir a la locura y asumir la identidad de Joker.', equipamiento: 'Nada', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/dc-joker-alt-1-1024x819.png'},
    {nombrePJ: 'Cyborg', nombre: 'Joivan Wade', añoApar: '1980', casaPert: 'Dc Comic', biografia: 'Es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por DC Comics. El personaje fue creado por el escritor Marv Wolfman y el artista George Pérez y apareció por primera vez en un suplemento especial en DC Comics Presents #26', equipamiento: 'Nada', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-Cyborg-1024x819.png'},
    {nombrePJ: 'Superman', nombre: 'Clark Joseph Kent', añoApar: '1938', casaPert: 'Dc Comic', biografia: 'Superman nació en el planeta Krypton y recibió el nombre de Kal-El al nacer. Cuando era bebé, sus padres, el científico Jor-El, y su esposa Lara Lor-Van, lo enviaron a la Tierra en una pequeña nave espacial momentos antes de que Krypton fuera destruido en un cataclismo natural.', equipamiento: 'Capa', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-Superman-1024x819.png'},
    {nombrePJ: 'Shazam!', nombre: 'William Joseph "Billy" Batson', añoApar: '1939', casaPert: 'Dc Comic', biografia: 'Es el alter ego de Billy Batson, un niño que, al pronunciar la palabra mágica "SHAZAM" (Acrónimo de seis "ancianos inmortales": Salomón, Hércules, Atlas, Zeus, Aquiles y Mercurio), puede transformarse en un adulto disfrazado con los poderes de fuerza sobrehumana, velocidad, vuelo y otras habilidades.', equipamiento: 'Nada', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/dc-shazam-1024x819.png'},
    {nombrePJ: 'Brainiac', nombre: 'Vril Dox', añoApar: '1958', casaPert: 'Dc Comic', biografia: 'Apareciendo por primera vez en Action Comics # 242 (julio de 1958), Brainiac es un humanoide calvo de piel verde que llega a la Tierra y encoge varias ciudades, incluida Metrópolis, y las almacena en botellas con la intención de usarlas para restaurar el planeta (que por entonces no tenía nombre) que gobernaba.', equipamiento: '', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/dc-brainiac-1024x819.png'},
    {nombrePJ: 'Flash', nombre: 'Barry Allen', añoApar: '1939', casaPert: 'Dc Comic', biografia: 'Jay Garrick era un estudiante universitario en 1938 que accidentalmente inhaló vapores de agua pesada después de tomar un descanso para fumar dentro de su laboratorio donde había estado trabajando. ​ Como resultado, descubrió que podía correr a una velocidad sobrehumana y que tenía reflejos igualmente rápidos.', equipamiento: 'Traje a prueba de fricción, comunicadores', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/dc-flash-1024x819.png'},
    {nombrePJ: 'Green Lantern', nombre: 'Alan Scott', añoApar: '1940', casaPert: 'Dc Comic', biografia: 'En 1940, la linterna llegaría a manos de Alan Scott, un joven ingeniero. Tras ser el único superviviente del colapso de un puente de ferrocarril y hallándose al borde de la muerte, la llama enseñaría a Scott cómo fabricar un anillo a partir de su metal, para darle increíbles poderes como el superhéroe Linterna Verde.', equipamiento: 'Nada', imgURL: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Green-Lantern-1024x819.png'},
    {nombrePJ: 'Batman', nombre: 'Christian Bale', añoApar: '1939', casaPert: 'Dc Comic', biografia: 'Batman es un superhéroe de cómic co-creado por el artista Bob Kane y el escritor Bill Finger y publicado por DC Comics. El personaje hizo su primera aparición en Detective Comics #27 (mayo de 1939). Batman es la identidad secreta de Bruce Wayne, un empresario multimillonario, galán y filántropo.', equipamiento: 'Cinturón de herramientas', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/DC-Comics-batman-1024x819.png'},
    {nombrePJ: 'Mr Miracle', nombre: 'Jim Steranko', añoApar: '1973', casaPert: 'Dc Comic', biografia: 'Thaddeus Brown era un artista de escape de circo cuyo nombre artístico era Mister Miracle(Señor Milagro). Como el primer artista del escape que usó el nombre Mister Miracle, Brown fue el mentor de Scott Free. Después del asesinato de Brown, Scott Free tomó el nombre de Mister Miracle y contrató a su asistente Oberon.', equipamiento: 'Una capa', imgURL: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Mr-Miracle-1024x819.png'},
    {nombrePJ: 'Kalibak', nombre: 'No tiene', añoApar: '1970', casaPert: 'Dc Comic', biografia: 'Kalibak es un personaje de los cómics perteneciente al universo de DC Comics . Fue creado por Jack Kirby . Hijo de Darkseid , es un Dios nuevo que reside en Apokolips. Está bendecido con una fuerza sobrehumana comparable a la de Superman y es conocido por su bestialidad', equipamiento: 'Beta - Club', imgURL: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Kalibak-1024x819.png'},
    {nombrePJ: 'Orion', nombre: 'O` Ryan', añoApar: '1971', casaPert: 'Dc Comic', biografia: 'Orión es el segundo hijo de Darkseid; dictador de Hellish Apokolips. ​Es el medio hermano de Kalibak y Grayven. Más tarde se casa con Bekka, la hija del líder de la Resistencia Apokolips, Himon.', equipamiento: 'Nada', imgURL: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Orion-1024x819.png'},
    {nombrePJ: 'Wonder Woman', nombre: 'Diana de Themyscira', añoApar: '1941', casaPert: 'Dc Comic', biografia: 'Es una princesa guerrera de las Amazonas, pueblo ficticio basado en el de las amazonas de la mitología griega. En su tierra natal es conocida como la princesa Diana de Temiscira pero fuera de esta utiliza la identidad secreta de Diana Prince.', equipamiento: 'Gran arsenal de armas', imgURL: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Wonder-Woman-1024x819.png'},
    {nombrePJ: 'Mr Freezer', nombre: 'Victor Fries', añoApar: '1959', casaPert: 'Dc Comic', biografia: 'Victor Fries es un experto en criogenia en Gotham City que fue atrapado en un percance de laboratorio mientras intentaba curar a su esposa enferma terminal, Nora; el accidente redujo drásticamente la temperatura de su cuerpo a niveles bajo cero, lo que le obligó a usar un traje criogénico para sobrevivir.', equipamiento: 'Arma generadora de frio', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/dc-mr-freeze-1024x819.png'},
    {nombrePJ: 'Dr Fate', nombre: 'No tiene', añoApar: '1940', casaPert: 'Dc Comic', biografia: 'Creado por Gardner Fox y Howard Sherman, apareció por primera vez en la revista mensual "More Fun Comics #55" de mayo de 1940, y ha sido representado por 8 encarnaciones, salvo una versión alternativa creada recientemente que lleva el mismo nombre de la última versión y su homóloga de DC Rebirth.', equipamiento: 'Poderes mágicos', imgURL: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Dr-Fate-1024x819.png'},
    {nombrePJ: 'Space Ghost', nombre: 'Hanna-Barbera', añoApar: '1966 ', casaPert: 'Dc Comic', biografia: 'El Fantasma del Espacio (en inglés Space ghost) es un personaje de ficción, creado en 1966 por el dibujante estadounidense Alex Toth y protagonista de la serie animada de ciencia ficción producida por Hanna-Barbera que lleva su nombre.', equipamiento: 'Nada', imgURL: 'https://yoolk.ninja/wp-content/uploads/2022/04/DC-Space-Ghost-1024x819.png'},
    {nombrePJ: 'Deathstroke', nombre: 'Slade Joseph Wilson', añoApar: '1980', casaPert: 'Dc Comic', biografia: 'Deathstroke (Slade Joseph Wilson) es un supervillano ficticio que aparece en los cómics estadounidenses publicados por DC Comics. ​Creado por Marv Wolfman y George Pérez, el personaje debutó en The New Teen Titans # 2 en diciembre de 1980.', equipamiento: 'No tiene', imgURL: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Deathstroke-1024x819.png'},
    {nombrePJ: 'Plastic Man', nombre: '"Eel" O"Brian', añoApar: '1943 ', casaPert: 'Dc Comic', biografia: 'Plastic Man era un estafador llamado Patrick "Eel" O"Brian. Huérfano a los 10 años y obligado a vivir en la calle, cayó en una vida de crimen. Como adulto, se convirtió en parte de una banda de ladrones, que se especializa como un ladrón de cajas fuertes.', equipamiento: 'No tiene', imgURL: 'https://yoolk.ninja/wp-content/uploads/2021/04/DC-Comics-PlasticMan-1024x819.png'},
    {nombrePJ: 'Peacemaker', nombre: 'Christopher Smith', añoApar: '1966', casaPert: 'Dc Comic', biografia: 'Peacemaker (Christopher Smith) es el nombre de una serie de superhéroes originalmente propiedad de Charlton Comics y luego adquirida por DC Comics. El Peacemaker original apareció por primera vez en Fightin 5 #40 (noviembre de 1966) y fue creado por el escritor Joe Gill y el artista Pat Boyette', equipamiento: 'No tiene', imgURL: 'https://yoolk.ninja/wp-content/uploads/2022/02/DC-Peacemaker-1024x819.png'},
    {nombrePJ: 'Darkseid', nombre: 'Uxas ', añoApar: '1970', casaPert: 'Dc Comic', biografia: 'Darkseid es el gobernante tiránico del planeta Apokolips, cargo que obtuvo después de asesinar a su madre. Su obsesión es encontrar la Ecuación de la Anti-vida y usarla para gobernar el universo; esta meta también incluye conquistar su planeta rival, Nuevo Génesis, gobernado por el Alto Padre.', equipamiento: 'No tiene', imgURL: 'https://yoolk.ninja/wp-content/uploads/2021/03/DC-Comics-Darkseid-1-1024x819.png'},

    {nombrePJ: 'Abomination', nombre: 'Emil Blonsky', añoApar: '1986', casaPert: 'Marvel', biografia: 'La Abominación (Emil Blonsky) es un supervillano ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje apareció por primera vez en Tales to Astonish # 90 (abril de 1967), y fue creado por el escritor Stan Lee y el artista Gil Kane. Es uno de los principales enemigos del superhéroe Hulk', equipamiento: 'No tiene', imgURL: 'https://yoolk.ninja/wp-content/uploads/2020/12/Marvel-Abomination-1024x819.png'},
    {nombrePJ: 'Adam Warlock', nombre: 'Will Poulte', añoApar: '1967', casaPert: 'Marvel', biografia: 'Adam Warlock es un humano creado artificialmente que nació en un capullo en un complejo científico llamado The Beehive. El objetivo de sus creadores, el Enclave , era crear y posteriormente explotar al humano perfecto. Mientras estaba en el capullo, se dio cuenta de los planes de sus creadores para él.', equipamiento: 'No tiene', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-GOTG-Adam-Warlock-1024x819.png'},
    {nombrePJ: 'Angel', nombre: 'Warren Kenneth Worthington III', añoApar: '1963', casaPert: 'Marvel', biografia: 'Ángel y luego Arcángel, cuyo nombre civil es Warren Kenneth Worthington III, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics y es miembro fundador de los X-Men. Fue creado por Stan Lee y Jack Kirby, para el primer número de The Uncanny X-Men #1 (septiembre, 1963), aunque posteriormente ha formado parte de otros grupos, como Factor X, los Campeones y los Defensores.', equipamiento: 'Alas', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Angel-1024x819.png'},
    {nombrePJ: 'Annihilus', nombre: 'No tiene', añoApar: '1968', casaPert: 'Marvel', biografia: 'Annihilus es un supervillano ficticio que aparece en cómics estadounidenses publicado por Marvel Comics, principalmente como un adversario de los Cuatro Fantásticos y apareció por primera vez en Fantastic Four Annual # 6, publicado en noviembre de 1968. Fue creado por el escritor Stan Lee y el artista Jack Kirby.', equipamiento: 'Vara', imgURL: 'https://yoolk.ninja/wp-content/uploads/2020/05/marvel-Annihilus-1024x819.png'},
    {nombrePJ: 'Ant Man', nombre: 'Scott Edward Harris Lang', añoApar: '2019', casaPert: 'Marvel', biografia: 'Creado por David Michelinie y John Byrne, Scott Lang apareció por primera vez en The Avengers # 181 (marzo de 1979) y en Marvel Premiere # 47 (abril de 1979) como el segundo personaje de superhéroes en usar el nombre de Ant-Man en el Universo Marvel. Es un ladrón reformado y un experto en electrónica.', equipamiento: 'No tiene', imgURL: 'https://yoolk.ninja/wp-content/uploads/2020/11/marvel-Ant-Man-1024x819.png'},
    {nombrePJ: 'Apocalypse', nombre: 'En Sabah Nur', añoApar: '1986', casaPert: 'Marvel', biografia: 'Apocalipsis es un mutante nacido hace 5000 años en Akkaba, Egipto. Fue abandonado por sus padres cuando era un bebé debido a su aspecto poco natural (piel gris y labios azules).', equipamiento: 'No tiene', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Apocalypse-v23-1024x819.png'},
    {nombrePJ: 'Baron Zemo', nombre: 'David Kaye', añoApar: '1973', casaPert: 'Marvel', biografia: 'Barón Zemo es el nombre de varios supervillanos ficticios que aparecen en los cómics estadounidenses publicados por Marvel Comics. Los dos personajes centrales que han usado el título Barón Zemo son Heinrich Zemo y Helmut Zemo. Ambos son los principales adversarios del Capitán América y Los Vengadores y han liderado a los Maestros del Mal. El término también se refiere a una baronía ficticia que abarca varias décadas de la historia ficticia del Universo Marvel.', equipamiento: 'No tiene', imgURL: 'https://yoolk.ninja/wp-content/uploads/2021/07/Marvel-Baron-Zemo-1024x819.png'},
    {nombrePJ: 'Beast', nombre: 'Dr. Henry Philip "Hank" McCoy', añoApar: '1963', casaPert: 'Marvel', biografia: 'Es un miembro fundador del equipo de superhéroes mutantes conocidos como los X-Men. Cuando fue introducido por primera vez, Bestia era un mutante que poseía fuerza y agilidad sobrehumanas, con manos y pies de gran tamaño, aunque por lo demás parecía ser un humano normal.', equipamiento: 'No tiene', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/marvel-Beast-1024x819.png'},
    {nombrePJ: 'Black Bolt', nombre: 'Blackagar Boltagon', añoApar: '1965', casaPert: 'Marvel', biografia: 'Black Bolt (Blackagar Boltagon) o Rayo Negro es un superhéroe ficticio que aparece en cómics estadounidenses publicados por Marvel Comics. Creado por Stan Lee y Jack Kirby, el personaje apareció por primera vez en Fantastic Four #45 (diciembre de 1965).', equipamiento: 'No tiene', imgURL: 'https://yoolk.ninja/wp-content/uploads/2020/11/marvel-inhumans-Blackbolt-1024x819.png'},
    {nombrePJ: 'Black Cat', nombre: 'Felicia Sara Hardy​', añoApar: '1979  ', casaPert: 'Marvel', biografia: 'Felicia Hardy es la hija de Walter Hardy, un gato ladrón de fama mundial. Se entrenó en varios estilos de lucha y acrobacias y, después de decidir seguir los pasos de su padre, adoptó la identidad disfrazada de la Gata Negra.', equipamiento: 'No tiene', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-BlackCat-1024x819.png'},
    {nombrePJ: 'Black Panther', nombre: 'T"Challa', añoApar: '1966', casaPert: 'Marvel', biografia: 'Black Panther fue el primer superhéroe africano de la historia del cómic norteamericano, apareciendo por primera vez en julio de 1966 para la issue de Fantastic Four #52. Fue creado por la dupla fundadora de los mejores personajes de Marvel, Stan Lee y Jack Kirby.', equipamiento: 'Black Panther fue el primer superhéroe africano de la historia del cómic norteamericano, apareciendo por primera vez en julio de 1966 para la issue de Fantastic Four #52. Fue creado por la dupla fundadora de los mejores personajes de Marvel, Stan Lee y Jack Kirby.', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/marvel-black-panther-1024x819.png'},
    {nombrePJ: 'Black Widow', nombre: 'Viuda Negra', añoApar: '1964', casaPert: 'Marvel', biografia: 'Natasha nació en Stalingrado (ahora Volgogrado), Rusia. La primera y más conocida Viuda Negra, es una agente rusa entrenada como espía, artista marcial y francotiradora, y equipada con un arsenal de armas de alta tecnología, que incluye un par de armas energéticas montadas en la muñeca y apodada "Piquete de la Viuda".', equipamiento: 'Armas', imgURL: 'https://yoolk.ninja/wp-content/uploads/2019/07/Marvel-Black-Widow-1024x819.png'},
    
  ];
  dbo.collection("personajes").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
}); */

//CARGAR PERSONAJE
app.post('/cargar', (req, res, next)=>{
  try{
      const data = req.body;
            
      MongoClient.connect(url, function(err, db){
      
        var dbo = db.db("mongodb");
        const obt = {nombrePJ: data.nombrePJ,
                     nombre: data.nombre,
                     añoApar: data.añoApar,
                     casaPert: data.casaPert,
                     biografia: data.biografia,
                     equipamiento: data.equipamiento,
                     imgURL: data.imgURL}
    
        dbo.collection("personajes").insertOne(obt, function(err, result) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
    
      res.send("Personaje cargado.")

  } catch (err){
      next(err);
  }
}) 

//MOSTRAR PERSONAJES
app.get('/personajes', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var dbo = db.db("mongodb");

    dbo.collection("personajes").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  }); 
});

//MOSTRAR PERSONAJE INDIVIDUAL
app.get('/mostrarindividual/:nombrePJ', (req, res, next) => {
  try{
    MongoClient.connect(url, function(err, db) {

      const {nombrePJ} = req.params;
      var dbo = db.db("mongodb");
      if (err) throw err;
  
      var myquery = { nombrePJ: nombrePJ };
  
      dbo.collection("personajes").find(myquery).toArray(function(err, result) {
        if (err) throw err;
        res.send(result[0]);
        db.close();
      });
    }); 
  } catch(err){
    next(err)
  }
});

//MOSTRAR PERSONAJES DE LA MISMA CASA.
app.get('/mostrarporcasa/:id', (req, res, next) => {
  try{
    const {id} = req.params;
    MongoClient.connect(url, function(err, db) {

      var myquery = { casaPert: id };

      var dbo = db.db("mongodb");
      if (err) throw err;
      dbo.collection("personajes").find(myquery).toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
    }); 
  } catch(err){
    next(err)
  }
});


//ELIMINAR PERSONAJE
app.delete('/eliminar/:nombrePJ', (req, res, next) => {
  try {
    MongoClient.connect(url, function(err, db) {
      const {nombrePJ} = req.params;
      var myquery = { nombrePJ: nombrePJ};

      if (err) throw err;
  
      var dbo = db.db("mongodb");
  
      dbo.collection("personajes").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
      });
    }); 
    res.send("Personaje eliminado.")
  } catch ( err) {
    next(err)
  }
});

//ACTUALIZAR PERSONAJE
app.put('/actualizar/:id', (req, res, next) => {
  try{    
    MongoClient.connect(url, function(err, db) {
      const {id} = req.params;
      const {nombrePJ, nombre, añoApar, casaPert, biografia, equipamiento, imgURL} = req.body;

      if (err) throw err;
      var dbo = db.db("mongodb");
      var myquery = { nombrePJ: id };

      var newvalues = { $set: {nombrePJ: nombrePJ, nombre: nombre, añoApar: añoApar, 
        casaPert: casaPert, biografia: biografia, 
        equipamiento: equipamiento, imgURL: imgURL } };
        
        console.log(newvalues)

      dbo.collection("personajes").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
    });
    res.send("Personaje actualizado.")
  } catch (err){
    next(err)
  }
})

