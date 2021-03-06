define({ "api": [
  {
    "type": "delete",
    "url": "/admin/:id",
    "title": "Admin deleteMap",
    "name": "AdminDelete",
    "group": "adminOperation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>New website's _id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"state\": \"ok\",\n   \"message\": \"Delete 5d493096df15984682126cff success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_LOGIN",
            "description": "<p>The current User was not logon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"err\": \"NOT_LOGIN\",\n  \"message\": \"User has not logon in!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/adminOperation.js",
    "groupTitle": "adminOperation"
  },
  {
    "type": "get",
    "url": "/admin/",
    "title": "Admin getMap",
    "name": "AdminGet",
    "group": "adminOperation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of pages per page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offset",
            "description": "<p>Number of skips.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>add || put.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"data\": [\n       {\n           \"_id\": \"5d5e4206443bdd63d0f82327\",\n           \"category\": \"recommendationFront-end\",\n           \"name\": \"test1\",\n           \"website\": \"test4\",\n           \"describe\": \"test\",\n           \"logo\": \"test\",\n           \"way\": \"add\",\n           \"created_at\": \"2019-08-22T07:19:34.924Z\",\n           \"updated_at\": \"2019-08-22T07:19:34.924Z\",\n           \"__v\": 0\n       },\n       {\n           \"_id\": \"5d5e4209443bdd63d0f82328\",\n           \"category\": \"recommendationFront-end\",\n           \"name\": \"test1\",\n           \"website\": \"test5\",\n           \"describe\": \"test\",\n           \"logo\": \"test\",\n           \"way\": \"add\",\n           \"created_at\": \"2019-08-22T07:19:37.430Z\",\n           \"updated_at\": \"2019-08-22T07:19:37.430Z\",\n           \"__v\": 0\n       }\n   ],\n   \"total\": 15\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_LOGIN",
            "description": "<p>The current User was not logon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"err\": \"NOT_LOGIN\",\n  \"message\": \"User has not logon in!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/adminOperation.js",
    "groupTitle": "adminOperation"
  },
  {
    "type": "post",
    "url": "/admin/",
    "title": "Admin postMap",
    "name": "AdminPost",
    "group": "adminOperation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>New website's category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>New website's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>New website's website.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>New website's describe.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>New website's logo.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n \"state\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_LOGIN",
            "description": "<p>The current User was not logon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"err\": \"NOT_LOGIN\",\n  \"message\": \"User has not logon in!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/adminOperation.js",
    "groupTitle": "adminOperation"
  },
  {
    "type": "put",
    "url": "/admin/:id",
    "title": "Admin putMap",
    "name": "AdminPut",
    "group": "adminOperation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>New website's category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>New website's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>New website's website.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>New website's describe.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>New website's logo.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"state\": \"ok\",\n   \"message\": \"Update 5d49320bdf15984682126d00 success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_LOGIN",
            "description": "<p>The current User was not logon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"err\": \"NOT_LOGIN\",\n  \"message\": \"User has not logon in!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/adminOperation.js",
    "groupTitle": "adminOperation"
  },
  {
    "type": "delete",
    "url": "/superAdmin/:id",
    "title": "SuperAdmin deleteMap",
    "name": "SuperAdminDelete",
    "group": "superAdminOperation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>New website's _id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"state\": \"ok\",\n   \"message\": \"Delete 5d493096df15984682126cff success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_LOGIN",
            "description": "<p>The current User was not logon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"err\": \"NOT_LOGIN\",\n  \"message\": \"User has not logon in!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/superAdminOperation.js",
    "groupTitle": "superAdminOperation"
  },
  {
    "type": "get",
    "url": "/superAdmin/",
    "title": "SuperAdmin getMap",
    "name": "SuperAdminGet",
    "group": "superAdminOperation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of pages per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offset",
            "description": "<p>Number of skips.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>New website's category.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"data\": [\n       {\n           \"_id\": \"5d5e4206443bdd63d0f82327\",\n           \"category\": \"recommendationFront-end\",\n           \"name\": \"test1\",\n           \"website\": \"test4\",\n           \"describe\": \"test\",\n           \"logo\": \"test\",\n           \"created_at\": \"2019-08-22T07:19:34.924Z\",\n           \"updated_at\": \"2019-08-22T07:19:34.924Z\",\n           \"__v\": 0\n       },\n       {\n           \"_id\": \"5d5e4209443bdd63d0f82328\",\n           \"category\": \"recommendationFront-end\",\n           \"name\": \"test1\",\n           \"website\": \"test5\",\n           \"describe\": \"test\",\n           \"logo\": \"test\",\n           \"created_at\": \"2019-08-22T07:19:37.430Z\",\n           \"updated_at\": \"2019-08-22T07:19:37.430Z\",\n           \"__v\": 0\n       }\n   ],\n   \"total\": 655\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_LOGIN",
            "description": "<p>The current User was not logon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"err\": \"NOT_LOGIN\",\n  \"message\": \"User has not logon in!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/superAdminOperation.js",
    "groupTitle": "superAdminOperation"
  },
  {
    "type": "post",
    "url": "/superAdmin/:id",
    "title": "SuperAdmin postMap",
    "name": "SuperAdminPost",
    "group": "superAdminOperation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>New website's category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>New website's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>New website's website.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>New website's describe.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>New website's logo.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n \"state\": \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_LOGIN",
            "description": "<p>The current User was not logon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"err\": \"NOT_LOGIN\",\n  \"message\": \"User has not logon in!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/superAdminOperation.js",
    "groupTitle": "superAdminOperation"
  },
  {
    "type": "put",
    "url": "/superAdmin/:id",
    "title": "SuperAdmin putMap",
    "name": "SuperAdminPut",
    "group": "superAdminOperation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>New website's category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>New website's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>New website's website.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "describe",
            "description": "<p>New website's describe.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>New website's logo.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"state\": \"ok\",\n   \"message\": \"Update 5d49320bdf15984682126d00 success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_LOGIN",
            "description": "<p>The current User was not logon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"err\": \"NOT_LOGIN\",\n  \"message\": \"User has not logon in!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/superAdminOperation.js",
    "groupTitle": "superAdminOperation"
  },
  {
    "type": "get",
    "url": "/superAdmin/search/",
    "title": "SuperAdmin getSearch",
    "name": "SuperAdminSearch",
    "group": "superAdminOperation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of pages per page.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offset",
            "description": "<p>Number of skips.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query website keywords.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"data\": [\n       {\n           \"_id\": \"5d5e4206443bdd63d0f82327\",\n           \"category\": \"recommendationFront-end\",\n           \"name\": \"test1\",\n           \"website\": \"test4\",\n           \"describe\": \"test\",\n           \"logo\": \"test\",\n           \"created_at\": \"2019-08-22T07:19:34.924Z\",\n           \"updated_at\": \"2019-08-22T07:19:34.924Z\",\n           \"__v\": 0\n       },\n       {\n           \"_id\": \"5d5e4209443bdd63d0f82328\",\n           \"category\": \"recommendationFront-end\",\n           \"name\": \"test1\",\n           \"website\": \"test5\",\n           \"describe\": \"test\",\n           \"logo\": \"test\",\n           \"created_at\": \"2019-08-22T07:19:37.430Z\",\n           \"updated_at\": \"2019-08-22T07:19:37.430Z\",\n           \"__v\": 0\n       }\n   ],\n   \"total\": 32\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_LOGIN",
            "description": "<p>The current User was not logon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"err\": \"NOT_LOGIN\",\n  \"message\": \"User has not logon in!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/superAdminOperation.js",
    "groupTitle": "superAdminOperation"
  },
  {
    "type": "get",
    "url": "/auth/",
    "title": "User auth information",
    "name": "UserAuthInfo",
    "group": "userAuthentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "null",
            "optional": false,
            "field": "null.",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the current user.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "last",
            "description": "<p>User last logon time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"test\",\n  \"last\": \"2019-06-03T06:22:53.567Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_LOGIN",
            "description": "<p>The current User was not logon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"err\": \"NOT_LOGIN\",\n  \"message\": \"User has not logon in!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/userAuthentication.js",
    "groupTitle": "userAuthentication"
  },
  {
    "type": "post",
    "url": "/auth/changepassword",
    "title": "User change password",
    "name": "UserChangePassword",
    "group": "userAuthentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldpassword",
            "description": "<p>User's old password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newpassword",
            "description": "<p>User's old password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The message if changing password successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n  \"username\": \"test\",\n  \"message\": \"change password successful\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AUTHENTICATE_FAILURE",
            "description": "<p>The register failure.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 401 Unauthorized\n{\n  \"err\": \"AUTHENTICATE_FAILURE\",\n  \"message\": \"Password or username is incorrect\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/userAuthentication.js",
    "groupTitle": "userAuthentication"
  },
  {
    "type": "post",
    "url": "/auth/user/:username",
    "title": "User delete",
    "name": "UserDelete",
    "group": "userAuthentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the deleted user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The message if deleting successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n  \"username\": \"gushen\",\n  \"message\": \"Delete User Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_LOGIN",
            "description": "<p>The register failure.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n  \"err\": \"NOT_LOGIN\",\n  \"message\": \"User has not logon in!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/userAuthentication.js",
    "groupTitle": "userAuthentication"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "User login",
    "name": "UserLogin",
    "group": "userAuthentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the register user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The messgaer if the user login in successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"username\": \"test\",\n  \"message\": \"Authentication Success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "REGISTER_FAILURE",
            "description": "<p>The register failure.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 401 Unauthorized\n {\n   \"err\": \"AUTHENTICATE_FAILURE\",\n   \"message\": \"Authenticate failure\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/userAuthentication.js",
    "groupTitle": "userAuthentication"
  },
  {
    "type": "get",
    "url": "/auth/logout",
    "title": "User login out",
    "name": "UserLogout",
    "group": "userAuthentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The message if user login out successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"test\",\n  \"message\": \"logout successful\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NOT_LOGIN",
            "description": "<p>There is no user logon in.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 401 Unauthorized\n{\n  \"err\": \"NOT_LOGIN\",\n  \"message\": \"No user has been logon\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/userAuthentication.js",
    "groupTitle": "userAuthentication"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "User Register",
    "name": "UserRegister",
    "group": "userAuthentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>New user's name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the register user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>The registering success info.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"gushen\",\n  \"message\": \"User registered successful\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "REGISTER_FAILURE",
            "description": "<p>The register failure.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 500 Internal Server Error\n{\n  \"err\": \"REGISTER_FAILURE\",\n  \"message\": \"User register failure!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/userAuthentication.js",
    "groupTitle": "userAuthentication"
  }
] });
