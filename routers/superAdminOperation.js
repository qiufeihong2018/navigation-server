'use strict';

const router = require('express').Router();
const SuperAdminMap = require('../collections/superAdminMap');
const AdminMap = require('../collections/adminMap');
const PARAMS_ERR = require('../constant/errMessage').PARAMS_ERR;
const COMMON = require('../constant/errMessage').COMMON;

const log = require('../services/logger').createLogger('adminOperation');

router.get('/', function(req, res) {
  SuperAdminMap.find({}).then((data) => {
    log.info('Get all data');
    res.status(200).json({
      data
    });
  });
});

router.post('/:id', function(req, res) {
  AdminMap.findByIdAndRemove({
    _id: req.params.id
  }).then((doc) => {
    if (doc) {
      log.info(`Delete ${req.params.id} success`);
    } else {
      log.error(`Delete ${req.params.id} error`);
    }
  }, (err) => {
    const ERROR = new Error(err);
    ERROR.type = COMMON.DATABASE_FAILUER;
    throw ERROR;
  }).catch((err) => {
    log.error(err.message);
  });
  SuperAdminMap.find({
    'website': req.body.website
  }).then((doc) => {
    if (doc.length <= 0) {
      SuperAdminMap.create(req.body)
        .then((data) => {
          log.info('Create newWebsite success');
          res.status(200).json({
            state: 'ok'
          });
        })
        .catch((err) => {
          log.error(err);
          res.status(500).json({
            err: 'SERVER_ERROR',
            message: err.message
          });
        });
    } else {
      log.error(PARAMS_ERR.ISEXITWEBSITE);
      res.status(200).json({
        err: 'ERROR_PARAMS',
        message: PARAMS_ERR.ISEXITWEBSITE
      });
    }
  });
});

router.delete('/:id', function(req, res) {
  SuperAdminMap.findByIdAndRemove({
    _id: req.params.id
  }).then((doc) => {
    if (doc) {
      log.info(`Delete ${req.params.id} success`);
      res.status(200).json({
        state: 'ok',
        message: `Delete ${req.params.id} success`
      });
    } else {
      log.error(`Delete ${req.params.id} error`);
      res.status(200).json({
        state: 'err',
        message: `Delete ${req.params.id} error`
      });
    }
  }, (err) => {
    const ERROR = new Error(err);
    ERROR.type = COMMON.DATABASE_FAILUER;
    throw ERROR;
  })
    .catch((err) => {
      log.error(err.message);
      res.status(500).json({
        error: err.type,
        message: err.message
      });
    });
});


router.put('/:id', function(req, res) {
  const newWebsite = {
    category: req.body.category,
    name: req.body.name,
    website: req.body.website,
    describe: req.body.describe,
    logo: req.body.logo
  };
  if (!newWebsite.category) {
    log.error(PARAMS_ERR.CATEGORY);
    res.json({
      err: 'ERROR_PARAMS',
      message: PARAMS_ERR.CATEGORY
    });
    return;
  } else if (!newWebsite.name) {
    log.error(PARAMS_ERR.NAME);
    res.json({
      err: 'ERROR_PARAMS',
      message: PARAMS_ERR.NAME
    });
    return;
  } else if (!newWebsite.website) {
    log.error(PARAMS_ERR.WEBSITE);
    res.json({
      err: 'ERROR_PARAMS',
      message: PARAMS_ERR.WEBSITE
    });
    return;
  }
  SuperAdminMap.findByIdAndUpdate({
    _id: req.params.id
  }, {
    $set: newWebsite
  }, {
    new: true,
    upsert: true,
    setDefaultsOnInsert: true,
    setOnInsert: true
  }).then((doc) => {
    if (doc) {
      log.info(`Update ${req.params.id} success`);
      res.status(200).json({
        state: 'ok',
        message: `Update ${req.params.id} success`
      });
    } else {
      log.error(`Update ${req.params.id} error`);
      res.status(200).json({
        state: 'err',
        message: `Update ${req.params.id} error`
      });
    }
  }, (err) => {
    const ERROR = new Error(err);
    ERROR.type = COMMON.DATABASE_FAILUER;
    throw ERROR;
  })
    .catch((err) => {
      log.error(err.message);
      res.status(500).json({
        error: err.type,
        message: err.message
      });
    });
});
module.exports = router;
