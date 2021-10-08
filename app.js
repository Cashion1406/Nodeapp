const http = require('http'); 

const port = process.env.PORT || 3000 
const fs = require('fs');
 var web = fs.readFileSync('index.html');

const server = http.createServer((req, res) => { 

  res.statusCode = 200; 

  res.setHeader('Content-Type', 'text/html'); 

  switch(req.url){
    case "/home":
    res.end(web.toString()); 
  break;

  case "/about":
  res.end('  <a> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum deserunt quod nulla est quas iure esse dignissimos quos ullam iusto, enim a voluptatibus veniam quibusdam pariatur non tempora assumenda, maxime rem voluptates tenetur culpa eius? Nihil enim maiores architecto voluptas repellat vero eaque est saepe consequuntur harum, adipisci consectetur a accusamus at facilis assumenda eius reiciendis iusto nostrum molestias ipsa mollitia et aperiam repellendus. At amet, fugiat aspernatur debitis porro aperiam dolor iste assumenda adipisci reiciendis error soluta cupiditate nulla tempora sapiente facilis veniam, consectetur corporis? Quas quo magni hic dolor, eum nesciunt laboriosam culpa, quae autem id optio quis reprehenderit numquam eveniet omnis illo perferendis eos quaerat consequatur nemo rerum! Vel deleniti corporis sint quidem quisquam officiis, aliquid vitae modi veniam a velit porro tempore nemo facilis? Maiores provident quos quidem. Placeat dignissimos hic doloremque expedita sed. Voluptates recusandae dolor natus quas quaerat architecto voluptatum possimus vitae officiis consequatur nesciunt praesentium ut amet placeat consequuntur suscipit voluptatem quisquam velit minus, rerum, debitis excepturi illo perferendis! Nemo sapiente fugiat eius ducimus laboriosam nisi magni! Qui minus, iusto porro sequi a aut cum. Nam laborum asperiores saepe, vel quam fugit, itaque reprehenderit nisi architecto necessitatibus odio quaerat a suscipit illum vitae sed! Atque, quos. Rerum, dolores voluptate in eaque, sequi natus eos ut nobis, impedit laborum sint? Aliquid eaque facere velit ad cupiditate, odit accusantium cumque error consequatur hic inventore id necessitatibus quia! Officiis rem culpa consequatur ducimus beatae qui odio dolores voluptatum iusto, quasi quae ea dignissimos delectus sed eligendi expedita quam sapiente cumque. Nostrum rem ut aspernatur? Dolor, delectus quidem nobis quasi placeat earum voluptatem quas ex labore facere dolores non, sit officia harum ea corrupti accusamus nemo! Possimus ab maxime fuga ut, iste aut velit numquam nobis debitis beatae mollitia nulla nam impedit omnis facere consequatur sed necessitatibus, officia itaque corporis eligendi quisquam. Omnis est in id. Aliquid error magnam accusamus iusto at aliquam voluptates harum assumenda deserunt rerum eveniet, veritatis aperiam sit voluptatem ut, fugiat earum quidem. Ipsum tenetur sed, eveniet nihil ab dicta animi, ullam deleniti blanditiis dolor excepturi, sunt est atque tempore voluptatem doloribus nostrum doloremque amet. Aliquam rerum quae harum dolorem fugit labore nihil obcaecati. Repudiandae voluptate nostrum repellendus sequi in doloribus! Alias, commodi expedita officiis dolore repellendus facere laboriosam odio nam tempore quaerat eos, unde ut excepturi enim laborum sapiente error. Maxime alias atque inventore obcaecati in mollitia distinctio illo enim consectetur dolor magni sequi porro, unde facere. Recusandae quae error perspiciatis est molestiae dicta rerum dolor, dolore aspernatur atque adipisci fugiat odio. Assumenda in dolorum ab maxime. Id maiores impedit officia molestias quis praesentium, repudiandae pariatur, cupiditate expedita temporibus maxime, consectetur quibusdam? Perspiciatis, dolores omnis voluptatibus veritatis, quod minima tenetur libero amet architecto consequatur possimus autem ad unde ex corrupti vel hic provident commodi. Fugit, corporis quae odit praesentium cupiditate sint alias repudiandae et in, dolorem maiores facilis! Consequuntur minima quisquam dolorum similique. Ipsam minus porro asperiores, incidunt quis veritatis assumenda? Quibusdam natus reprehenderit quaerat rem magni voluptas nulla adipisci vel sunt!</a>');
  break;
  }

}); 

 

server.listen(port,() => { 

  console.log(`Server running at port `+port); 

}); 