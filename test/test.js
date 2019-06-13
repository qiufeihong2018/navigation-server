'use strict';

const request = require('supertest');
const url = 'http://localhost:5001';
// eslint-disable-next-line no-unused-vars
const should = require('should');

var userCookie;

// username/password
const user = {
  username: 'u1',
  password: 'p1'
};


describe('userAuthentication', function() {
  // 测试注册接口
  describe('UserRegister', function() {
    describe('POST /register', function() {
      // eslint-disable-next-line max-len
      it('register success', function(done) {
        request(url)
          .post('/api/v1/auth/register')
          .send(user)
          .expect(200)
          .end(function(err, res) {
            res.body.should.containEql({
              message: 'User registered successful'
            });
            if (err) throw err;
            done();
          });
      });
      it('repeated registration failure.', function(done) {
        request(url)
          .post('/api/v1/auth/register')
          .send(user)
          .expect(500)
          .end(function(err, res) {
            res.body.should.containEql({
              err: 'REGISTER_FAILURE'
            });
            if (err) throw err;
            done();
          });
      });
    });
  });
  // 测试登录接口
  describe('UserLogin', function() {
    describe('POST /login', function() {
      it('login success', function(done) {
        request(url)
          .post('/api/v1/auth/login')
          .send(user)
          .expect(200)
          .end(function(err, res) {
            res.body.should.containEql({
              message: 'Authentication Success'
            });
            if (err) throw err;
            done();
          });
      });
      // it('failure.', function(done) {
      //   request(url)
      //     .post('/api/v1/auth/login')
      //     .send({
      //       username: 'admin',
      //       password: 'admin'
      //     })
      //     .expect(401)
      //     .end(function(err, res) {
      //       res.body.should.containEql({
      //         err: 'AUTHENTICATE_FAILURE'
      //       });
      //       if (err) throw err;
      //       done();
      //     });
      // });
    });
  });
  // 权限验证
  describe('UserAuthInfo', function() {
    describe('GET /api/v1/auth/', function() {
      // 权限验证,没登录
      it('The current User was not login.', function(done) {
        request(url)
          .get('/api/v1/auth/')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(401)
          .end(function(err, res) {
            res.body.should.containEql({
              err: 'NOT_LOGIN'
            });
            if (err) throw err;
            done();
          });
      });
    });
  });
  // 权限验证
  describe('UserAuthInfo', function() {
    describe('GET /api/v1/auth/', function() {
      // 权限验证,先登录
      beforeEach(function(done) {
        request(url)
              .post('/api/v1/auth/login')
              .send(user)
              .set('Accept', 'application/json')
              .end(function(err, res) {
                if (!err) {
                  userCookie = res.header['set-cookie'];
                  console.log(userCookie);
                  done();
                }
              });
      });
      it('The username of the current user.', function(done) {
        request(url)
            .get('/api/v1/auth/')
            .set('Cookie', userCookie)
            .expect(200)
            .end(function(err, res) {
              res.body.should.have.keys('username');
              if (err) throw err;
              done();
            });
      });
    });
  });
  // // 测试删除用户接口
  // describe('UserDelete', function() {
  //   describe('DELETE /user/:username', function() {
  //     it('success', function(done) {
  //       request(url)
  //         .delete('/api/v1/auth/user/?username=admin')
  //         .expect(200)
  //         .end(function(err, res) {
  //           res.body.should.containEql({
  //             message: 'Delete User Successful'
  //           });
  //           if (err) throw err;
  //           done();
  //         });
  //     });
  //     it('NOT_LOGIN failure.', function(done) {
  //       request(url)
  //         .delete('/api/v1/auth/user/?username=admin')
  //         .expect(401)
  //         .end(function(err, res) {
  //           res.body.should.containEql({
  //             err: 'NOT_LOGIN'
  //           });
  //           if (err) throw err;
  //           done();
  //         });
  //     });
  //     it('SERVER_ERROR failure.', function(done) {
  //       request(url)
  //         .delete('/api/v1/auth/user/?username=admin')
  //         .expect(500)
  //         .end(function(err, res) {
  //           res.body.should.containEql({
  //             err: 'PARAMS_NOT_CORRECT'
  //           });
  //           if (err) throw err;
  //           done();
  //         });
  //     });
  //   });
  // });
  // describe('UserChangePassword', function() {
  //   describe('POST /changepassword', function() {
  //     it('success', function(done) {
  //       request(url)
  //         .post('/api/v1/auth/changepassword')
  //         .send({
  //           username: 'admin',
  //           oldpassword: 'admin',
  //           newpassword: 'newpassword',
  //         })
  //         .expect(200)
  //         .end(function(err, res) {
  //           res.body.should.containEql({
  //             message: 'change password successful'
  //           });
  //           if (err) throw err;
  //           done();
  //         });
  //     });
  //     it('AUTHENTICATE_FAILURE failure', function(done) {
  //       request(url)
  //         .post('/api/v1/auth/changepassword')
  //         .send({
  //           username: 'admin',
  //           oldpassword: 'admin',
  //           newpassword: 'newpassword',
  //         })
  //         .expect(401)
  //         .end(function(err, res) {
  //           res.body.should.containEql({
  //             err: 'AUTHENTICATE_FAILURE'
  //           });
  //           if (err) throw err;
  //           done();
  //         });
  //     });
  //     it('SERVER_ERROR failure', function(done) {
  //       request(url)
  //         .post('/api/v1/auth/changepassword')
  //         .send({
  //           username: 'admin',
  //           oldpassword: 'admin',
  //           newpassword: 'newpassword',
  //         })
  //         .expect(500)
  //         .end(function(err, res) {
  //           res.body.should.containEql({
  //             err: 'SERVER_ERROR'
  //           });
  //           if (err) throw err;
  //           done();
  //         });
  //     });
  //   });
  // });
  // describe('UserLogout', function() {
  //   describe('GET /logout', function() {
  //     it('success.', function(done) {
  //       request(url)
  //         .get('/api/v1/auth/logout')
  //         .set('Accept', 'application/json')
  //         .expect('Content-Type', /json/)
  //         .expect(200)
  //         .end(function(err, res) {
  //           res.body.should.containEql({
  //             message: 'logout successful'
  //           });
  //           if (err) throw err;
  //           done();
  //         });
  //     });
  //     it('NOT_LOGIN failure.', function(done) {
  //       request(url)
  //         .get('/api/v1/auth/logout')
  //         .set('Accept', 'application/json')
  //         .expect('Content-Type', /json/)
  //         .expect(401)
  //         .end(function(err, res) {
  //           res.body.should.containEql({
  //             err: 'NOT_LOGIN'
  //           });
  //           if (err) throw err;
  //           done();
  //         });
  //     });
  //     it('SERVER_ERROR failure.', function(done) {
  //       request(url)
  //         .get('/api/v1/auth/logout')
  //         .set('Accept', 'application/json')
  //         .expect('Content-Type', /json/)
  //         .expect(500)
  //         .end(function(err, res) {
  //           res.body.should.containEql({
  //             err: 'SERVER_ERROR'
  //           });
  //           if (err) throw err;
  //           done();
  //         });
  //     });
  //   });
  // });
});
