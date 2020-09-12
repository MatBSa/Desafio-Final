const express = require('express');
const service = require('../services/transactionService.js');
const transactionRouter = express.Router();

transactionRouter.post('/', async (request, response) => {
  const transaction = request.body;

  try {
    const newTransaction = await service.postTransaction(transaction);

    response.send(newTransaction);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
  }
});

transactionRouter.get('/', async (request, response) => {
  const { query } = request;

  try {
    if (!query.period) {
      throw new Error(
        `É necessário informar o parâmetro "period", cujo valor deve estar no formato yyyy-mm`
      );
    }

    const { period } = query;
    dateHelpers.validatePeriod(period);
    const filteredTransactions = await service.getTransactionsFrom(period);

    response.send({
      length: filteredTransactions.length,
      transactions: filteredTransactions,
    });
  } catch ({ message }) {
    console.log(message);
    response.status(400).send({ error: message });
  }
});

transactionRouter.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const data = await service.deleteTransaction({ _id: id });

    if (!data) {
      res.status(404).send('Nao encontrado nenhuma transacao para excluir');
    } else {
      res.send('Transacao excluida com sucesso');
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar a transacao de id: ' + id });
  }
});

transactionRouter.put("/", async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualizacao vazio',
    });
  }

  const _id = req.params.id;
  const transaction = request.body;

  try {
    const data = await service.updateTransaction(_id, transaction);

    if (!data) {
      res.status(404).send('Nao encontrado nenhuma transacao para atualizar');
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar a transacao de id: ' + id });
  }
});

module.exports = transactionRouter;