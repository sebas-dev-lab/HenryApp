const express = require("express");
const router = express();


server.get('/', (req, res) => {
	Section.findAll()
		.then(names => {
			res.status(200).json(names);
		})
		.catch((err)=> {
            res.status(400).json(err)
        });
});


server.post('/create', (req, res)=>{
    const {name, image} = req.body
    Section.findOrCreate({where:{name, image}})
    .then(()=>{
        res.status(201).send('Seccion agregada exitosamente')
    })
    .catch(err=>{
        res.status(400).json(err)
    })
})

server.put('/update/:id', (req, res)=>{
    const  id = req.params.id
    const {name, image} = req.body
    Section.update({name, image}, {where: {id}})
    .then(()=>{
        res.status(201).send('Modificado Correctamente')
    })
    .catch(()=>{
        res.status(404).send('Hubo un error')
    })
});


server.delete ("/:id", (req,res) => {
     const id = req.params.id;
	Section.destroy({
		where: {id:id}
	}).then((id) => {
		res.status(200).send("Seccion" + id + "eliminada")
	}).catch(function (err) {
		console.log("delete failed with error: " + err);
		// handle error;
	});
})





module.exports = server