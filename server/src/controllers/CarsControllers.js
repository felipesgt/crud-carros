import db from '../database/connection.js';



export default {
  
  async index(req, res) {
    const cars =  await db('carros').select('*');
    return res.json(cars);
},

  async store(req, res) {
    const { nome, modelo, ano, cor, cpf, foto, ultimodono, kmrod} = req.body
    await db('carros').insert({
      nome,
      modelo,
      ano,
      cor,
      cpf,
      foto,
      ultimodono,
      kmrod
    });
    return res.json("Sucesso ao inserir")
  },

  async update(req, res) {
    const { nome, modelo, ano, cor, cpf, foto, ultimodono, kmrod} = req.body;
    try {
      db('carros').where({nome}).update({ 
      nome, 
      modelo,
      ano,
      cor,
      cpf,
      foto,
      ultimodono,
      kmrod
    }).returning('*').then(
      console.log(nome)
    )
  }
  catch(error){
    return res.json({ message: `Erro`})    
  }
    return res.json("Sucesso ao atualizar")
  },
   
  async delete(req, res) {
    const { nome } = req.params;

    try {
      await db('carros').where('nome', nome).delete();  

  } catch (error) {
      return res.json({ message: `Erro`})    
  }

  return res.json({ message: `Carro ${nome} excluido com sucesso!`})
}
}



