const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./api/minions');
const meetingsRouter = require('./api/meetings');
const ideasRouter = require('./api/ideas');

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/meetings', meetingsRouter);
apiRouter.use('/ideas', ideasRouter);



module.exports = apiRouter;
