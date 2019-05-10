'use strict';

const router = require('express').Router();
const passport = require('passport');
const User = require('../collections/user');
const log = require('../services/logger').createLogger();

// Return the current user info
router.get('/', function(req, res) {
  if (req.user) {
    res.json({
      data: { user: req.user },
      code: 0,
      message: 'ok'
    });
  } else {
    res.json({
      data: {},
      code: 3,
      message: 'No Authentication'
    });
  }
});

router.post('/register', function(req, res, next) {
  log.debug(JSON.stringify(req.body) + ' registering user');
  User.register(new User({ username: req.body.username }), req.body.password, function(err) {
    if (err) {

      log.error('error while user register!', err);
      res.json({
        data: {},
        code: 1,
        message: err
      });
    } else {
      log.info(req.body.username + ' registered!');
      res.json({
        data: { 'username': req.body.username },
        code: 0,
        message: 'ok'
      });
    }
  });
});

// router.get('/login', function (req, res) {
//   res.render('login', { user: req.user });
// });

router.post('/login', isAhenticated, passport.authenticate('local'), function(req, res) {
  // log.info(req.session);
  // log.info(res);
  if (req.user) {
    res.json({
      data: { username: req.user.username },
      code: 0,
      message: 'Authentication Success'
    });
  }

});

/**
* METHOD:POST
* PARAMETOR:
*  deleteUsername
*/
router.post('/deleteUser', function(req, res) {

  if (!req.user) {
    res.json({
      data: {},
      code: 3,
      message: 'No Authentication'
    });
    return;
  }

  if (!req.body.deleteUsername) {
    res.json({
      data: {},
      code: 5,
      message: 'No DeleteUsername'
    });
    return;
  }


  User.deleteOne({ username: req.body.deleteUsername }, (err) => {
    if (err) {
      log.error('error while deleteUser user!', err);
      res.json({
        data: {},
        code: 4,
        message: err
      });

      return;
    }

    res.json({
      data: { deleteUserName: req.body.deleteUsername },
      code: 0,
      message: 'Delete User Success'
    });
  });
});


router.post('/changePassword', function(req, res) {
  User.findOne({ 'username': req.body.username }, (err, user) => {
    if (err) {
      res.json({
        data: {},
        code: 4,
        message: err
      });

      return;
    }

    if (!user) {
      res.json({
        data: {},
        code: 5,
        message: 'This user dose not exists'
      });
      return;
    }
    user.changePassword(req.body.oldPassword, req.body.newPassword, (err, value) => {
      if (err) {
        res.json({
          data: {},
          code: 4,
          message: err
        });
      } else {
        res.json({
          data: { username: value.username },
          code: 0,
          message: 'ok'
        });
      }
    });
  });
});


router.get('/logout', function(req, res) {
  req.logout();
  if (!req.user) {
    res.json({
      data: {},
      code: 0,
      message: 'ok'
    });
  } else {
    res.json({
      data: {},
      code: 5,
      message: 'logout failure!'
    });
  }
});


function isAhenticated(req, res, next) {
  User.findOne({ 'username': req.body.username }, (err, user) => {
    if (err) {
      res.json({
        data: {},
        code: 4,
        message: err
      });

      return;
    }
    // If user is not existed
    if (!user) {
      res.json({
        data: {},
        code: 5,
        message: 'User Not Exist'
      });

      return;
    }


    user.authenticate(req.body.password, (err, value) => {
      if (err) {
        res.json({
          data: {},
          code: 4,
          message: err
        });
      } else if (value) {
        log.debug('value: ' + value);
        return next();
      } else {
        res.json({
          data: {},
          code: 3,
          message: 'Authentication Failure'
        });
      }
    });
  });
}


module.exports = router;
