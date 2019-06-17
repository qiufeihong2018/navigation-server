'use strict';

const request = require('supertest');
const url = 'http://localhost:5001';
// eslint-disable-next-line no-unused-vars
const should = require('should');

var userCookie;

// 用户名密码
const user = {
  username: 'name',
  password: 'password'
};

// 测试更改密码(每次测试完调换)
const user2 = {
  username: 'uuu2',
  password: 'oldpassword'
};

const newUser2 = {
  username: 'uuu2',
  oldpassword: 'oldpassword',
  newpassword: 'newpassword'
};

// const user22 = {
//   username: 'uu2',
//   password: 'newpassword'
// };
// const oldUser2 = {
//   username: 'uu2',
//   oldpassword: 'newpassword',
//   newpassword: 'oldpassword'
// };

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
      it('USER_NOT_EXIST.', function(done) {
        request(url)
          .post('/api/v1/auth/login')
          .send({
            username: 'a',
            password: 'admin'
          })
          .expect(200)
          .end(function(err, res) {
            res.body.should.containEql({
              err: 'USER_NOT_EXIST'
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
      // 没有登录,权限验证
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
      // 权限验证前先登录
      beforeEach(function(done) {
        request(url)
          .post('/api/v1/auth/login')
          .send(user)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            if (!err) {
              userCookie = res.header['set-cookie'];
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
  // 测试用户注销接口
  describe('UserLogout', function() {
    describe('GET /logout', function() {
      // 没有登录,测试注销
      it('NOT_LOGIN.', function(done) {
        request(url)
          .get('/api/v1/auth/logout')
          .expect(401)
          .end(function(err, res) {
            res.body.should.containEql({
              err: 'NOT_LOGIN'
            });
            if (err) throw err;
            done();
          });
      });
      // 注销成功前先登录
      beforeEach(function(done) {
        request(url)
          .post('/api/v1/auth/login')
          .send(user)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            if (!err) {
              userCookie = res.header['set-cookie'];
              done();
            }
          });
      });
      it('logout successful.', function(done) {
        request(url)
          .get('/api/v1/auth/logout')
          .set('Cookie', userCookie)
          .expect(200)
          .end(function(err, res) {
            res.body.should.containEql({
              message: 'logout successful'
            });
            if (err) throw err;
            done();
          });
      });
    });
  });
  // 测试更改用户密码接口
  describe('UserChangePassword', function() {
    describe('POST /changepassword', function() {
      // 更改用户密码前先注册-登录
      // eslint-disable-next-line no-undef
      before(function(done) {
        request(url)
          .post('/api/v1/auth/register')
          .send(user2)
          .end(function(err, res) {
            if (err) throw err;
            done();
          });
      });
      // eslint-disable-next-line no-undef
      before(function(done) {
        request(url)
          .post('/api/v1/auth/login')
          .send(user2)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            if (!err) {
              userCookie = res.header['set-cookie'];
              done();
            }
          });
      });
      it('change password successful', function(done) {
        request(url)
          .post('/api/v1/auth/changepassword')
          .set('Cookie', userCookie)
          .send(newUser2)
          .expect(200)
          .end(function(err, res) {
            res.body.should.containEql({
              message: 'change password successful'
            });
            if (err) throw err;
            done();
          });
      });
      it('AUTHENTICATE_FAILURE', function(done) {
        request(url)
          .post('/api/v1/auth/changepassword')
          .set('Cookie', userCookie)
          .send(newUser2)
          .expect(401)
          .end(function(err, res) {
            res.body.should.containEql({
              err: 'AUTHENTICATE_FAILURE'
            });
            if (err) throw err;
            done();
          });
      });
      // after(function(done) {
      //   request(url)
      //   .post('/api/v1/auth/login')
      //   .send(user22)
      //   .set('Accept', 'application/json')
      //   .end(function(err, res) {
      //     if (!err) {
      //       userCookie = res.header['set-cookie'];
      //       done();
      //     }
      //   });
      // });
      // after(function(done) {
      //   request(url)
      //   .post('/api/v1/auth/changepassword')
      //   .set('Cookie', userCookie)
      //   .send(oldUser2)
      //   .expect(200)
      //   .end(function(err, res) {
      //     res.body.should.containEql({
      //       message: 'rechange password successful'
      //     });
      //     if (err) throw err;
      //     done();
      //   });
      // });
    });
  });
  // 测试删除用户接口
  describe('UserDelete', function() {
    describe('DELETE /user/:username', function() {
      it('NOT_LOGIN.', function(done) {
        request(url)
          .delete(`/api/v1/auth/user/${user.username}`)
          .expect(401)
          .end(function(err, res) {
            res.body.should.containEql({
              err: 'NOT_LOGIN'
            });
            if (err) throw err;
            done();
          });
      });
      // 删除用户前先登录
      beforeEach(function(done) {
        request(url)
          .post('/api/v1/auth/login')
          .send(user)
          .set('Accept', 'application/json')
          .end(function(err, res) {
            if (!err) {
              userCookie = res.header['set-cookie'];
              done();
            }
          });
      });
      it('delete user success', function(done) {
        request(url)
          .delete(`/api/v1/auth/user/${user.username}`)
          .set('Cookie', userCookie)
          .expect(200)
          .end(function(err, res) {
            res.body.should.containEql({
              message: 'Delete User Successful'
            });
            if (err) throw err;
            done();
          });
      });
    });
  });
});
