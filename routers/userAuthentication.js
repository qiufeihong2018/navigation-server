'use strict';

const router = require('express').Router();
const passport = require('passport');
const User = require('../collections/user');
const log = require('../services/logger').createLogger('userAuthentication');
const AUTH_ERR = require('../constant/errMessage').AUTH;
const COMM_ERR = require('../constant/errMessage').COMMON;

// Return the current user info
router.get('/', function(req, res) {
  if (req.user) {
    res.json({
      data: req.user
    });
  } else {
    res.json({
      err: 'NOT_LOGIN',
      message: AUTH_ERR.NOT_LOGIN
    });
  }
});

router.post('/register', function(req, res, next) {
  User.register(new User({ username: req.body.username }), req.body.password, function(err) {
    if (err) {
      log.error(err);
      res.json({
        err: 'REGISTER_FAILURE',
        message: AUTH_ERR.REGISTER_FAILURE
      });
      return;
    }

    log.info('user' + req.body.username + ' registered successful!');
    res.json({
      data: { 'username': req.body.username },
      message: 'User registered successful'
    });

  });
});

router.post('/login', isAhenticated, passport.authenticate('local'), function(req, res) {
  if (req.user) {
    log.info(`${req.user.username} login in successful`);
    res.json({
      data: { username: req.user.username },
      message: 'Authentication Success'
    });
    return;
  }
  log.info(`${req.user.username} login failure`);
  res.json({
    err: 'AUTHENTICATE_FAILURE',
    message: `${req.user.username} login failure`
  });

});

router.post('/deleteUser', function(req, res) {
  if (!req.user) {
    res.json({
      err: 'NOT_LOGIN',
      message: AUTH_ERR.NOT_LOGIN
    });
    return;
  }

  if (!req.body.deleteUsername) {
    res.json({
      err: 'PARAMS_NOT_CORRECT',
      message: 'No deleted user name'
    });
    return;
  }

  User.deleteOne({ username: req.body.deleteUsername }, (err) => {
    if (err) {
      log.error(err);
      res.json({
        err: 'SERVER_ERROR',
        message: COMM_ERR.SERVER_ERROR
      });
      return;
    }

    res.json({
      data: { deleteUserName: req.body.deleteUsername },
      message: 'Delete User Success'
    });

    log.info(`${req.body.deleteUsername} has been deleted`);
  });
});


router.post('/changePassword', function(req, res) {
  User.findOne({ 'username': req.body.username }, (err, user) => {
    if (err) {
      log.error(err);
      res.json({
        err: 'SERVER_ERROR',
        message: COMM_ERR.SERVER_ERROR
      });
      return;
    }

    if (!user) {
      res.json({
        err: 'USER_NOT_EXIST',
        message: AUTH_ERR.USER_NOT_EXIST
      });
      return;
    }

    user.changePassword(req.body.oldPassword, req.body.newPassword, (err, value) => {
      if (err) {
        log.error(err);
        res.json({
          err: 'SERVER_ERROR',
          message: COMM_ERR.SERVER_ERROR
        });
        return;
      }

      log.info(`${req.body.username} change password successful`);
      res.json({
        data: { 'username': req.body.username },
        message: 'change password successful'
      });

    });
  });
});


router.get('/logout', function(req, res) {
  const user = req.user;
  if (!user) {
    res.json({
      err: 'NOT_LOGIN',
      message: 'No user has been logon'
    });
    return;
  }

  // user login out
  req.logout();
  if (!req.user) {
    res.json({
      data: { username: user.username },
      message: 'logout successful'
    });

    log.info(`${user.username} has been logon out`);
    return;
  }

  res.json({
    err: 'SERVER_ERROR',
    message: 'logout failure!'
  });

});


function isAhenticated(req, res, next) {
  User.findOne({ 'username': req.body.username }, (err, user) => {
    if (err) {
      log.error(err);
      res.json({
        err: 'SERVER_ERROR',
        message: COMM_ERR.SERVER_ERROR
      });
      return;
    }
    // If user is not existed
    if (!user) {
      res.json({
        err: 'USER_NOT_EXIST',
        message: AUTH_ERR.USER_NOT_EXIST
      });

      return;
    }


    user.authenticate(req.body.password, (err, value) => {
      if (err) {
        log.error(err);
        res.json({
          err: 'SERVER_ERROR',
          message: COMM_ERR.SERVER_ERROR
        });
      } else if (value) {
        return next();
      } else {
        res.json({
          err: 'AUTHENTICATE_FAILURE',
          message: AUTH_ERR.AUTHENTICATE_FAILURE
        });
      }
    });
  });
}


module.exports = router;
