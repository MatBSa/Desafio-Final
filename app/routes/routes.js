const express = require('express');
const transactionRouter = express.Router();

transactionRouter.post('/', async (request, response) => {
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

transactionRouter.delete("/:id", async (req, res) => { });

transactionRouter.put("/", async (req, res) => { });

module.exports = transactionRouter;