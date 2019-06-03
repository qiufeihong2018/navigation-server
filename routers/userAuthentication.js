'use strict';

const router = require('express').Router();
const passport = require('passport');
const User = require('../collections/user');
const log = require('../services/logger').createLogger('userAuthentication');
const AUTH_ERR = require('../constant/errMessage').AUTH;
const COMM_ERR = require('../constant/errMessage').COMMON;

/**
 * @api {get} /v1/auth/ Request auth information
 * @apiName GetAuthInfo
 * @apiGroup userAuthentication
 *
 * @apiParam {null} null.
 *
 * @apiSuccess {String} username  The username of the current user.
 * @apiSuccess {date} last  User last logon time.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "username": "test",
 *       "last": "2019-06-03T06:22:53.567Z"
 *     }
 *
 * @apiError NOT_LOGIN The current User was not logon.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "err": "NOT_LOGIN",
 *       "message": "User has not logon in!"
 *     }
 */
router.get('/', function(req, res) {
  if (req.user) {
    res.json({
      username: req.user.username,
      last: req.user.last
    });
  } else {
    res.status(401).json({
      err: 'NOT_LOGIN',
      message: AUTH_ERR.NOT_LOGIN
    });
  }
});

/**
 * @api {post} /v1/auth/register Gegister new user
 * @apiName RegisterUser
 * @apiGroup userAuthentication
 *
 * @apiParam {String} username  New user's name.
 * @apiParam {String} password  New user's password.
 *
 * @apiSuccess {String} username  The username of the register user.
 * @apiSuccess {string} message  The registering success info.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "username": "gushen",
 *       "message": "User registered successful"
 *     }
 *
 * @apiError REGISTER_FAILURE The register failure.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *    {
 *      "err": "REGISTER_FAILURE",
 *      "message": "User register failure!"
 *    }
 */
router.post('/register', function(req, res, next) {
  User.register(new User({ username: req.body.username }), req.body.password, function(err) {
    if (err) {
      log.error(err);
      res.status(500).json({
        err: 'REGISTER_FAILURE',
        message: AUTH_ERR.REGISTER_FAILURE
      });
      return;
    }

    log.info('user ' + req.body.username + ' registered successful!');
    res.json({
      username: req.body.username,
      message: 'User registered successful'
    });

  });
});

/**
 * @api {post} /v1/auth/login User login
 * @apiName UserLogin
 * @apiGroup userAuthentication
 *
 * @apiParam {String} username  User's name.
 * @apiParam {String} password  User's password.
 *
 * @apiSuccess {String} username  The username of the login user.
 * @apiSuccess {string} password  The password of the login user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *      "username": "test",
 *      "message": "Authentication Success"
 *    }
 *
 * @apiError REGISTER_FAILURE The register failure.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *    {
 *      "err": "AUTHENTICATE_FAILURE",
 *      "message": "Authenticate failure"
 *   }
 */
router.post('/login', isAhenticated, passport.authenticate('local'), function(req, res) {
  if (req.user) {
    log.info(`${req.user.username} login in successful`);
    res.json({
      username: req.user.username,
      message: 'Authentication Success'
    });
    return;
  }
  log.info(`${req.user.username} login failure`);
  res.status(401).json({
    err: 'AUTHENTICATE_FAILURE',
    message: `${req.user.username} login failure`
  });

});

/**
 * @api {post} /v1/auth/user/:username User delete
 * @apiName UserDelete
 * @apiGroup userAuthentication
 *
 * @apiParam {String} username  User's name.
 *
 * @apiSuccess {String} username  The username of the deleted user.
 * @apiSuccess {string} message  The message if deleting successful.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
 *     "username": "gushen",
 *     "message": "Delete User Successful"
 *   }
 *
 * @apiError NOT_LOGIN The register failure.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *    {
 *      "err": "NOT_LOGIN",
 *      "message": "User has not logon in!"
 *    }
 */
router.delete('/user/:username', function(req, res) {
  if (!req.user) {
    res.status(401).json({
      err: 'NOT_LOGIN',
      message: AUTH_ERR.NOT_LOGIN
    });
    return;
  }

  // if (!req.params.username) {
  //   res.json({
  //     err: 'PARAMS_NOT_CORRECT',
  //     message: 'No deleted user name'
  //   });
  //   return;
  // }

  User.deleteOne({ username: req.params.username }, (err) => {
    if (err) {
      log.error(err);
      res.status(500).json({
        err: 'SERVER_ERROR',
        message: COMM_ERR.SERVER_ERROR
      });
      return;
    }

    res.json({
      username: req.params.username,
      message: 'Delete User Successful'
    });

    log.info(`${req.params.username} has been deleted`);
  });
});

/**
 * @api {post} /v1/auth/changepassword User change password
 * @apiName UserChangePassword
 * @apiGroup userAuthentication
 *
 * @apiParam {String} username  User's name.
 * @apiParam {String} oldpassword  User's old password.
 * @apiParam {String} newpassword  User's old password.
 *
 * @apiSuccess {String} username  The username of the user.
 * @apiSuccess {string} message  The message if changing password successful.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   {
 *     "username": "test",
 *     "message": "change password successful"
 *   }
 *
 * @apiError AUTHENTICATE_FAILURE The register failure.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *   {
 *     "err": "AUTHENTICATE_FAILURE",
 *     "message": "Password or username is incorrect"
 *   }
 */
router.post('/changepassword', function(req, res) {
  User.findOne({ 'username': req.body.username }, (err, user) => {
    if (err) {
      log.error(err);
      res.status(500).json({
        err: 'SERVER_ERROR',
        message: COMM_ERR.SERVER_ERROR
      });
      return;
    }

    if (!user) {
      res.status(500).json({
        err: 'USER_NOT_EXIST',
        message: AUTH_ERR.USER_NOT_EXIST
      });
      return;
    }

    user.changePassword(req.body.oldpassword, req.body.newpassword, (err, value) => {
      if (err) {
        log.error(err);
        res.status(401).json({
          err: 'AUTHENTICATE_FAILURE',
          message: err.message
        });
        return;
      }

      log.info(`${req.body.username} change password successful`);
      res.json({
        username: req.body.username,
        message: 'change password successful'
      });

    });
  });
});

/**
 * @api {get} /v1/auth/logout User login out
 * @apiName UserLogout
 * @apiGroup userAuthentication
 *
 * @apiSuccess {String} username  The username of the user.
 * @apiSuccess {string} message  The message if user login out successful.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "username": "test",
 *       "message": "logout successful"
 *     }
 *
 * @apiError NOT_LOGIN The register failure.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *   {
 *     "err": "NOT_LOGIN",
 *     "message": "No user has been logon"
 *   }
 */
router.get('/logout', function(req, res) {
  const user = req.user;
  if (!user) {
    res.status(401).json({
      err: 'NOT_LOGIN',
      message: 'No user has been logon'
    });
    return;
  }

  // user login out
  req.logout();
  if (!req.user) {
    res.json({
      username: user.username,
      message: 'logout successful'
    });

    log.info(`${user.username} has been logon out`);
    return;
  }

  res.status(500).json({
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
